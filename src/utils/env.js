const env = process.env;

/**
 * 环境变量
 */
export const ENV = env;
/**
 * 是否是开发环境
 */
export const isDev = () => env.NODE_ENV === "development";
/**
 * 是否是发布环境
 */
export const isProd = () => env.NODE_ENV === "development";
