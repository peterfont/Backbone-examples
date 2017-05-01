define(["jquery","underscore","backbone"],function($,_,Backbone){
    return Contact = Backbone.Model.extend({
        default:{
            name:"",
            email:"",
            phone:""
        },
        filter:function(attr,value){
            return this.get(attr).toLowerCase().indexOf(value.toLocaleString());
        }
    });
});