export const rotateLeft = (direction) => {
  switch (direction) {
    case "up":
      return "left";
    case "right":
      return "up";
    case "down":
      return "right";
    case "left":
      return "down";
    default:
      return direction;
  }
};

export const rotateRight = (direction) => {
  switch (direction) {
    case "up":
      return "right";
    case "right":
      return "down";
    case "down":
      return "left";
    case "left":
      return "up";
    default:
      return direction;
  }
};

export const moveForward = ({ row, column, direction }) => {
  switch (direction) {
    case "up":
      return {
        row: row - 1,
        column,
      };
    case "right":
      return {
        row,
        column: column + 1,
      };
    case "down":
      return {
        row: row + 1,
        column,
      };
    case "left":
      return {
        row,
        column: column - 1,
      };
    default:
      return {
        row,
        column,
      };
  }
};
