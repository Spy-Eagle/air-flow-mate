import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.spycor.airflowcalculator',
  appName: 'Air Flow Mate',
  webDir: 'dist',
  server: {
    url: "https://e13bc01c-5698-431f-bda3-398307c4ae65.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    backgroundColor: '#ffffff',
    allowsLinkPreview: false,
    handleApplicationNotifications: false,
    limitsNavigationsToAppBoundDomains: false,
    presentationStyle: 'fullscreen',
    preferredContentMode: 'mobile',
    scheme: 'airflowmate',
    path: '',
    mixedContentMode: 'compatibility',
    allowsInlineMediaPlayback: true,
    webviewCreationDelay: 0
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: true
    }
  }
};

export default config;
