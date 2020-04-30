import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PageTitle from "./PageTitle";
import Engine from "./engine";
import Storage from "./api";
import { useHistory } from "react-router-dom";

type Props = {};

const storage = new Storage();

export default (props: Props) => {
  const history = useHistory();
  const [games] = useState(storage.listGames());

  return (
    <React.Fragment>
      <PageTitle title="Resultat" />
      <List>
        {games.map((game) => {
          const engine = new Engine(game);
          return (
            <ListItem
              button
              onClick={() => history.push(`/games/${game.id}`)}
              key={game.id}
            >
              <ListItemText
                primary={engine.scoreGame()}
                secondary={`${engine.venue.name} - ${new Date(
                  game.startTime
                ).toLocaleString()}`}
              />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};
