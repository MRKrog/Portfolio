export const featuredReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FEATURED':
      const featuredProjects = action.projects.filter(project => {
        return project.featured === true
      })
      return featuredProjects;
    default:
      return state;
  }
}
