let navigate: (path: string) => void;

export const setNavigator = (navFn: typeof navigate) => {
  navigate = navFn;
};

export const goTo = (path: string) => {
  if (navigate) navigate(path);
};