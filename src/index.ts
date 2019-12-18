// eslint-disable-next-line import/no-unresolved
import searchSlide from "./lib/search_slide.js";
// eslint-disable-next-line import/no-unresolved
import getSlide from "./lib/get_slide.js";

const { API_KEY, SECRET } = process.env;

(async (): Promise<void> => {
  if (!API_KEY) {
    throw new Error("no api_key");
  }

  if (!SECRET) {
    throw new Error("no secret");
  }

  await searchSlide(API_KEY, SECRET, "api");
  process.stdout.write(`${JSON.stringify(getSlide(), null, 2)}\n`);
})();
