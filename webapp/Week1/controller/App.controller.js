// start up definition, i.e. your imports
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],

function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("guy.ui.test.controller.App", {
		onShowHello : function () {
			// read message from the i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// now show message
			MessageToast.show(sMsg);
		},
		newAction : function() {
			MessageToast.show("Hello openSAP!");
			
		} 
	});
});