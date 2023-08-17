import Contributes from "./Contributes";

interface WelcomeView {
  contributes?: Pick<Contributes, "viewsWelcome">;
  contents: string;
}

export default function WelcomeView(opts: WelcomeView): WelcomeView {
  // The welcome view contents appear to support Markdown, but it's actually not
  // exactly Markdown. Let's get back some of the Markdown behavior that we're
  // used to.
  const contents = opts.contents
    // To get <hr>s, we create a gap by inserting a zero-width space.
    .replace(/(^|\n)[ \t]*---+[ \t]*(\n|$)/g, "$1\u200b$2")

    // To get standard Markdown whitespace behavior, we collapse blank lines
    // (aka 2+ consecutive newlines) into a paragraph break, and collapse all
    // other whitespace into a single space.
    .split(/\n\n+/g)
    .map((paragraph) => paragraph.replace(/[\n ]+/g, " ").trim())
    .join("\n");

  return {
    ...opts,
    contents,
  };
}
