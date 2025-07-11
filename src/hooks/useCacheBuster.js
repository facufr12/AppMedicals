// hooks/useCacheBuster.js
import { useEffect } from 'react';

const useCacheBuster = () => {
  useEffect(() => {
    // Generar timestamp único para esta sesión
    const timestamp = Date.now();
    
    // Función para agregar parámetro de cache busting a las URLs
    const addCacheBusting = () => {
      // Obtener la URL actual
      const url = new URL(window.location.href);
      
      // Agregar o actualizar el parámetro de versión
      url.searchParams.set('v', timestamp.toString());
      
      // Actualizar la URL sin recargar
      window.history.replaceState({}, '', url.toString());
    };

    // Función para limpiar todos los caches
    const clearAllCaches = async () => {
      if ('caches' in window) {
        try {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
          console.log('All caches cleared');
        } catch (error) {
          console.log('Error clearing caches:', error);
        }
      }
    };

    // Función para forzar recarga de assets
    const forceAssetReload = () => {
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      const scripts = document.querySelectorAll('script[src]');
      
      // Actualizar CSS
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('blob:') && !href.includes('data:')) {
          const url = new URL(href, window.location.origin);
          url.searchParams.set('v', timestamp.toString());
          link.setAttribute('href', url.toString());
        }
      });

      // Actualizar JS
      scripts.forEach(script => {
        const src = script.getAttribute('src');
        if (src && !src.includes('blob:') && !src.includes('data:')) {
          const url = new URL(src, window.location.origin);
          url.searchParams.set('v', timestamp.toString());
          script.setAttribute('src', url.toString());
        }
      });
    };

    // Ejecutar funciones de cache busting
    addCacheBusting();
    clearAllCaches();
    forceAssetReload();

    // Agregar event listener para cuando la página se carga desde cache
    const handlePageShow = (event) => {
      if (event.persisted) {
        // La página fue cargada desde cache, forzar recarga
        window.location.reload();
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  // Función para forzar recarga manual
  const forceReload = () => {
    window.location.reload(true);
  };

  return { forceReload };
};

export default useCacheBuster;
