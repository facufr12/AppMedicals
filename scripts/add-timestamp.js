// Script para agregar timestamp al build
const fs = require('fs');
const path = require('path');

// Función para agregar timestamp al index.html después del build
const addTimestamp = () => {
  const buildPath = path.join(__dirname, '..', 'build', 'index.html');
  
  if (fs.existsSync(buildPath)) {
    let content = fs.readFileSync(buildPath, 'utf8');
    const timestamp = new Date().getTime();
    
    // Reemplazar el placeholder con el timestamp real
    content = content.replace(
      '<%= new Date().getTime() %>',
      timestamp.toString()
    );
    
    // Agregar timestamp a TODOS los assets (CSS, JS, imágenes, etc.)
    content = content.replace(
      /href="([^"]*\.(css|ico|png|jpg|jpeg|gif|svg|webp))"/g,
      `href="$1?v=${timestamp}"`
    );
    
    content = content.replace(
      /src="([^"]*\.(js|css|png|jpg|jpeg|gif|svg|webp))"/g,
      `src="$1?v=${timestamp}"`
    );
    
    // Agregar timestamp a manifest.json y otros archivos
    content = content.replace(
      /href="([^"]*\.json)"/g,
      `href="$1?v=${timestamp}"`
    );
    
    // Agregar script adicional para forzar recarga
    const forceReloadScript = `
    <script>
      // Verificar si la aplicación está cargada correctamente
      window.addEventListener('load', function() {
        setTimeout(function() {
          if (!document.querySelector('#root').innerHTML.trim()) {
            console.log('Aplicación no cargada correctamente, forzando recarga...');
            window.location.reload(true);
          }
        }, 3000);
      });
      
      // Detectar si la página se cargó desde cache
      window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
          console.log('Página cargada desde cache, forzando recarga...');
          window.location.reload(true);
        }
      });
    </script>`;
    
    // Insertar el script antes del cierre del body
    content = content.replace('</body>', forceReloadScript + '</body>');
    
    fs.writeFileSync(buildPath, content);
    console.log(`✅ Timestamp agregado: ${timestamp}`);
    console.log('✅ Script anti-cache agregado');
  }
};

// Ejecutar si es llamado directamente
if (require.main === module) {
  addTimestamp();
}

module.exports = addTimestamp;
