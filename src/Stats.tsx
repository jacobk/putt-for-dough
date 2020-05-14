import React, { useState } from "react";
import PageTitle from "./PageTitle";
import Engine from "./engine";
import Storage from "./api";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  makeStyles,
  useTheme,
  Box,
  Typography,
  Chip,
  Color,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { venues, findVenue } from "./Venues";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  YAxis,
  Legend,
  Line,
  ReferenceLine,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import PercentPanel from "./PercentPanel";
import ScrollToTop from "./ScrollToTop";
import CardHeader from "./CardHeader";
import pink from "@material-ui/core/colors/pink";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/green";
import deepOrange from "@material-ui/core/colors/deepOrange";
import clsx from "clsx";
import { positionLabel } from "./helpers";

type Props = {};

const storage = new Storage();

const useStyles = makeStyles((theme) => ({
  rangeSelectorGroup: {
    width: "100%",
  },
  rangeSelectorButton: {
    flexGrow: 1,
  },
  card: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  venueSelector: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  chartCard: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

type Periods = "all" | "year" | "20" | "5";

export default (props: Props) => {
  const theme = useTheme();
  const initPeriod: Periods = "all";
  const [period, setPeriod] = useState<Periods>(initPeriod);
  const [selectedVenue, setSelectedVenue] = useState(venues[0].id);
  const classes = useStyles();

  const handlePeriodChange = (evt: any, newPeriod: Periods | null) => {
    if (newPeriod !== null) {
      setPeriod(newPeriod);
    }
  };

  const venue = findVenue(selectedVenue);

  const handleVenueChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    o: any
  ) => {
    setSelectedVenue(event.target.value as string);
  };

  const {
    countGames,
    top5,
    scoreAvg,
    scoreSeries,
    totalPctByDistance,
    accPctByDistanceSeries,
    totalPct,
    totalPctFirstPutts,
    totalPctLastPutts,
  } = buildStats(period, selectedVenue);

  const positionPercentages: {
    name: string;
    value: number;
    fill: string;
  }[] = totalPctByDistance.map((stat, idx: number) => ({
    name: `${positionLabel(venue.layout[idx])} → ${stat.toFixed(0)}%`,
    value: Number(stat),
    fill: theme.palette.grey[(idx * 100 + 400) as keyof Color] as string,
  }));

  return (
    <Box flexGrow={1}>
      <ScrollToTop />
      <PageTitle title="Statistik" />
      <Card className={classes.card}>
        <CardContent>
          <ToggleButtonGroup
            exclusive
            value={period}
            onChange={handlePeriodChange}
            className={classes.rangeSelectorGroup}
          >
            <ToggleButton className={classes.rangeSelectorButton} value="all">
              Allt
            </ToggleButton>
            <ToggleButton className={classes.rangeSelectorButton} value="year">
              {new Date().getFullYear()}
            </ToggleButton>
            <ToggleButton className={classes.rangeSelectorButton} value="20">
              Sista 20
            </ToggleButton>
            <ToggleButton className={classes.rangeSelectorButton} value="5">
              Sista 5
            </ToggleButton>
          </ToggleButtonGroup>
          <FormControl className={classes.venueSelector}>
            <InputLabel>Välj bana</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedVenue}
              onChange={handleVenueChange}
            >
              {venues.map((venue, idx) => (
                <MenuItem value={venue.id} key={`select-venue-${venue.id}`}>
                  {venue.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">Visar data för {countGames} spel</Typography>
      </Box>

      <CardHeader title="Top 5" />
      <Box
        display="flex"
        justifyContent="space-between"
        className={classes.card}
      >
        {top5.map((score) => (
          <Chip
            color="primary"
            variant="outlined"
            clickable
            key={`top-score-${score.id}`}
            component={Link}
            to={`/games/${score.id}`}
            label={score.score}
          />
        ))}
      </Box>
      <CardHeader title="Poäng - utveckling" />
      <Card className={clsx(classes.card, classes.chartCard)}>
        <ResponsiveContainer height={200} width="100%">
          <LineChart data={scoreSeries}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme.palette.text.hint}
            />
            {/* <XAxis tick={false} /> */}
            <YAxis
              mirror={true}
              axisLine={false}
              tickLine={false}
              stroke={theme.palette.text.hint}
            />
            <ReferenceLine y={scoreAvg} stroke="red" strokeDasharray="3 3" />
            <Line
              isAnimationActive={false}
              dot={false}
              type="step"
              dataKey="value"
              stroke={theme.palette.getContrastText(
                theme.palette.background.paper
              )}
              //   strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <CardHeader title="Träffsäkerhet - utveckling" />
      <Card className={clsx(classes.card, classes.chartCard)}>
        <ResponsiveContainer height={200} width="100%">
          <LineChart data={accPctByDistanceSeries}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={theme.palette.text.hint}
            />
            {/* <XAxis dataKey="name" /> */}
            <YAxis
              mirror={true}
              axisLine={false}
              tickLine={false}
              stroke={theme.palette.text.hint}
            />

            <Legend
              iconType="plainline"
              formatter={(value, entry, index) => {
                return positionLabel(venue.layout[Number(value)]);
              }}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="0"
              stroke={lime[500]}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="1"
              stroke={lightGreen[500]}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="2"
              stroke={pink[500]}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="3"
              stroke={lightBlue[500]}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="4"
              stroke={deepOrange[500]}
            />
            <Line
              isAnimationActive={false}
              dot={false}
              type="monotone"
              dataKey="5"
              stroke={blue[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <CardHeader title="Träffsäkerhet" />
      <Card className={classes.card}>
        <Box display="flex">
          <PercentPanel title="Totalt" value={totalPct} />
          <PercentPanel title="Första" value={totalPctFirstPutts} />
          <PercentPanel title="Sista" value={totalPctLastPutts} />
        </Box>
      </Card>
      <CardHeader title="Träffar per distans" />
      <Card classes={{ root: classes.card }}>
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
      <Box style={{ height: 100 }}></Box>
    </Box>
  );
};

const selectGames = (period: Periods, venueId: string): Engine[] => {
  let games = storage
    .listGames()
    .filter((game) => game.venueId === venueId && game.endTime !== undefined);
  if (period === "year") {
    games = games.filter(
      (game) =>
        new Date(game.startTime).getFullYear() === new Date().getFullYear()
    );
  } else if (["20", "5"].some((p) => p === period)) {
    games = games.slice(0, Number(period));
  }
  return games.map((game) => new Engine(game)).reverse();
};

const buildStats = (period: Periods, venueId: string) => {
  const games = selectGames(period, venueId);
  const top5 = Array.from(games)
    .sort((a, b) => b.scoreGame() - a.scoreGame())
    .slice(0, 5)
    .map((e) => ({
      id: e.game.id,
      score: e.scoreGame(),
      startDate: e.game.startTime,
    }));

  const scoreSeries = games.map((e) => ({
    name: e.game.id,
    date: new Date(e.game.startTime),
    value: e.scoreGame(),
  }));

  const scoreAvg =
    scoreSeries.reduce((acc, { value }) => acc + value, 0) / games.length;

  const totalPct =
    (games.reduce((acc, e) => acc + e.succcessCount(), 0) /
      (games.length * 6 * 6)) *
    100;

  const totalPctByDistance = games
    .reduce(
      (acc, e) => {
        const counts = e.positionCount();
        return acc.map((ap, idx) => ap + counts[idx]);
      },
      [0, 0, 0, 0, 0, 0]
    )
    .map((count) => (count / (6 * games.length)) * 100);

  const pctByDistanceSeries = games.map((e) => {
    const pcts = e.positionPercent().map(Number);
    return {
      game: e.game,
      position1: pcts[0],
      position2: pcts[1],
      position3: pcts[2],
      position4: pcts[3],
      position5: pcts[4],
      position6: pcts[5],
    };
  });

  const countByDistanceSeries = games.map((e) => e.positionCount().map(Number));
  for (let i = 1; i < countByDistanceSeries.length; i++) {
    countByDistanceSeries[i] = countByDistanceSeries[i].map(
      (p, jdx) => p + countByDistanceSeries[i - 1][jdx]
    );
  }
  const accPctByDistanceSeries = countByDistanceSeries
    .map((gameCounts, idx) =>
      gameCounts.map((count) => (count / (6 * (idx + 1))) * 100)
    )
    .map((pcts) => {
      return {
        0: pcts[0],
        1: pcts[1],
        2: pcts[2],
        3: pcts[3],
        4: pcts[4],
        5: pcts[5],
      };
    });

  const bonusPuttsCounts = games.reduce(
    (acc, e) => {
      const { firstPositionCount, lastPositionCount } = e.bonusPositionCount();
      return {
        first: acc.first + firstPositionCount,
        last: acc.last + lastPositionCount,
      };
    },
    { first: 0, last: 0 }
  );

  const totalPctFirstPutts =
    (bonusPuttsCounts.first / (6 * games.length)) * 100;
  const totalPctLastPutts = (bonusPuttsCounts.last / (6 * games.length)) * 100;

  return {
    countGames: games.length,
    top5,
    scoreAvg,
    scoreSeries,
    totalPct,
    totalPctByDistance,
    pctByDistanceSeries,
    accPctByDistanceSeries,
    totalPctFirstPutts,
    totalPctLastPutts,
  };
};
