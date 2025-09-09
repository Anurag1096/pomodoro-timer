import React from "react";

type HoursProps = {
  Hours: number;
};
const HOURS = ({ Hours }: HoursProps) => {
  return <div>{`${Hours ? Hours.toString().padStart(2, "0")+":" : ""}`}</div>;
};

export default HOURS;
