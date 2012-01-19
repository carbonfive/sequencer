sq.Views.Application = Backbone.View.extend({

  className: "application",

  events: {
    "click .toggle": "toggle",
    "click .random": "random",
    "click .clear": "clear"
  },

  initialize: function(options){
    sq.isPlaying = false;
    this.metronome = options.metronome;
    this.sequenceGridView = new sq.Views.SequenceGrid({metronome: this.metronome});

    $('body').append(this.render().el);
  },

  toggle: function(){
    if (sq.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },

  play: function(){
    this.metronome.start();

    sq.isPlaying = true;
    this.$('.toggle').html("Pause");
  },

  pause: function(){
    this.quiet();

    sq.instruments.get('pause').play();
  },

  quiet: function(){
    this.metronome.stop();
    sq.instruments.stop();

    sq.isPlaying = false;
    this.$('.toggle').html("Play");
  },

  random: function(){
    $('input[type="checkbox"]').each(function(){
      if (Math.floor(Math.random()*10+1) === 10) {
        $(this).trigger('click');
      }
    });

    sq.instruments.get('firework').play();
  },

  clear: function(){
    this.quiet();
    sq.instruments.get('enter_castle').play();

    $('input[type="checkbox"]:checked').click()
  },

  template: _.template(
      '<button class="toggle">Play</button>' +
      '<button class="random">Random</button>' +
      '<button class="clear">Clear</button>'
      ),

  render: function(){
    $(this.el).append(this.sequenceGridView.render().el);
    $(this.el).append(this.template());
    return this;
  }

});


