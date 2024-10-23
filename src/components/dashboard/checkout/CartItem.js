// import node module libraries
import { Fragment } from 'react';
import { Image } from 'react-bootstrap';

// import required helper file
import { convertToCurrency } from 'helper/utils';

// import data files
const CartItem = ({ product, index, totalItems }) => {
  const { id } = product;

  const productInfo = ProductsData.filter((item) => item.id === id);
  const hasProductInfo = productInfo.length > 0; // Verificación

  return (
    <Fragment>
      <div className="d-md-flex">
        <div>
          {hasProductInfo ? (
            <Image src={productInfo[0].images[0].image} alt="" className="img-4by3-xl rounded" />
          ) : (
            <div>Producto no encontrado</div>
          )}
        </div>
        <div className="ms-md-4 mt-2">
          {hasProductInfo ? (
            <>
              <h4 className="mb-1 text-primary-hover">{productInfo[0].name}</h4>
              <h5>{convertToCurrency(product.price)}</h5>
              <span>Qty: {product.quantity}</span>
            </>
          ) : (
            <h4>Información del producto no disponible</h4>
          )}
        </div>
      </div>
      {index === totalItems - 1 ? '' : <hr className="my-3" />}
    </Fragment>
  );
};

export default CartItem;
