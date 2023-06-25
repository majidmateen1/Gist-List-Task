import React from "react";

export const CountFiles = (files) => {
  const fileCount = Object.keys(files).length;
  return fileCount;
};
