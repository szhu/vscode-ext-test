import WelcomeCommand from "../../command-test/contributions/WelcomeCommand";
import createWelcomeView from "../../utils/contribution/createWelcomeView";
import MainPanelProvider from "./MainViewProvider";

export default createWelcomeView({
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
