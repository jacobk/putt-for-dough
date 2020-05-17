import React, { useState } from "react";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import yellow from "@material-ui/core/colors/yellow";
import lightGreen from "@material-ui/core/colors/lightGreen";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import { Swipeable, EventData } from "react-swipeable";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

type Props = {
  round: number;
  position: number;
  success: boolean;
  score: number;
  rowBonus: boolean;
  bonusPosition: boolean;
  onClick: () => void;
  onSwipe: () => void;
  staticBackground?: boolean;
};

const roundShades = [grey[100], grey[200], grey[300]];
const darkEoundShades = [grey[400], grey[600], grey[800]];

const backgroundColor = (props: Props): string => {
  const { round, success, rowBonus, bonusPosition, staticBackground } = props;
  if (rowBonus) {
    return yellow[500];
  } else if (bonusPosition && success) {
    return lightGreen["A400"];
  } else if (success) {
    return lightGreen["A200"];
  } else {
    return staticBackground ? grey[100] : roundShades[round];
  }
};

const darkBackgroundColor = (props: Props): string => {
  const { round, success, rowBonus, bonusPosition, staticBackground } = props;
  if (rowBonus) {
    return blue[800];
  } else if (bonusPosition && success) {
    return green["800"];
  } else if (success) {
    return green["600"];
  } else {
    return staticBackground ? grey[100] : darkEoundShades[round];
  }
};

const useStyles = makeStyles((theme) => ({
  swipeContainer: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  root: (props: Props) => ({
    ...theme.typography.button,
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === "dark"
        ? darkBackgroundColor(props)
        : backgroundColor(props),
  }),
}));

export default (props: Props) => {
  const { success, score, onClick, onSwipe } = props;
  const classes = useStyles(props);
  const [swiping, setSwiping] = useState<{ done: boolean } | null>(null);
  return (
    <Swipeable
      onSwiped={(event: EventData) => {
        if (swiping && swiping.done) {
          onSwipe();
        }
        setSwiping(null);
      }}
      onSwiping={(event: EventData) => {
        if (event.first) {
          setSwiping({ done: false });
        }
        if (Math.abs(event.deltaX) > 100) {
          setSwiping({ done: true });
        } else {
          setSwiping({ done: false });
        }
      }}
      preventDefaultTouchmoveEvent={true}
      className={classes.swipeContainer}
    >
      <ButtonBase classes={{ root: classes.root }} onClick={onClick}>
        {success ? (
          score
        ) : swiping ? (
          swiping.done ? (
            <CheckCircleIcon style={{ color: green["A700"] }} />
          ) : (
            <SwapHorizontalCircleIcon />
          )
        ) : (
          ""
        )}
      </ButtonBase>
    </Swipeable>
  );
};
