const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("created project");
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("created project error");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
