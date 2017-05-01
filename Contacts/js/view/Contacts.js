define(["jquery","underscore","backbone","./Contact","../collection/contacts.js","../model/Contact.js"],function($, _, Backbone, ContactView, contacts, Contact){
    var ContactsView = Backbone.View.extend({
        el:$("#contact-items"),
        initialize:function(){
            this.$search  = this.$("#search-input");
            this.$items = this.$("#items");
            this.listenTo(contacts,"add",this.addOne);
            this.listenTo(contacts,"reset",this.addAll);
            this.listenTo(contacts,"all",this.render);
        },
        render:function(){
            //统计和批量删除
            console.log("render");
        },
        addOne:function(model){
            this.$items.append(new ContactView({model: model}).render().el);
        },
        addAll:function(){
            contacts.each(this.addOne, this);
        },
        events:{
            "keypress #search-input":"search"
        },
        search:function(){
            var val = this.$search.val();
            if(val!=null && val.replace(/\s*/,"")!=""){
                contacts.search("name",this.$search.val())
            }
        }

    });
    //new ContactsView();
    //console.log(contacts);
    //contacts.add(new Contact({name:"prp",email:"898989@qq.com",phone:"18701646723"}));
    return ContactsView;
});