
d3.json('../geojson/los-angeles-county.geojson').then(geojson => {
    const width = 800;
    const height = 600;

    const svg = d3.select('#LA')
        .append('svg')
        .attr('width', width)
        .attr('height', height);


    
    var group = svg.append("g");
    group.attr("transform", "translate(0,600) scale(1,-1)")
    console.log('GeoJSON:', geojson);

    const projection = d3.geoIdentity().fitSize([width, height], geojson);

    console.log('Projection:', projection);

    const path = d3.geoPath().projection(projection);

    group.append("path")
    .datum(geojson)
    .attr("d", path)
    .attr("fill", "#E2E2E2")
    .attr("stroke", "black")



    Promise.all([
        d3.csv('../data/AllCoffeeFinalLosAngeles.csv'),
        d3.csv('../data/output_file.csv')
    ]).then(([storeData, Starbucks]) => {
        console.log('Store Data:', storeData);
        console.log('Starbucks Data:', Starbucks);

        const parseCoordinates = (coordinates) => {
            try {
                const { latitude, longitude } = JSON.parse(coordinates.replace(/'/g, '"'));
                return [longitude, latitude];
            } catch (error) {
                console.error('Error parsing coordinates:', error);
                return null;
            }
        };


        group.selectAll("circle")
            .data(storeData)
            .enter()
            .append("circle")
            .filter(d => {
                const storeCoordinates = parseCoordinates(d.coordinates);
                return storeCoordinates && d3.geoContains(geojson, storeCoordinates);
            })
            .attr("cx", d => {
                const storeCoordinates = parseCoordinates(d.coordinates);
                return storeCoordinates ? projection(storeCoordinates)[0] : null;
            })
            .attr("cy", d => {
                const storeCoordinates = parseCoordinates(d.coordinates);
                return storeCoordinates ? projection(storeCoordinates)[1] : null;
            })
            .attr("r", 3)
            .attr("fill", "#c8b88a")
            .on("click", d => {
               
              
                    displayAlias(d.alias);
               
            });

            
        const parseCoordinates2 = (coordinates) => {
            try {
                const [latitude, longitude] = coordinates.split(',').map(parseFloat);
                return [longitude, latitude];
            } catch (error) {
                console.error('Error parsing coordinates:', error);
                return null;
            }
        };

        group.selectAll(".newDots")
            .data(Starbucks)
            .enter()
            .append("circle")
            .filter(d => {
                const storeCoordinates = parseCoordinates2(d.Coordinates);
                return storeCoordinates && d3.geoContains(geojson, storeCoordinates);
            })
            .attr("cx", d => {
                const storeCoordinates = parseCoordinates2(d.Coordinates);
                return storeCoordinates ? projection(storeCoordinates)[0] : null;
            })
            .attr("cy", d => {
                const storeCoordinates = parseCoordinates2(d.Coordinates);
                return storeCoordinates ? projection(storeCoordinates)[1] : null;
            })
            .attr("r", 3)
            .attr("fill", "#006439")
            .on("click", d => {
                if (d.alias) {
                    displayAlias(d.alias);
                } else {
                    console.log("Alias is undefined for this Starbucks.");
                }
            });

            

        

        const legend = svg.append("g")
            .attr("class", "legend")
            .attr("transform", "translate(20,20)");

        legend.append("circle")
            .attr("cx", 600)
            .attr("cy", 500)
            .attr("r", 6)
            .attr("fill", "#c8b88a");

        legend.append("text")
            .attr("x", 610)
            .attr("y", 505)
            .text("Coffee Stores");

        legend.append("circle")
            .attr("cx", 600)
            .attr("cy", 520)
            .attr("r", 6)
            .attr("fill", "#006439");

        legend.append("text")
            .attr("x", 610)
            .attr("y", 525)
            .text("Starbucks Stores");
    });
});
