import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

interface CardHeaderProps {
  title: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function CardHeader({ title }: CardHeaderProps) {
  const classes = useStyles();
  return (
    <Typography variant="button" className={classes.root}>
      {title}
    </Typography>
  );
}
