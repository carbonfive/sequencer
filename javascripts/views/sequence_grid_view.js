sq.Views.SequenceGrid = Backbone.View.extend({

  tagName: "table",
  className: "sequence-grid",

  initialize: function(options){
    this.metronome = options.metronome;
    this.metronome.bind('all', this.beat, this);
  },

  beat: function(e){
    var beatCount = e.split(':')[1];
    this.$('.beat').removeClass('active');
    this.$('.beat-'+beatCount).addClass('active');
  },

  render: function(){
    $el = $(this.el);
    var self = this;
    sq.instruments.each(function(instrument, i){
      $el.append( new sq.Views.Instrument({
        model: instrument,
        metronome: self.metronome
      }).render().el );
    });
    return this;
  }

});