/** @param {import('@11ty/eleventy/src/UserConfig')} config */
module.exports = config => {
  config.addWatchTarget("src/assets/");
  config.addPassthroughCopy("src/assets/");

  config.addWatchTarget("src/scss/**/*.scss");
  config.addWatchTarget("src/js/**/*.js");

  return {
    dir: {
      input: "src",
    },
  };
};
