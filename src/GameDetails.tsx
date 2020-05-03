import React, { useState } from "react";
import Storage from "./api";
import clsx from "clsx";
import { useParams, useHistory } from "react-router-dom";
import PageTitle from "./PageTitle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Engine from "./engine";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import { positionLabel } from "./helpers";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Label,
} from "recharts";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import { Color, Button } from "@material-ui/core";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import ScrollToTop from "./ScrollToTop";
import CardHeader from "./CardHeader";
import DeleteIcon from "@material-ui/icons/Delete";
import { useConfirm } from "material-ui-confirm";

interface GameDetailsProps {}

const gridCellSize = 30;
const useStyles = makeStyles((theme) => ({
  scoreCard: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridRow: {
    height: gridCellSize,
  },
  gridIcon: {
    fontSize: gridCellSize,
  },
  gridIconSuccess: {
    color: theme.palette.success.main,
  },
  gridIconFail: {
    color: theme.palette.error.main,
  },
  gridLabel: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    flexGrow: 2,
  },
  cardHeader: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  venueChip: {
    margin: theme.spacing(1),
  },
}));

const storage = new Storage();

export default function GameDetails(props: GameDetailsProps) {
  const { id } = useParams();
  const theme = useTheme();
  const [game] = useState(storage.getGame(id));
  const confirm = useConfirm();
  const history = useHistory();
  const engine = new Engine(game);
  const classes = useStyles();

  const matrix: boolean[][] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
      if (!matrix[j]) {
        matrix[j] = [];
      }
      matrix[j] = [...matrix[j], ...game.result[i][j]];
    }
  }
  const positionPercentages: {
    name: string;
    value: number;
    fill: string;
  }[] = engine.positionPercent().map((stat, idx: number) => ({
    name: `${positionLabel(engine.venue.layout[idx])} → ${stat}%`,
    value: Number(stat),
    fill: theme.palette.grey[(idx * 100 + 400) as keyof Color] as string,
  }));
  const bonusPercent = engine.bonusPositionPercent();
  const radarData = engine.venue.layout.map((position, idx) => ({
    position: positionLabel(position),
    a: game.result[0][idx].filter((attempt) => attempt).length,
    b: game.result[1][idx].filter((attempt) => attempt).length,
    c: game.result[2][idx].filter((attempt) => attempt).length,
    fullMark: 2,
  }));
  const roundPercents = engine.roundPercent();

  return (
    <Box flexGrow={1}>
      <ScrollToTop />
      <PageTitle
        title={`${engine.scoreGame()}`}
        subtitle={new Date(game.startTime).toLocaleString()}
      />
      <Chip
        component={Link}
        to={`/venues/${engine.venue.id}`}
        variant="outlined"
        label={engine.venue.name}
        icon={<GolfCourseIcon />}
        color="primary"
        clickable={true}
        className={classes.venueChip}
      />
      <Card classes={{ root: classes.scoreCard }}>
        <CardContent>
          {matrix.map((row, i) => (
            <Box
              key={`row-${i}`}
              className={classes.gridRow}
              display="flex"
              justifyContent="center"
            >
              <Box alignSelf="center" className={classes.gridLabel}>
                {positionLabel(engine.venue.layout[i])}
              </Box>
              {row.map((col, j) => {
                return col ? (
                  <CheckCircleOutlineIcon
                    key={`attempt-${row}-${j}`}
                    className={clsx(classes.gridIcon, classes.gridIconSuccess)}
                  />
                ) : (
                  <RadioButtonUncheckedIcon
                    key={`attempt-${row}-${j}`}
                    className={clsx(classes.gridIcon, classes.gridIconFail)}
                  />
                );
              })}
            </Box>
          ))}
        </CardContent>
      </Card>
      <Card classes={{ root: classes.scoreCard }}>
        <Box display="flex">
          <PercentPanel
            value={Number(engine.successPercent())}
            title="Totalt"
          />
          <PercentPanel value={Number(bonusPercent.first)} title="Första" />
          <PercentPanel value={Number(bonusPercent.last)} title="Sista" />
        </Box>
      </Card>
      <CardHeader title="Träffar per distans" />
      <Card classes={{ root: classes.scoreCard }}>
        <ResponsiveContainer width="100%" height={180}>
          <RadialBarChart
            innerRadius="20%"
            outerRadius="80%"
            data={positionPercentages}
            startAngle={90}
            endAngle={-270}
            cx="25%"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <PolarAngleAxis
              type="number"
              // @ts-ignore
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              label={false}
              background
              dataKey="value"
              legendType="square"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </Card>
      <CardHeader title="Träffar per omgång" />
      <Card classes={{ root: classes.scoreCard }}>
        <Box display="flex">
          {roundPercents.map((value, idx) => (
            <PercentPanel
              value={value}
              title={String(idx + 1)}
              key={`hits-per-round-${idx}`}
            />
          ))}
        </Box>
        <Divider variant="middle" className={classes.divider} />
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="position"
              tick={{ fill: theme.palette.text.primary }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 2]} />
            <Radar
              name="1"
              dataKey="a"
              stroke={red[400]}
              fill={red[400]}
              fillOpacity={0.2}
            />
            <Radar
              name="2"
              dataKey="b"
              stroke={green[400]}
              fill={green[400]}
              fillOpacity={0.2}
            />
            <Radar
              name="3"
              dataKey="c"
              stroke={blue[400]}
              fill={blue[400]}
              fillOpacity={0.2}
            />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: theme.spacing(2) }} />
          </RadarChart>
        </ResponsiveContainer>
      </Card>
      <CardHeader title="Farozonen" />
      <Card classes={{ root: classes.scoreCard }}>
        <CardContent>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() =>
              confirm({
                title: "Är du säker?",
                description: "Spelet kommer slängas för all evighet!",
              })
                .then(() => {
                  storage.deleteGame(game.id);
                  history.push("/");
                })
                .catch(() => {})
            }
          >
            Släng
          </Button>
        </CardContent>
      </Card>

      <Box style={{ height: 100 }}></Box>
    </Box>
  );
}

const PercentPanel = ({ title, value }: { title: string; value: number }) => {
  const theme = useTheme();
  return (
    <Box
      flexGrow={1}
      flexShrink={0}
      flexBasis={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="button">{title}</Typography>
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={[
              { name: "score", value: value, fill: theme.palette.grey[500] },
              {
                name: "max",
                value: 100 - value,
                fill: theme.palette.grey[200],
              },
            ]}
            cx="50%"
            cy="50%"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius="60%"
            outerRadius="80%"
            stroke="none"
          >
            <Label
              value={`${value}%`}
              position="center"
              fill={theme.palette.text.primary}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
// Score
// Bana
// Layout
// % hits

// Avstånd: ()
