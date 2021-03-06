// Creates and returns a new dancer object that can step
class Dancer {
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
  }
  step () {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
      var styleSettings = {
          top: top,
          left: left
      }
      this.$node.css(styleSettings);
    }
};




  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //;


    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/



    //console.log(this);
    //console.log('This is the instance ', this);
    //console.log('And this is the time between steps ', this.timeBetweenSteps);