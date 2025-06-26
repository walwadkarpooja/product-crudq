sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("crudqproduct.controller.productSet", {
        onInit() {
            let oViewModel = new sap.ui.model.json.JSONModel({
                Productid: "",
            })
            this.getView().setModel(oViewModel, "jModel")

            let editModel = new sap.ui.model.json.JSONModel({
                isEditableField: false,
                isEnabledField: false,
            })
            this.getView().setModel(editModel,'editModel')
            
        },
        onSubmit: function(oEvent){
            
            let productId = oEvent.getParameter("value");
           
            let oModel = this.getOwnerComponent().getModel();
           
            let sPath = "/productSet('"+productId+"')";
            oModel.read(sPath , {
                success: function(oData,oHeaders){
                    let jModel = new sap.ui.model.json.JSONModel(oData);
                    this.getView().setModel(jModel,'jModel');
                    console.log(oHeaders)
                    MessageToast.show(oHeaders.statusText)                    
                    // this.getView().byId('prodVisible').setVisible(true)
                    // this.getView().getModel("editModel").setProperty("/isEditableField",true)
                    
                }.bind(this),
                error: function(error){
                    // console.log(error.message);
                    MessageToast.show(error.message)
                }
            })
        },
        onEdit: function (){
            let oModel = this.getView().getModel('editModel');
            oModel.setProperty("/isEditableField",true);
            oModel.setProperty("/isEnabledField",true);
        }
    });
});