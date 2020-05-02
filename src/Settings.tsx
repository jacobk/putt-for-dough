import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PageTitle from "./PageTitle";
import Storage from "./api";
import { makeStyles } from "@material-ui/core/styles";
import { Settings as TSettings } from "./types";

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
  const classes = useStyles();

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
    </React.Fragment>
  );
}
