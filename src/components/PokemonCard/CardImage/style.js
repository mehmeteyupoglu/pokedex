export const imgContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

export const imgStyle = (isDark) => {
  let borderColor = isDark ? "#505863" : "rgb(0 0 0 / 13%)";
  return {
    margin: "auto",
    border: "1px solid ",
    borderColor,
  };
};
