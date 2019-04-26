const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the start", content: "blah blah blah" },
    { id: "3", title: "egg hunt with me", content: "blah blah blah" },
    { id: "4", title: "LFC is a champion of EPL", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
