sq.Models.Metronome = Backbone.Model.extend({
  bpm: 240,
  timer: undefined,
  beatLength: 15,
  beatCount: 0,

  start: function(){
    if(typeof this.timer !== 'undefined'){
      return
    }
    this._play();
  },

  stop: function(){
    clearTimeout(this.timer);
    this.timer = undefined;
  },

  _play: function(){
    var self = this;
    this.timer = setTimeout(function(){
      self._beat();
    }, 1000 / (self.bpm / 60));
  },

  _beat: function(){
    this.trigger("beat:" + this.beatCount);
    this.beatCount++;
    if(this.beatCount > this.beatLength){ this.beatCount = 0; }
    this._play();
  }

});