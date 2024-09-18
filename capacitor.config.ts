import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    "url": "http://localhost:8100",
    "cleartext": true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    SplashScreen: {
      "launchShowDuration": 3025,
      "launchAutoHide": true,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "splash",
      "androidScaleType": "CENTER_CROP",
      "showSpinner": false,
      "splashFullScreen": false,
      "splashImmersive": true
    }
  },
  appId: 'io.ionic.starter',
  appName: 'family-recipes',
  webDir: 'www'
};

export default config;