import dayjs from "dayjs";

export function getNowDate(template = "YYYY-MM-DD HH:mm:ss") {
  return dayjs().format(template);
}
