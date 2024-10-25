import { useContext, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from 'context/Context';
import { convertToCurrency } from 'helper/utils';

const OrderSummary = () => {
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const cartContext = useContext(CartContext);

    // Asegúrate de que el contexto no sea undefined
    if (!cartContext) {
        return <div>Póliza Generada Acá.</div>;
    }

    const cartItems = cartContext.CartState?.cartItems || [];
    const cartSummary = cartContext.CartState?.cartSummary || {};

    useEffect(() => {
        const calculateSubtotal = (items) => {
            return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        };
        
        setCartSubTotal(calculateSubtotal(cartItems));
    }, [cartItems]);

    if (!cartItems.length) {
        return <div>No hay productos en el carrito.</div>;
    }

    return (
        <Card className="mt-4 mt-lg-0">
            <Card.Body>
                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <h4 className="mb-1">Order Summary</h4>
                    <Link to="/dashboard/ecommerce/shopping-cart">Edit Cart</Link>
                </div>
                {cartItems.map((product, index) => (
                    <CartItem key={index} product={product} index={index} totalItems={cartItems.length} />
                ))}
            </Card.Body>
            <Card.Body className="border-top pt-2">
                <ListGroup variant="flush">
                    <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
                        <span>Sub Total :</span>
                        <span className='text-dark fw-semibold'>
                            {convertToCurrency(cartSubTotal)}
                        </span>
                    </ListGroup.Item>
                    {cartSummary.coupon && (
                        <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
                            <span>Discount <span className="text-muted">({cartSummary.coupon})</span>: </span>
                            <span className='text-dark fw-semibold'>-{convertToCurrency(cartSummary.discount)}</span>
                        </ListGroup.Item>
                    )}
                    <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
                        <span>Shipping Charge :</span>
                        <span className='text-dark fw-semibold'>{convertToCurrency(cartSummary.shipping)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
                        <span>Tax Vat {cartSummary.tax.toFixed(2)}% (included) :</span>
                        <span className='text-dark fw-semibold'>{convertToCurrency(cartSummary.taxAmount)}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
                        <span className='fs-4 fw-semibold text-dark'>Grand Total :</span>
                        <span className='fw-semibold text-dark'>{convertToCurrency(calculateGrandTotal(cartItems))}</span>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default OrderSummary;
