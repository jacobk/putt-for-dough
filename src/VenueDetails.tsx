import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import { feetToMeterLabel } from "./helpers";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ScrollToTop from "./ScrollToTop";
import { findVenue } from "./Venues";
import CardHeader from "./CardHeader";
import TextField from "@material-ui/core/TextField";
import { Layout } from "./types";

interface VenueDetailsProps {}

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  positionTableCell: {
    padding: 0,
  },
  saveButton: {
    marginTop: theme.spacing(1),
  },
  input: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function VenueDetails(props: VenueDetailsProps) {
  const { id } = useParams();
  const [venue] = useState(findVenue(id));
  const [layout, setLayout] = useState(venue.layout);
  const [bonuses, setBonuses] = useState({
    short: venue.defaultBonus,
    long: venue.longBonus,
  });
  const classes = useStyles();

  const handlePositionChange = (idx: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = Number(event.target.value);
    if (isNaN(newValue)) {
      return;
    }
    setLayout([
      ...layout.slice(0, idx),
      newValue,
      ...layout.slice(idx + 1),
    ] as Layout);
  };

  const handleSaveLayout = () => {
    venue.layout = layout;
    venue.defaultBonus = bonuses.short;
    venue.longBonus = bonuses.long;
  };

  const handleBonusChange = (distance: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event.target.value);
    const newValue = Number(event.target.value);
    if (isNaN(newValue)) {
      return;
    }
    setBonuses({
      ...bonuses,
      [distance]: newValue,
    });
  };

  return (
    <Box flexGrow={1}>
      <ScrollToTop />
      <PageTitle title={venue.name} />
      {!venue.special ? (
        <React.Fragment>
          <CardHeader title="Layout" />
          <Card classes={{ root: classes.card }}>
            <CardContent>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        Positioner
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        1
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        2
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        3
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        4
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        5
                      </TableCell>
                      <TableCell
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        6
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        variant="head"
                        align="left"
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        Fot
                      </TableCell>
                      {layout.map((position, idx) => (
                        <TableCell
                          classes={{ sizeSmall: classes.positionTableCell }}
                          key={`feet-position-${idx}`}
                        >
                          {position}
                          {/* {positionLabel(position)} */}
                        </TableCell>
                      ))}
                    </TableRow>
                    <TableRow>
                      <TableCell
                        variant="head"
                        align="left"
                        classes={{ sizeSmall: classes.positionTableCell }}
                      >
                        Meter
                      </TableCell>
                      {layout.map((position, idx) => (
                        <TableCell
                          classes={{ sizeSmall: classes.positionTableCell }}
                          key={`meter-position-${idx}`}
                        >
                          {feetToMeterLabel(position)}
                          {/* {positionLabel(position)} */}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <CardHeader title="Info" />
          <Card classes={{ root: classes.card }}>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body2">Bonus:</Typography>
                <Chip
                  icon={<StarHalfIcon />}
                  label={`Kort: ${venue.defaultBonus}`}
                />
                <Chip icon={<StarIcon />} label={`Lång: ${venue.longBonus}`} />
              </Box>
            </CardContent>
          </Card>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CardHeader title="Konfiguration" />
          <Card classes={{ root: classes.card }}>
            <CardContent>
              <form noValidate autoComplete="off" className={classes.input}>
                <div>
                  <TextField
                    required
                    value={bonuses.short}
                    id={`default-bonus`}
                    label={`Kort bonus`}
                    onChange={handleBonusChange("short")}
                  />
                  <TextField
                    required
                    value={bonuses.long}
                    id={`long-bonus`}
                    label={`Lång bonus`}
                    onChange={handleBonusChange("long")}
                  />

                  {layout.map((position, idx) => (
                    <TextField
                      required
                      value={position}
                      id={`position-${idx}`}
                      key={`position-${idx}`}
                      label={`Position ${idx + 1}`}
                      onChange={handlePositionChange(idx)}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  onClick={handleSaveLayout}
                  className={classes.saveButton}
                >
                  Spara
                </Button>
              </form>
            </CardContent>
          </Card>
        </React.Fragment>
      )}
    </Box>
  );
}
