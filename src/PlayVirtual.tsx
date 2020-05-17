import React, { useState } from "react";
import "./App.css";
import { useParams, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Toolbar, Button } from "@material-ui/core";
import Attempt from "./Attempt";
import Score from "./Score";
import { useConfirm } from "material-ui-confirm";
import Storage from "./api";
import { makeStyles } from "@material-ui/core/styles";
import { positionLabel } from "./helpers";

const useStyles = makeStyles((theme) => ({
  position: {
    textAlign: "center",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: theme.palette.text.hint,
  },
}));

type VirtualPosition = [boolean, boolean, boolean, boolean, boolean];

type VirtualGame = [
  VirtualPosition,
  VirtualPosition,
  VirtualPosition,
  VirtualPosition,
  VirtualPosition
];

const makeInitState = (): VirtualGame =>
  [...Array(6)].map(() => [...Array(5)].map(() => false)) as VirtualGame;

const layout = [25, 30, 35, 40, 45, 50];

export default function Play() {
  const [game, setGame] = useState<VirtualGame>(makeInitState());
  const confirm = useConfirm();
  const classes = useStyles();

  const toggleAttempt = (i: number, j: number) => {
    game[i][j] = !game[i][j];
    setGame(JSON.parse(JSON.stringify(game)));
  };

  const reset = () => {
    confirm({ title: "Är du säker?" })
      .then(() => {
        setGame(makeInitState());
      })
      .catch(() => {});
  };

  const scoreCell = (i: number): number => {
    if (i <= 1) {
      return 1;
    }
    if (i <= 3) {
      return 2;
    }
    return 3;
  };

  const scoreGame = () =>
    game.reduce(
      (acc, row, positionIdx) =>
        acc + row.filter(Boolean).length * scoreCell(positionIdx),
      0
    );

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      {game.map((row, i) => (
        <Box
          flexGrow={1}
          flexShrink={0}
          flexBasis={0}
          display="flex"
          key={`attepmt-row-${i}`}
        >
          <Box
            flexGrow={2}
            flexShrink={0}
            flexBasis={0}
            display="flex"
            justifyContent="center"
            key={`position-${i}`}
          >
            <Box alignSelf="center" className={classes.position}>
              {positionLabel(layout[i])}
            </Box>
          </Box>
          {row.map((attempt, j) => (
            <Attempt
              round={i}
              bonusPosition={false}
              position={i}
              rowBonus={false}
              score={scoreCell(i)}
              success={attempt}
              key={`attempt-${i}-${j}`}
              onClick={() => toggleAttempt(i, j)}
              onSwipe={() => {}}
              staticBackground={true}
            />
          ))}
        </Box>
      ))}

      <Box>
        <Toolbar>
          <Box flexGrow={1}></Box>
          <Button onClick={reset}>Rensa</Button>
        </Toolbar>
      </Box>
      <Box flexGrow={1}>
        <Score score={scoreGame()} />
      </Box>
    </Box>
  );
}
