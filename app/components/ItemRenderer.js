import PropTypes from "prop-types";

export default function ItemRenderer({ coordinates, item, children }) {
  if (coordinates.row !== item.row || coordinates.column !== item.column) {
    return null;
  }

  return children;
}

ItemRenderer.propTypes = {
  coordinates: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
