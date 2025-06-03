sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        onInit() {
            let oEmployeeData={
                EID:"kenneth.p.pe.benito",
                Enabled: true,
                Address: {
                    Street: "Pines",
                    City: "Mandaluyong",
                    ZIP: "1550",
                    Country: "Philippines"
                },
                SalesAmount: 15000,
                CurrencyCode: "Php"
            }
        }
    });
});