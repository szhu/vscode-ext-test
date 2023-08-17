import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import TreeDataProvider from "../../utils/contribution/TreeDataProvider";
import rootPath from "../../utils/vscode/rootPath";
/**
 * Given the path to package.json, read all its dependencies and devDependencies.
 */
function getDepsInPackageJson(packageJsonPath: string): Dependency[] {
  const root = rootPath;
  if (!root) {
    return [];
  }

  if (pathExists(packageJsonPath)) {
    const toDep = (moduleName: string, version: string): Dependency => {
      if (pathExists(path.join(root, "node_modules", moduleName))) {
        return new Dependency(
          moduleName,
          version,
          vscode.TreeItemCollapsibleState.Collapsed
        );
      } else {
        return new Dependency(
          moduleName,
          version,
          vscode.TreeItemCollapsibleState.None
        );
      }
    };

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    const deps = packageJson.dependencies
      ? Object.keys(packageJson.dependencies).map((dep) =>
          toDep(dep, packageJson.dependencies[dep])
        )
      : [];
    const devDeps = packageJson.devDependencies
      ? Object.keys(packageJson.devDependencies).map((dep) =>
          toDep(dep, packageJson.devDependencies[dep])
        )
      : [];
    return deps.concat(devDeps);
  } else {
    return [];
  }
}

function pathExists(p: string): boolean {
  try {
    fs.accessSync(p);
  } catch (err) {
    return false;
  }
  return true;
}

export default TreeDataProvider({
  id: "nodeDependencies",

  contributes: {
    views: {
      explorer: {
        name: "Node Dependencies",
      },
    },
  },

  getTreeItem(element: Dependency): vscode.TreeItem {
    return element;
  },

  getChildren(element?: Dependency): Thenable<Dependency[]> {
    if (!rootPath) {
      vscode.window.showInformationMessage("No dependency in empty workspace");
      return Promise.resolve([]);
    }

    if (element) {
      return Promise.resolve(
        getDepsInPackageJson(
          path.join(rootPath, "node_modules", element.label, "package.json")
        )
      );
    } else {
      const packageJsonPath = path.join(rootPath, "package.json");
      if (pathExists(packageJsonPath)) {
        return Promise.resolve(getDepsInPackageJson(packageJsonPath));
      } else {
        vscode.window.showInformationMessage("Workspace has no package.json");
        return Promise.resolve([]);
      }
    }
  },
});

export class Dependency extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    private version: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.version}`;
    this.description = this.version;
    this.iconPath = {
      light: path.join(__filename, "../../resources/light/dependency.svg"),
      dark: path.join(__filename, "../../resources/dark/dependency.svg"),
    };
  }
}
