const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

function loadConfig(environment) {
  try {
    const configPath = path.resolve(__dirname, '../config/config.yaml');
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configContent);

    // Get the configuration for the specified environment
    const envConfig = config[environment] || config.default;

    // Create the configuration injection script
    const configScript = `
      window.__APP_CONFIG__ = ${JSON.stringify(envConfig, null, 2)};
    `;

    // Write to a temporary file that will be included in the build
    const outputPath = path.resolve(__dirname, '../src/assets/config.js');
    fs.writeFileSync(outputPath, configScript);

    console.log(`Configuration loaded for environment: ${environment}`);
  } catch (error) {
    console.error('Error loading configuration:', error);
    process.exit(1);
  }
}

// Get environment from command line argument or default to development
const environment = process.argv[2] || 'development';
loadConfig(environment); 