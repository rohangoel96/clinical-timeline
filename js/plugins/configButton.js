/**
 * Plugin to handle configButton in clinicalTimeline
 * @type {clinicalTimelinePlugin}
 */
var configCheckManager = new clinicalTimelinePlugin("configButton", null, {configDivId: "#timeline-wrapper #config-div"});
/**
 * runs the configCheckManager plugin
 * @param  {function} timeline    clinicalTimeline object
 * @param  {Object}   timelineVar all the constant configurations for the clinicalTimeline 
 * @param  {Object}   [spec=null] specification specific to the plugin
 */
configCheckManager.run = function (timeline, timelineVar, spec) {
  $(spec.configDivId + " #config-dropdown").html("")
  //populate all the available plugins dynamically
  timeline.plugins().forEach(function(plugin) {
    if(plugin.handler.name){
      var pluginCheckBox = $('<input type="checkbox" id="'+plugin.handler.id+'">').attr("checked", plugin.enabled)
      $(spec.configDivId + " #config-dropdown").append(pluginCheckBox).append('<li>'+plugin.handler.name+'</li>');
    }
  });

  $(spec.configDivId + " #config-dropdown input").on("change", function () {
    configHandler(this.id, this.checked);
  });

  /**
   * handle the selection or deselection of a plugin in the config button
   * @param  {string}  pluginId id of the HTML's checkbox element for the plugin
   * @param  {boolean} bool     state of checkbox
   */
  var configHandler = function (pluginId, bool) {
    timeline.plugins().forEach(function (plugin) {
      if (pluginId === plugin.handler.id) {
        plugin.enabled = bool;
      }
    });
    timeline();
  };
};

/**
 * cleans up the HTML of the configButton
 * @param  {function} timeline    clinicalTimeline object
 * @param  {Object}   timelineVar all the constant configurations for the clinicalTimeline 
 * @param  {Object}   [spec=null] specification specific to the plugin
 */
configCheckManager.remove = function(timeline, timelineVar, spec) {
  $(this.spec.configDivId).remove();
}

/* start-test-code-not-included-in-build */
module.exports = configCheckManager;
/* end-test-code-not-included-in-build */