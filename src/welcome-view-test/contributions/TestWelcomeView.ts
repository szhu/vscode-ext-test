import WelcomeCommand from "../../command-test/contributions/WelcomeCommand";
import createWelcomeView from "../../utils/contribution/createWelcomeView";

export default createWelcomeView({
  contributes: {
    viewsWelcome: {
      view: "workbench.explorer.emptyView",
    },
  },
  contents: /* md */ `
    You can have paragraphs of text here.
    You can have [links](https://code.visualstudio.com) to external sources or [internal commands](${WelcomeCommand.href}).

    Use new lines to have new paragraphs.

    Place a link alone in a paragraph to make it a button:

    [Hello](${WelcomeCommand.href})`,
});
