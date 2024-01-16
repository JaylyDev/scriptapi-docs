import * as mcui from "@minecraft/server-ui";

declare global {
  class ModalFormData extends mcui.ModalFormData {}
  class MessageFormData extends mcui.MessageFormData {}
  class ActionFormData extends mcui.ActionFormData {}
}