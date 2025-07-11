// config/cacheBusterConfig.js
const generateCacheBusterConfig = () => {
  const timestamp = Date.now();
  const version = process.env.REACT_APP_VERSION || '1.0.0';
  
  return {
    version: `${version}-${timestamp}`,
    timestamp,
    buildDate: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  };
};

export default generateCacheBusterConfig;
