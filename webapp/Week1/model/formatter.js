sap.ui.define([], function(){
	"use strict";
	
	return{
		delivery: function(iWeight, sMeasure){
			var sresult = "";
			
			if(sMeasure === "G"){
				iWeight = iWeight/1000;
			}
			if(iWeight < 0.5){
				sresult = "Mail Delivery";
			}else if(iWeight < 5){
				sresult = "Parcel Delivery";
			} else {
				sresult = "Carrier Delivery";
			}
			
			return sresult;
		}
	};
	
});