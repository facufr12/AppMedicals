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
    
    // Agregar timestamp a los assets
    content = content.replace(
      /href="(\/static\/[^"]*\.css)"/g,
      `href="$1?v=${timestamp}"`
    );
    
    content = content.replace(
      /src="(\/static\/[^"]*\.js)"/g,
      `src="$1?v=${timestamp}"`
    );
    
    fs.writeFileSync(buildPath, content);
    console.log(`✅ Timestamp agregado: ${timestamp}`);
  }
};

// Ejecutar si es llamado directamente
if (require.main === module) {
  addTimestamp();
}

module.exports = addTimestamp;
