import { Disposable, commands } from "vscode";
import Activatable from "./Activatable";

export default class Command<T extends string> implements Activatable {
  public readonly activate: () => Disposable;
  constructor(public id: T, action: () => void) {
    this.activate = () => commands.registerCommand(id, action);
  }
}
