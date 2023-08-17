import * as vscode from "vscode";
import Activatable from "./Activatable";
import Contributes from "./Contributes";

interface TreeDataProviderOptions<Id extends string, T> {
  id: Id;
  contributes?: Pick<Contributes, "views">;
  getTreeItem(element: T): vscode.TreeItem;
  getChildren(element?: T): Thenable<T[]>;
}

export type TreeDataProvider<Id extends string, T> = unknown &
  TreeDataProviderOptions<Id, T> &
  Activatable & { provider: vscode.TreeDataProvider<T> };

export default function createTreeDataProvider<
  Id extends string = string,
  T = unknown
>(opts: TreeDataProviderOptions<Id, T>): TreeDataProvider<Id, T> {
  class Provider implements vscode.TreeDataProvider<T> {
    getTreeItem = opts.getTreeItem;
    getChildren = opts.getChildren;
  }

  const provider = new Provider();

  return {
    ...opts,
    provider,
    activate: () => vscode.window.registerTreeDataProvider(opts.id, provider),
  };
}
