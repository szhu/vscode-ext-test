import { ExtensionContext } from "vscode";
import WelcomeCommand from "../command-test/contributions/WelcomeCommand";
import MainViewContainer from "../main-view/contributions/MainViewContainer";
import MainViewProvider from "../main-view/contributions/MainViewProvider";
import MainWelcomeView from "../main-view/contributions/MainWelcomeView";
import NodeDependenciesProvider from "../node-dependencies-view/contributions/NodeDependenciesProvider";
import NodeDependenciesWelcomeView from "../node-dependencies-view/contributions/NodeDependenciesWelcomeView";
import useContribution from "../utils/contribution/useContribution";
import TestWelcomeView from "../welcome-view-test/contributions/TestWelcomeView";

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
