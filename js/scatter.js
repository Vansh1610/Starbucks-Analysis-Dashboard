d3.csv("../data/world.csv").then(function(data) {

    function formatPopulation(population) {
    if (population >= 1e9) {
        return (population / 1e9).toFixed(1) + "B";
    } else if (population >= 1e6) {
        return (population / 1e6).toFixed(1) + "M";
    } else if (population >= 1e3) {
        return (population / 1e3).toFixed(1) + "k";
    } else {
        return population.toString();
    }
}


    const xScale = d3.scaleLog()
        .domain([100, d3.max(data, d => +d.Population)])
        .range([0, 600]); 

    const yScale = d3.scaleLog()
        .domain([1, d3.max(data, d => +d["Number of Starbucks"])])
        .range([400, 0]); 

    
    const svg = d3.select("svg")
        .attr("width", 800)
        .attr("height", 500);

    svg.append("g")
        .attr("transform", "translate(100,400)")
        .call(d3.axisBottom(xScale).ticks(4).tickFormat(d3.format(",.0s")).tickSize(-600*1.3).tickSizeOuter(0));

    svg.append("g")
        .attr("transform", "translate(100,0)") 
        .call(d3.axisLeft(yScale).ticks(4).tickFormat(d3.format(",.0s")).tickSize(-500*1.3).tickSizeOuter(0));

    svg.append("line")
        .attr("x1", 100)  
        .attr("y1", 400)   
        .attr("x2", 100) 
        .attr("y2", 0)   
        .attr("stroke", "#EBEBEB")
        .attr("stroke-width", 2);

    
    svg.selectAll(".tick line").attr("stroke", "#EBEBEB").attr("stroke-width", 2);

   
    const circles = svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(+d.Population))
        .attr("cy", d => yScale(+d["Number of Starbucks"]))
        .attr("r", 5) 
        .attr("fill", "#006439")
        .append("title")
        .text(d => `Country: ${d.Country}\nPopulation: ${formatPopulation(d.Population)}\nNumber of Starbucks: ${d["Number of Starbucks"]}`); // Tooltip text

    svg.append("text")
        .attr("transform", "translate(430,400)")
        .attr("dy", "3em")
        .style("text-anchor", "middle")
        .style('color','black')
        .style("text-anchor", "middle")
        .text("Population");

        svg.append("text")
        .attr("transform", "translate(100, 200) rotate(-90) ")
        .attr("dy", "-3em")
        .style("text-anchor", "middle")
        .style('color','black')
        .text("Number of Starbucks stores");
        });