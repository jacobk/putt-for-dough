import React from "react";
import { useTheme, Box, Typography } from "@material-ui/core";
import { ResponsiveContainer, PieChart, Pie, Label } from "recharts";

export default ({ title, value }: { title: string; value: number }) => {
  const theme = useTheme();
  const roundedValue = Math.round(value);
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
              {
                name: "score",
                value: roundedValue,
                fill: theme.palette.grey[500],
              },
              {
                name: "max",
                value: 100 - roundedValue,
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
              value={`${roundedValue}%`}
              position="center"
              fill={theme.palette.text.primary}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
