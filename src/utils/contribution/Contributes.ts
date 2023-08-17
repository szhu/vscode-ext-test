export default interface Contributes {
  commands?: {
    title: string;
  };
  menus?: {
    commandPalette: {
      when: string;
    };
  };
  viewsWelcome?: {
    view: string;
  };
}
