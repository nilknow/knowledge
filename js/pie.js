/* show a pie with d3 */
var pieSvg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
var pie = d3.layout.pie()
var pieData = pie(dataset)

var outerRadius = 150
var innerRadius = 0
var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)

var arcs = pieSvg.selectAll('g')
    .data(pieData)
    .enter()
    .append('g')
    .attr('transform', `translate(${svgWidth / 3},${svgWidth / 3})`)

var color = d3.scale.category10()
arcs.append('path')
    .attr('fill', function (d, i) {
        return color(i)
    })
    .attr('d', function (d) {
        return arc(d)
    })
arcs.append('text')
    .attr('transform', function (d) {
        return `translate(${arc.centroid(d)})`
    })
    .attr('text-anchor', 'middle')
    .text(function (d) {
        return d.data
    })