export interface Meta {
  /** 是否在侧边栏显示 */
  aside: boolean | false;
  /** 在侧边栏和标签页显示的名字或前缀 */
  title: string;
  /** 是否缓存  */
  cache: boolean;
  /** 固定至标签页 */
  affix: boolean;
  /** 对应权限 */
  auth: string;
}
