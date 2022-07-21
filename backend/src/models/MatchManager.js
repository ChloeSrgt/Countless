const AbstractManager = require("./AbstractManager");

class MatchManager extends AbstractManager {
  static table = "match";

  insert(match) {
    return this.connection.query(
      `insert into \`${MatchManager.table}\`(round, game) values (0,?)`,
      [match.game]
    );
  }
}
module.exports = MatchManager;
