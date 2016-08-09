/**
 * Plugin to handle configButton in clinicalTimeline
 * @type {clinicalTimelinePlugin}
 */
class configCheckManager extends clinicalTimelinePlugin {
  /**
   * runs the configCheckManager plugin
   * @param  {function} timeline    clinicalTimeline object
   * @param  {Object}   [spec=null] specification specific to the plugin
   */
  run(timeline, spec) {
    $(spec.configUlId).html("")
    //populate all the available plugins dynamically
    timeline.plugins().forEach(function(element) {
      if(element.obj.name){
        var pluginCheckBox = $('<input type="checkbox" id="'+element.obj.id+'">').attr("checked", element.enabled)
        $(spec.configUlId).append(pluginCheckBox).append('<li>'+element.obj.name+'</li>');
      }
    });

    $(spec.configUlId + " input").on("change", function () {
      configHandler(this.id, this.checked);
    });

    /**
     * handle the selection or deselection of a plugin in the config button
     * @param  {string}  pluginId id of the HTML's checkbox element for the plugin
     * @param  {boolean} bool     state of checkbox
     */
    var configHandler = function (pluginId, bool) {
      timeline.plugins().forEach(function (element) {
        if (pluginId === element.obj.id) {
          element.enabled = bool;
        }
      });
      timeline();
    };
  }
  /**
   * cleans up the HTML of the configButton
   * @param  {function} timeline    clinicalTimeline object
   * @param  {Object}   [spec=null] specification specific to the plugin
   */
  remove(timeline, spec) {
    $(this.spec.configUlId).remove();
  }
}

/* start-test-code-not-included-in-build */
module.exports = configCheckManager;
/* end-test-code-not-included-in-build */