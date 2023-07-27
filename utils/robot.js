export const rotateLeft = (direction) => {
  switch (direction) {
    case up:
      return "left";
    case right:
      return "up";
    case down:
      return "right";
    case left:
      return "down";
    default:
      return direction;
  }
};

export const rotateRight = (direction) => {
  switch (direction) {
    case up:
      return "right";
    case right:
      return "down";
    case down:
      return "left";
    case left:
      return "up";
    default:
      return direction;
  }
};
