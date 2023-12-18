export default function getRandomInArray<T>(
  array: T[],
  ...otherArrays: T[][]
): T {
  const randomArrayIndex = Math.floor(Math.random() * array.length);
  const randomArrayItem = array[randomArrayIndex];

  if (otherArrays.length === 0) {
    return randomArrayItem;
  }

  const allArrays = [
    randomArrayItem,
    ...otherArrays.map((array) => getRandomInArray(array)),
  ];

  return getRandomInArray(allArrays);
}
