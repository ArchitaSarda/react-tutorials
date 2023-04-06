import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = (props) => {
  const {image={}, name, price=3.99} = props;
  const {url=defaultImage} = image;
  console.log(props);
  return <article className='product'>
    <img src={url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: {
//     url: defaultImage
//   }
// }

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Product;
