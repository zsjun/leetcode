const reduxThunk =
  ({ dispatch }) =>
  (action) =>
  (next) => {
    if (typeof action === "function") {
      action();
    }
    
    next()
  };
