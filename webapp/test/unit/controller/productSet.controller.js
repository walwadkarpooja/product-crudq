/*global QUnit*/

sap.ui.define([
	"crudqproduct/controller/productSet.controller"
], function (Controller) {
	"use strict";

	QUnit.module("productSet Controller");

	QUnit.test("I should test the productSet controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
