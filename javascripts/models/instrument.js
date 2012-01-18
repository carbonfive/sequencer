sq.Models.Instrument = Backbone.Model.extend({

  initialize: function(options){
    this.sound = new Audia("audio/" + this.id + ".mp3");
  },

  play: function(){
    this.sound.play();
  }

});


sq.Collections.Instruments = Backbone.Collection.extend({
  model: sq.Models.Instrument,

  initialize: function(){
    self = this;
    _.each(sq.instrument_data, function(data, i){
      self.add( new sq.Models.Instrument(data) );
    });
  }
});