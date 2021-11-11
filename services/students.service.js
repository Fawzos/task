const initializeChapters = require("../utils/generate-chapter-name");

module.exports = {
  calculateStudySessions: ({ startingDate, studyWeekdays, sessions }) => {
    // TODO is to generate the response
    const chapters = initializeChapters();
    return { chapters };
  },
};
