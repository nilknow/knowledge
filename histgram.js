/* show a simple histgram with d3 */
var svg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
var padding = { left: 40, right: 30, top: 20, bottom: 20 };

var dataset = [200, 300, 100]
var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0,
        svgWidth - padding.left, svgWidth - padding.right])
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight - padding.top - padding.bottom, 0])
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient('bottom')
var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient('left')

var rectWidth = 20
var rectPadding = 4
svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .attr('x', function (d, i) {
        return xScale(i) + rectPadding / 2
    })
    .attr('y', function (d) {
        return yScale(d)
    })
    .attr('width', xScale.rangeBand() - rectPadding)
    .attr('height', function (d) {
        return svgHeight - padding.top - padding.bottom - yScale(d)
    })
    .attr('fill', 'blue')
    .on("mouseover", function (d, i) {
        d3.select(this)
            .transition()
            .duration(500)
            .attr("fill", "steelblue")
    })
    .on("mouseout", function (d, i) {
        d3.select(this)
            .transition()
            .duration(500)
            .attr("fill", "blue");
    })

svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${padding.left},${svgHeight - padding.bottom})`)
    .call(xAxis)
svg.append('g')
    .attr('class', 'axis')
    .attr('transform', `translate(${padding.left},${padding.top})`)
    .call(yAxis)