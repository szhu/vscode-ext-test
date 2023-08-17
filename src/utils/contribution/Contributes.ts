export default interface Contributes {
  commands?: {
    title: string;
  };
  menus?: {
    commandPalette: {
      when: string;
    };
  };
  views: {
    explorer: {
      name: string;
    };
  };
  viewsWelcome?: {
    view: string;
  };
}
