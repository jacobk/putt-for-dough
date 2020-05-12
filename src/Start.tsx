import React, { useEffect } from "react";
import PageTitle from "./PageTitle";
import Storage from "./api";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import putter from "./sun-putt.jpg";
import { makeStyles } from "@material-ui/core/styles";

type Props = {};

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const storage = new Storage();

export default (props: Props) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const activeGame = storage.activeGame();
    if (activeGame) {
      history.push(`/play/${activeGame.id}`);
    }
  });

  return (
    <React.Fragment>
      <PageTitle title="1025" />
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={putter}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Välkommen!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Spinndisc FK tillhandahåller flera färdiga träningsplatser för
              puttnings-träningen "1025".
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              window.location.assign(
                "https://www.spinndiscfk.se/index.php/klubben/putt-traning"
              )
            }
          >
            Lär dig mer
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
