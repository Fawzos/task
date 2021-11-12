const initializeChapters = require("../utils/generate-chapter-name");

module.exports = {
  calculateStudySessions: ({ startingDate, weekdays, sessions }) => {
    let chapters = initializeChapters();
    startingDate = new Date(startingDate);

    console.log("starting date :: ", startingDate);

    //
    function addDays(date, days) {
      const day = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days
      );
      return day;
    }
    const WEEK_DAYS = 7;
    let lastDayUntilNow;
    let nextSession;
    let lastIndex = 0;

    for (let chapter in chapters) {
      if (chapter === "chapter1") {
        nextSession = new Date(startingDate);
      }
      let remainingSessions = sessions;
      if (weekdays.length === 1) {
        // weekdays = [2]
        while (remainingSessions) {
          chapters[chapter].push(nextSession);
          let daysToAdd = WEEK_DAYS;
          lastDayUntilNow = new Date(nextSession);
          nextSession = addDays(nextSession, daysToAdd);
          remainingSessions--;
        }
      } else {
        // weekdays = [2, 4, 6]
        while (remainingSessions) {
          for (let i = lastIndex; i < weekdays.length; i++) {
            if (remainingSessions) {
              let daysToAdd;

              // Add next session
              chapters[chapter].push(nextSession);

              // nextWeekday - currentWeekday
              if (i < weekdays.length - 1) {
                daysToAdd = weekdays[i + 1] - weekdays[i];
                lastIndex = i + 1;
              } else {
                // WEEK_DAYS - lastWeekday + firstWeekday
                daysToAdd =
                  WEEK_DAYS - weekdays[weekdays.length - 1] + weekdays[0];
                lastIndex = 0;
              }

              lastDayUntilNow = nextSession;
              // lastDayUntilNow = new Date(nextSession);
              nextSession = addDays(nextSession, daysToAdd);
              remainingSessions--;
            }
          }
        }
      }
    }

    return { chapters };
  },
};
