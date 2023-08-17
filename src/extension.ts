import { ExtensionContext } from "vscode";
import CommandWelcome from "./commands/welcome/CommandWelcome";
import useSubscription from "./utils/subscription/useSubscription";

export function activate(context: ExtensionContext) {
  useSubscription(context, CommandWelcome);
}
