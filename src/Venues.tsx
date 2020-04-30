import React from "react";
import { Venue } from "./types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PageTitle from "./PageTitle";

export const bulltoftaStandard: Venue = {
  id: "bullen-1",
  name: "Bulltofta Standard",
  description: "",
  layout: [10, 15, 20, 25, 30, 35],
  address: "tbd",
  location: { lon: 0, lat: 0 },
  defaultBonus: 5,
  longBonus: 10,
};

export const bulltoftaLong: Venue = {
  id: "bullen-2",
  name: "Bulltofta Lång",
  description: "",
  layout: [35, 40, 45, 50, 55, 60],
  address: "tbd",
  location: { lon: 0, lat: 0 },
  defaultBonus: 10,
  longBonus: 20,
};

export const stHansStandard: Venue = {
  id: "sthans-1",
  name: "St Hans Standard",
  description: "",
  layout: [10, 15, 20, 25, 30, 35],
  address: "tbd",
  location: { lon: 0, lat: 0 },
  defaultBonus: 5,
  longBonus: 10,
};

export const venues = [bulltoftaStandard, bulltoftaLong, stHansStandard];

export const findVenue = (venueId: string): Venue => {
  const match = venues.find((venue) => venue.id === venueId);
  if (!match) {
    return venues[0];
    // throw new Error("Couldn't find venue");
  }
  return match;
};

type Props = {};

export default (props: Props) => {
  return (
    <React.Fragment>
      <PageTitle title="Banor" />
      <List>
        {venues.map((venue) => (
          <ListItem>
            <ListItemText
              primary={venue.name}
              secondary={`Distanser: ${venue.layout.join(", ")} Bonus: ${
                venue.defaultBonus
              } / ${venue.longBonus}`}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};
