d3.csv("../data/Starbucks_World_Stats.csv").then(function(data) {
    data.forEach(function(d) {
        d.Country = d.Country;
        d.no_Starbucks = +d.no_Starbucks;
    });

    var margin = { top: 100, left: 80, bottom: 140, right: 50 },
        initialWidth = 900,
        initialHeight = 600,
        width = initialWidth - margin.left - margin.right,
        height = initialHeight - margin.top - margin.bottom;

    var svg = d3.select('#bar_charts_2').append('svg')
        .attr('width', initialWidth)
        .attr('height', initialHeight)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height, 0]);

        const lollipopTooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #d4d4d4")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("font-size", "12px");

    const barTooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid #d4d4d4")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("font-size", "12px");

        function update() {

            const nCountries = 5;
        
            let filteredData;
        

            filteredData = data.sort((a, b) => d3.ascending(a.no_Starbucks, b.no_Starbucks)).slice(0, nCountries);

            filteredData=filteredData.sort((a, b) => d3.descending(a.no_Starbucks, b.no_Starbucks))

        
            x.domain(filteredData.map(d => d.Country));
            y.domain([0, d3.max(filteredData, d => d.no_Starbucks)]);
        
            svg.selectAll("rect").remove();
            svg.selectAll(".y-axis").remove();
            svg.selectAll("line").remove();
            svg.selectAll("circle").remove();
        

            if (window.innerWidth < 1200) {
        
                svg.selectAll("line")
                    .data(filteredData, d => d.Country)
                    .join("line")
                    .attr("x1", d => x(d.Country) + x.bandwidth() / 2)
                    .attr("y1", d => y(d.no_Starbucks))
                    .attr("x2", d => x(d.Country) + x.bandwidth() / 2)
                    .attr("y2", height)
                    .attr("stroke", "#006439");
            
                svg.selectAll("circle")
                    .data(filteredData, d => d.Country)
                    .join("circle")
                    .attr("cx", d => x(d.Country) + x.bandwidth() / 2)
                    .attr("cy", d => y(d.no_Starbucks))
                    .attr("r", 5)
                    .attr("fill", "#006439");
            
                svg.select(".x-axis").remove();
            
                svg.append("g")
                    .attr("class", "x-axis")
                    .attr("transform", "translate(0," + height + ")")
                    .transition()
                    .duration(800)
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-.8em")
                    .attr("dy", ".15em")
                    .style("font-size", "12px") 
                    .attr("transform", "rotate(-65)");
            
                svg.selectAll("line")
                    .data(filteredData, d => d.Country)
                    .join("line")
                    .attr("x1", d => x(d.Country) + x.bandwidth() / 2)
                    .attr("y1", d => y(d.no_Starbucks))
                    .attr("x2", d => x(d.Country) + x.bandwidth() / 2)
                    .attr("y2", height)
                    .attr("stroke", "#006439")
                    .on("mouseover", function (event, d) {
                       
                        lollipopTooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
            
                        lollipopTooltip.html(` 
                                <strong>${d.Country}</strong><br>
                                Starbucks: ${d.no_Starbucks}<br>
                                Population: ${d.Population}<br>
                                Starbucks per million inhabitants: ${d.Starbucks_per_million_inhabitants}`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    })
                    .on("mouseout", function (event, d) {
                        
                        lollipopTooltip.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });
            }
            
            else {
               
                svg.selectAll("circle").remove();
        
                svg.selectAll("rect")
                    .data(filteredData, d => d.Country)
                    .join("rect")
                    .on("mouseover", function (event, d) {
                        barTooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
        
                            barTooltip.html(` 
                                <strong>${d.Country}</strong><br>
                                Starbucks: ${d.no_Starbucks}<br>
                                Population: ${d.Population}<br>
                                Starbucks per million inhabitants: ${d.Starbucks_per_million_inhabitants}`)
                            .style("left", (event.pageX + 5) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    })
                    .on("mouseout", function (event, d) {
            
                        barTooltip.transition()
                            .duration(500)
                            .style("opacity", 0);
                    })
                    .attr("x", d => x(d.Country))
                    .attr("height", 0)
                    .attr("y", height)
                    .attr("fill", "#006439")
                    .transition()
                    .duration(800)
                    .attr("y", d => y(d.no_Starbucks))
                    .attr("height", d => height - y(d.no_Starbucks))
                    .attr("width", x.bandwidth())

        
                svg.select(".x-axis").remove();
        
                svg.append("g")
                    .attr("class", "x-axis")
                    .attr("transform", "translate(0," + height + ")")
                    .transition()
                    .duration(800)
                    .call(d3.axisBottom(x))
                    .selectAll("text")
                    .style("text-anchor", "end")
                    .attr("dx", "-.8em")
                    .attr("dy", ".15em")
                    .style("font-size", "14px")
                    .attr("transform", "rotate(-65)");

                    
                
        
            }
        
            svg.append("g")
                .attr("class", "y-axis")
                .call(d3.axisLeft(y));
        
            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Number of Starbucks stores");
        
            svg.selectAll(".title").remove();
        
            svg.append("text")
                .attr("class", "title")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("text-decoration", "underline")
                .style("font-size", "17px")
                .text("Starbucks Statistics - Bottom 5 Countries");
        
            svg.select(".x-axis").selectAll("text")
                .transition()
                .duration(800)
                .attr("transform", "rotate(-30)")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .style("font-size", "14px");
        window.addEventListener('resize', update);

        const tooltipDiv = d3.select("body").append("div")
            .attr("id", "tooltip")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "1px solid #d4d4d4")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("font-size", "12px");
    }

    update();


});
