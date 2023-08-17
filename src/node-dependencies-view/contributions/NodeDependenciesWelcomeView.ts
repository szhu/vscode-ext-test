import WelcomeCommand from "../../command-test/contributions/WelcomeCommand";
import createWelcomeView from "../../utils/contribution/createWelcomeView";
import NodeDependenciesProvider from "./NodeDependenciesProvider";

export default createWelcomeView({
  contributes: {
    viewsWelcome: {
      view: NodeDependenciesProvider.id,
    },
  },
  contents: /* md */ `
    Welcome to node dependencies.

    [Hello](${WelcomeCommand.href})`,
});
