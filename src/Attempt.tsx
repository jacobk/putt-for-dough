import React from "react";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import yellow from "@material-ui/core/colors/yellow";
import lightGreen from "@material-ui/core/colors/lightGreen";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

type Props = {
  round: number;
  position: number;
  success: boolean;
  score: number;
  rowBonus: boolean;
  bonusPosition: boolean;
  onClick: () => void;
};

const roundShades = [grey[100], grey[200], grey[300]];
const darkEoundShades = [grey[400], grey[600], grey[800]];

const backgroundColor = (props: Props): string => {
  const { round, success, rowBonus, bonusPosition } = props;
  if (rowBonus) {
    return yellow[500];
  } else if (bonusPosition && success) {
    return lightGreen["A400"];
  } else if (success) {
    return lightGreen["A200"];
  } else {
    return roundShades[round];
  }
};

const darkBackgroundColor = (props: Props): string => {
  const { round, success, rowBonus, bonusPosition } = props;
  if (rowBonus) {
    return blue[800];
  } else if (bonusPosition && success) {
    return green["800"];
  } else if (success) {
    return green["600"];
  } else {
    return darkEoundShades[round];
  }
};

const useStyles = makeStyles((theme) => ({
  root: (props: Props) => ({
    ...theme.typography.button,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    borderBottomWidth: 1,
    border:
      theme.palette.type === "dark" ? "1px solid black" : "1px solid white",
    backgroundColor:
      theme.palette.type === "dark"
        ? darkBackgroundColor(props)
        : backgroundColor(props),
  }),
}));

export default (props: Props) => {
  const { success, score, onClick } = props;
  const classes = useStyles(props);
  return (
    <ButtonBase classes={{ root: classes.root }} onClick={onClick}>
      {success ? score : ""}
    </ButtonBase>
  );
};
