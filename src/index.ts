import { downloadScriptModuleTypings } from "./fetchVersion";
import { channels, modules } from "./variables";
import { preview, stable } from "./typedoc";

(async () => {
  for (const channel of channels) {
    for (const scriptModule of modules) {
      await downloadScriptModuleTypings(channel, scriptModule);
    };
    
    switch (channel) {
      case 'stable':
        await stable();
        break;
    
      case 'preview':
        await preview();
        break;
    
      default:
        break;
    }
  }
})();