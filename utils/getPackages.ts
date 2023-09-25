import fs from "fs";
import path from "path";

/**
 * Get all available package names as an array of string
 * @returns the available package names
 * @example const packages = getPackages(); // [frontend, ui]
 */
export function getPackages(): string[] {
  try {
    const packagesPath = path.join(__dirname, "/../packages");
    const directoryContents = fs.readdirSync(packagesPath);
    const packages = directoryContents.filter((item) => {
      const itemPath = path.join(packagesPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    return packages;
  } catch (error) {
    throw error;
  }
}
