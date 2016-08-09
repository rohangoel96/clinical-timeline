class clinicalTimelinePlugin {
  constructor(id, name, spec) {
    this.id = id;
	this.name = name;
	this.spec = spec || null;
  }
  
  run(timeline, timelineVar, spec) {
    console.log("A plugin must have a run function to be functional");
  }
  
  remove () {

  }
}

/* start-test-code-not-included-in-build */
module.exports = clinicalTimelinePlugin;
/* end-test-code-not-included-in-build */