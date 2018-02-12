/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TestBundle
 */
'use strict';

// Disable YellowBox so we do not have to mock its dependencies
console.disableYellowBox = true;

// Include callable JS modules first, in case one of the other ones below throws
require('ReactAndroid/src/androidTest/js/ProgressBarTestModule');
require('ReactAndroid/src/androidTest/js/ViewRenderingTestModule');
require('ReactAndroid/src/androidTest/js/TestJavaToJSArgumentsModule');
require('ReactAndroid/src/androidTest/js/TestJSLocaleModule');
require('ReactAndroid/src/androidTest/js/TestJSToJavaParametersModule');
require('ReactAndroid/src/androidTest/js/TestJavaToJSReturnValuesModule');
require('ReactAndroid/src/androidTest/js/UIManagerTestModule');

require('ReactAndroid/src/androidTest/js/CatalystRootViewTestModule');
require('ReactAndroid/src/androidTest/js/DatePickerDialogTestModule');
require('ReactAndroid/src/androidTest/js/MeasureLayoutTestModule');
require('ReactAndroid/src/androidTest/js/PickerAndroidTestModule');
require('ReactAndroid/src/androidTest/js/ScrollViewTestModule');
require('ReactAndroid/src/androidTest/js/ShareTestModule');
require('ReactAndroid/src/androidTest/js/SwipeRefreshLayoutTestModule');
require('ReactAndroid/src/androidTest/js/TextInputTestModule');
require('ReactAndroid/src/androidTest/js/TimePickerDialogTestModule');


// Define catalyst test apps used in integration tests
var AppRegistry = require('AppRegistry');

var apps = [
{
  appKey: 'CatalystRootViewTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/CatalystRootViewTestModule').CatalystRootViewTestApp
},
{
  appKey: 'DatePickerDialogTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/DatePickerDialogTestModule').DatePickerDialogTestApp
},
{
  appKey: 'JSResponderTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/JSResponderTestApp'),
},
{
  appKey: 'HorizontalScrollViewTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/ScrollViewTestModule').HorizontalScrollViewTestApp,
},
{
  appKey: 'InitialPropsTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/InitialPropsTestApp'),
},
{
  appKey: 'LayoutEventsTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/LayoutEventsTestApp'),
},
{
  appKey: 'MeasureLayoutTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/MeasureLayoutTestModule').MeasureLayoutTestApp
},
{
  appKey: 'MultitouchHandlingTestAppModule',
  component: () => require('ReactAndroid/src/androidTest/js/MultitouchHandlingTestAppModule')
},
{
  appKey: 'NativeIdTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/NativeIdTestModule').NativeIdTestApp
},
{
  appKey: 'PickerAndroidTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/PickerAndroidTestModule').PickerAndroidTestApp,
},
{
  appKey: 'ScrollViewTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/ScrollViewTestModule').ScrollViewTestApp,
},
{
  appKey: 'ShareTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/ShareTestModule').ShareTestApp,
},
{
  appKey: 'SubviewsClippingTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/SubviewsClippingTestModule').App,
},
{
  appKey: 'SwipeRefreshLayoutTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/SwipeRefreshLayoutTestModule').SwipeRefreshLayoutTestApp
},
{
  appKey: 'TextInputTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/TextInputTestModule').TextInputTestApp
},
{
  appKey: 'TestIdTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/TestIdTestModule').TestIdTestApp
},
{
  appKey: 'TimePickerDialogTestApp',
  component: () => require('ReactAndroid/src/androidTest/js/TimePickerDialogTestModule').TimePickerDialogTestApp
},
{
  appKey: 'TouchBubblingTestAppModule',
  component: () => require('ReactAndroid/src/androidTest/js/TouchBubblingTestAppModule')
},

];


module.exports = apps;
AppRegistry.registerConfig(apps);
