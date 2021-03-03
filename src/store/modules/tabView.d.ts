interface TabViews {
  path: string;
  fullPath: string;
  title: string;
  name: string;
  query: {
    [key in string]: string;
  };
  params: {
    [key in string]: string;
  };
  cache: boolean;
}
