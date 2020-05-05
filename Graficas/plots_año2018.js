
d3.csv("Neumonias_2018.csv").then((data) => {

    console.log(data);
  
  
  // Trace1 for the Greek Data
  var trace1 = {
    x: data.map(object => object.Causa_defuncion),
    y: data.map(object => object.Total_defunciones_2018),
    text: data.map(object => object.Causa_defuncion),
    name: "Defunciones",
    type: "bar",

  };
  
   
  
  // data trace1
  var data = [trace1];
  
  // Apply the group bar mode to the layout
  var layout = {
    title: "Defunciones 2018",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100  
    }
  };
  
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot3", data, layout);
  
  });
  