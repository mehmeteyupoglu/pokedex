export const colors = {
  gray: "#505863",
  cardDBg: "rgb(25 31 41)",
  cardText: "#f0f6fc",
};

export const cardStyle = {
  margin: "10px",
  height: "35rem",
  width: "20rem",
  boxShadow: `1px 1px 2px ${colors.cardDBg}`,
  border: "none",
};

export const darkCardStyle = {
  backgroundColor: colors.cardDBg,
  color: colors.cardText,
  margin: "10px",
  height: "35rem",
  width: "20rem",
  boxShadow: "none",
  border: `1px solid ${colors.gray}`,
};

export const styledButton = {
  color: "#28a745",
  cursor: "pointer",
};

export const navbar = {
  boxShadow: `1px 3px 10px ${colors.gray}`,
  marginBottom: "3rem",
};

export const darkNavbar = {
  borderBottom: `1px solid ${colors.gray}`,
  backgroundColor: colors.cardDBg,
  marginBottom: "3rem",
};

export const footer = {
  height: "15rem",
  boxShadow: `1px 3px 10px ${colors.gray}`,
  marginTop: "3rem",
};

export const darkFooter = {
  height: "15rem",
  borderTop: `1px solid ${colors.gray}`,
  backgroundColor: colors.cardDBg,
  marginTop: "3rem",
};

export const darkModalHeader = {
  backgroundColor: "rgb(25 31 41)",
  color: colors.cardText,

  borderBottom: "1px solid #f0f6fc ",
};

export const modalBody = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
};

export const darkModalBody = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.75rem",
  backgroundColor: colors.cardDBg,
  color: colors.cardText,
};
