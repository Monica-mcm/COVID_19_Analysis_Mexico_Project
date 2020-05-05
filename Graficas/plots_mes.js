
d3.csv("Neumonias_2018_mes.csv").then((data) => {
 
  console.log(data);


// Trace1 for the neumonia data
var trace1 = {
  x: data.map(object => object.Mes_defuncion),
  y: data.map(object => object.Causa_defuncion),
  text: data.Mes_defuncion,
  name: "Neumonias 2018",
  type: "bar"
  
  //orientation: "h"
};

d3.csv("Casos_total_covid_ok.csv").then((data2) => {

  var data = [trace2];
  
 //// Trace 2 for the covid Data
  var trace2 = {
    x: data2.map(object => object.FECHA_DEF),
    y: data2.map(object => object.Total_casos),
    text: data2.FECHA_DEF,
    name: "Covid-19 2020",
    type: "bar"
    
  };


// data trace1
var data = [trace1,trace2];

// Apply the group bar mode to the layout
var layout = {
  title: "Defunciones causadas por diferentes neumonias 2018 vs covid-19 2020",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100,
    
  }
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

});
});
