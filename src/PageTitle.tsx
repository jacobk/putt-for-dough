import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  title: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
  },
}));

export default ({ title }: Props) => {
  const classes = useStyles();
  return (
    <Typography variant="h2" classes={{ root: classes.root }}>
      {title}
    </Typography>
  );
};
