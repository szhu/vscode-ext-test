import Contributes from "./Contributes";

export interface ViewContainer {
  id: string;
  contributes?: Pick<Contributes, "viewsContainers">;
}

export default function ViewContainer(opts: ViewContainer): ViewContainer {
  return opts;
}
