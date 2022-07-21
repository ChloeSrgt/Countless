const models = require("../models");

class MatchController {
  static create = (req, res) => {
    models.match
      .insert({ game: req.body.game })
      .then(([rows]) => {
        // res.send(rows);
        return Promise.all(
          models.player.insertMany(req.body.players, rows.insertId)
        );
      })
      .then(() => {
        // console.log(JSON.stringify({ data }));
        res.send({ ok: 1 });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = MatchController;
