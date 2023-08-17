import { commands } from "vscode";
import Activatable from "./Activatable";
import Contributes from "./Contributes";

interface CommandOptions<T extends string> {
  id: T;
  contributes?: Pick<Contributes, "commands" | "menus">;
  action: () => void;
}

type Command<T extends string> = CommandOptions<T> &
  Activatable & {
    href: string;
  };

export default function Command(opts: CommandOptions<string>): Command<string> {
  return {
    ...opts,
    href: `command:${opts.id}`,
    activate: () => commands.registerCommand(opts.id, opts.action),
  };
}
