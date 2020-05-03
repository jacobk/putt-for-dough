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
import ScrollToTop from "./ScrollToTop";
import { findVenue } from "./Venues";
import CardHeader from "./CardHeader";

interface VenueDetailsProps {}

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  positionTableCell: {
    padding: 0,
  },
}));

export default function VenueDetails(props: VenueDetailsProps) {
  const { id } = useParams();
  const [venue] = useState(findVenue(id));
  const classes = useStyles();

  return (
    <Box flexGrow={1}>
      <ScrollToTop />
      <PageTitle title={venue.name} />
      <CardHeader title="Layout" />
      <Card classes={{ root: classes.card }}>
        <CardContent>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    Positioner
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    1
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    2
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    3
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    4
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
                    5
                  </TableCell>
                  <TableCell classes={{ sizeSmall: classes.positionTableCell }}>
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
                  {venue.layout.map((position, idx) => (
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
                  {venue.layout.map((position, idx) => (
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
              label={`Short: ${venue.defaultBonus}`}
            />
            <Chip icon={<StarIcon />} label={`Long: ${venue.longBonus}`} />
          </Box>

          <Typography variant="body2">Adress:</Typography>
          <Typography variant="body1">{venue.address}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
