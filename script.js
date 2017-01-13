/* global d3 */
let dataset = [5, 10, 15, 20, 25]

const svg = d3.select('#chartArea').append('svg')
  .attr('width', 400)
  .attr('height', 300)
  .style('background', '#cacaca')

const multiplier = 8

const yScale = d3.scaleLinear()
  .domain([0, 25])
  .range([0, 300])

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (d, i) => {
    return i * 22
  })
  .attr('y', (d) => {
    return 300 - yScale(d)
  })
  .attr('width', 20)
  .attr('height', (d) => {
    return yScale(d)
  })
