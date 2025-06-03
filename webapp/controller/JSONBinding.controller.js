sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller,JSONModel,formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter:formatter,
        onInit() {
            let oEmployeeData={
                Eid:"kenneth.p.pe.benito",
                Enabled: true,
                Address: {
                    Street: "Pines",
                    City: "Mandaluyong",
                    Zip: "1550",
                    Country: "Philippines"
                },
                SalesAmount: 17000,
                CurrencyCode: "Php"
            }
            let oEmployeeModel=new JSONModel();
            oEmployeeModel.setData(oEmployeeData);
            this.getView().setModel(oEmployeeModel,"employee");
            let oProductListModel = new JSONModel("/model/ProductsModel.json");
            this.getView().setModel(oProductListModel,"products");
        },
        onPressProduct: function(oEvent){
            let oList = oEvent.getSource();
            let oSelectedItem = oList.getSelectedItem();
            let oContext = oSelectedItem.getBindingContext("products");
            let sPath = oContext.getPath();
            let sProdDetails = this.byId("idProdSimpleForm");
            sProdDetails.bindElement({
                path : sPath,
                model : "products"
            });
        }
    });
});