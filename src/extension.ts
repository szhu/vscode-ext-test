import { ExtensionContext } from "vscode";
import WelcomeCommand from "./contributions/commands/WelcomeCommand";
import MainViewProvider from "./contributions/treeDataProvider/MainViewProvider";
import NodeDependenciesProvider from "./contributions/treeDataProvider/NodeDependenciesProvider";
import MainViewContainer from "./contributions/viewsContainers/MainViewContainer";
import MainWelcomeView from "./contributions/viewsWelcome/MainWelcomeView";
import NodeDependenciesWelcomeView from "./contributions/viewsWelcome/NodeDependenciesWelcomeView";
import TestWelcomeView from "./contributions/viewsWelcome/TestWelcomeView";
import useContribution from "./utils/contribution/useContribution";

export function activate(context: ExtensionContext) {
  useContribution(context, WelcomeCommand);
  useContribution(context, NodeDependenciesProvider);
  useContribution(context, MainViewProvider);
}

export const contributions = {
  commands: [WelcomeCommand],
  viewsWelcome: [TestWelcomeView, NodeDependenciesWelcomeView, MainWelcomeView],
  viewsContainers: [MainViewContainer],
  treeDataProviders: [NodeDependenciesProvider, MainViewProvider],
};
