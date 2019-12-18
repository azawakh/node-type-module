import { createHash } from "crypto";
import https from "https";
import parser from "fast-xml-parser";
// eslint-disable-next-line import/no-unresolved
import SlideData from "../model/slide.js";

export default async (
  apiKey: string,
  secret: string,
  keywords: string
): Promise<void> =>
  new Promise(resolve => {
    const baseUrl = "https://www.slideshare.net/api/2/";
    const path = "search_slideshows";
    const timeStampSecond = Math.floor(new Date().getTime() / 1000);
    const hash = `${createHash("sha1")
      .update(`${secret}${timeStampSecond}`)
      .digest("hex")}`;

    const requestUrl = `${baseUrl}${path}?api_key=${apiKey}&ts=${timeStampSecond}&hash=${hash}&q=${keywords}`;

    const request = https.get(requestUrl, res => {
      res
        .on("data", chunk => {
          SlideData.temporaryData = SlideData.temporaryData.concat(chunk);
        })
        .on("end", () => {
          const events = Buffer.concat(SlideData.temporaryData);
          const xmlData = events.toString();
          if (parser.validate(xmlData)) {
            SlideData.jsonData = parser.parse(xmlData, {});
          }
          resolve();
        });
    });

    request.end();
  });
