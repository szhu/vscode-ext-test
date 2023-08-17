import WelcomeView from "../../utils/contribution/WelcomeView";
import WelcomeCommand from "../commands/WelcomeCommand";
import MainPanelProvider from "../treeDataProvider/MainViewProvider";

export default WelcomeView({
  contributes: {
    viewsWelcome: {
      view: MainPanelProvider.id,
    },
  },

  contents: /* md */ `
    Moooo

    [Do Moo](${WelcomeCommand.href})

    ---

    Mooooo

    [Do Moo](${WelcomeCommand.href})


    ---

    Mooooooooooooo

    [Do Moo](${WelcomeCommand.href})

    ---

    Got feedback? [Let us know.](${WelcomeCommand.href})
    `,
});
