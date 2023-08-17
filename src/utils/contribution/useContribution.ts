import { ExtensionContext } from "vscode";
import Activatable from "./Activatable";

export default function (context: ExtensionContext, activatable: Activatable) {
  context.subscriptions.push(activatable.activate());
}
