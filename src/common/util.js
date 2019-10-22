export function sortMainList(theList) {
  const result = theList.sort((pos1, pos2) => {
    if (pos1.type > pos2.type) {
      return 1;
    } else if (pos1.type < pos2.type) {
      return -1;
    } else {
      return 0;
    }
  });
  return result;
}

export function requiredParameter(name) {
  throw new Error(`${name} is required`);
}
