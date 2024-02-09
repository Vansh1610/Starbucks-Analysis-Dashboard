   
        const svgWidth = 800;
        const svgHeight = 600;

        const svg = d3.select("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);


        const projection = d3.geoAlbers()
            .center([0, 36.77])
            .rotate([120, 0])
            .parallels([32, 38])
            .scale(3500)
            .translate([svgWidth / 2  + 40, svgHeight / 2]);

    
        const path = d3.geoPath().projection(projection);

     
        function findPolygonCenter(coordinates) {
    let sumX = 0;
    let sumY = 0;
    let pointCount = 0;

    function flattenCoordinates(coords) {
        return coords.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenCoordinates(val) : val), []);
    }

    const flattenedCoordinates = flattenCoordinates(coordinates);

    for (let i = 0; i < flattenedCoordinates.length; i += 2) {
        sumX += flattenedCoordinates[i];
        sumY += flattenedCoordinates[i + 1];
        pointCount++;
    }

    const centerX = sumX / pointCount;
    const centerY = sumY / pointCount;

    return [centerX, centerY];
}

   
        d3.json("../geojson/california.geojson").then((geojsonData) => {

            svg.selectAll("path")
                .data(geojsonData.features)
                .enter().append("path")
                .attr("d", path)
                .attr("fill", "white")
                .attr("stroke", "black")
                .attr("stroke-width", 1.5);


            d3.csv("../data/data.csv").then((csvData) => {
     
                const starbucksData = {};
                csvData.forEach((row) => {
                    starbucksData[row.County] = +row["number of starbucks"];
                });

                svg.selectAll("circle")
                    .data(geojsonData.features)
                    .enter().append("circle")
                    .filter(d => starbucksData.hasOwnProperty(d.properties.CountyName))
                    .attr("cx", d => {
                        const center = findPolygonCenter(d.geometry.coordinates);
                        return projection(center)[0];
                    })
                    .attr("cy", d => {
                        const center = findPolygonCenter(d.geometry.coordinates);
                        if (d.properties.CountyName === 'Ventura') {
                                return projection(center)[1] - 20;
                            } else if (d.properties.CountyName === 'Los Angeles') {
                                return projection(center)[1] - 40;
                            } else {
                                return projection(center)[1];
                            }
                                                        
                        
                    })
                    .attr("r", d => {
                        const radius = Math.sqrt(starbucksData[d.properties.CountyName]) ;
                        return radius;
                    })
                    .attr("fill", "#006439")
                    .attr("opacity", 0.8)
                    .append("title")
                    .text(d => `${d.properties.CountyName}\nStarbucks Count: ${starbucksData[d.properties.CountyName]}`);
            });
        });