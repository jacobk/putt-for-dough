import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { venues } from "./Venues";

export interface VenueSelectorProps {
  open: boolean;
  onClose: (venueId: string | null) => void;
}

export default function VenueSelector(props: VenueSelectorProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Välj bana</DialogTitle>
      <List>
        {venues.map((venue) => (
          <ListItem
            button
            onClick={() => handleListItemClick(venue.id)}
            key={venue.id}
          >
            <ListItemText primary={venue.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
