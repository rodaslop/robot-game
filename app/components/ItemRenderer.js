import PropTypes from "prop-types";

export default function ItemRenderer({ square, item, children }) {
  if (square.row !== item.row || square.column !== item.column) {
    return null;
  }

  return children;
}

ItemRenderer.propTypes = {
  square: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
