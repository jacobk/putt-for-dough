import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PageTitle from "./PageTitle";
import Storage from "./api";
import { makeStyles } from "@material-ui/core/styles";
import { Settings as TSettings } from "./types";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CardHeader from "./CardHeader";
import { useConfirm } from "material-ui-confirm";
import { useHistory } from "react-router-dom";

const storage = new Storage();

interface SettingsProps {
  toggleDarkMode: any;
}

const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function Settings(props: SettingsProps) {
  const [settings, setSettings] = React.useState(storage.getSettings());
  const history = useHistory();
  const classes = useStyles();
  const confirm = useConfirm();

  const update = (settings: TSettings) => {
    setSettings(storage.updateSettings(settings));
  };

  return (
    <React.Fragment>
      <PageTitle title="Ställ in" />
      <Card className={classes.card}>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">Utseende</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.darkMode}
                    onChange={() => {
                      settings.darkMode = !settings.darkMode;
                      props.toggleDarkMode(settings.darkMode);
                      update(settings);
                    }}
                  />
                }
                label="Dark mode"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.showFeet}
                    onChange={() => {
                      settings.showFeet = !settings.showFeet;
                      if (!settings.showFeet && !settings.showMetric) {
                        settings.showMetric = true;
                      }
                      update(settings);
                    }}
                  />
                }
                label="Visa fot"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.showMetric}
                    onChange={() => {
                      settings.showMetric = !settings.showMetric;
                      if (!settings.showFeet && !settings.showMetric) {
                        settings.showFeet = true;
                      }
                      update(settings);
                    }}
                  />
                }
                label="Visa meter"
              />
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
      <CardHeader title="Danger Zone" />
      <Card className={classes.card}>
        <CardContent>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() =>
              confirm({
                title: "Är du RIKTIGT säker?",
                description: "All speldata kommer raderas!",
              })
                .then(() => {
                  storage.resetAll();
                  history.push("/");
                })
                .catch(() => {})
            }
          >
            Nollställ all data
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
