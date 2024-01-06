import PropTypes from "prop-types";
import { CiHeart } from "react-icons/ci";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={`Product: ${product.title}`} />
      <h2>{product.title}</h2>
      <div className="sign-in">
        <p>
          <span>Sign in</span> or Create an account to see pricing
        </p>
        <CiHeart className="whishlist-icon" />
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductCard;
