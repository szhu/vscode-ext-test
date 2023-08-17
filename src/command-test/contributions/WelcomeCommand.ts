import { window } from "vscode";
import createCommand from "../../utils/contribution/createCommand";

export default createCommand({
  id: "welcome-view-content-sample.hello",
  contributes: {
    commands: { title: "Hello World" },
    menus: { commandPalette: { when: "false" } },
  },
  async action() {
    window.showInformationMessage("Hello world!");
  },
});
