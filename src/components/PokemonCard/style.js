import { colors } from "../style";

export const colStyle = {
  marginBottom: "2rem",
};

export const mutualCardStyle = {};
export const cardStyle = {
  boxShadow: ` 0px 0px 16px 1px ${colors.cardBxSh}`,
  border: "none",
  width: "100%",
  height: "100%",
};

export const darkCardStyle = {
  backgroundColor: colors.cardDBg,
  color: colors.cardText,
  width: "100%",
  height: "100%",
  boxShadow: "none",
  border: `1px solid ${colors.gray}`,
};

export const cardBottomStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 1.25rem 1.25rem",
};
