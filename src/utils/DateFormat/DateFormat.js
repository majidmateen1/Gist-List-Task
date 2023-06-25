import React from "react";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

export const DateFormat = (inputDate) => {
  const formattedDate = dayjs.utc(inputDate).format("MM/DD/YYYY");

  return formattedDate;
};
