define(["jquery","underscore","backbone","../collection/contacts.js","./../router.js"], function($,_,Backbone,contacts,appRoutes){
    var AppView = Backbone.View.extend({
        el:$("#app"),
        initialize:function(){
            this.$add = this.$("#add");
        },
        events:{
            "click #add":"addView"
        },
        addView:function(){

        }
    });
    var appView = new AppView();
    return appView;
});