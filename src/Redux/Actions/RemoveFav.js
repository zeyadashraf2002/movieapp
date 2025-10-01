const removeFromFav = (id) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: id
  };
};

export default removeFromFav