function GameConsole(systemName) {
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
  this.game = {
    title : '',
  };
  return `${this.systemName} plays ${game.title}`;
}

module.exports = GameConsole;