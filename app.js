(function(module, d3){
var svg = d3.select('svg');
var circle = svg.selectAll('circle').data([32, 53, 112, 293]);

//getting data from .data([])
circle.attr('r', function(d){
  return Math.sqrt(d);
});

circle.style('fill', 'green');
circle.enter().append('circle');

})(window, window.d3);
