import * as fs from "fs";
import { contributions } from "../../_/extension";

// // Read package.json.
const packageJson = fs.readFileSync("./package.json", "utf-8");
const packageContents = JSON.parse(packageJson);

type ContributesView = {
  id: string;
  name: string;
}[];

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

  views: (() => {
    const views: Record<string, ContributesView> = {};
    for (const treeDataProvider of contributions.treeDataProviders) {
      if (!treeDataProvider.contributes?.views) {
        continue;
      }

      for (const [viewId, view] of Object.entries(
        treeDataProvider.contributes?.views
      )) {
        if (!views[viewId]) {
          views[viewId] = [];
        }
        views[viewId].push({ ...view, id: treeDataProvider.id });
      }
    }
    return views;
  })(),

  viewsContainers: {
    activitybar: contributions.viewsContainers.flatMap((viewContainer) => {
      const activitybar =
        viewContainer.contributes?.viewsContainers?.activitybar;
      return activitybar ? [{ id: viewContainer.id, ...activitybar }] : [];
    }),
  },

  viewsWelcome: contributions.viewsWelcome.flatMap((view) =>
    view.contributes?.viewsWelcome
      ? [{ contents: view.contents, ...view.contributes.viewsWelcome }]
      : []
  ),
};

// Write the new package.json.
const newPackageJson = JSON.stringify(packageContents, null, 2) + "\n";
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
