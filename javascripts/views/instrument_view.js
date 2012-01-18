sq.Views.Instrument = Backbone.View.extend({

  tagName: "tr",
  
  template: _.template( '' +
      '<th><%= name %></th>' +
      '<% for(var i = 0; i < beatLength; i++ ) {%><td class="beat beat-<%=i%>"><input id="<%= id %>-<%= i %>" type="checkbox"/></td><%} %>'
  ),

  render: function(){
    $(this.el).html(this.template({
      name: this.model.get('name'),
      id: this.model.id,
      beatLength: 15
    }));
    return this;
  },

  initialize: function(options){
    _.bindAll(this, 'checkbox_changed', 'play');
    console.log(options.metronome);
    this.metronome = options.metronome;
  },

  events: {
    'click .th': 'play',
    'change input[type="checkbox"]': 'checkbox_changed'
  },

  checkbox_changed: function(e){
    var $target = $(e.target);
    var beatCount = $(e.target).attr('id').split('-')[1];

    var play = function(){
      this.model.play()
    }

    if ($target.prop('checked')) {
      this.model.play();
      this.metronome.bind('beat:' + beatCount, this.play, this);
    } else {
      this.metronome.unbind('beat:' + beatCount, this.play);
    }
  },

  play: function(){
    this.model.play();
  }

});