import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  title: string;
  subtitle?: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
  },
}));

export default ({ title, subtitle }: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h2" classes={{ root: classes.root }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" classes={{ root: classes.root }}>
          {subtitle}
        </Typography>
      )}
    </React.Fragment>
  );
};
