import { getPackages } from "../getPackages";
import { readFile, writeFile, mkdir, rename, copyFile, rm } from "fs/promises";
import path from "path";

async function getContentFromFile(path: string): Promise<string> {
  return await readFile(path, "utf-8");
}

const RESET_LOG_COLOR = "\x1b[0m";
const LOG_RED = "\x1b[41m\x1b[30m";
const LOG_GREEN = "\x1b[42m\x1b[30m";

const ROOT_DIR = path.join(__dirname, "../../");
const ROOT_STORYBOOKS_DIR = path.join(__dirname, "../../", "storybooks");

async function getPkgVersion(pkgDir: string): Promise<string> {
  try {
    const pkgFile = await readFile(path.join(pkgDir, "package.json"), "utf-8");
    const pkgJson = JSON.parse(pkgFile);

    return pkgJson.version;
  } catch (error) {
    console.log(
      LOG_RED,
      "HQ STORYBOOKS: Something went wrong while getting the package version.",
      RESET_LOG_COLOR
    );
    throw error;
  }
}

function createPackageLink(name: string, version: string) {
  return `<a
    href="./${name}/index.html"
    class="font-semibold w-full p-2 outline rounded outline-transparent outline-4 -outline-offset-4 transition-all ease-linear hover:bg-sky-50 focus:outline-sky-400 uppercase flex justify-between"
    >
      <span class="text-slate-800">${name}</span>
      <span class="text-slate-400">v${version}</span>
    </a
  >`;
}

(async () => {
  try {
    const packages = getPackages();

    if (packages.length === 0) {
      console.log(
        "HQ STORYBOOKS: No packages to build a root storybooks page. Exiting."
      );
      process.exit(1);
    }

    await rm(ROOT_STORYBOOKS_DIR, { recursive: true, force: true });

    await mkdir(ROOT_STORYBOOKS_DIR);
    packages.forEach(async (pkg) => {
      const pkgStorybookBuildDir = path.join(
        ROOT_DIR,
        "packages",
        pkg,
        "storybook-static"
      );
      const pkgRootStorybooksPkgDir = path.join(ROOT_STORYBOOKS_DIR, pkg);

      await rename(pkgStorybookBuildDir, pkgRootStorybooksPkgDir);
    });

    await copyFile(
      path.join(__dirname, "assets/favicon.png"),
      path.join(ROOT_STORYBOOKS_DIR, "favicon.png")
    );

    const template = await getContentFromFile(
      path.join(__dirname, "template.html")
    );

    const packagesLinksHtml = await (
      await Promise.all(
        packages.map(async (pkg) => {
          const version = await getPkgVersion(
            path.join(ROOT_DIR, "packages/", pkg)
          );

          const link = createPackageLink(pkg, version);

          return link;
        })
      )
    ).join(`
    `);

    const storybooksPage = template.replace(/INSERT_LINKS/g, packagesLinksHtml);

    await writeFile(
      path.join(ROOT_STORYBOOKS_DIR, "index.html"),
      storybooksPage
    );

    console.log(
      "👨‍🎨 ",
      LOG_GREEN,
      "HQ STORYBOOKS: Created HQ storybooks.",
      RESET_LOG_COLOR
    );
  } catch (error) {
    console.log(
      LOG_RED,
      "HQ STORYBOOKS: Something went wrong!.",
      RESET_LOG_COLOR
    );
    console.log(error);
  }
})();
