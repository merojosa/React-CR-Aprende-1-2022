import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    width: "50%",
  },
});
