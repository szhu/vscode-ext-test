import * as vscode from "vscode";
import createTreeDataProvider from "../../utils/contribution/createTreeDataProvider";
import MainViewContainer from "./MainViewContainer";

export default createTreeDataProvider({
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
