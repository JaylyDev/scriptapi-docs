import { Player } from "@minecraft/server";
import { uiManager } from "@minecraft/server-ui";

/**
 * which closes all modal/message/action forms from a player 
 * @param player Player to close the form to
 */
function closeForm(player: Player) {
  uiManager.closeAllForms(player);
}