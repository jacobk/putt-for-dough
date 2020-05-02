import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  roundNumber: number;
  hidden?: boolean;
};

const useStyles = makeStyles((theme) => ({
  root: (hidden: boolean) => ({
    textAlign: "center",
    paddingTop: theme.spacing(),
    visibility: hidden ? "hidden" : "initial",
    color: theme.palette.text.hint,
  }),
}));

export default ({ roundNumber, hidden = false }: Props) => {
  const classes = useStyles(hidden);

  return (
    <Typography variant="h6" classes={{ root: classes.root }} gutterBottom>
      {roundNumber}
    </Typography>
  );
};
