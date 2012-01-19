sq.Views.Application = Backbone.View.extend({

  className: "application",

  events: {
    "click .play": "play",
    "click .pause": "pause",
    "click .random": "random",
    "click .clear": "clear"
  },

  initialize: function(options){
    this.metronome = options.metronome;
    this.sequenceGridView = new sq.Views.SequenceGrid({metronome: this.metronome});

//    this.metronome.bind("beat:0", function(){pick_up.play()});
//    this.metronome.bind("beat:2", function(){pick_up.play()});
//    this.metronome.bind("beat:4", function(){pick_up.play()});
//    this.metronome.bind("beat:6", function(){fireball.play()});
//    this.metronome.bind("beat:8", function(){coin.play()});
//    this.metronome.bind("beat:9", function(){fireball.play()});
//    this.metronome.bind("beat:10", function(){pick_up.play()});
//    this.metronome.bind("beat:14", function(){firework.play()});

    $('body').append(this.render().el);
  },

  play: function(){
    this.metronome.start();
  },

  pause: function(){
    this.metronome.stop();
  },

  random: function(){
    $('input[type="checkbox"]').each(function(){
      if (Math.floor(Math.random()*10+1) === 10) {
        $(this).trigger('click');
      }
    });
  },

  clear: function(){
    $('input[type="checkbox"]:checked').click()
  },

  template: _.template(
      '<button class="play">Play</button>' +
      '<button class="pause">Pause</button>' +
      '<button class="random">Random</button>' +
      '<button class="clear">Clear</button>'
      ),

  render: function(){
    $(this.el).append(this.sequenceGridView.render().el);
    $(this.el).append(this.template());
    return this;
  }

});


