import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spycor.airflowcalculator',
  appName: 'Spycor Air Flow Calculator',
  webDir: 'dist',
  server: {
    url: 'https://e13bc01c-5698-431f-bda3-398307c4ae65.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e40af',
      showSpinner: false
    }
  }
};

export default config;
