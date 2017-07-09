/*
 ===== 2. AND THEN THERE WAS JS =====

 Classes VS Prototypes.

 === Working with prototype ===

 - Make an object that you like

 - Create new instances than inherit from that object

 - Customize the new objects

 - Taxonomy and classification are not necessary

 - Use " for external string. Use ' for internal string.

 == SUPPLANT METHOD ===

 */

if(typeof String.prototype.supplant !== 'function'){
    String.prototype.supplant = function(o){
        return this.replace(/{([^{}]*)}/g,
            function(a, b){
                var r = o[b];
                return typeof r === "string" ? r : a;
            });
    }
}

var template = '<div border="{border}">' +
    '<p>{first}</p>'+
    '<p>{second}</p>'+
    '</div>';

var data = {
    first: 'Bingo',
    second: 'Bongo',
    border: "2"
};

var someInnerHtml = template.supplant(data);

console.log(someInnerHtml);

