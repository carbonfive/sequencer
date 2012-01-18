Backbone.sync = function(method, model, options){
  return model;
}

sq = {
  Models: {},
  Views: {},
  Collections: {},

  initialize: function(){
    this.instruments = new sq.Collections.Instruments();

    this.metronome = new sq.Models.Metronome();
    this.application_view = new sq.Views.Application({
      metronome: this.metronome
    });
  }

};

// Runs when page is ready
$(document).ready(function() {
  sq.initialize();
});
