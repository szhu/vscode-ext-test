import { Disposable } from "vscode";

export default interface Activatable {
  activate(): Disposable;
}
