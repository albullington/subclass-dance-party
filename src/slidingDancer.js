//sponge
var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.$node.addClass('sliding-dancer');
  this.$node.append('<img src="spongebob.gif">');
};


SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;
  


SlidingDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    this.setPosition(Math.floor(Math.random() * Math.floor(1000), Math.floor(Math.random() * Math.floor(1000))));
  };



    // call the old version of step at the beginning of any call to this new version of step
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function