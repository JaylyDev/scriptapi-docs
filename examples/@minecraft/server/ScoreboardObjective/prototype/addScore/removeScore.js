const money = world.scoreboard.getObjective("money");
const currentScore = money.addScore(player, -100);
player.sendMessage(`Your current score is ${currentScore}`);