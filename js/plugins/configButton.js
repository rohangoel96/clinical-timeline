var configCheckManager = new clinicalTimelinePlugin("configButton", null, {configDivId: "#timeline-wrapper #config-div"});
var clinicalTimelineAdedConfig = false;
configCheckManager.run = function (timeline, timelineVar, spec) {
  if (!clinicalTimelineAdedConfig) {
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
    clinicalTimelineAdedConfig = true;
  }

  /*
   * handle the selection of a plugin in the config button
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

configCheckManager.remove = function() {
  $(this.spec.configDivId).remove();
}


/* start-test-code-not-included-in-build */
module.exports = configCheckManager;
/* end-test-code-not-included-in-build */