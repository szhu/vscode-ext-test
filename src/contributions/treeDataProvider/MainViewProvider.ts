import * as vscode from "vscode";
import TreeDataProvider from "../../utils/contribution/TreeDataProvider";
import MainViewContainer from "../viewsContainers/MainViewContainer";

export default TreeDataProvider({
  id: "mutableai.view.welcome",

  contributes: {
    views: {
      [MainViewContainer.id]: {
        name: "Mooo",
      },
    },
  },

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  },

  getChildren(): Thenable<vscode.TreeItem[]> {
    return Promise.resolve([]);
  },
});
