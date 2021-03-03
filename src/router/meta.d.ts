export interface Meta {
  /** 是否在侧边栏显示 */
  aside: boolean;
  /** 当子项只有一个时是否显示子项和父的嵌套关系 */
  alwaysShow: boolean;
  /** 在侧边栏和标签页显示的名字或前缀 */
  title: string;
  /** 是否缓存  */
  cache: boolean;
  /** 固定至标签页 */
  affix: boolean;
  /** 对应权限 */
  auth: string;
}
