// CacheBuster.js
import { useEffect } from 'react';
import useCacheBuster from '../hooks/useCacheBuster';

const CacheBuster = () => {
  const { forceReload } = useCacheBuster();

  useEffect(() => {
    // Verificar si hay nuevas versiones disponibles
    const checkForUpdates = () => {
      const currentVersion = process.env.REACT_APP_VERSION || '1.0.0';
      const cachedVersion = localStorage.getItem('app_version');
      
      if (cachedVersion && cachedVersion !== currentVersion) {
        console.log('Nueva versión detectada, limpiando cache...');
        localStorage.setItem('app_version', currentVersion);
        
        // Mostrar notificación opcional al usuario
        if (window.confirm('Se ha detectado una nueva versión. ¿Deseas recargar la página?')) {
          forceReload();
        }
      } else {
        localStorage.setItem('app_version', currentVersion);
      }
    };

    // Verificar actualizaciones cuando el componente se monta
    checkForUpdates();

    // Agregar listener para visibilidad de la página
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkForUpdates();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [forceReload]);

  return null; // Este componente no renderiza nada
};

export default CacheBuster;
