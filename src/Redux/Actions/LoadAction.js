// Action
export const LoaderAction = (payload) => {
  return {
    type: "LOADER_ACTION",
    payload, // true = شغال, false = واقف
  };
};
