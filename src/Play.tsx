import React, { useState } from "react";
import "./App.css";
import { useParams, useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Toolbar, Button } from "@material-ui/core";
import Engine from "./engine";
import Attempt from "./Attempt";
import RoundHeader from "./RoundHeader";
import Score from "./Score";
import { useConfirm } from "material-ui-confirm";
import Storage from "./api";

const storage = new Storage();

export default function Play() {
  const history = useHistory();
  const { id } = useParams();
  const [game, setGame] = useState(storage.getGame(id));
  const confirm = useConfirm();
  const engine = new Engine(game);

  const toggleAttempt = (i: number, j: number, k: number) => {
    game.result[i][j][k] = !game.result[i][j][k];
    setGame(storage.updateGame(game));
  };

  const reset = () => {
    confirm({ title: "Är du säker?" })
      .then(() => {
        setGame(storage.resetGame(game));
      })
      .catch(() => {});
  };

  const deleteGame = () => {
    confirm({ title: "Är du säker?" })
      .then(() => {
        storage.deleteGame(game.id);
        history.push("/");
      })
      .catch(() => {});
  };

  const finish = () => {
    confirm({
      title: "Bra jobbat!",
      description: "Säker på att du ska avsluta?",
    })
      .then(() => {
        storage.completeGame(game);
        history.push(`/games/${game.id}`);
      })
      .catch(() => {});
  };

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Box
        display="flex"
        flexGrow={3}
        flexDirection="row"
        flexShrink={0}
        flexBasis={0}
      >
        {game.result.map((round, i) => (
          <React.Fragment>
            <Box
              flexGrow={1}
              flexShrink={0}
              flexBasis={0}
              display="flex"
              flexDirection="column"
            >
              <RoundHeader roundNumber={i + 1} />
              {round.map((position, j) => (
                <Box flexGrow={1} flexShrink={0} flexBasis={0} display="flex">
                  {position.map((attempt, k) => (
                    <Attempt
                      round={i}
                      bonusPosition={engine.bonusPosition(i, k)}
                      position={j}
                      rowBonus={engine.fullRow(j)}
                      score={engine.scoreAttempt(i, j, k)}
                      success={attempt}
                      key={`attempt-${i}-${j}-${k}`}
                      onClick={() => toggleAttempt(i, j, k)}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </React.Fragment>
        ))}
      </Box>
      <Box>
        <Toolbar>
          <Button onClick={deleteGame}>Släng</Button>
          <Button onClick={reset}>Rensa</Button>
          <Box flexGrow={1}></Box>
          <Button onClick={finish} color="primary" variant="contained">
            Klar!
          </Button>
        </Toolbar>
      </Box>
      <Box flexGrow={1}>
        <Score score={engine.scoreGame()} />
      </Box>
    </Box>
  );
}
