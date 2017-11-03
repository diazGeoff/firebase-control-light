// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDyWBRbimUGyFz3Y8_8bV04bXWvixUVCeA",
    authDomain: "xerkit-firebase-hackday.firebaseapp.com",
    databaseURL: "https://xerkit-firebase-hackday.firebaseio.com/",
    projectId: "xerkit-firebase-hackday",
    storageBucket: "xerkit-firebase-hackday.appspot.com",
    messagingSenderId: "119352805193"
  }
};