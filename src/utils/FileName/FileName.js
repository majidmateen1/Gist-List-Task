// Funtion to get file url from file name
export const FileName = (files) => {
  let newUrl;
  Object.keys(files).forEach((fileName) => {
    const file = files[fileName];
    const rawUrl = file.raw_url;
    newUrl = rawUrl;
  });
  return newUrl;
};
