sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("crudqproduct.controller.productSet", {
        onInit() {
            // let editModel = new sap.ui.model.json.JSONModel({
            //     isEditableField : false
            // });
            // this.getView().setModel(editModel,"editModel");
        },
        onSubmit: function(oEvent){
            
            let productId = oEvent.getParameter("value");
            console.log('here we clicked',productId);
            let oModel = this.getOwnerComponent().getModel();
           
            let sPath = "/productSet('"+productId+"')";
            oModel.read(sPath , {
                success: function(oData,Response){
                    let jModel = new sap.ui.model.json.JSONModel(oData);
                    this.getView().setModel(jModel,'jModel');
                    console.log('jModel',jModel);
                    // this.getView().byId('prodVisible').setVisible(true)
                    // this.getView().getModel("editModel").setProperty("/isEditableField",true)
                    
                }.bind(this)
            })
        }
    });
});