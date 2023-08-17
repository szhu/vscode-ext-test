import { ExtensionContext } from "vscode";
import WelcomeCommand from "./contributions/commands/WelcomeCommand";
import NodeDependenciesProvider from "./contributions/treeDataProvider/NodeDependenciesProvider";
import NodeDependenciesWelcomeView from "./contributions/viewsWelcome/NodeDependenciesWelcomeView";
import TestWelcomeView from "./contributions/viewsWelcome/TestWelcomeView";
import useContribution from "./utils/contribution/useContribution";

export function activate(context: ExtensionContext) {
  useContribution(context, WelcomeCommand);
  useContribution(context, NodeDependenciesProvider);
}

export const contributions = {
  commands: [WelcomeCommand],
  viewsWelcome: [TestWelcomeView, NodeDependenciesWelcomeView],
  treeDataProviders: [NodeDependenciesProvider],
};
