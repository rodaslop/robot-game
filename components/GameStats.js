import PropTypes from "prop-types";

export default function GameStats({ time = 0, score = 0 }) {
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold">Score: {score}</div>
      <div className="font-semibold">Time: {time}</div>
    </div>
  );
}

GameStats.propTypes = {
  time: PropTypes.number,
  score: PropTypes.number,
};
