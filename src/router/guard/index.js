import { genTabViews } from "./genTabViews";
import { onLaunch } from "./onLaunch";
import { clear } from "./clear";
export function createGuard(router) {
  genTabViews(router);
  onLaunch(router);
  clear(router);
}
