/*****************************************************  DATA.JSON  ***********************************************/
// men var

var mAgua = 0;
var mBcn = 0;
var mBcs = 0;
var mCamp = 0;
var mCoah = 0;
var mColi = 0;
var mChia = 0;
var mChih = 0;
var mCdmx = 0;
var mDura = 0;
var mGuan = 0;
var mGuer = 0;
var mHida = 0;
var mJali = 0;
var mEdoM = 0;
var mMich = 0;
var mMore = 0;
var mNaya = 0;
var mNL = 0;
var mOaxa = 0;
var mPueb = 0;
var mQuer = 0;
var mQRoo = 0;
var mSLP = 0;
var mSina = 0;
var mSono = 0;
var mTaba = 0;
var mTama = 0;
var mTlax = 0;
var mVera = 0;
var mYuca = 0;
var mZaca = 0;

var mVeraUci = 0;

// Women var

var wAgua = 0;
var wBcn = 0;
var wBcs = 0;
var wCamp = 0;
var wCoah = 0;
var wColi = 0;
var wChia = 0;
var wChih = 0;
var wCdmx = 0;
var wDura = 0;
var wGuan = 0;
var wGuer = 0;
var wHida = 0;
var wJali = 0;
var wEdoM = 0;
var wMich = 0;
var wMore = 0;
var wNaya = 0;
var wNL = 0;
var wOaxa = 0;
var wPueb = 0;
var wQuer = 0;
var wQRoo = 0;
var wSLP = 0;
var wSina = 0;
var wSono = 0;
var wTaba = 0;
var wTama = 0;
var wTlax = 0;
var wVera = 0;
var wYuca = 0;
var wZaca = 0;

var wVeraUci = 0;

for (var i = 0; i < DATA.length; i++) {
  
  if (DATA[i].SEXO == "Hombre" && DATA[i].UCI == "Si"){
  if  (DATA[i].ENTIDAD_UM == "VERACRUZ DE IGNACIO DE LA LLAVE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mVeraUci += 1;  }
   }
  else if (DATA[i].SEXO == "Hombre" ){
  if (DATA[i].ENTIDAD_UM == "AGUASCALIENTES" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mAgua += 1;  }
  else if (DATA[i].ENTIDAD_UM == "BAJA CALIFORNIA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mBcn += 1;  }
  else if (DATA[i].ENTIDAD_UM == "BAJA CALIFORNIA SUR" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mBcs += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CAMPECHE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mCamp += 1;  }
  else if (DATA[i].ENTIDAD_UM == "COAHUILA DE ZARAGOZA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mCoah += 1;  }
  else if (DATA[i].ENTIDAD_UM == "COLIMA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mColi += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CHIAPAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mChia += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CHIHUAHUA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mChih += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CIUDAD DE MÉXICO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mCdmx += 1;  }
  else if (DATA[i].ENTIDAD_UM == "DURANGO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mDura += 1;  }
  else if (DATA[i].ENTIDAD_UM == "GUANAJUATO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mGuan += 1;  }
  else if (DATA[i].ENTIDAD_UM == "GUERRERO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mGuer += 1;  }
  else if (DATA[i].ENTIDAD_UM == "HIDALGO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mHida += 1;  }
  else if (DATA[i].ENTIDAD_UM == "JALISCO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mJali += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MÉXICO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mEdoM += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MICHOACÁN DE OCAMPO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mMich += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MORELOS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mMore += 1;  }
  else if (DATA[i].ENTIDAD_UM == "NAYARIT" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mNaya += 1;  }
  else if (DATA[i].ENTIDAD_UM == "NUEVO LEÓN" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mNL += 1;  }
  else if (DATA[i].ENTIDAD_UM == "OAXACA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mOaxa += 1;  }
  else if (DATA[i].ENTIDAD_UM == "PUEBLA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mPueb += 1;  }
  else if (DATA[i].ENTIDAD_UM == "QUERÉTARO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mQuer += 1;  }
  else if (DATA[i].ENTIDAD_UM == "QUINTANA ROO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mQRoo += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SAN LUIS POTOSÍ" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mSLP += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SINALOA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mSina += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SONORA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mSono += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TABASCO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mTaba += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TAMAULIPAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mTama += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TLAXCALA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mTlax += 1;  }
  else if (DATA[i].ENTIDAD_UM == "VERACRUZ DE IGNACIO DE LA LLAVE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mVera += 1;  }
  else if (DATA[i].ENTIDAD_UM == "YUCATÁN" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mYuca += 1;  }
  else if (DATA[i].ENTIDAD_UM == "ZACATECAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){mZaca += 1;  }


  } //end men
  else if (DATA[i].SEXO == "Mujer" && DATA[i].UCI == "Si"){if (DATA[i].ENTIDAD_UM == "VERACRUZ DE IGNACIO DE LA LLAVE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wVeraUci += 1;  }}
  else if (DATA[i].SEXO == "Mujer") {
  if (DATA[i].ENTIDAD_UM == "AGUASCALIENTES" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wAgua += 1;  }
  else if (DATA[i].ENTIDAD_UM == "BAJA CALIFORNIA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wBcn += 1;  }
  else if (DATA[i].ENTIDAD_UM == "BAJA CALIFORNIA SUR" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wBcs += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CAMPECHE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wCamp += 1;  }
  else if (DATA[i].ENTIDAD_UM == "COAHUILA DE ZARAGOZA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wCoah += 1;  }
  else if (DATA[i].ENTIDAD_UM == "COLIMA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wColi += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CHIAPAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wChia += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CHIHUAHUA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wChih += 1;  }
  else if (DATA[i].ENTIDAD_UM == "CIUDAD DE MÉXICO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wCdmx += 1;  }
  else if (DATA[i].ENTIDAD_UM == "DURANGO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wDura += 1;  }
  else if (DATA[i].ENTIDAD_UM == "GUANAJUATO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wGuan += 1;  }
  else if (DATA[i].ENTIDAD_UM == "GUERRERO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wGuer += 1;  }
  else if (DATA[i].ENTIDAD_UM == "HIDALGO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wHida += 1;  }
  else if (DATA[i].ENTIDAD_UM == "JALISCO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wJali += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MÉXICO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wEdoM += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MICHOACÁN DE OCAMPO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wMich += 1;  }
  else if (DATA[i].ENTIDAD_UM == "MORELOS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wMore += 1;  }
  else if (DATA[i].ENTIDAD_UM == "NAYARIT" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wNaya += 1;  }
  else if (DATA[i].ENTIDAD_UM == "NUEVO LEÓN" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wNL += 1;  }
  else if (DATA[i].ENTIDAD_UM == "OAXACA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wOaxa += 1;  }
  else if (DATA[i].ENTIDAD_UM == "PUEBLA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wPueb += 1;  }
  else if (DATA[i].ENTIDAD_UM == "QUERÉTARO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wQuer += 1;  }
  else if (DATA[i].ENTIDAD_UM == "QUINTANA ROO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wQRoo += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SAN LUIS POTOSÍ" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wSLP += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SINALOA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wSina += 1;  }
  else if (DATA[i].ENTIDAD_UM == "SONORA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wSono += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TABASCO" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wTaba += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TAMAULIPAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wTama += 1;  }
  else if (DATA[i].ENTIDAD_UM == "TLAXCALA" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wTlax += 1;  }
  else if (DATA[i].ENTIDAD_UM == "VERACRUZ DE IGNACIO DE LA LLAVE" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wVera += 1;  }
  else if (DATA[i].ENTIDAD_UM == "YUCATÁN" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wYuca += 1;  }
  else if (DATA[i].ENTIDAD_UM == "ZACATECAS" && DATA[i].RESULTADO == "Positivo SARS-CoV-2"){wZaca += 1;  }
  } //end women
}  //end main for


/*****************************************************  WOMEN  ***********************************************/


// An array of cities and their locations
var women = [
  {
    name: "Aguascalientes",
    location: [21.8823395, -102.2825928],
    confirmedCases: wAgua    
  },
  {
    name: "Baja California Norte",
    location: [32.6278114, -115.4544601],
    confirmedCases: wBcn
    //uciCases:
  },
  {
    name: "Baja California Sur",
    location: [24.1443691, -110.300499],
    confirmedCases: wBcs
  },
  {
    name: "Campeche",
    location: [19.8438606, -90.5255432],
    confirmedCases: wCamp
  },
  {
    name: "Coahuila",
    location: [25.4232101, -101.0053024],
    confirmedCases: wCoah
  }, 
  {
    name: "Colima",
    location: [19.2433, -103.725],
    confirmedCases: wColi
  }, 
  {
    name: "Chiapas",
    location: [16.7597294, -93.1130829],
    confirmedCases: wChia
  },
  {
    name: "Chihuahua",
    location: [28.6352806, -106.0888901],
    confirmedCases: wChih
  },
  {
    name: "Ciudad de México",
    location: [19.4284706, -99.1276627],
    confirmedCases: wCdmx
  },
  {
    name: "Durango",
    location: [24.0203209, -104.6575623],
    confirmedCases: wDura
  },
  {
    name: "Guanajuato",
    location: [21.1290798, -101.6737366],
    confirmedCases: wGuan
  },
  {
    name: "Guerrero",
    location: [17.5506001, -99.5057831],
    confirmedCases: wGuer
  },
  {
    name: "Hidalgo",
    location: [20.1169701, -98.7332916],
    confirmedCases: wHida
  },
  {
    name: "Jalisco",
    location: [20.6668205, -103.3918228],
    confirmedCases: wJali
  },
  {
    name: "Estado de México",
    location: [19.2878609, -99.6532364],
    confirmedCases: wEdoM
  },
  {
    name: "Michoacán",
    location: [19.7007809, -101.184433],
    confirmedCases: wMich
  },
  {
    name: "Morelos",
    location: [18.9260998, -99.230751],
    confirmedCases: wMore
  },
  {
    name: "Nayarit",
    location: [21.50951, -104.8956909],
    confirmedCases: wNaya
  },
  {
    name: "Nuevo León",
    location: [25.6750698, -100.3184662],
    confirmedCases: wNL
  },
  {
    name: "Oaxaca",
    location: [17.0654202, -96.7236481],
    confirmedCases: wOaxa
  },
  {
    name: "Puebla",
    location: [19.0379295, -98.2034607],
    confirmedCases: wPueb
  },
  {
    name: "Querétaro",
    location: [20.5880604, -100.3880615],
    confirmedCases: wQuer
  },
  {
    name: "Quintana Roo",
    location: [21.1742897, -86.8465576],
    confirmedCases: wQRoo
  },
  {
    name: "San Luis Potosí",
    location: [22.1498203, -100.9791565],
    confirmedCases: wSLP
  },
  {
    name: "Sinaloa",
    location: [24.7903194, -107.3878174],
    confirmedCases: wSina
  },
  {
    name: "Sonora",
    location: [29.1026001, -110.9773178],
    confirmedCases: wSono
  },
  {
    name: "Tabasco",
    location: [17.9868908, -92.9302826],
    confirmedCases: wTaba
  },
  {
    name: "Tamaulipas",
    location: [23.7417393, -99.1459885],
    confirmedCases: wTama
  },
  {
    name: "Tlaxcala",
    location: [19.3122, -98.2394],
    confirmedCases: wTlax
  }, 
  {
    name: "Veracruz",
    location: [19.5312405, -96.9158936],
    confirmedCases: wVera,
    uciCases: wVeraUci
  },
  {
    name: "Yucatán",
    location: [20.9753704, -89.6169586],
    confirmedCases: wYuca
  },
  {
    name: "Zacatecas",
    location: [22.7709, -102.583],
    confirmedCases: wZaca
  }  
];

// An array which will be used to store created cityMarkers
var womenMarkers = [];



for (var i = 0; i < women.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  womenMarkers.push(
    L.circle(women[i].location, {color: "purple",
    fillColor: "purple",
    fillOpacity: 0.75,
    radius: 20000}).bindPopup("<h1>Women</h1> <h2>" + women[i].name + "</h2> <hr> <h3>Confirmed cases:   " + women[i].confirmedCases + "</h3> <br> <h3>UCI cases: " + women[i].uciCases + "</h3>")
  );
}


// Add all the Markers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var womenLayer = L.layerGroup(womenMarkers);


/*****************************************************   MEN   ***********************************************/


var men = [
  {
    name: "Aguascalientes",
    location: [21.8823395, -102.2825928],
    confirmedCases: mAgua
  },
  {
    name: "Baja California Norte",
    location: [32.6278114, -115.4544601],
    confirmedCases: mBcn
  },
  {
    name: "Baja California Sur",
    location: [24.1443691, -110.300499],
    confirmedCases: mBcs
  },
  {
    name: "Campeche",
    location: [19.8438606, -90.5255432],
    confirmedCases: mCamp
  },
  {
    name: "Coahuila",
    location: [25.4232101, -101.0053024],
    confirmedCases: mCoah
  }, 
  {
    name: "Colima",
    location: [19.2433, -103.725],
    confirmedCases: mColi
  }, 
  {
    name: "Chiapas",
    location: [16.7597294, -93.1130829],
    confirmedCases: mChia
  },
  {
    name: "Chihuahua",
    location: [28.6352806, -106.0888901],
    confirmedCases: mChih
  },
  {
    name: "Ciudad de México",
    location: [19.4284706, -99.1276627],
    confirmedCases: mCdmx
  },
  {
    name: "Durango",
    location: [24.0203209, -104.6575623],
    confirmedCases: mDura
  },
  {
    name: "Guanajuato",
    location: [21.1290798, -101.6737366],
    confirmedCases: mGuan
  },
  {
    name: "Guerrero",
    location: [17.5506001, -99.5057831],
    confirmedCases: mGuer
  },
  {
    name: "Hidalgo",
    location: [20.1169701, -98.7332916],
    confirmedCases: mHida
  },
  {
    name: "Jalisco",
    location: [20.6668205, -103.3918228],
    confirmedCases: mJali
  },
  {
    name: "Estado de México",
    location: [19.2878609, -99.6532364],
    confirmedCases: mEdoM
  },
  {
    name: "Michoacán",
    location: [19.7007809, -101.184433],
    confirmedCases: mMich
  },
  {
    name: "Morelos",
    location: [18.9260998, -99.230751],
    confirmedCases: mMore
  },
  {
    name: "Nayarit",
    location: [21.50951, -104.8956909],
    confirmedCases: mNaya
  },
  {
    name: "Nuevo León",
    location: [25.6750698, -100.3184662],
    confirmedCases: mNL
  },
  {
    name: "Oaxaca",
    location: [17.0654202, -96.7236481],
    confirmedCases: mOaxa
  },
  {
    name: "Puebla",
    location: [19.0379295, -98.2034607],
    confirmedCases: mPueb
  },
  {
    name: "Querétaro",
    location: [20.5880604, -100.3880615],
    confirmedCases: mQuer
  },
  {
    name: "Quintana Roo",
    location: [21.1742897, -86.8465576],
    confirmedCases: mQRoo
  },
  {
    name: "San Luis Potosí",
    location: [22.1498203, -100.9791565],
    confirmedCases: mSLP
  },
  {
    name: "Sinaloa",
    location: [24.7903194, -107.3878174],
    confirmedCases: mSina
  },
  {
    name: "Sonora",
    location: [29.1026001, -110.9773178],
    confirmedCases: mSono
  },
  {
    name: "Tabasco",
    location: [17.9868908, -92.9302826],
    confirmedCases: mTaba
  },
  {
    name: "Tamaulipas",
    location: [23.7417393, -99.1459885],
    confirmedCases: mTama
  },
  {
    name: "Tlaxcala",
    location: [19.3122, -98.2394],
    confirmedCases: mTlax
  }, 
  {
    name: "Veracruz",
    location: [19.5312405, -96.9158936],
    confirmedCases: mVera,
    uciCases: mVeraUci
  },
  {
    name: "Yucatán",
    location: [20.9753704, -89.6169586],
    confirmedCases: mYuca
  },
  {
    name: "Zacatecas",
    location: [22.7709, -102.583],
    confirmedCases: mZaca
  }  
];

// An array which will be used to store created cityMarkers
var menMarkers = [];



for (var i = 0; i < men.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  menMarkers.push(
    L.circle(men[i].location, {color: "blue",
    fillColor: "blue",
    fillOpacity: 0.75,
    radius: 20000}).bindPopup("<h1>Men</h1> <h2>" + men[i].name + "</h2> <hr> <h3>Confirmed cases: " + men[i].confirmedCases + "</h3> <br> <h3>UCI cases: " + men[i].uciCases + "</h3>")
  );
}


// Add all the Markers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var menLayer = L.layerGroup(menMarkers);


/*****************************************************  Layers  ***********************************************/


// Define variables for our tile layers
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});
 
// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Women: womenLayer,
  Men : menLayer
};
 
// Create map object and set default layers
var myMap = L.map("map", {
  center: [23.7417393, -99.1459885],
  zoom: 5,
  layers: [light, womenLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
