var clinicalTimelineVerticalLine = new clinicalTimelinePlugin("verticalLine", "Vertical Timeline", {tooltipControllerId: "#tooltip-controller"});
/*
 * Handles the drawing of a vertical line
 * on hover over the timeline in the simple view
 */
var tooltipOnVerticalLine = true;
clinicalTimelineVerticalLine.run = function(timeline, timelineVar, spec) {
  var hoverLineGroup = d3.select(".timeline").append("g")
    .attr("class", "hover-line");

  var hoverLine = hoverLineGroup
    .append("line")
    .attr("x1", 0)
    .attr("x2", 0) 
    .attr("y1", 20)
    .attr("y2", 268)
    .style("stroke", "#ccc");

  var svgHeight = d3.select(timeline.divId() + " svg")[0][0].getBoundingClientRect().height;

  var hoverText = hoverLineGroup.append("text")
    .attr("class", "hover-text")
    .attr("y", svgHeight - 10) //place text 10 pixels above the bottom of the svg
    .attr("font-size", 12)
    .attr("fill", "#888");

  var hoverBegin = 200, hoverEnd = 770; //dont allow hover beyond this point

  //scale to map the amount scrolled according to the svg coordinates to the days i.e
  //clinical-timeline coordianted
   var hoverScale = d3.time.scale()
      .domain([hoverBegin, hoverEnd])
      .range([timelineVar.beginning , timelineVar.ending]);

  hoverLineGroup.style("opacity", 0);

  d3.select(".timeline").on("mousemove", function() {
    var hoverX = d3.mouse(this)[0];
    if (hoverX > hoverBegin && hoverX < hoverEnd) {
      hoverText.text(parseInt(hoverScale(hoverX)) + "d");
      hoverText.attr("x", hoverX + 4);
      hoverLine.attr("x1", hoverX).attr("x2", hoverX)
      hoverLineGroup.style("opacity", 1);
      
      if(tooltipOnVerticalLine){         
        $(".timeline g rect,.timeline g circle").each(function(index) {
          var element = $(".timeline g rect, .timeline g circle")[index];
          var elementX = parseInt(element.getBBox().x);
          var elementWidth = parseInt(element.getBBox().width);
          var tolerance = 2;
          if(hoverX > (elementX + elementWidth/2 - tolerance) && hoverX < (elementX + elementWidth/2 + tolerance)){
            $(element).qtip("disable", false);
            $(element).qtip("show");
          } else {
            $(element).qtip("hide");
            $(element).qtip("disable", true);
          }
        });
      }
    }  
  }).on("mouseout", function() {
      hoverLineGroup.style("opacity", 0);
  });
  var tooltipControllerId = spec.tooltipControllerId;
  $(tooltipControllerId).css("visibility", "visible");
  $(tooltipControllerId+' a').on("click", function () {
    if (tooltipOnVerticalLine) {
      $(tooltipControllerId+' a').text("Show tooltips on vertical-line");
      tooltipOnVerticalLine = false;
    } else {
      $(tooltipControllerId+' a').text("Hide tooltips on vertical-line");
      tooltipOnVerticalLine = true;
    }
    timeline();
  });
}

clinicalTimelineVerticalLine.remove = function (timeline, timelineVar, spec) {
  $(spec.tooltipControllerId).css("visibility", "hidden");
}

/* start-test-code-not-included-in-build */
module.exports = clinicalTimelineVerticalLine;
/* end-test-code-not-included-in-build */