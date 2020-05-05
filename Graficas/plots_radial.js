
data = [{
  type: 'scatterpolar',
  r: [1129,189,258,146,1404,1311,126],
  theta:['Diabetes','EPOC','ASMA', 'INMUSUPR', 'HIPERTENSION', 'OBESIDAD','RENAL_CRONICA','TABAQUISMO'],
  fill: 'toself'
}]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 2000]
    }
  },
  showlegend: false
}

Plotly.newPlot("plot2", data, layout)
