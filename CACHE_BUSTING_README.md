# Configuración Anti-Cache para Vercel

## Implementación de Cache Busting

Este proyecto incluye varias estrategias para evitar problemas de cache en el despliegue de Vercel:

### 1. Configuración de Headers HTTP
- **vercel.json**: Configuración de headers de cache para Vercel
- **Meta tags**: Headers anti-cache en index.html

### 2. Componentes React
- **CacheBuster**: Componente que gestiona el cache busting
- **useCacheBuster**: Hook personalizado para manejo de cache

### 3. Variables de Entorno
- **REACT_APP_VERSION**: Versión de la aplicación
- **GENERATE_SOURCEMAP**: Deshabilitado para producción
- **REACT_APP_CACHE_BUST**: Habilita cache busting

### 4. Scripts de Build
- **build**: Build estándar con cache busting
- **build:nocache**: Build sin source maps
- **deploy**: Script de despliegue

## Comandos de Despliegue

### Para desarrollo local:
```bash
npm start
```

### Para build de producción:
```bash
npm run build
```

### Para build sin cache:
```bash
npm run build:nocache
```

### Para despliegue:
```bash
npm run deploy
```

## Configuración en Vercel

1. **Variables de Entorno en Vercel**:
   - REACT_APP_VERSION: 2.3.0
   - GENERATE_SOURCEMAP: false
   - REACT_APP_CACHE_BUST: true

2. **Configuración de Build**:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Headers HTTP**:
   - Se configuran automáticamente mediante `vercel.json`

## Funcionalidades Anti-Cache

### Automáticas:
- Limpieza de cache del navegador
- Parámetros de versión en URLs
- Headers HTTP anti-cache
- Detección de nuevas versiones

### Manuales:
- Función `forceReload()` disponible en el hook
- Notificación al usuario cuando hay nuevas versiones
- Limpieza manual de localStorage

## Verificación del Cache Busting

1. **Inspeccionar Network Tab**: Verificar que los recursos se cargan con parámetros `?v=timestamp`
2. **Verificar Headers**: Comprobar que los headers HTTP incluyen `Cache-Control: no-cache`
3. **Verificar Storage**: Revisar que `localStorage` contiene la versión actual
4. **Verificar URL**: La URL debe incluir parámetros de versión

## Solución de Problemas

### Si el cache persiste:
1. Verificar que `vercel.json` esté en la raíz del proyecto
2. Confirmar que las variables de entorno están configuradas
3. Revisar que el componente `CacheBuster` esté importado en `App.js`
4. Verificar que los meta tags estén en `index.html`

### Para forzar actualización:
1. Incrementar `REACT_APP_VERSION` en `.env`
2. Ejecutar `npm run build`
3. Redesplegar en Vercel

## Notas Importantes

- Los cambios en `vercel.json` requieren un nuevo despliegue
- Las variables de entorno deben configurarse tanto localmente como en Vercel
- El cache busting es automático pero puede requerir confirmación del usuario
- Los source maps están deshabilitados en producción para mejor rendimiento
