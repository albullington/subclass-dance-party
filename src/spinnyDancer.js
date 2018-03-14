//squidward
var SpinnyDancer = class extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super();
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();
    this.$node.addClass('spinny-dancer');
    this.$node.append('<img src="source.gif">');
  }
  step () {
    super.step.call(this);
    //this.$node.fadeToggle();
    this.setPosition(Math.floor(Math.random() * Math.floor(500), Math.floor(Math.random() * Math.floor(500))));
  };
};



    // call the old version of step at the beginning of any call to this new version of step
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.



  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //top, left, timeBetweenSteps