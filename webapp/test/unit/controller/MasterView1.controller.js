/*global QUnit*/

sap.ui.define([
	"home/kpmg/exercise4/controller/MasterView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MasterView1 Controller");

	QUnit.test("I should test the MasterView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});