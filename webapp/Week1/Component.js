sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("aw.ui.learning.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the parent init function
			UIComponent.prototype.init.apply(this, arguments);
			
			// create a data model
			var oData = {
				recipient : {
					name : "Gareth"
				}
			};
			
			// set the data model into the view
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});