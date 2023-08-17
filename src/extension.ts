import { ExtensionContext } from "vscode";
import WelcomeCommand from "./contributions/commands/WelcomeCommand";
import TestWelcomeView from "./contributions/viewsWelcome/TestWelcomeView";
import useContribution from "./utils/contribution/useContribution";

export function activate(context: ExtensionContext) {
  useContribution(context, WelcomeCommand);
}

export const contributions = {
  commands: [WelcomeCommand],
  viewsWelcome: [TestWelcomeView],
};
