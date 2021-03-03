import { genTabViews } from "./genTabViews";
import { onLaunch } from "./onLaunch";
export function createGuard(router) {
  genTabViews(router);
  onLaunch(router);
}
