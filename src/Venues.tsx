import React from "react";
import { Venue, Layout } from "./types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PageTitle from "./PageTitle";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Storage from "./api";

const storage = new Storage();

export const standardC1: Venue = {
  id: "standard-1",
  name: "Cirkel 1",
  description: "",
  layout: [10, 15, 20, 25, 30, 35],
  address: "Förtabästa korgvägen 1",
  location: { lon: 0, lat: 0 },
  defaultBonus: 5,
  longBonus: 10,
  special: false,
};

export const standardC2: Venue = {
  id: "standard-2",
  name: "Cirkel 2",
  description: "",
  layout: [35, 40, 45, 50, 55, 60],
  address: "Förtabästa korgvägen 1",
  location: { lon: 0, lat: 0 },
  defaultBonus: 10,
  longBonus: 20,
  special: false,
};

export const standardMix: Venue = {
  id: "standard-mix",
  name: "Mix",
  description: "",
  layout: [10, 20, 30, 40, 50, 60],
  address: "Förtabästa korgvägen 1",
  location: { lon: 0, lat: 0 },
  defaultBonus: 10,
  longBonus: 20,
  special: false,
};

const getSpecialLayout = (layoutId: string): Layout => {
  return storage.specialLayout(layoutId);
};

// This solution is just nuts - but it works ¯\_(ツ)_/¯
export const special: Venue = {
  id: "special-1",
  name: "D.I.Y.",
  description: "",
  get layout(): Layout {
    return getSpecialLayout(this.id);
  },
  set layout(l: Layout) {
    storage.updateSpecialLayout(this.id, l);
  },
  address: "Förtabästa korgvägen 1",
  location: { lon: 0, lat: 0 },
  get defaultBonus(): number {
    return storage.getSpecialBonus(`default-${this.id}`, 10);
  },
  set defaultBonus(v: number) {
    storage.setSpecialBonus(`default-${this.id}`, v, 10);
  },
  get longBonus(): number {
    return storage.getSpecialBonus(`long-${this.id}`, 20);
  },
  set longBonus(v: number) {
    storage.setSpecialBonus(`long-${this.id}`, v, 20);
  },
  special: true,
};

export const bulltoftaStandard: Venue = {
  id: "bullen-1",
  name: "Bulltofta Standard",
  description: "",
  layout: [10, 15, 20, 25, 30, 35],
  address: "Cederströmsgatan 6, Malmö",
  location: { lon: 13.065716, lat: 55.597975 },
  defaultBonus: 5,
  longBonus: 10,
  special: false,
};

export const bulltoftaLong: Venue = {
  id: "bullen-2",
  name: "Bulltofta Lång",
  description: "",
  layout: [35, 40, 45, 50, 55, 60],
  address: "Cederströmsgatan 6, Malmö",
  location: { lon: 13.065716, lat: 55.597975 },
  defaultBonus: 10,
  longBonus: 20,
  special: false,
};

export const stHansStandard: Venue = {
  id: "sthans-1",
  name: "St Hans Standard",
  description: "",
  layout: [10, 15, 20, 25, 30, 35],
  address: "tbd",
  location: { lon: 13.196336, lat: 55.723897 },
  defaultBonus: 5,
  longBonus: 10,
  special: false,
};

export const venues = [standardC1, standardC2, standardMix, special];

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
          <React.Fragment key={venue.id}>
            <Divider variant="middle" />
            <ListItem button component={Link} to={`/venues/${venue.id}`}>
              <ListItemText
                primary={venue.name}
                secondary={`Distanser: ${venue.layout.join(", ")} Bonus: ${
                  venue.defaultBonus
                } / ${venue.longBonus}`}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};
