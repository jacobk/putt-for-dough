import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
  },
});

type Props = {
  score: number;
};

export default ({ score }: Props) => {
  const classes = useStyles();
  return (
    <Typography variant="h1" classes={{ root: classes.root }}>
      {score}
    </Typography>
  );
};
