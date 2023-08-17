import WelcomeView from "../../utils/contribution/WelcomeView";
import WelcomeCommand from "../commands/WelcomeCommand";

export default WelcomeView({
  contributes: {
    viewsWelcome: {
      view: "nodeDependencies",
    },
  },
  contents: /* md */ `
    Welcome to node dependencies.

    [Hello](${WelcomeCommand.href})`,
});
