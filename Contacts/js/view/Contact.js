define(["jquery","underscore","backbone","./../router.js"],function($, _, Backbone, appRouter){
    return Backbone.View.extend({
        tagName:"li",
        className:"list-group-item",
        template: _.template($("#contact-item").html()),
        initialize:function(){
            this.listenTo(this.model,"change",this.render);
            this.listenTo(this.model,"destroy",this.remove);
        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events:{
            "click .contact-remove":"clear",
            "click a":"edit"
        },
        remove:function(){
            this.$el.remove();
        },
        toggle:function(){
            this.$el.toggleClass("active");
        },
        edit:function(){
            appRouter.navigate("contact/"+this.model.cid+"/edit",{trigger: true,replace: true});
            return false;
        },
        clear:function(){
            this.model.destroy();
        }
    });
});