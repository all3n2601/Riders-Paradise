export let currentUser = null;
export let userRole = null;

export const setCurrentUser = (user) => {
  currentUser = user;
};

export const getCurrentUser = () => {
  return currentUser;
};

export const setUserRole = (role) => {
  userRole = role;
};

export const getUserRole = () => {
  return userRole;
};
