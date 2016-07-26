var clinicalTimelinePlugin = function (id, name, spec) {
	this.id = id;
	this.name = name;
	this.spec = spec || null;
}

clinicalTimelinePlugin.prototype.run = function () {
	console.log("A plugin must have a run function to be functional");
}

clinicalTimelinePlugin.prototype.remove = function () {
	//not neccessary to have
}

/* start-test-code-not-included-in-build */
module.exports = clinicalTimelinePlugin;
/* end-test-code-not-included-in-build */