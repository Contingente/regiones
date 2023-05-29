;(function(w){
	w = w || {};
	var datos = [
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"011",provinciaNombre:"Iquique",comunaCodigo:"01101",comunaNombre:"Iquique",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"011",provinciaNombre:"Iquique",comunaCodigo:"01107",comunaNombre:"Alto Hospicio",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"014",provinciaNombre:"Tamarugal",comunaCodigo:"01401",comunaNombre:"Pozo Almonte",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"014",provinciaNombre:"Tamarugal",comunaCodigo:"01402",comunaNombre:"Camiña",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"014",provinciaNombre:"Tamarugal",comunaCodigo:"01403",comunaNombre:"Colchane",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"014",provinciaNombre:"Tamarugal",comunaCodigo:"01404",comunaNombre:"Huara",},
		{regionCodigo:"01",regionNombre:"Tarapacá", regionNombreCorto:"TPCA",provinciaCodigo:"014",provinciaNombre:"Tamarugal",comunaCodigo:"01405",comunaNombre:"Pica",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"021",provinciaNombre:"Antofagasta",comunaCodigo:"02101",comunaNombre:"Antofagasta",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"021",provinciaNombre:"Antofagasta",comunaCodigo:"02102",comunaNombre:"Mejillones",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"021",provinciaNombre:"Antofagasta",comunaCodigo:"02103",comunaNombre:"Sierra Gorda",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"021",provinciaNombre:"Antofagasta",comunaCodigo:"02104",comunaNombre:"Taltal",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"022",provinciaNombre:"El Loa",comunaCodigo:"02201",comunaNombre:"Calama",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"022",provinciaNombre:"El Loa",comunaCodigo:"02202",comunaNombre:"Ollagüe",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"022",provinciaNombre:"El Loa",comunaCodigo:"02203",comunaNombre:"San Pedro de Atacama",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"023",provinciaNombre:"Tocopilla",comunaCodigo:"02301",comunaNombre:"Tocopilla",},
		{regionCodigo:"02",regionNombre:"Antofagasta", regionNombreCorto:"ANTOF",provinciaCodigo:"023",provinciaNombre:"Tocopilla",comunaCodigo:"02302",comunaNombre:"María Elena",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"031",provinciaNombre:"Copiapó",comunaCodigo:"03101",comunaNombre:"Copiapó",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"031",provinciaNombre:"Copiapó",comunaCodigo:"03102",comunaNombre:"Caldera",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"031",provinciaNombre:"Copiapó",comunaCodigo:"03103",comunaNombre:"Tierra Amarilla",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"032",provinciaNombre:"Chañaral",comunaCodigo:"03201",comunaNombre:"Chañaral",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"032",provinciaNombre:"Chañaral",comunaCodigo:"03202",comunaNombre:"Diego de Almagro",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"033",provinciaNombre:"Huasco",comunaCodigo:"03301",comunaNombre:"Vallenar",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"033",provinciaNombre:"Huasco",comunaCodigo:"03302",comunaNombre:"Alto del Carmen",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"033",provinciaNombre:"Huasco",comunaCodigo:"03303",comunaNombre:"Freirina",},
		{regionCodigo:"03",regionNombre:"Atacama", regionNombreCorto:"ATCMA",provinciaCodigo:"033",provinciaNombre:"Huasco",comunaCodigo:"03304",comunaNombre:"Huasco",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04101",comunaNombre:"La Serena",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04102",comunaNombre:"Coquimbo",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04103",comunaNombre:"Andacollo",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04104",comunaNombre:"La Higuera",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04105",comunaNombre:"Paiguano",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"041",provinciaNombre:"Elqui",comunaCodigo:"04106",comunaNombre:"Vicuña",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"042",provinciaNombre:"Choapa",comunaCodigo:"04201",comunaNombre:"Illapel",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"042",provinciaNombre:"Choapa",comunaCodigo:"04202",comunaNombre:"Canela",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"042",provinciaNombre:"Choapa",comunaCodigo:"04203",comunaNombre:"Los Vilos",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"042",provinciaNombre:"Choapa",comunaCodigo:"04204",comunaNombre:"Salamanca",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"043",provinciaNombre:"Limarí",comunaCodigo:"04301",comunaNombre:"Ovalle",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"043",provinciaNombre:"Limarí",comunaCodigo:"04302",comunaNombre:"Combarbalá",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"043",provinciaNombre:"Limarí",comunaCodigo:"04303",comunaNombre:"Monte Patria",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"043",provinciaNombre:"Limarí",comunaCodigo:"04304",comunaNombre:"Punitaqui",},
		{regionCodigo:"04",regionNombre:"Coquimbo", regionNombreCorto:"COQ",provinciaCodigo:"043",provinciaNombre:"Limarí",comunaCodigo:"04305",comunaNombre:"Río Hurtado",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05101",comunaNombre:"Valparaíso",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05102",comunaNombre:"Casablanca",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05103",comunaNombre:"Concón",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05104",comunaNombre:"Juan Fernández",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05105",comunaNombre:"Puchuncaví",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05107",comunaNombre:"Quintero",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"051",provinciaNombre:"Valparaíso",comunaCodigo:"05109",comunaNombre:"Viña del Mar",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"052",provinciaNombre:"Isla de Pascua",comunaCodigo:"05201",comunaNombre:"Isla de Pascua",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"053",provinciaNombre:"Los Andes",comunaCodigo:"05301",comunaNombre:"Los Andes",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"053",provinciaNombre:"Los Andes",comunaCodigo:"05302",comunaNombre:"Calle Larga",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"053",provinciaNombre:"Los Andes",comunaCodigo:"05303",comunaNombre:"Rinconada",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"053",provinciaNombre:"Los Andes",comunaCodigo:"05304",comunaNombre:"San Esteban",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"054",provinciaNombre:"Petorca",comunaCodigo:"05401",comunaNombre:"La Ligua",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"054",provinciaNombre:"Petorca",comunaCodigo:"05402",comunaNombre:"Cabildo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"054",provinciaNombre:"Petorca",comunaCodigo:"05403",comunaNombre:"Papudo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"054",provinciaNombre:"Petorca",comunaCodigo:"05404",comunaNombre:"Petorca",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"054",provinciaNombre:"Petorca",comunaCodigo:"05405",comunaNombre:"Zapallar",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"055",provinciaNombre:"Quillota",comunaCodigo:"05501",comunaNombre:"Quillota",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"055",provinciaNombre:"Quillota",comunaCodigo:"05502",comunaNombre:"Calera",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"055",provinciaNombre:"Quillota",comunaCodigo:"05503",comunaNombre:"Hijuelas",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"055",provinciaNombre:"Quillota",comunaCodigo:"05504",comunaNombre:"La Cruz",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"055",provinciaNombre:"Quillota",comunaCodigo:"05506",comunaNombre:"Nogales",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05601",comunaNombre:"San Antonio",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05602",comunaNombre:"Algarrobo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05603",comunaNombre:"Cartagena",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05604",comunaNombre:"El Quisco",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05605",comunaNombre:"El Tabo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"056",provinciaNombre:"San Antonio",comunaCodigo:"05606",comunaNombre:"Santo Domingo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05701",comunaNombre:"San Felipe",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05702",comunaNombre:"Catemu",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05703",comunaNombre:"Llaillay",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05704",comunaNombre:"Panquehue",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05705",comunaNombre:"Putaendo",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"057",provinciaNombre:"San Felipe de Aconcagua",comunaCodigo:"05706",comunaNombre:"Santa María",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"058",provinciaNombre:"Marga Marga",comunaCodigo:"05801",comunaNombre:"Quilpué",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"058",provinciaNombre:"Marga Marga",comunaCodigo:"05802",comunaNombre:"Limache",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"058",provinciaNombre:"Marga Marga",comunaCodigo:"05803",comunaNombre:"Olmué",},
		{regionCodigo:"05",regionNombre:"Valparaíso", regionNombreCorto:"VALPO",provinciaCodigo:"058",provinciaNombre:"Marga Marga",comunaCodigo:"05804",comunaNombre:"Villa Alemana",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06101",comunaNombre:"Rancagua",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06102",comunaNombre:"Codegua",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06103",comunaNombre:"Coinco",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06104",comunaNombre:"Coltauco",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06105",comunaNombre:"Doñihue",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06106",comunaNombre:"Graneros",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06107",comunaNombre:"Las Cabras",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06108",comunaNombre:"Machalí",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06109",comunaNombre:"Malloa",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06110",comunaNombre:"Mostazal",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06111",comunaNombre:"Olivar",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06112",comunaNombre:"Peumo",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06113",comunaNombre:"Pichidegua",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06114",comunaNombre:"Quinta de Tilcoco",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06115",comunaNombre:"Rengo",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06116",comunaNombre:"Requínoa",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"061",provinciaNombre:"Cachapoal",comunaCodigo:"06117",comunaNombre:"San Vicente",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06201",comunaNombre:"Pichilemu",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06202",comunaNombre:"La Estrella",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06203",comunaNombre:"Litueche",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06204",comunaNombre:"Marchihue",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06205",comunaNombre:"Navidad",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"062",provinciaNombre:"Cardenal Caro",comunaCodigo:"06206",comunaNombre:"Paredones",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06301",comunaNombre:"San Fernando",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06302",comunaNombre:"Chépica",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06303",comunaNombre:"Chimbarongo",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06304",comunaNombre:"Lolol",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06305",comunaNombre:"Nancagua",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06306",comunaNombre:"Palmilla",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06307",comunaNombre:"Peralillo",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06308",comunaNombre:"Placilla",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06309",comunaNombre:"Pumanque",},
		{regionCodigo:"06",regionNombre:"Libertador General Bernardo O'Higgins", regionNombreCorto:"LGBO",provinciaCodigo:"063",provinciaNombre:"Colchagua",comunaCodigo:"06310",comunaNombre:"Santa Cruz",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07101",comunaNombre:"Talca",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07102",comunaNombre:"Constitución",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07103",comunaNombre:"Curepto",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07104",comunaNombre:"Empedrado",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07105",comunaNombre:"Maule",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07106",comunaNombre:"Pelarco",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07107",comunaNombre:"Pencahue",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07108",comunaNombre:"Río Claro",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07109",comunaNombre:"San Clemente",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"071",provinciaNombre:"Talca",comunaCodigo:"07110",comunaNombre:"San Rafael",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"072",provinciaNombre:"Cauquenes",comunaCodigo:"07201",comunaNombre:"Cauquenes",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"072",provinciaNombre:"Cauquenes",comunaCodigo:"07202",comunaNombre:"Chanco",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"072",provinciaNombre:"Cauquenes",comunaCodigo:"07203",comunaNombre:"Pelluhue",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07301",comunaNombre:"Curicó",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07302",comunaNombre:"Hualañé",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07303",comunaNombre:"Licantén",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07304",comunaNombre:"Molina",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07305",comunaNombre:"Rauco",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07306",comunaNombre:"Romeral",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07307",comunaNombre:"Sagrada Familia",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07308",comunaNombre:"Teno",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"073",provinciaNombre:"Curicó",comunaCodigo:"07309",comunaNombre:"Vichuquén",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07401",comunaNombre:"Linares",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07402",comunaNombre:"Colbún",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07403",comunaNombre:"Longaví",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07404",comunaNombre:"Parral",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07405",comunaNombre:"Retiro",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07406",comunaNombre:"San Javier",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07407",comunaNombre:"Villa Alegre",},
		{regionCodigo:"07",regionNombre:"Maule", regionNombreCorto:"MAULE",provinciaCodigo:"074",provinciaNombre:"Linares",comunaCodigo:"07408",comunaNombre:"Yerbas Buenas",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08101",comunaNombre:"Concepción",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08102",comunaNombre:"Coronel",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08103",comunaNombre:"Chiguayante",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08104",comunaNombre:"Florida",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08105",comunaNombre:"Hualqui",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08106",comunaNombre:"Lota",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08107",comunaNombre:"Penco",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08108",comunaNombre:"San Pedro de la Paz",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08109",comunaNombre:"Santa Juana",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08110",comunaNombre:"Talcahuano",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08111",comunaNombre:"Tomé",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"081",provinciaNombre:"Concepción",comunaCodigo:"08112",comunaNombre:"Hualpén",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08201",comunaNombre:"Lebu",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08202",comunaNombre:"Arauco",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08203",comunaNombre:"Cañete",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08204",comunaNombre:"Contulmo",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08205",comunaNombre:"Curanilahue",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08206",comunaNombre:"Los Alamos",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"082",provinciaNombre:"Arauco",comunaCodigo:"08207",comunaNombre:"Tirúa",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08301",comunaNombre:"Los Angeles",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08302",comunaNombre:"Antuco",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08303",comunaNombre:"Cabrero",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08304",comunaNombre:"Laja",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08305",comunaNombre:"Mulchén",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08306",comunaNombre:"Nacimiento",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08307",comunaNombre:"Negrete",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08308",comunaNombre:"Quilaco",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08309",comunaNombre:"Quilleco",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08310",comunaNombre:"San Rosendo",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08311",comunaNombre:"Santa Bárbara",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08312",comunaNombre:"Tucapel",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08313",comunaNombre:"Yumbel",},
		{regionCodigo:"08",regionNombre:"Biobío", regionNombreCorto:"BBIO",provinciaCodigo:"083",provinciaNombre:"Biobío",comunaCodigo:"08314",comunaNombre:"Alto Biobío",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09101",comunaNombre:"Temuco",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09102",comunaNombre:"Carahue",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09103",comunaNombre:"Cunco",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09104",comunaNombre:"Curarrehue",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09105",comunaNombre:"Freire",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09106",comunaNombre:"Galvarino",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09107",comunaNombre:"Gorbea",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09108",comunaNombre:"Lautaro",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09109",comunaNombre:"Loncoche",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09110",comunaNombre:"Melipeuco",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09111",comunaNombre:"Nueva Imperial",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09112",comunaNombre:"Padre Las Casas",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09113",comunaNombre:"Perquenco",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09114",comunaNombre:"Pitrufquén",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09115",comunaNombre:"Pucón",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09116",comunaNombre:"Saavedra",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09117",comunaNombre:"Teodoro Schmidt",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09118",comunaNombre:"Toltén",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09119",comunaNombre:"Vilcún",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09120",comunaNombre:"Villarrica",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"091",provinciaNombre:"Cautín",comunaCodigo:"09121",comunaNombre:"Cholchol",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09201",comunaNombre:"Angol",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09202",comunaNombre:"Collipulli",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09203",comunaNombre:"Curacautín",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09204",comunaNombre:"Ercilla",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09205",comunaNombre:"Lonquimay",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09206",comunaNombre:"Los Sauces",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09207",comunaNombre:"Lumaco",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09208",comunaNombre:"Purén",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09209",comunaNombre:"Renaico",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09210",comunaNombre:"Traiguén",},
		{regionCodigo:"09",regionNombre:"La Araucanía", regionNombreCorto:"ARAUC",provinciaCodigo:"092",provinciaNombre:"Malleco",comunaCodigo:"09211",comunaNombre:"Victoria",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10101",comunaNombre:"Puerto Montt",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10102",comunaNombre:"Calbuco",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10103",comunaNombre:"Cochamó",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10104",comunaNombre:"Fresia",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10105",comunaNombre:"Frutillar",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10106",comunaNombre:"Los Muermos",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10107",comunaNombre:"Llanquihue",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10108",comunaNombre:"Maullín",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"101",provinciaNombre:"Llanquihue",comunaCodigo:"10109",comunaNombre:"Puerto Varas",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10201",comunaNombre:"Castro",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10202",comunaNombre:"Ancud",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10203",comunaNombre:"Chonchi",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10204",comunaNombre:"Curaco de Vélez",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10205",comunaNombre:"Dalcahue",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10206",comunaNombre:"Puqueldón",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10207",comunaNombre:"Queilén",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10208",comunaNombre:"Quellón",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10209",comunaNombre:"Quemchi",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"102",provinciaNombre:"Chiloé",comunaCodigo:"10210",comunaNombre:"Quinchao",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10301",comunaNombre:"Osorno",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10302",comunaNombre:"Puerto Octay",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10303",comunaNombre:"Purranque",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10304",comunaNombre:"Puyehue",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10305",comunaNombre:"Río Negro",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10306",comunaNombre:"San Juan de la Costa",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"103",provinciaNombre:"Osorno",comunaCodigo:"10307",comunaNombre:"San Pablo",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"104",provinciaNombre:"Palena",comunaCodigo:"10401",comunaNombre:"Chaitén",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"104",provinciaNombre:"Palena",comunaCodigo:"10402",comunaNombre:"Futaleufú",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"104",provinciaNombre:"Palena",comunaCodigo:"10403",comunaNombre:"Hualaihué",},
		{regionCodigo:"10",regionNombre:"Los Lagos", regionNombreCorto:"LAGOS",provinciaCodigo:"104",provinciaNombre:"Palena",comunaCodigo:"10404",comunaNombre:"Palena",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"111",provinciaNombre:"Coihaique",comunaCodigo:"11101",comunaNombre:"Coihaique",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"111",provinciaNombre:"Coihaique",comunaCodigo:"11102",comunaNombre:"Lago Verde",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"112",provinciaNombre:"Aisén",comunaCodigo:"11201",comunaNombre:"Aisén",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"112",provinciaNombre:"Aisén",comunaCodigo:"11202",comunaNombre:"Cisnes",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"112",provinciaNombre:"Aisén",comunaCodigo:"11203",comunaNombre:"Guaitecas",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"113",provinciaNombre:"Capitán Prat",comunaCodigo:"11301",comunaNombre:"Cochrane",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"113",provinciaNombre:"Capitán Prat",comunaCodigo:"11302",comunaNombre:"O'Higgins",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"113",provinciaNombre:"Capitán Prat",comunaCodigo:"11303",comunaNombre:"Tortel",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"114",provinciaNombre:"General Carrera",comunaCodigo:"11401",comunaNombre:"Chile Chico",},
		{regionCodigo:"11",regionNombre:"Aysén del General Carlos Ibáñez del Campo", regionNombreCorto:"AYSEN",provinciaCodigo:"114",provinciaNombre:"General Carrera",comunaCodigo:"11402",comunaNombre:"Río Ibáñez",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"121",provinciaNombre:"Magallanes",comunaCodigo:"12101",comunaNombre:"Punta Arenas",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"121",provinciaNombre:"Magallanes",comunaCodigo:"12102",comunaNombre:"Laguna Blanca",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"121",provinciaNombre:"Magallanes",comunaCodigo:"12103",comunaNombre:"Río Verde",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"121",provinciaNombre:"Magallanes",comunaCodigo:"12104",comunaNombre:"San Gregorio",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"122",provinciaNombre:"Antártica Chilena",comunaCodigo:"12201",comunaNombre:"Cabo de Hornos",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"122",provinciaNombre:"Antártica Chilena",comunaCodigo:"12202",comunaNombre:"Antártica",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"123",provinciaNombre:"Tierra del Fuego",comunaCodigo:"12301",comunaNombre:"Porvenir",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"123",provinciaNombre:"Tierra del Fuego",comunaCodigo:"12302",comunaNombre:"Primavera",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"123",provinciaNombre:"Tierra del Fuego",comunaCodigo:"12303",comunaNombre:"Timaukel",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"124",provinciaNombre:"Última Esperanza",comunaCodigo:"12401",comunaNombre:"Natales",},
		{regionCodigo:"12",regionNombre:"Magallanes y de la Antártica Chilena", regionNombreCorto:"MAG",provinciaCodigo:"124",provinciaNombre:"Última Esperanza",comunaCodigo:"12402",comunaNombre:"Torres del Paine",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13101",comunaNombre:"Santiago",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13102",comunaNombre:"Cerrillos",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13103",comunaNombre:"Cerro Navia",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13104",comunaNombre:"Conchalí",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13105",comunaNombre:"El Bosque",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13106",comunaNombre:"Estación Central",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13107",comunaNombre:"Huechuraba",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13108",comunaNombre:"Independencia",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13109",comunaNombre:"La Cisterna",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13110",comunaNombre:"La Florida",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13111",comunaNombre:"La Granja",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13112",comunaNombre:"La Pintana",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13113",comunaNombre:"La Reina",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13114",comunaNombre:"Las Condes",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13115",comunaNombre:"Lo Barnechea",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13116",comunaNombre:"Lo Espejo",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13117",comunaNombre:"Lo Prado",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13118",comunaNombre:"Macul",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13119",comunaNombre:"Maipú",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13120",comunaNombre:"Ñuñoa",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13121",comunaNombre:"Pedro Aguirre Cerda",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13122",comunaNombre:"Peñalolén",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13123",comunaNombre:"Providencia",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13124",comunaNombre:"Pudahuel",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13125",comunaNombre:"Quilicura",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13126",comunaNombre:"Quinta Normal",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13127",comunaNombre:"Recoleta",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13128",comunaNombre:"Renca",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13129",comunaNombre:"San Joaquín",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13130",comunaNombre:"San Miguel",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13131",comunaNombre:"San Ramón",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"131",provinciaNombre:"Santiago",comunaCodigo:"13132",comunaNombre:"Vitacura",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"132",provinciaNombre:"Cordillera",comunaCodigo:"13201",comunaNombre:"Puente Alto",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"132",provinciaNombre:"Cordillera",comunaCodigo:"13202",comunaNombre:"Pirque",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"132",provinciaNombre:"Cordillera",comunaCodigo:"13203",comunaNombre:"San José de Maipo",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"133",provinciaNombre:"Chacabuco",comunaCodigo:"13301",comunaNombre:"Colina",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"133",provinciaNombre:"Chacabuco",comunaCodigo:"13302",comunaNombre:"Lampa",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"133",provinciaNombre:"Chacabuco",comunaCodigo:"13303",comunaNombre:"Tiltil",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"134",provinciaNombre:"Maipo",comunaCodigo:"13401",comunaNombre:"San Bernardo",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"134",provinciaNombre:"Maipo",comunaCodigo:"13402",comunaNombre:"Buin",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"134",provinciaNombre:"Maipo",comunaCodigo:"13403",comunaNombre:"Calera de Tango",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"134",provinciaNombre:"Maipo",comunaCodigo:"13404",comunaNombre:"Paine",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"135",provinciaNombre:"Melipilla",comunaCodigo:"13501",comunaNombre:"Melipilla",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"135",provinciaNombre:"Melipilla",comunaCodigo:"13502",comunaNombre:"Alhué",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"135",provinciaNombre:"Melipilla",comunaCodigo:"13503",comunaNombre:"Curacaví",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"135",provinciaNombre:"Melipilla",comunaCodigo:"13504",comunaNombre:"María Pinto",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"135",provinciaNombre:"Melipilla",comunaCodigo:"13505",comunaNombre:"San Pedro",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"136",provinciaNombre:"Talagante",comunaCodigo:"13601",comunaNombre:"Talagante",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"136",provinciaNombre:"Talagante",comunaCodigo:"13602",comunaNombre:"El Monte",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"136",provinciaNombre:"Talagante",comunaCodigo:"13603",comunaNombre:"Isla de Maipo",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"136",provinciaNombre:"Talagante",comunaCodigo:"13604",comunaNombre:"Padre Hurtado",},
		{regionCodigo:"13",regionNombre:"Metropolitana de Santiago", regionNombreCorto:"RM",provinciaCodigo:"136",provinciaNombre:"Talagante",comunaCodigo:"13605",comunaNombre:"Peñaflor",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14101",comunaNombre:"Valdivia",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14102",comunaNombre:"Corral",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14103",comunaNombre:"Lanco",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14104",comunaNombre:"Los Lagos",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14105",comunaNombre:"Máfil",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14106",comunaNombre:"Mariquina",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14107",comunaNombre:"Paillaco",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"141",provinciaNombre:"Valdivia",comunaCodigo:"14108",comunaNombre:"Panguipulli",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"142",provinciaNombre:"Ranco",comunaCodigo:"14201",comunaNombre:"La Unión",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"142",provinciaNombre:"Ranco",comunaCodigo:"14202",comunaNombre:"Futrono",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"142",provinciaNombre:"Ranco",comunaCodigo:"14203",comunaNombre:"Lago Ranco",},
		{regionCodigo:"14",regionNombre:"Los Ríos", regionNombreCorto:"RIOS",provinciaCodigo:"142",provinciaNombre:"Ranco",comunaCodigo:"14204",comunaNombre:"Río Bueno",},
		{regionCodigo:"15",regionNombre:"Arica y Parinacota", regionNombreCorto:"AyP",provinciaCodigo:"151",provinciaNombre:"Arica",comunaCodigo:"15101",comunaNombre:"Arica",},
		{regionCodigo:"15",regionNombre:"Arica y Parinacota", regionNombreCorto:"AyP",provinciaCodigo:"151",provinciaNombre:"Arica",comunaCodigo:"15102",comunaNombre:"Camarones",},
		{regionCodigo:"15",regionNombre:"Arica y Parinacota", regionNombreCorto:"AyP",provinciaCodigo:"152",provinciaNombre:"Parinacota",comunaCodigo:"15201",comunaNombre:"Putre",},
		{regionCodigo:"15",regionNombre:"Arica y Parinacota", regionNombreCorto:"AyP",provinciaCodigo:"152",provinciaNombre:"Parinacota",comunaCodigo:"15202",comunaNombre:"General Lagos",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16101",comunaNombre:"Chillán",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16102",comunaNombre:"Bulnes",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16103",comunaNombre:"Chillán Viejo",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16104",comunaNombre:"El Carmen",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16105",comunaNombre:"Pemuco",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16106",comunaNombre:"Pinto",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16107",comunaNombre:"Quillón",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16108",comunaNombre:"San Ignacio",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"161",provinciaNombre:"Diguillín",comunaCodigo:"16109",comunaNombre:"Yungay",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16201",comunaNombre:"Quirihue",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16202",comunaNombre:"Cobquecura",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16203",comunaNombre:"Coelemu",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16204",comunaNombre:"Ninhue",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16205",comunaNombre:"Portezuelo",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16206",comunaNombre:"Ranquil",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"162",provinciaNombre:"Itata",comunaCodigo:"16207",comunaNombre:"Treguaco",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"163",provinciaNombre:"Punilla",comunaCodigo:"16301",comunaNombre:"San Carlos",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"163",provinciaNombre:"Punilla",comunaCodigo:"16302",comunaNombre:"Coihueco",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"163",provinciaNombre:"Punilla",comunaCodigo:"16303",comunaNombre:"Ñiquén",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"163",provinciaNombre:"Punilla",comunaCodigo:"16304",comunaNombre:"San Fabián",},
		{regionCodigo:"16",regionNombre:"Ñuble", regionNombreCorto:"NUBLE",provinciaCodigo:"163",provinciaNombre:"Punilla",comunaCodigo:"16305",comunaNombre:"San Nicolás",},
	];

	var RyC = {};
	RyC.getRegiones = function(opts){
		opts = opts || {};
		var resultado = [];
		var agregadas = [];
		datos.forEach(function(d){
			if(agregadas.indexOf(d.regionCodigo) < 0){
				agregadas.push(d.regionCodigo);
				resultado.push({
					codigo: d.regionCodigo,
					nombre: d.regionNombre,
					nombreCorto: d.regionNombreCorto,
				});
			}
		});
		var sort = opts.sort || "nombre";
		sort = sort in resultado[0] ? sort : "nombre";
		var sortDir = opts.sortDir*1 || 1;
		console.log("sortDir", sortDir);
		sortDir = [-1,1].indexOf(sortDir) > -1 ? sortDir : 1;
		console.log("sortDir Final", sortDir);

		return resultado.sort(function(a,b){ return a[sort] < b[sort] ? -1*sortDir : (a[sort] > b[sort] ? 1*sortDir : 0); });
	};
	RyC.getRegionesNombres = function(){
		return RyC.getRegiones().map(function(r){ return r.nombre; });
	};
	RyC.getRegionesNombresCortos = function(){
		return RyC.getRegiones().map(function(r){ return r.nombreCorto; });
	};
	RyC.getRegionesCodigos = function(){
		return RyC.getRegiones().map(function(r){ return r.codigo; });
	};
	RyC.getProvincias = function(codigosRegiones){
		codigosRegiones = codigosRegiones || [];
		if(!Array.isArray(codigosRegiones)){codigosRegiones = codigosRegiones.split(","); }
		var resultado = [];
		var agregadas = [];
		var filtrarRegiones = codigosRegiones.length > 0;
		datos.forEach(function(d){
			if( !!filtrarRegiones && codigosRegiones.indexOf(d.regionCodigo) < 0){ return; }
			if(agregadas.indexOf(d.provinciaCodigo) < 0){
				agregadas.push(d.provinciaCodigo);
				resultado.push({
					codigo: d.provinciaCodigo,
					nombre: d.provinciaNombre,
					regionCodigo: d.regionCodigo,
					regionNombre: d.regionNombre,
					regionNombreCorto: d.regionNombreCorto,
				});
			}
		});
		return resultado.sort(function(a,b){ return a.codigo < b.codigo ? -1 : (a.codigo > b.codigo ? 1 : 0); });
	};
	RyC.getComunas = function(codigosRegionesProvincias){
		codigosRegionesProvincias = codigosRegionesProvincias || [];
		if(!Array.isArray(codigosRegionesProvincias)){codigosRegionesProvincias = codigosRegionesProvincias.split(","); }
		var resultado = [];
		var agregadas = [];
		var filtrarRegiones = codigosRegionesProvincias.length > 0;
		datos.forEach(function(d){
			if( !!filtrarRegiones && codigosRegionesProvincias.indexOf(d.regionCodigo) < 0 && codigosRegionesProvincias.indexOf(d.provinciaCodigo) < 0 ){ return; }
			if(agregadas.indexOf(d.comunaCodigo) < 0){
				agregadas.push(d.comunaCodigo);
				resultado.push({
					codigo: d.comunaCodigo,
					nombre: d.comunaNombre,
					provinciaCodigo: d.provinciaCodigo,
					provinciaNombre: d.provinciaNombre,
					regionCodigo: d.regionCodigo,
					regionNombre: d.regionNombre,
					regionNombreCorto: d.regionNombreCorto,
				});
			}
		});
		return resultado;
	}
	RyC.getArbol = function(){
		var resultado = {};
		datos.forEach(function(d){
			if( !(d.regionCodigo in resultado)){
				resultado[d.regionCodigo] = {
					codigo: d.regionCodigo,
					nombre: d.regionNombre,
					nombreCorto: d.regionNombreCorto,
					provincias: {},
					comunas: {},
				};
			}
			if( !(d.provinciaCodigo in resultado[d.regionCodigo].provincias)){
				resultado[d.regionCodigo].provincias[d.provinciaCodigo] = {
					codigo: d.provinciaCodigo,
					nombre: d.provinciaNombre,
					comunas: {},
				};
			}
			if( !(d.comunaCodigo in resultado[d.regionCodigo].comunas)){
				resultado[d.regionCodigo].comunas[d.comunaCodigo] = {
					codigo: d.comunaCodigo,
					nombre: d.comunaNombre,
				};
			}
			if( !(d.comunaCodigo in resultado[d.regionCodigo].provincias[d.provinciaCodigo].comunas)){
				resultado[d.regionCodigo].provincias[d.provinciaCodigo].comunas[d.comunaCodigo] = {
					codigo: d.comunaCodigo,
					nombre: d.comunaNombre,
				};
			}
		});
		return resultado;
	}
	RyC.getDatos = function(){ return datos; }

	w.Regiones = RyC;

})(window);