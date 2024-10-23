import React, { useEffect } from 'react';
import { Toast, ToastContainer, Image } from 'react-bootstrap';
import Logo from "../../../assets/images/logo-cober.svg";
const CustomToast = ({ show, onClose, message, title, duration = 3000 }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={show} onClose={onClose}>
                <Toast.Header>
                <Image 
                        src={Logo}  // Usa la imagen importada
                        className="rounded me-2" 
                        alt="Logo" 
                        width={40}  // Ajusta el tamaño según sea necesario
                        height={40} // Ajusta el tamaño según sea necesario
                    />
                    <strong className="me-auto">{title}</strong>
                    <small>Justo Ahora</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default CustomToast;
