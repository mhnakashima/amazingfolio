export interface AppConfig {
  mode: {
    webComponent: {
      enabled: boolean;
      detection: {
        type: 'port' | 'hostname' | 'custom';
        value: string | number | (() => boolean);
      };
    };
    standalone: {
      enabled: boolean;
      port: number;
    };
  };
  features: {
    [key: string]: boolean;
  };
}

// Default configuration
const defaultConfig: AppConfig = {
  mode: {
    webComponent: {
      enabled: true,
      detection: {
        type: 'port',
        value: 3010
      }
    },
    standalone: {
      enabled: true,
      port: 4200
    }
  },
  features: {
    // Add feature flags here
  }
};

// Load environment-specific configuration
const loadEnvConfig = (): Partial<AppConfig> => {
  try {
    // This will be replaced with actual environment loading logic
    const envConfig = (window as any).__APP_CONFIG__ || {};
    return envConfig;
  } catch (error) {
    console.warn('Failed to load environment config:', error);
    return {};
  }
};

// Merge configurations
export const config: AppConfig = {
  ...defaultConfig,
  ...loadEnvConfig()
};

// Helper functions
export const isWebComponentMode = (): boolean => {
  const { type, value } = config.mode.webComponent.detection;
  
  switch (type) {
    case 'port':
      return window.location.port === String(value);
    case 'hostname':
      return window.location.hostname.includes(String(value));
    case 'custom':
      return typeof value === 'function' ? value() : Boolean(value);
    default:
      return false;
  }
}; 