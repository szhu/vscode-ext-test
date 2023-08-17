import { window } from "vscode";
import Command from "../../utils/subscription/Command";

export default new Command("welcome-view-content-sample.hello", async () => {
  window.showInformationMessage("Hello world!");
});
