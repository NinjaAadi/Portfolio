const initialstate = {
  Project: {},
};

export default function Project(state = initialstate, action) {
  const { type, Project } = action;

  switch (type) {
    case "UPDATE_PROJECT":
      return {
        Project: Project,
      };
    default:
      return state;
  }
}
