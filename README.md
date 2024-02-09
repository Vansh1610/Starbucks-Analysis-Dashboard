# Starbucks Analysis

A data visualization project focused on drawing valuable insights about Starbucks. The dashboard aids strategic decision-making for Starbucks Executives and competitor analysts. By examining factors such as population and median income, we provide insights to pinpoint optimal locations for new stores, aligning with population trends and store density.


## Table of Contents
- [Team members](#team-members)
- [Dataset](#dataset)
- [List of Visualisation](#list-of-visualisation)
- [Steps to run the demonstration](#steps-to-run-the-demonstration)
- [How to navigate the website](#how-to-navigate-the-website)
- [Dashboard layout](#dashboard-layout)
- [References](#references)




## Dataset

The data used in this infographic is sourced from the data.world and Github repository:

1. Starbucks in California City Statistics 
2. Starbucks in California County Statistics 
3. Starbucks in California
4. Starbucks World Statistics 
5. All Coffee Shops Los Angeles




## List of Visualisation

Name                | Type | Libraries used
--------------------|------|---------------
Number of stores - Top and Bottom countries| Bar Chart | d3.js
Starbucks in Los Angeles| Map | Mapbox
Population vs number of store| Scatterplot | d3.js
Number of stores in California| Proportional symbol| d3.js
Median Income in relation to number of stores| Cloropleth and dot map| d3.js
Los Angeles Starbucks and normal coffee shops| dot map| d3.js


## Steps to run the demonstration

Clone the Github repository. Run the following commands to run the demonstration.

* npm install 

* npm run serve 

## How to navigate the website
The homepage consists of the following:

* Top-left button - 'DATA' links to the dataset source
* Top-right button - 'Find a Store' links to the Mapbox used for finding the store
* 5 buttons in the bottom, linking to the following visualizations respectively:
    1. Bar Charts : Top & Bottom Performing Countries
    2. Scatter Plot : Population Density Vs Number of Stores
    3. Proportional Symbol : Number of Stores in California
    4. Choropleth & Dot Map : Median Income Vs No. of Stores
    5. Dot Map : Starbucks vs Other Coffee Stores



## Dashboard layout
This section provides an overview of the dashboard layout and the effective use of Bootstrap and CSS for styling. 

The homepage serves as an intuitive interface, offering users
a quick overview of the analysis. It provides convenient links to access other
graphs. Furthermore, the page incorporates seamless animations and hover
effects, making it visually appealing.


Bootstrap version 5.3.2 is integrated into the page. Bootstrap classes such as  `mt-5`, `mb-5`, and more are used to create a responsive and visually appealing layout.

In addition to Bootstrap, custom CSS styles have been applied to create a visually appealing and organized page layout.The background of the pages has been set to Starbucks green for all pages to ensure uniformity in design. The text and charts have custom styles applied to them. These styles define the appearance, layout, and spacing of the chart areas.The headers have custom styles for text color and font family. 

Appropriate d3 color scales and color schemes were used to enhance visualizations and the overall design of the dashboard.




## References

1. Labs
2. https://d3js.org/ 
3. https://getbootstrap.com/ 
4. https://www.w3schools.com/css/
5. https://scholar.harvard.edu/files/nithingeereddy/files/starbucks_case_analysis.pdf
6. https://storymaps.arcgis.com/stories/e236e40cc259480d936c480ad982a2ad
7. https://vu-d.gitbook.io/journey/data-analytics/complete-data-set-on-coffee-shop-footprints-in-los-angeles-county
8. https://data.world/alice-c/starbucks
9. https://github.com/devmode-on/Starbucks-Landing-Page








