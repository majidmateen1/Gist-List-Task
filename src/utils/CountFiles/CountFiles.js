import React from "react";

// Function to count the number of files from object
export const CountFiles = (files) => {
  const fileCount = Object.keys(files).length;
  return fileCount;
};
