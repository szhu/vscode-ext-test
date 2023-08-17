import createViewContainer from "../../utils/contribution/createViewContainer";

export default createViewContainer({
  id: "mutableai-main",
  contributes: {
    viewsContainers: {
      activitybar: {
        title: "Mooo",
        icon: "$(file-code)",
      },
    },
  },
});
