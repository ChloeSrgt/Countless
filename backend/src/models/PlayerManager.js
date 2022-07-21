const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player, matchId) {
    return this.connection.query(
      `insert into \`${PlayerManager.table}\`(score, nickname, match_id) values (0,?,?)`,
      [player, matchId]
    );
  }

  insertMany(players, matchId) {
    return players.map((player) => {
      return this.insert(player, matchId);
    });
  }
}
module.exports = PlayerManager;
