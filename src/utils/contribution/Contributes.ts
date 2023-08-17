interface ContributesView {
  name: string;
}

export default interface Contributes {
  commands?: {
    title: string;
  };
  menus?: {
    commandPalette: {
      when: string;
    };
  };
  views: unknown &
    ({ explorer: ContributesView } | Record<string, unknown>) &
    ({ scm: ContributesView } | Record<string, unknown>) &
    ({ debug: ContributesView } | Record<string, unknown>) &
    ({ test: ContributesView } | Record<string, unknown>) & {
      [key: string]: ContributesView;
    };
  viewsContainers?: {
    activitybar: {
      title: string;
      icon: string;
    };
  };
  viewsWelcome?: {
    view: string;
  };
}
