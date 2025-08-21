import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spycor.airflowcalculator',
  appName: 'Spycor Air Flow Calculator',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;
