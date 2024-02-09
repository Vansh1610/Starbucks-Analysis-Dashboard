const parseCoordinates = (coordinates) => {
    try {
        const latitude = coordinates.split(",")[0];
        const longitude = coordinates.split(",")[1];
        return [longitude, latitude];
    } catch (error) {
        console.error('Error parsing coordinates:', error);
        return null;
    }
};


d3.json("../geojson/california.geojson").then(function(geojson) {

    d3.csv("../data/income.csv").then(function(incomeData) {

        const incomeDictionary = {};
        incomeData.forEach(function(d) {
            incomeDictionary[d.County] = +d["Median Household Income"];
        });


        const svg = d3.select("svg")
            .attr("width", 800)
            .attr("height", 700);

   
        const projection = d3.geoAlbers()
            .center([0, 36.77])
            .rotate([120, 0])
            .parallels([32, 38])
            .scale(3500)
            .translate([800 / 2 + 40, 400]);


        const colorScale = d3.scaleSequential(d3.interpolateGreens)
            .domain([d3.min(incomeData, d => +d["Median Household Income"]), d3.max(incomeData, d => +d["Median Household Income"])]);


        const path = d3.geoPath().projection(projection);

  
        svg.selectAll("path")
            .data(geojson.features)
            .enter().append("path")
            .attr("d", path)
            .attr("fill", d => colorScale(incomeDictionary[d.properties.CountyName]))
            .attr("stroke", "#fff")                    
            .on("mouseover", (d) =>{
                var e = window.event;

                var posX = e.clientX;
                var posY = e.clientY;

        

                const income = incomeDictionary[d.properties.CountyName] || 'N/A';
                console.log(income)
                const tooltipContent = `<strong>${d.properties.CountyName}</strong><br>Income: $${income}`;
                d3.select("#map-tooltip")
                    .html(tooltipContent)
                    .style("left", (posX-500) + "px")
                    .style("top", (posY-100) + "px")
                    .style("display", "block")
                    .style('font-size', '18px');
            })
            .on("mouseout", function () {
              
                d3.select("#map-tooltip").style("display", "none");
            });


        d3.csv("../data/income_point.csv").then(function(pointData) {

            svg.selectAll("circle")
                .data(pointData)
                .enter().append("circle")
                .attr("cx", function(d) {
                   
                    const [longitude, latitude] = parseCoordinates(d.coordinates);
                    return projection([longitude, latitude])[0];
                })
                .attr("cy", function(d) {
            
                    const [longitude, latitude] = parseCoordinates(d.coordinates);
                    return projection([longitude, latitude])[1];
                })
                .attr("r", 2)
                .attr("fill", "#922cf8")
                .attr("opacity", 0.4) 
        });

    
        const legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", "translate(20, 20)"); 

        const legendScale = d3.scaleLinear()
            .domain([d3.min(incomeData, d => +d["Median Household Income"]), d3.max(incomeData, d => +d["Median Household Income"])])
            .range([0, 200]);

      
        const legendRects = legend.selectAll("g.legend-rect")
            .data(colorScale.ticks(6))
            .enter().append("g")
            .attr("class", "legend-rect")
            .attr("transform", (d, i) => `translate(0, ${i * 40})`);

        legendRects.append("rect")
            .attr("height", 20)
            .attr("width", 20)
            .attr("x", 0)
            .attr("fill", d => colorScale(d));

        legendRects.append("text")
            .attr("x", 30) 
            .attr("y", (d, i) => i ) 
            .attr("dy", "0.32em")
            .style("text-anchor", "start")
            .text(d => d);

    });
});