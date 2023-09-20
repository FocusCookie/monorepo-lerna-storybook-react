import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
// import { MatchImageSnapshotOptions } from "jest-image-snapshot";
var path = require("path");
const STATIC_STORYBOOK_PATH = path.resolve(__dirname, "../storybook-static");

/**
 * Fore more finecontrol over the thresholds
 * check the MatchImageSnapshotOptions for details
 */
/* const getMatchOptions = (): MatchImageSnapshotOptions => {
  return {
    failureThreshold: 1,
    failureThresholdType: "pixel",
  };
}; */

//@ts-ignore
const beforeScreenshot = (page, { context: { kind, story }, url }) => {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
};
//@ts-ignore
const afterScreenshot = ({ image, context }) => {
  return new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
};
const getScreenshotOptions = () => {
  return {
    encoding: "base64", // encoding: 'base64' is a property required by puppeteer
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.,
  };
};

/* type Viewport = {
  height: number;
  width: number;
};
const DEFAULT_VIEPOWERT: Viewport = { width: 1920, height: 180 };
const customizePage = async (page) => {
  return page.setViewport(DEFAULT_VIEPOWERT);
}; */

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: `file://${STATIC_STORYBOOK_PATH}`,
    //storybookUrl: "http://localhost:6006",
    beforeScreenshot,
    afterScreenshot,
    getScreenshotOptions,
  }),
});
