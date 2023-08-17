import { commands } from "vscode";
import Activatable from "./Activatable";
import Contributes from "./Contributes";

interface CommandOptions<T extends string> {
  id: T;
  contributes?: Pick<Contributes, "commands" | "menus">;
  action: () => void;
}

export type Command<T extends string> = CommandOptions<T> &
  Activatable & {
    href: string;
  };

export default function Command<T extends string = string>(
  opts: CommandOptions<T>
): Command<T> {
  return {
    ...opts,
    href: `command:${opts.id}`,
    activate: () => commands.registerCommand(opts.id, opts.action),
  };
}
