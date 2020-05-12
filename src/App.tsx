import React, { useEffect } from "react";
import "./App.css";
import Venues from "./Venues";
import Storage from "./api";
import { Switch, Route, Redirect, Link, useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Games from "./Games";
import Start from "./Start";
import spinndisckFkLogo from "./logo-footer.png";
import VenueSelector from "./VenueSelector";
import Play from "./Play";
import Settings from "./Settings";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ConfirmProvider } from "material-ui-confirm";
import GameDetails from "./GameDetails";
import VenueDetails from "./VenueDetails";
import TimelineIcon from "@material-ui/icons/Timeline";
import Stats from "./Stats";
import ReactGA from "react-ga";

const storage = new Storage();

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  drawerPaper: {
    width: 250,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(9),
    right: theme.spacing(2),
    zIndex: 1,
  },
  logo: {
    position: "absolute",
    right: 0,
    width: 150,
    marginRight: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(
    storage.getSettings().darkMode
  );
  const [venueSelectorOpen, setVenueSelectorOpen] = React.useState(false);
  useEffect(() => {
    ReactGA.initialize("UA-166285768-1");
  });

  useEffect(() => {
    return history.listen((location) => {
      ReactGA.pageview(location.pathname);
    });
  }, [history]);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const createGame = (venueId: string | null) => {
    setVenueSelectorOpen(false);
    if (!venueId) {
      return;
    }
    const game = storage.createGame(venueId);
    history.push(`/play/${game.id}`);
  };

  const handleAddGame = () => {
    const activeGame = storage.activeGame();
    if (activeGame) {
      return history.push(`/play/${activeGame.id}`);
    }
    setVenueSelectorOpen(true);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ConfirmProvider>
        <Box display="flex" className={classes.wrapper} flexDirection="column">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <img
                alt="spinndisk fk"
                src={spinndisckFkLogo}
                className={classes.logo}
              />
              <Route
                path={[
                  "/start",
                  "/games",
                  "/games",
                  "/settings",
                  "/venues",
                  "/stats",
                ]}
              >
                <Fab
                  className={classes.fab}
                  color="secondary"
                  onClick={handleAddGame}
                >
                  <AddIcon />
                </Fab>
              </Route>
            </Toolbar>
          </AppBar>
          <VenueSelector open={venueSelectorOpen} onClose={createGame} />
          <SwipeableDrawer
            anchor="left"
            open={drawerOpen}
            disableBackdropTransition={true}
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}
            classes={{ paper: classes.drawerPaper }}
          >
            <ListItem button component={Link} to="/" onClick={closeDrawer}>
              <ListItemIcon>
                <TrackChangesIcon />
              </ListItemIcon>
              <ListItemText primary="Spela" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/games" onClick={closeDrawer}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Resultat" />
            </ListItem>
            <ListItem button component={Link} to="/stats" onClick={closeDrawer}>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Statistik" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/venues"
              onClick={closeDrawer}
            >
              <ListItemIcon>
                <GolfCourseIcon />
              </ListItemIcon>
              <ListItemText primary="Banor" />
            </ListItem>
            <Divider />
            <ListItem
              button
              component={Link}
              to="/settings"
              onClick={closeDrawer}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Inställningar" />
            </ListItem>
          </SwipeableDrawer>
          <Switch>
            <Route exact path="/">
              <Redirect to="/start" />
            </Route>
            <Route exact path="/start">
              <Start />
            </Route>
            <Route path="/play/:id">
              <Play />
            </Route>
            <Route path="/games/:id">
              <GameDetails />
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/settings">
              <Settings toggleDarkMode={setDarkMode} />
            </Route>
            <Route path="/venues/:id">
              <VenueDetails />
            </Route>
            <Route path="/venues">
              <Venues />
            </Route>
          </Switch>
          <Toolbar />
        </Box>
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
