export const saveStateLocalStorage = (state) => {
  try {
    for (const key in state) {
      localStorage.setItem(key, JSON.stringify(state[key]));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
