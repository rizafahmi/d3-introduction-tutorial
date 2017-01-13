/* global d3 _ */
let dataset = _.range(15).map(() => {
  return Math.random() * 50
})

const svg = d3.select('#chartArea').append('svg')
  .attr('width', 400)
  .attr('height', 300)
  .style('background', '#cacaca')

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, 300])

const colorScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range(['peru', 'teal'])

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
  .attr('fill', colorScale)
