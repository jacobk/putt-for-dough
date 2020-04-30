import React, { useState } from "react";
import Storage from "./api";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";

interface GameDetailsProps {}

const storage = new Storage();

export default function GameDetails(props: GameDetailsProps) {
  const { id } = useParams();
  const [game] = useState(storage.getGame(id));

  return (
    <React.Fragment>
      <PageTitle title="Poäng" />
    </React.Fragment>
  );
}

// Score
// Bana
// Layout
// % hits

// Avstånd: ()
