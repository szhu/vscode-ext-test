import Contributes from "./Contributes";

interface WelcomeView {
  contributes?: Pick<Contributes, "viewsWelcome">;
  contents: string;
}

export default function WelcomeView(opts: WelcomeView): WelcomeView {
  const contents = opts.contents
    .split(/\n\n+/g)
    .map((paragraph) => paragraph.replace(/[\n ]+/g, " ").trim())
    .join("\n");

  return {
    ...opts,
    contents,
  };
}
