sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("nwproductdata.controller.View1", {
        onInit() {
          //  sap.m.MessageToast.show("Welcome to the Product Data App!");
          const oModel = this.getOwnerComponent().getModel();
          oModel.read("/Products", {
            success: (oData) => {
              const oProductsModel = new sap.ui.model.json.JSONModel(oData.results);
              this.getView().setModel(oProductsModel, "prod");
            },
            error: (oError) => {
              sap.m.MessageToast.show("Error fetching products data.");
            }
          });
        },

        onButtonPress: function () {
            sap.m.MessageToast.show("Button Pressed!");
        },
        _toView2: function(){
          this.oRouter = this.getOwnerComponent().getRouter();
          this.oRouter.navTo("RouteView2");
        }
    });
});