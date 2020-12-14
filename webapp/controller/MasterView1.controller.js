sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("home.kpmg.exercise4.controller.MasterView1", {
		onInit: function () {

		},
		onListItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detailsList", {
				detailsPath: window.encodeURIComponent(oItem.getBindingContext("actorsModel").getPath().substr(1))
			});
		},
		onListItemPressM: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detailsListMovie", {
				detailsPathMovie: window.encodeURIComponent(oItem.getBindingContext("actorsModel").getPath().substr(1))
			});
		}
	});
});