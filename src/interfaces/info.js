Info = BaseEntity.extend({
    defaults: {
        'text' : "Move object with arrows key",
    },
    initialize: function(){
        var model = this;
        var entity = Crafty.e("2D, DOM, Text");

        entity
            .attr({x: 50, y: 50, z: 1000, w: 400})
            .text(model.get('text'))
            .textColor('#FFFFFF')
            .textFont({'size' : '24px', 'family': 'Arial'})
            .bind('Click', function(){
                                
            })

        model.set({'entity' : entity });
    }
});
