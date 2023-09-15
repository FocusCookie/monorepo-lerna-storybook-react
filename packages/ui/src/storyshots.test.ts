import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

const getScreenshotOptions = () => {
  return {
    encoding: "base64", // encoding: 'base64' is a property required by puppeteer
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.,
  };
};

type Viewport = {
  height: number;
  width: number;
};
const DEFAULT_VIEPOWERT: Viewport = { width: 1920, height: 180 };

initStoryshots({
  test: imageSnapshot({
    storybookUrl: "http://localhost:6006/",
    getScreenshotOptions,
    customizePage: async (page) => {
      return page.setViewport(DEFAULT_VIEPOWERT);
    },
  }),
});
