sq.Models.Instrument = Backbone.Model.extend({

  initialize: function(options){
    this.soundInstanceLength = 5;
    this.soundInstanceCount = 0;
    this.soundInstances = [];
    for (var i = 0; i < this.soundInstanceLength; i++) {
      this.soundInstances.push( new Audia("audio/" + this.id + ".mp3") );
    }
  },

  play: function(){
    this.soundInstances[this.soundInstanceCount].play();
    this.soundInstanceCount++;
    if(this.soundInstanceCount >= this.soundInstanceLength){ this.soundInstanceCount = 0; }
  },

  stop: function(){
    _.each(this.soundInstances, function(instance){
      instance.stop();
    });
  }

});


sq.Collections.Instruments = Backbone.Collection.extend({
  model: sq.Models.Instrument,

  initialize: function(){
    self = this;
    _.each(sq.instrument_data, function(data, i){
      self.add( new sq.Models.Instrument(data) );
    });
  },

  stop: function(){
    this.each(function(instrument){
      instrument.stop();
    });
  }
});