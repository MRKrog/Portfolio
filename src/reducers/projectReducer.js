export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FEATURED':
      console.log(action.projects);
      const featuredProjects = action.projects.filter(project => {
        return project.featured === true
      })
      console.log(featuredProjects);
      return featuredProjects;
    default:
      return state;
  }
}
