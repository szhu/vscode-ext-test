import { workspace } from "vscode";

const rootPath =
  workspace &&
  workspace.workspaceFolders &&
  workspace.workspaceFolders.length > 0
    ? workspace.workspaceFolders[0].uri.fsPath
    : undefined;

export default rootPath;
