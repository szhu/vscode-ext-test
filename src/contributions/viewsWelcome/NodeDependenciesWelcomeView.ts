import WelcomeView from "../../utils/contribution/WelcomeView";
import WelcomeCommand from "../commands/WelcomeCommand";
import NodeDependenciesProvider from "../treeDataProvider/NodeDependenciesProvider";

export default WelcomeView({
  contributes: {
    viewsWelcome: {
      view: NodeDependenciesProvider.id,
    },
  },
  contents: /* md */ `
    Welcome to node dependencies.

    [Hello](${WelcomeCommand.href})`,
});
