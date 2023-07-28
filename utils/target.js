const random = (num) => Math.floor(Math.random() * num + 1);

const getRandomLocation = ({ rows, columns }) => ({
  row: random(rows - 1),
  column: random(columns - 1),
});

export const getSpawnLocation = ({ bounds: { rows, columns }, exclude }) => {
  let result = getRandomLocation({ rows, columns });

  if (!!exclude) {
    while (result.row === exclude.row && result.column === exclude.column) {
      result = getRandomLocation({ rows, columns });
    }
  }

  return result;
};
