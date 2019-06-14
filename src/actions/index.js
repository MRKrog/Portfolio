export const setError = error => ({
  type: "SET_ERROR",
  error
});

export const setLoading = loading => ({
  type: "SET_LOADING",
  loading
});

export const setFeatured = projects => ({
  type: "SET_FEATURED",
  projects
});

export const setMenu = status => ({
  type: "SET_MENU",
  status
});

export const setCurrentProject = currentProject => ({
  type: "SET_CURRENT",
  currentProject
});

export const setProjects = projects => ({
  type: "SET_PROJECTS",
  projects
});
