import Storage from "./api";

const storage = new Storage();

export const positionLabel = (positionValue: number) => {
  const result = [];
  if (storage.getSettings().showFeet) {
    result.push(`${positionValue}'`);
  }
  if (storage.getSettings().showMetric) {
    result.push(`${(positionValue / 3.281).toFixed(1)}m`);
  }
  return result.join("/");
};

export const feetToMeterLabel = (value: number): string =>
  `${(value / 3.281).toFixed(1)}`;
