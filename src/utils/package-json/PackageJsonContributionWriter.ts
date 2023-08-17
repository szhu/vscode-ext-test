import * as fs from "fs";
import { contributions } from "../../extension";

// // Read package.json.
const packageJson = fs.readFileSync("./package.json", "utf-8");
const packageContents = JSON.parse(packageJson);

// Perform modifications.
packageContents.contributes = {
  NOTE: "This section is generated from a script. Do not edit manually.",

  commands: contributions.commands.flatMap((command) =>
    command.contributes?.commands
      ? [{ command: command.id, ...command.contributes.commands }]
      : []
  ),

  menus: {
    commandPalette: contributions.commands.flatMap((command) =>
      command.contributes?.menus?.commandPalette
        ? [{ command: command.id, ...command.contributes.menus.commandPalette }]
        : []
    ),
  },

  views: {
    explorer: contributions.treeDataProviders.flatMap((treeDataProvider) => {
      const explorer = treeDataProvider.contributes?.views?.explorer;
      return explorer ? [{ id: treeDataProvider.id, ...explorer }] : [];
    }),
  },

  viewsWelcome: contributions.viewsWelcome.flatMap((view) =>
    view.contributes?.viewsWelcome
      ? [{ contents: view.contents, ...view.contributes.viewsWelcome }]
      : []
  ),
};

// Write the new package.json.
const newPackageJson = JSON.stringify(packageContents, null, 2);
fs.writeFileSync("./package.json", newPackageJson, "utf-8");

// Alternate method:
// execSync(
//   `npm pkg set --json contributes='${JSON.stringify(
//     { contributes },
//     null,
//     2
//   )}' --silent --force`
// );

console.log("package.json updated.");
