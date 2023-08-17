import { window } from "vscode";
import Command from "../../utils/contribution/Command";

export default Command({
  id: "welcome-view-content-sample.hello",
  contributes: {
    commands: { title: "Hello World" },
    menus: { commandPalette: { when: "false" } },
  },
  async action() {
    window.showInformationMessage("Hello world!");
  },
});
