const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(playerName, matchId) {
    return this.connection.query(
      `insert into \`${PlayerManager.table}\`(score, nickname, match_id) values (0,?,?)`,
      [playerName, matchId]
    );
  }

  insertMany(playerNames, matchId) {
    return playerNames.map((playerName) => {
      return this.insert(playerName, matchId);
    });
  }
}
module.exports = PlayerManager;
