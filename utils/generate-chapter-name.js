const initializeChapters = () => {
  let chapters = {};
  for (let i = 0; i < 30; i++) {
    chapters[`chapter${i + 1}`] = [];
  }
  return chapters;
};

module.exports = initializeChapters;
