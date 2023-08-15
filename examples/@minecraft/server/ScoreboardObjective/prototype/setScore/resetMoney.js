const money = world.scoreboard.getObjective("money");
money.setScore(player, 0);
player.sendMessage(`Your score has been reset.`);