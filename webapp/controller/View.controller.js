sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	
], function (Controller,JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("rel.Relatorios.controller.View", {

		onInit: function () {

		var oData = {
				names:[{
					id:"1",
					produto:"Celular",
					descricao:"Telefone"
				},{
					id:"2",
					produto:"Relógio",
					descricao:"relogio"
				},{
					id:"3",
					produto:"calendário",
					descricao:"calendário de meses"
				},{
					id:"4",
					produto:"copo",
					descricao:"copo de cozinha"
				},{
					id:"5",
					produto:"mochila",
					descricao:"mochila de alimentos"
				}]
		};
		
		/*var oData = jQuery.ajax({
            type: "GET",
            contentType : "application/json",
            url: "http://dummy.restapiexample.com/api/v1/employees",
            dataType : "json",
            async: true, 
            success : function(result, status, request) {
           		var oModel = new JSONModel(oData);
				var oList = this.byId("tabela1");
   				oList.setModel(oModel);
            },
            error: function (request, status, erro) {
	            alert("Problema ocorrido: " + status + "\nDescição: " + erro);
	            alert("Informações da requisição: \n" + request.getAllResponseHeaders());
        	},
        });*/
        
        	var oModel = new JSONModel(oData);
				var oList = this.byId("tabela1");
   				oList.setModel(oModel);
	},
		
		
		onFiltro : function (oEvent) {

			// build filter array
			var aFilter = [];
			
			var sQuery = oEvent.getParameter("query");
			
			if (sQuery) {
				aFilter.push(new Filter("descricao", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("tabela1");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		
		onFiltroCombo: function(oEvent){

			var aFilter = [];
			
			var sQuery = oEvent.getParameter("value");
			
			if (sQuery) {
				aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("tabela1");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
		
	

	
	});
});