export const setproject = (project) => (dispatch) => {
  dispatch({
    type: "UPDATE_PROJECT",
    Project: project,
  });
};
