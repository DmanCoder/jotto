const loggerUTL = (...msgs) => {
  if (process.env.NODE_ENV === 'development') console.log(...msgs);
};

export default loggerUTL;
