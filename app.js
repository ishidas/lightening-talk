(function(module, d3, $){

//initializing d3 object
var svg = d3.select('svg');


//selecting all the circle elements on HTML and providing data to them
var circle = svg.selectAll('circle').data([50, 100, 300, 593, 1000]);


//getting data from .data([])
circle.attr('r', function(d){
  return Math.sqrt(d);
});


// styleing the circles
circle.style('fill', 'pink');


//adding test (not visible)
circle.text(function(d){return d})


//adding text (visible)
var circleText = svg.append('g').attr('class', circle)
circleText.append('circle')
  .attr('cx', 400)
  .attr('cy', 100)
  .attr('r', 20)
  .attr('fill', 'lightgreen')

circleText.append('text')
.attr('x', 400)
.attr('y', 100)
.attr('dx', -17)
.text('here')


//circle 4 is fading out using jQuery
var $circle4 = $('#circle4');
$circle4.mouseover(function(){
  $(this).fadeOut('slow');
  $(this).fadeIn('slow');
})


})(window, window.d3, window.$);
