// start up definition, i.e. your imports
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"guy/ui/test/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],

function(Controller, MessageToast, formatter,Filter,FilterOperator) {
	"use strict";
	return Controller.extend("guy.ui.test.controller.App", {
		
		formatter : formatter,
		
		onShowHello : function () {
			// read message from the i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// now show message
			MessageToast.show(sMsg);
		},
		newAction : function() {
			MessageToast.show("Hello " + this.getView().getModel("helloPanel").oData.recipient.name);
			
		},
		onFilterProducts: function(oEvent){
			var aFilter = [],
			sQuery =oEvent.getParameter("query"),
			
			oList = this.getView().byId("invoiceList"),
			
			oBinding = oList.getBinding("items");
			
			if(sQuery){
			aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));	
			} 
			
			oBinding.filter(aFilter);
		},
		onItemSelected: function(oEvent){
			var oSelectedItem = oEvent.getParameter("listItem");
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oPanel = this.byId("productDetailsPanel");
			oPanel.bindElement({path: sPath});
			oPanel.setVisible(true);
		}
	});
});