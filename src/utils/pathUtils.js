export const generatePath = (item, path = []) => {
    path.push(item.name);
    return path;
  };