/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule TestJavaToJSReturnValuesModule
 */

'use strict';

const BatchedBridge = require('BatchedBridge');

const {assertEquals, assertTrue} = require('ReactAndroid/src/androidTest/js/Asserts');
const {TestModule} = require('NativeModules');

var TestJavaToJSReturnValuesModule = {
  callMethod: function(methodName, expectedType, expectedJSON) {
    const result = TestModule[methodName]();
    assertEquals(expectedType, typeof result);
    assertEquals(expectedJSON, JSON.stringify(result));
  },

  triggerException: function() {
    try {
      TestModule.triggerException();
    } catch (ex) {
      assertTrue(ex.message.indexOf('Exception triggered') !== -1);
    }
  }
};

BatchedBridge.registerCallableModule(
  'TestJavaToJSReturnValuesModule',
  TestJavaToJSReturnValuesModule
);

module.exports = TestJavaToJSReturnValuesModule;