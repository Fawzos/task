const StudentsService = require("../services/students.service");

/**
 *
 * @param {Object} req
 * @param {Object} res
 */

exports.create = (req, res) => {
  const body = req.body;
  const result = StudentsService.calculateStudySessions({
    startingDate: body.startingDate,
    weekdays: body.weekdays,
    sessions: body.sessions,
  });
  res.json(result);
};
