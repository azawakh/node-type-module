// eslint-disable-next-line import/no-unresolved
import SlideData from "../model/slide.js";

type SlideJsonData = typeof SlideData["jsonData"];

export default (): SlideJsonData => SlideData.jsonData;
