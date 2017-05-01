define(["jquery","underscore","backbone","./../model/contact.js"],function($, _, Backbone, Contact){
    var Contacts = Backbone.Collection.extend({
        model:Contact,
        search:function(attr,value){
            return this.some(function(item){
                return item.filter(attr,value);
            });
        }
    });
    var contacts = new  Contacts();
    console.log(contacts);
    return contacts;
});