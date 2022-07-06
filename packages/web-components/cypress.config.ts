import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    excludeSpecPattern: ["**/examples/**/*.js"],
    supportFile: false
  },
  "chromeWebSecurity": false,
  "includeShadowDom": true,
  "retries": {
    "runMode": 1
  },
  "videoCompression": false,
  "viewportHeight": 960,
  "viewportWidth": 1280,
  "watchForFileChanges": true,
});
