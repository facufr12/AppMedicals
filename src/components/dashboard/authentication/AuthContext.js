import React, { createContext, useContext, useState, useEffect } from 'react';
import CustomToast from './Toast'; // Asegúrate de que la ruta sea correcta

const AuthContext = createContext();
const ToastContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        // Cargar datos de localStorage al iniciar
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });
    const [toastData, setToastData] = useState({
        show: false,
        message: '',
        title: '',
    });

    // Efecto para guardar userData en localStorage cada vez que cambia
    useEffect(() => {
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData'); // Limpia el localStorage al cerrar sesión
        }
    }, [userData]);

    const logout = () => {
        setUserData(null);  // Limpia el estado de usuario
        localStorage.removeItem('token');  // Limpia el token de localStorage
        showToast('Sesión cerrada', 'Has cerrado sesión correctamente.');

        // Logout de Google API (si estás usando gapi)
        if (window.gapi) {
            gapi.auth2.getAuthInstance().signOut().then(() => {
                console.log('Deslogueado de Google');
            });
        }

        // Redirigir a login usando window.location.href
        window.location.href = '/';  // Redirige a la página de login
    };

    const showToast = (title, message) => {
        setToastData({ show: true, title, message });
        setTimeout(() => {
            setToastData({ ...toastData, show: false });
        }, 3000); // Desaparece después de 3 segundos
    };

    return (
        <AuthContext.Provider value={{ userData, setUserData, logout }}>
            <CustomToast
                show={toastData.show}
                onClose={() => setToastData({ ...toastData, show: false })}
                message={toastData.message}
                title={toastData.title}
            />
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
