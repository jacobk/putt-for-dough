import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  roundNumber: number;
};

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(),
  },
}));

export default ({ roundNumber }: Props) => {
  const classes = useStyles();

  return (
    <Typography variant="h6" classes={{ root: classes.root }} gutterBottom>
      {roundNumber}
    </Typography>
  );
};
