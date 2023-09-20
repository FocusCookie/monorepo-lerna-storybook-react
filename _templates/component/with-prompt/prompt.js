const fs = require("fs");
const path = require("path");

function getPackages() {
  try {
    const packagesPath = path.join(__dirname, "/../../../packages");

    // Read the contents of the packages dir
    const directoryContents = fs.readdirSync(packagesPath);

    // Filter out only the folder names
    const packages = directoryContents.filter((item) => {
      const itemPath = path.join(packagesPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    return packages;
  } catch (error) {
    console.error(`Error reading packages`);
    console.error(error);
    return [];
  }
}

module.exports = [
  {
    message: "In which package you want to create the component?",
    type: "select",
    name: "package",
    choices: getPackages(),
  },
  {
    message: "What is the name of the component?",
    type: "input",
    name: "component",
  },
];
