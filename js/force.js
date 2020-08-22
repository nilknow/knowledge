var svgHeight = 420
var svgWidth = 600

var forceSvg = d3.select('body')
    .append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
var nodes = [{ 'name': '1.1 编程语言' }, { 'name': '1.1.1 Java' }, { 'name': '1.1.2 Html' },{'name':'1.1.2.1 html介绍'},{'name':'1.1.2.2 前端路由'},{'name':'1.2 计算机网络'}]
var edges = [{ 'source': 0, 'target': 1 }, { 'source': 0, 'target': 2 },{'source':2,'target':3},{'source':2,'target':4}]
var force = d3.layout.force()
    .nodes(nodes)
    .links(edges)
    .size([svgWidth, svgHeight])
    .linkDistance(30)
    .charge([-1840])
    .start()
var forceEdges = forceSvg.selectAll('line')
    .data(edges)
    .enter()
    .append('line')
    .style('stroke', '#ccc')
    .style('stroke-width', 1)
var color = d3.scale.category20()
var forceNodes = forceSvg.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 10)
    .style('fill', function (d, i) {
        return color(i)
    })
    .call(force.drag)
var forceText = forceSvg.selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .style("fill", "black")
    .attr("dx", 20)
    .attr("dy", 8)
    .text(function (d) {
        return d.name;
    });
force.on("tick", function () {
    //更新连线坐标
    forceEdges.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });
    //更新节点坐标
    forceNodes.attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
    //更新文字坐标
    forceText.attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; });
});