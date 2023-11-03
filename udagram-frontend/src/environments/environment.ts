// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  // apiHost: 'http://localhost:8080/api/v0'
  // apiHost: 'http://aa467066a59894053b6e385e57fa51b1-370887332.us-east-1.elb.amazonaws.com:8080/api/v0'
  apiHost: 'http://a9c77f5d2fcb04425a592efcef2d8f27-199041061.us-east-1.elb.amazonaws.com:8080/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
