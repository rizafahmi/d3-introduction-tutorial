/* global d3 */
let dataset = [
  {age: 1, produce: 50},
  {age: 3, produce: 20},
  {age: 4, produce: 10},
  {age: 6, produce: 40},
  {age: 8, produce: 5},
  {age: 10, produce: 30}
]

let h = 300
let w = 700
let p = 30

let svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .attr('padding', p)
  .style('border', '1px solid papayawhip')

let x = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d.age)])
  .range([0, w-50])
let y = d3.scaleLinear()
  .domain([d3.min(dataset, (d) => d.produce), d3.max(dataset, (d) => d.produce)])
  .range([h, 0])

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', (data) => {
    return x(data.age)
  })
  .attr('cy', h / 2)
  .attr('r', (data) => data.produce)
  .attr('fill', 'darkorange')

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d) => x(d.age) - 20)
  .attr('y', h - 70)
  .text((d) => {
    return d.age + ' year(s).'
  })

let xAxis = d3.axisBottom(x)
  .ticks(dataset.length)
svg.append('g')
  .attr('class', 'x axis')
  .call(xAxis)
