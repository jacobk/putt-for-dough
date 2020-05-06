import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

type Props = {
  roundNumber: number;
  checked?: boolean;
  hidden?: boolean;
  onClick?: () => void;
};

const useStyles = makeStyles((theme) => ({
  root: (hidden: boolean) => ({
    textAlign: "center",
    paddingTop: theme.spacing(),
    visibility: hidden ? "hidden" : "initial",
    color: theme.palette.text.hint,
  }),
}));

export default ({
  roundNumber,
  hidden = false,
  checked = false,
  onClick = () => {},
}: Props) => {
  const classes = useStyles(hidden);

  return (
    <Typography variant="h6" classes={{ root: classes.root }} gutterBottom>
      <Chip
        label={roundNumber}
        clickable
        icon={
          checked ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />
        }
        onClick={onClick}
      />
    </Typography>
  );
};
