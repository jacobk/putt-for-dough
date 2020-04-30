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
                      setSettings(storage.updateSettings(settings));
                    }}
                  />
                }
                label="Dark mode"
              />
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
