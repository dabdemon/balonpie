var league_id = "1"; // 1 = Liga BBVA, 7 = Serie A, 8 = Bundesliga, 
					 // 9 = Liga Holandesa, 11 = Bundesliga Austria, 
					// 12 = Liga Belga, 13 = Liga Danesa, 14 = Liga Escocia, 
					// 15 = Liga Eslovena, 16 = Ligue 1 (Francia), 17 = Liga Griega
					// 18 = Liga Noruega, 19 = Liga Portuguesa, 20 = Liga Rumana
					// 21 = Liga Sudafricana, 22 = Liga Sueca, 24 = Liga Brasil
					// 31 = Liga Finlandia, 107 = CHAMPIONS LEAGUE
					// 69 = MLS (USA), 675 - Argentina


//key de widgets = 41d55642f6613d82dae41eac2ecc4d65
//key de pruebas = 177007e17672d129c6c750794630592e (incluye Premier League)
//key original = 721430254d3a0ca7684955899533eb08

var LigaBBVA = {
	//Liga BBVA (Spain) (2017) [LEAGUE 0]
	704143 : "01", // "MAL", //Málaga
	704134 : "02", //"ATH", //Athletic de Bilbao
	704147 : "03", //"SEV", //Sevilla
	704149 : "04", //"VCF", //Valencia
	704141 : "05", //"GRA", //Granada
	704138 : "06", //"DEP", //Deportivo
	704148 : "07", //Sporting de Gijón
	704140 : "08", //"ESP", //Español
	704139 : "09", //"EIB", //Eibar
	704144 : "10", //"RSO", //Real Sociedad
	704137 : "11", //"CEL", //Celta de Vigo
	710097 : "12", //"OSA", //Osasuna --
	704151 : "13", //"ALA", Alavés --
	704150 : "14", //"VIL", //Villareal
	704146 : "15", //"RMA", //Real Madrid
	704145 : "16", //Betis
	710098 : "17", //"LEG", Leganés --
	704135 : "18", //"ATM", //Atlético de Madrid
	704136 : "19", //"FCB", //Barça
	704142 : "20", //Las Palmas

	//Serie A (Italy) (2017) [LEAGUE 1]
	706182 : "01", // "EMP", //Empoli
	706191 : "02", //"ROM", //Roma
	706186 : "03", //"JUV", //Juventus
	706195 : "04", //"UDI", //Udinese
	706192 : "05", //"SAM", //Sampdoria
	706194 : "06", //"TOR", //Torino
	706183 : "07", //"FIO", //Fiorentina
	706184 : "08", //"GEN", //Genoa
	709864 : "09", //"CAG", //Cagliari
	706179 : "10", //"ATL", //Atalanta
	706185 : "11", //"INT", //Inter
	706193 : "12", //"SAS", //Sassuolo Calcio
	706189 : "13", //"NAP", //Napoli
	706181 : "14", //"CHI", //Chievo
	706187 : "15", //"LAZ", //Lazio
	706180 : "16", //"BOL", //Bologna
	709865 : "17", //"CRO", //Crotone
	706188 : "18", //"ACM", //Milan
	709866 : "19", //"PES", //Pescara
	706190 : "20", //"PAL", //Palermo

	//Bundesliga (Germany) (2017) [League 2]
	701941  : "01", // "Hamburger SV"
	701947  : "02", //"Schalke 04"
	701950 : "03", //SC Freiburg
	701944  : "04", //FC Ingolstadt 
	701937  : "05", // "Borussia Monchengladbach"
	701940  : "06", //"FC Augsburg"
	701936  : "07", //"Bayern Munchen"
	701946  : "08", //"Mainz 05"
	701945  : "09", //"Köln""
	701949  : "10", //"Wolfsburg"
	701939  : "11", //Eintracht Frankfurt
	701935  : "12", //B. Leverkusen
	701943  : "13", //Hoffenheim 
	701942  : "14", //Hertha BSC
	701934  : "15", //B. Dortmund
	701948  : "16", //Werder Bremen
	701938  : "17", //Darmstadt 98
	701951 : "18", //RB Leipzig
	//59 : dummy
	//60 : dummy

	//MLS (USA) (2016) [League 3]
	581486 : "01", //Kansas City Sporting
	581482 : "02", //Toronto FC
	581473 : "03", //Chicago Fire
	581480 : "04", //Orlando City
	581487 : "05", //Los Angeles Galaxy
	581492 : "06", //Vancouver Whitecaps
	581488 : "07", //Portland Timbers
	581477 : "08", //New England Revolution
	581489 : "09", //Real Salt Lake
	581483 : "10", //Colorado Rapids
	581490 : "11", //San Jose Earthquakes
	581484 : "12", //FC Dallas
	581478 : "13", //New York City
	581476 : "14", //Montreal Impact
	581474 : "15", //Columbus Crew
	581491 : "16", //Seattle Sounders
	581475 : "17", //DC United
	581481 : "18", //Philadelphia Union
	581479 : "19", //New York RB
	581485 : "20", //Houston Dynamo

	//Liga Nos (Portugal) - (2017) [League 4]
	707538 : "01", //Belenenses 
	707547 : "02", //Rio Ave
	707539 : "03", //Benfica
	707541 : "04", //Estoril
	707548 : "05", //Sporting Braga
	707544 : "06", //Nacional
	707545 : "07", //Paços de Ferreira
	707581 : "08", //Feirense
	707543 : "09", //Moreirense
	707537 : "10", //Arouca
	707552 : "11", //Vitória Setúbal
	707540 : "12", //Boavista
	707546 : "13", //Porto
	707551 : "14", //Vitória Guimarães
	707580 : "15", //Chaves
	707542 : "16", //Marítimo 
	707550 : "17", //Tondela
	707549 : "18", //Sporting CP
	//"99": Dummy
	//"100": Dummy
	//Premier League (England) - (2017) [League 5]
	702058 : "01", //Manchester United
	702063 : "02", //Tottenham Hotspur
	702054 : "03", //Everton
	702064 : "04", //Watford
	702050 : "05", //AFC Bournemouth
	703228: "06", //Hull City
	702055 : "07", //Leicester
	702061 : "08", //Sunderland
	702067 : "09", //Burnley
	702053 : "10", //Crystal Palace
	702052 : "11", //Chelsea
	702062 : "12", //Swansea City
	//210923 : "13", //NewCastle
	702068 : "13", //Middlesbrough
	702059 : "14", //Southampton
	702051 : "15", //Arsenal
	702066 : "16", //West Ham
	702060 : "17", //Stoke City
	702056 : "18", //Liverpool
	702065 : "19", //West Bromwich Albion
	702057 : "20", //Manchester City
	//Ligue 1 (France) [League 6]
	210445 : "01", //PSG
	210433 : "02", //Bastia
	210443 : "03", //Olympique Lyonnais
	210451 : "04", //Troyes
	210452 : "05", //Angers SCO
	210434 : "06", //Caen
	210448 : "07", //Stade de Reims
	210449 : "08", //Toulouse
	210440 : "09", //Montpellier
	210435 : "10", //Girondins Bordeaux
	210439 : "11", //Monaco
	210450 : "12", //Gazélec Ajaccio
	210446 : "13", //Rennes
	210438 : "14", //Lorient
	210441 : "15", //Nantes
	210447 : "16", //Saint Etienne
	210437 : "17", //Lille
	210442 : "18", //Nice
	210444 : "19", //Olympique Marsella
	210436 : "20", //Guingamp
	//Primera División Argentina [League 7]
	582087 : "01", //Sarmiento
	582088 : "02", //Vélez Sarsfield
	582103 : "03", //Atl.Tucumán
	582098 : "04", //Racing Club
	582100 : "05", //Temperley
	582093 : "06", //Boca Juniors
	582094 : "07", //Defensa y Justicia
	582102 : "08", //Unión Santa Fé
	582095 : "09", //Estudiantes La Plata
	582096 : "10", //Lanus
	582104 : "11", //CA Huracán
	582092 : "12", //Atlético Rafaela
	582091 : "13", //Argentinos Juniors
	582101 : "14", //Tigre
	582090 : "15", //Aldosivi
	582082 : "16", //Olimpo
	582085 : "17", //Rosario Central
	582080 : "18", //Godoy Cruz
	582081 : "19", //Independiente
	582077 : "20", //Belgrano
	582084 : "21", //River Plate
	582083 : "22", //Quilmes
	582078 : "23", //Colón
	582075 : "24", //Arsenal de Sarandi
	582076 : "25", //Banfield
	582079 : "26", //Gimnasia La Plata
	582089 : "27", //Patronato
	582086 : "28", //San Lorenzo
	582099 : "29", //San Martín San Juan
	582097 : "30", //Newell's Old Boys
	
};

var TeamShortName = {
	//Liga BBVA (Spain)
	704143 : "MAL", //Málaga
	704134 : "ATH", //Athletic de Bilbao
	704147 : "SEV", //Sevilla
	704149 : "VCF", //Valencia
	704141 : "GRA", //Granada
	704138 : "DEP", //Deportivo
	704148 : "SPO", //Sporting de Gijón
	704140 : "ESP", //Español
	704139 : "EIB", //Eibar
	704144 : "RSO", //Real Sociedad
	704137 : "CEL", //Celta de Vigo
	710097 : "OSA", //Osasuna --
	704151 : "ALA", //Alavés --
	704150 : "VIL", //Villareal
	704146 : "RMA", //Real Madrid
	704145 : "BET", //Betis
	710098 : "LEG", //Leganés --
	704135 : "ATM", //Atlético de Madrid
	704136 : "FCB", //Barça
	704142 : "UDL", //Las Palmas
	//Serie A (Italy)
	706182 : "EMP", //Empoli
	706191 : "ROM", //Roma
	706186 : "JUV", //Juventus
	706195 : "UDI", //Udinese
	706192 : "SAM", //Sampdoria
	706194 : "TOR", //Torino
	706183 : "FIO", //Fiorentina
	706184 : "GEN", //Genoa
	709864 : "CAG", //Cagliari
	706179 : "ATL", //Atalanta
	706185 : "INT", //Inter
	706193 : "SAS", //Sassuolo Calcio
	706189 : "NAP", //Napoli
	706181 : "CHI", //Chievo
	706187 : "LAZ", //Lazio
	706180 : "BOL", //Bologna
	709865 : "CRO", //Crotone
	706188 : "ACM", //Milan
	709866 : "PES", //Pescara
	706190 : "PAL", //Palermo
	//Bundesliga (Germany)
	701941 : "HSV", // "Hamburger SV"
	701947 : "S04", //"Schalke 04"
	701950 : "SCF", //"SC Freiburg"
	701944 : "ING", //FC Ingolstadt 
	701937 : "MON", // "Borussia Monchengladbach"
	701940 : "AUG", //"FC Augsburg"
	701936 : "BYM", //"Bayern Munchen"
	701946 : "M05", //"Mainz 05"
	701945 : "COL", //"Köln""
	701949 : "WOL", //"Wolfsburg"
	701939 : "EIN", //Eintracht Frankfurt
	701935 : "LEV", //B. Leverkusen
	701943 : "HOF", //Hoffenheim 
	701942 : "HER", //Hertha BSC
	701934 : "BVB", //B. Dortmund
	701948 : "BRE", //Werder Bremen
	701938  :"DAR", //Darmstadt 98
	701951 : "RBL", //RB Leipzig 
	//MLS (USA)
	581486 : "SKC", //Kansas City Sporting
	581482 : "TFC", //Toronto FC
	581473 : "CHI", //Chicago Fire
	581480 : "ORL", //Orlando City
	581487 : "LAG", //Los Angeles Galaxy
	581492 : "VAN", //Vancouver Whitecaps
	581488 : "POR", //Portland Timbers
	581477 : "NER", //New England Revolution
	581489 : "RSL", //Real Salt Lake
	581483 : "COL", //Colorado Rapids
	581490 : "SJE", //San Jose Earthquakes
	581484 : "FCD", //FC Dallas
	581478 : "NYC", //New York City
	581476 : "MTL", //Montreal Impact
	581474 : "CLB", //Columbus Crew
	581491 : "SEA", //Seattle Sounders
	581475 : "DCU", //DC United
	581481 : "PHI", //Philadelphia Union
	581479 : "NYR", //New York RB
	581485 : "HOU", //Houston Dynamo
	//Liga Nos (Portugal) - (2016)
	707538 : "BEL", //Belenenses 
	707547 : "RAV", //Rio Ave
	707539 : "BEN", //Benfica
	707541 : "EST", //Estoril
	707548 : "BRA", //Sporting Braga
	707544 : "NAC", //Nacional
	707545 : "PFE", //Paços de Ferreira
	707581 : "FEI", //Feirense
	707543 : "MOR", //Moreirense
	707537 : "ARO", //Arouca
	707552 : "SET", //Vitória Setúbal
	707540 : "BOA", //Boavista
	707546 : "POR", //Porto
	707551 : "GUI", //Vitória Guimarães
	707580 : "CHA", //Chaves
	707542 : "MAR", //Marítimo 
	707550 : "TON", //Tondela
	707549 : "SPO", //Sporting CP
	//Barclays Premier League (England)
	702058 : "MUN", //Manchester United
	702063 : "TOT", //Tottenham Hotspur
	702054 : "EVE", //Everton
	702064 : "WAT", //Watford
	702050 : "BOU", //AFC Bournemouth
	703228 : "HUL", //Hull City
	702055 : "LEI", //Leicester
	702061 : "SUN", //Sunderland
	702067 : "BUR", //Burnley
	702053 : "CRY", //Crystal Palace
	702052 : "CHE", //Chelsea
	702062 : "SWA", //Swansea City
	702068 : "MID", //Middlesbrough
	702059 : "SOU", //Southampton
	702051 : "ARS", //Arsenal
	702066 : "WHU", //West Ham
	702060 : "STK", //Stoke City
	702056 : "LIV", //Liverpool
	702065 : "WBA", //West Bromwich Albion
	702057 : "MCI", //Manchester City
	//Ligue 1 (France) 
	210445 : "PSG", //PSG (Parc des Princes)
	210433 : "SCB", //Bastia (Armand-Cesari-Furiani)
	210443 : "OL", //Olympique Lyonnais (Parc OL)
	210451 : "EST", //Troyes (de L'Aube)
	210452 : "SCO", //Angers SCO (Jean-Bouin)
	210434 : "SMC", //Caen (Michel d'Ornano)
	210448 : "SR", //Stade de Reims (Auguste Delaune)
	210449 : "TFC", //Toulouse (Stadium Municipal)
	210440 : "MH", //Montpellier (Stade de la Mosson)
	210435 : "GB", //Girondins Bordeaux (Stade Bordeaux-Atlantique)
	210439 : "ASM", //Monaco (Louis II)
	210450 : "GFA", //Gazélec Ajaccio (Ange Casanova)
	210446 : "SRF", //Rennes (Roazhon Park)
	210438 : "FCL", //Lorient (Moustoir)
	210441 : "FCN", //Nantes (La Beaujoire)
	210447 : "SE", //Saint Etienne (Geoffroy-Guichard)
	210437 : "OSC", //Lille (Stade Pierre Mauroy)
	210442 : "OGC", //Nice (Stade Pierre Mauroy)
	210444 : "OM", //Olympique Marsella (Vélodrome)
	210436 : "EAG", //Guingamp (Roudourou)
	//Primera División Argentina [League 7]
	582087 : "SAR", //Sarmiento (Eva Peron de Junin)
	582088 : "VEL", //Vélez Sarsfield
	582103 : "ATT", //Atl.Tucumán (Monumental Presidente Jose Fierro)
	582098 : "RAC", //Racing Club (Presidente Juan Domingo Peron, Avellaneda)
	582100 : "TEM", //Temperley (Alfredo Beranger)
	582093 : "BOC", //Boca Juniors (Alberto Jacinto Armando)
	582094 : "DYJ", //Defensa y Justicia (Norberto Tito Tomaghello)
	582102 : "UNI", //Unión Santa Fé (Leonardo Carol Madelon)
	582095 : "EST", //Estudiantes La Plata (Ciudad de La Plata)
	582096 : "LAN", //Lanus (Ciudad de Lanus - Nestor Diaz Perez)
	582104 : "HUR", //CA Huracán (Tomas Adolfo Duco)
	582092 : "RAF", //Atlético Rafaela (Nuevo Monumental, Rafaela)
	582091 : "ARG", //Argentinos Juniors (Diego Armando Maradona)
	582101 : "TIG", //Tigre (Jose Dellagiovanna)
	582090 : "ALD", //Aldosivi (Jose Maria Minella)
	582082 : "OLI", //Olimpo (Roberto Natalio Carminatti)
	582085 : "CEN", //Rosario Central (Dr. Lisandro de la Torre)
	582080 : "GOD", //Godoy Cruz (Malvinas Argentinas, Mendoza)
	582081 : "IND", //Independiente (Libertadores de America)
	582077 : "BEL", //Belgrano (Mario Alberto Kempes)
	582084 : "RIV", //River Plate (Monumental Antonio Vespucio Liberti)
	582083 : "QUI", //Quilmes (Estadio Centenario Dr. Jose Luis Meiszner)
	582078 : "COL", //Colón (Brigadier General Estanislao Lopez)
	582075 : "ARS", //Arsenal de Sarandi (Julio Humberto Grondona)
	582076 : "BAN", //Banfield (Florencio Sola)
	582079 : "GLP", //Gimnasia La Plata (Juan Carlos Zerillo)
	582089 : "PAT", //Patronato (Presbitero Bartolome Grella)
	582086 : "SLO", //San Lorenzo (Pedro Bidegain)
	582099 : "SMA", //San Martín San Juan (Ingeniero Hilario Sanchez)
	582097 : "NOB", //Newell's Old Boys (Marcelo Alberto Bielsa)
};

var FieldName = {
	//Liga BBVA (Spain)
	704143  : "La Rosaleda", //Málaga
	704134  : "San Mames", //Athletic de Bilbao
	704147  : "Ramon Sanchez Pizjuan", //Sevilla
	704149  : "Mestalla", //Valencia
	704141  : "Nuevo Los Carmenes", //Granada
	704138  : "Municipal Riazor", //Deportivo
	704148  : "Municipal El Molinon", //Sporting de Gijón
	704140  : "Power8 Stadium", //Español
	704139  : "Municipal de Ipurua", //Eibar
	704144  : "Anoeta", //Real Sociedad
	704137  : "Balaidos", //Celta de Vigo
	704150  : "El Madrigal", //Villareal
	704146  : "Santiago Bernabeu", //Real Madrid
	704145  : "Benito Villamarin", //Betis
	704135  : "Vicente Calderon", //Atlético de Madrid
	704136  : "Camp Nou", //Barça
	704142  : "Gran Canaria", //Las Palmas
	710097  : "El Sadar", //Osasuna
	704151  : "Mendizorroza", //Alavés
	710098  : "Estadio Municipal de Butarque", //Leganés
	//Serie A (Italy)
	706182 : "Carlo Castellani", //Empoli
	706191 : "Stadio Olimpico di Roma", //Roma
	706186 : "Juventus Stadium", //Juventus
	706195 : "Stadio Communale Friuli", //Udinese
	706192 : "Stadio Luigi Ferraris", //Sampdoria
	706194 : "Stadio Olimpico di Torino", //Torino
	706183 : "Stadio Artemio Franchi", //Fiorentina
	706184 : "Stadio Comunale Luigi Ferraris", //Genoa
	709864 : "Stadio Is Arenas", //Cagliari
	706179 : "Stadio Atleti Azzurri d'Italia", //Atalanta
	706185 : "Stadio Giuseppe Meazza", //Inter
	706193 : "Stadio Citta del Tricolore", //Sassuolo Calcio
	706189 : "San Paolo", //Napoli
	706181 : "Stadio Marc'Antonio Bentegodi", //Chievo
	706187 : "Stadio Olimpico", //Lazio
	706180 : "Stadio Renato Dall'Ara", //Bologna
	709865 : "Ezio Scida", //Crotone
	706188 : "San Siro", //Milan
	709866 : "Stadio Adriatico-Giovanni Cornacchia", //Pescara
	706190 : "Stadio Renzo Barbera", //Palermo
	//Bundesliga (Germany)
	701941 : "Imtech Arena", // "Hamburger SV"
	701947 : "Arena AufSchalke", //"Schalke 04"
	701950 : "Schwarzwald-Stadion", //"HSC Freiburg""
	701944  : "Audi-Sportpark", //FC Ingolstadt
	701937 : "Borussia-Park", // "Borussia Monchengladbach"
	701940 : "SGL Arena", //"FC Augsburg"
	701936 : "Allianz Arena", //"Bayern Munchen"
	701946 : "Coface Arena", //"Mainz 05"
	701945 : "RheinEnergie", //"Köln""
	701949 : "Volkswagen-Arena", //"Wolfsburg"
	701939 : "Commerzbank-Arena", //Eintracht Frankfurt
	701935 : "BayArena", //B. Leverkusen
	701943 : "Wirsol Rhein-Neckar-Arena", //Hoffenheim 
	701942 : "Olympiastadion Berlin", //Hertha BSC
	701934 : "Signal Iduna Park", //B. Dortmund
	701948 : "Weserstadion", //Werder Bremen
	701938  : "Stadion am Bollenfalltor", //Darmstadt 98
	701951 : "Red Bull Arena", //RB Leipzig 
	//MLS (USA)
	581486 : "Sporting Park", //Kansas City Sporting
	581482 : "BMO Field", //Toronto FC
	581473 : "Toyota Park", //Chicago Fire
	581480 : "ESPN Wide World of Sports Complex Field 17", //Orlando City
	581487 : "Stubhub Center", //Los Angeles Galaxy
	581492 : "BC Place", //Vancouver Whitecaps
	581488 : "Providence Park", //Portland Timbers
	581477 : "Gillette Stadium", //New England Revolution
	581489 : "Rio Tinto Stadium", //Real Salt Lake
	581483 : "Dick's Sporting Goods Park", //Colorado Rapids
	581490 : "Avaya Stadium", //San Jose Earthquakes
	581484 : "Toyota Stadium", //FC Dallas
	581478 : "Yankee Stadium", //New York City
	581476 : "Saputo Stadium", //Montreal Impact
	581474 : "Columbus Crew Stadium", //Columbus Crew
	581491 : "CenturyLink Field", //Seattle Sounders
	581475 : "Robert F. Kennedy Memorial Stadium", //DC United
	581481 : "PPL Park", //Philadelphia Union
	581479 : "Red Bull Arena", //New York RB
	581485 : "BBVA Compass Stadium", //Houston Dynamo
	//Liga Nos (Portugal)
	707538 : "Estadio do Restelo", //Belenenses 
	707547 : "Estadio do Rio Ave Futebol Clube", //Rio Ave
	707539 : "Estadio da Luz", //Benfica
	707541 : "Estadio Antonio Coimbra da Mota", //Estoril
	707548 : "Estadio AXA", //Sporting Braga
	707544 : "Estadio da Madeira", //Nacional
	707545 : "Estadio da Capital do Movel", //Paços de Ferreira
	707581 : "Estadio Marcolino de Castro", //Feirense
	707543 : "Comendador Joaquim Almeida Freitas", //Moreirense
	707537 : "Estadio Municipal de Arouca", //Arouca
	707552 : "Estadio do Bonfim", //Vitória Setúbal
	707540 : "Bessa Seculo XXI", //Boavista
	707546 : "Estadio Do Dragao", //Porto
	707551 : "Estadio Dom Afonso Henriques", //Vitória Guimarães
	707580 : "Manuel Branco Teixeira", //Chaves
	707542 : "Estadio dos Barreiros", //Marítimo 
	707550 : "Joao Cardoso", //Tondela
	707549 : "Jose Alvalade", //Sporting CP
	//Barclays Premier League (England)
	702058 : "Old Trafford", //Manchester United
	702063 : "White Hart Lane", //Tottenham Hotspur
	702054 : "Goodison Park", //Everton
	702064 : "Vicarage Road Stadium", //Watford
	702050 : "The Goldsands Stadium", //AFC Bournemouth
	703228 : "Kingston Communications Stadium", //Hull City
	702055 : "King Power Stadium", //Leicester
	702061 : "Stadium of Light", //Sunderland
	702067 : "Turf Moor", //Burnley
	702053 : "Selhurst Park", //Crystal Palace
	702052 : "Stamford Bridge", //Chelsea
	702062 : "Liberty Stadium", //Swansea City
	702068 : "Riverside Stadium", //Middlesbrough
	702059 : "St. Marys Stadium", //Southampton
	702051 : "Emirates Stadium", //Arsenal
	702066 : "Boleyn Ground", //West Ham
	702060 : "Britannia Stadium", //Stoke City
	702056 : "Anfield", //Liverpool
	702065 : "The Hawthorns", //West Bromwich Albion
	702057 : "Etihad Stadium", //Manchester City
	//Ligue 1 (France) 
	210445 : "Parc des Princes", //PSG 
	210433 : "Armand-Cesari-Furiani", //Bastia 
	210443 : "Parc OL", //Olympique Lyonnais 
	210451 : "de L'Aube", //Troyes 
	210452 : "Jean-Bouin", //Angers SCO 
	210434 : "Michel d'Ornano", //Caen
	210448 : "Auguste Delaune", //Stade de Reims
	210449 : "Stadium Municipal", //Toulouse
	210440 : "Stade de la Mosson", //Montpellier
	210435 : "Stade Bordeaux-Atlantique", //Girondins Bordeaux
	210439 : "Louis II", //Monaco
	210450 : "Ange Casanova", //Gazélec Ajaccio
	210446 : "Roazhon Park", //Rennes
	210438 : "Moustoir", //Lorient
	210441 : "La Beaujoire", //Nantes
	210447 : "Geoffroy-Guichard", //Saint Etienne
	210437 : "Stade Pierre Mauroy", //Lille
	210442 : "Stade Pierre Mauroy", //Nice
	210444 : "Velodrome", //Olympique Marsella
	210436 : "Roudourou", //Guingamp
	//Primera División Argentina [League 7]
	582087 : "Eva Peron de Junin", //Sarmiento 
	582088 : "Jose Amalfitani", //Vélez Sarsfield
	582103 : "Monumental Presidente Jose Fierro", //Atl.Tucumán 
	582098 : "Presidente Juan Domingo Peron, Avellaneda", //Racing Club 
	582100 : "Alfredo Beranger", //Temperley 
	582093 : "Alberto Jacinto Armando", //Boca Juniors 
	582094 : "Norberto Tito Tomaghello", //Defensa y Justicia 
	582102 : "Leonardo Carol Madelon", //Unión Santa Fé 
	582095 : "Ciudad de La Plata", //Estudiantes La Plata 
	582096 : "Ciudad de Lanus - Nestor Diaz Perez", //Lanus 
	582104 : "Tomas Adolfo Duco", //CA Huracán 
	582092 : "Nuevo Monumental, Rafaela", //Atlético Rafaela 
	582091 : "Diego Armando Maradona", //Argentinos Juniors 
	582101 : "Jose Dellagiovanna", //Tigre 
	582090 : "Jose Maria Minella", //Aldosivi 
	582082 : "Roberto Natalio Carminatti", //Olimpo 
	582085 : "Dr. Lisandro de la Torre", //Rosario Central 
	582080 : "Malvinas Argentinas, Mendoza", //Godoy Cruz 
	582081 : "Libertadores de America", //Independiente 
	582077 : "Mario Alberto Kempes", //Belgrano 
	582084 : "Monumental Antonio Vespucio Liberti", //River Plate 
	582083 : "Estadio Centenario Dr. Jose Luis Meiszner", //Quilmes 
	582078 : "Brigadier General Estanislao Lopez", //Colón 
	582075 : "Julio Humberto Grondona", //Arsenal de Sarandi 
	582076 : "Florencio Sola", //Banfield 
	582079 : "Juan Carlos Zerillo", //Gimnasia La Plata 
	582089 : "Presbitero Bartolome Grella", //Patronato 
	582086 : "Pedro Bidegain", //San Lorenzo 
	582099 : "Ingeniero Hilario Sanchez", //San Martín San Juan 
	582097 : "Marcelo Alberto Bielsa", //Newell's Old Boys 
};

//Formatting Functions
function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}


//////////////////////////	
//Retrieve user settings//
//////////////////////////

var options = JSON.parse(localStorage.getItem('options'));
//console.log('read options: ' + JSON.stringify(options));
if (options === null) options = {	'league_id' : "1", //Default to La Liga BBVA
								 'my_team' : "ATM", //Defaults to Atlético de Madrid
								 'timeline_pins' : "0" //Defaults to No Timeline Pins
};


//function getWorldCupMatchs() 
function getLigaBBVA(){
	
	var APIkey;
	//Get the league identifier from settings
	league_id = options.league_id;
	//Use the right API key based on league ID
	if (league_id == 10){APIkey = "177007e17672d129c6c750794630592e";}
	else{APIkey = "721430254d3a0ca7684955899533eb08";}
	
	//capture not available leagues
	if (league_id == 0){

		
		var status = "-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00";
		console.log("Not active league");
		console.log("Status: " + status);

		//send dummy values to Pebble
		Pebble.sendAppMessage({
			"local":"-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00",
			"visitor":"-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00",
			"local_goals":"-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00",
			"visitor_goals":"-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00",
			"live_minute":"-1|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00",
			"status":status,
			"round":"1",});
		
	}
	else{

		//Define variables
		var resultados = "";
		var response;
		//var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchs&key=721430254d3a0ca7684955899533eb08&league=1&round=&order=twin&twolegged=1&year=2014");
		var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=GMT&format=json&req=matchs&key="+APIkey+"&league="+league_id+"&round=&order=twin&twolegged=1");
		//var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?key=721430254d3a0ca7684955899533eb08&format=json&req=matchsday&country=es");
		var req = new XMLHttpRequest();
		var i;
		var j;
		var local;
		var visitor;
		var round;
		var local_goals;
		var visitor_goals;
		var status;
		var live_min;
		//create the "arrays"
		var arrLocal = "00";
		var arrVisitor= "00";
		var arrLocalGoals = "00";
		var arrVisitorGoals = "00";
		var arrLiveMinute = "00";
		var arrStatus;
		var arrSchedules;


		console.log(query);
		req.open('GET', query, true);
		req.onload = function(e) {
		if (req.readyState == 4) {
		  if (req.status == 200) {

			response = JSON.parse(req.responseText);
			if (response) {
			  var matches = response.match;

				//try to retrieve something to check if connection worked
				console.log("local: " + matches[0].local + " visitante: " + matches[0].visitor);
				//Get Static Data
				round = matches[0].round;
				//initialize the arrStatus to include the League ID as the first input
				if (league_id=="1"){arrStatus="00";}
				else if(league_id=="7"){arrStatus="01";}
				else if (league_id=="8"){arrStatus="02";}
				else if (league_id=="69"){arrStatus="03";}
				else if (league_id=="19"){arrStatus="04";}
				else if (league_id=="10"){arrStatus="05";}
				else if (league_id=="16"){arrStatus="06";}
				else if (league_id=="675"){arrStatus="07";}
				else{arrStatus = "-1";}

				//Read the values from the API
				for (i=0;i<matches.length;i++){
					local = LigaBBVA[matches[i].team1];
					visitor = LigaBBVA[matches[i].team2];

					local_goals = matches[i].local_goals;
					if (local_goals == "x"){local_goals="00";}
					if (local_goals.length == 1) {local_goals = "0"+local_goals;}

					visitor_goals = matches[i].visitor_goals;
					if (visitor_goals == "x"){visitor_goals="00";}
					if (visitor_goals.length == 1) {visitor_goals = "0"+visitor_goals;}

					status = matches[i].status;
					if (status=="0"){status="00";}
					else if(status=="1"){status="+1";}

					live_min = matches[i].live_minute;
					if (live_min===""){live_min="00";} //if blank set to 00
					if (live_min.length == 1) {live_min = "0"+live_min;} //ensure it is always 2 digits length
					//if (live_min.length > 2) {live_min = "99";} //truncate to 2 digits

					//TRIM to just 3 chars
					//local = local.substring(0, 3);
					//visitor = visitor.substring(0, 3);
					//UPPERCASE
					//local = local.toUpperCase();
					//visitor = visitor.toUpperCase();

					//Concatenate the results to the output chain
					resultados = resultados+ "\n" + local +" "+ matches[i].result + " "+ visitor + " (" + matches[i].live_minute+"')";

					//Create Timeline PIN (if user selected to create them)
					if ((typeof Pebble.getTimelineToken === 'function') && 
						((options.timeline_pins == "1") || 
						 ((options.timeline_pins == "2") && ((TeamShortName[matches[i].team1] == options.my_team) || 
															 (TeamShortName[matches[i].team2] == options.my_team))))) {

						var TimelineTime;
						var matchtime = (matches[i].hour) + ":" + matches[i].minute;
						TimelineTime = Left(matches[i].schedule,10) + "T" +  matchtime  + ":00Z";
						var shortLocal = TeamShortName[matches[i].team1];
						var shortVisitor = TeamShortName[matches[i].team2];
						var pinTitle = shortLocal+ " - " + shortVisitor;


						var estadio = FieldName[matches[i].team1];

						var d = new Date();
						var lastUpdate = d.toISOString(); 

						var State;
						var Subtitle;
						if (status==-1){State="pre-game";
									   Subtitle="Not Started";}
						else{State="in-game";
								//update the Subtitle for the timeline pin
								if(status==1){Subtitle="Final";}
								else{
									if (live_min == "Des"){Subtitle = "Half-Time";}
									else{Subtitle = "In game - " + live_min + "'";}
									}
							}


						//Concatenate the "Round" in the right language
						var jornada;
						if (league_id== "1"){jornada = "Liga BBVA - Jornada " + round;}
						else if (league_id =="7"){jornada = "Serie A - Giornate " + round;}
						else if (league_id =="8"){jornada = "Bundesliga - Spieltag " + round;}
						else if (league_id =="10"){jornada = "Barcleys Premier League - Round " + round;}
						else if (league_id =="16"){jornada = "Ligue 1 - Journee " + round;}
						else if (league_id =="19"){jornada = "Liga Nos - Jornada " + round;}
						else if (league_id =="69"){jornada = "MLS - Round " + round;}
						else if (league_id =="675"){jornada = "Primera División - Jornada " + round;}
						else {jornada = "Round " + round;}

						console.log("PIN ID: "+matches[i].id);
						console.log("TimelineTime: "+TimelineTime);
						console.log("pinTitle: "+pinTitle);

						var blnReminder;
						//Hardcode to Atlético de Madrid (best team ever) but will be customizable from settings.
						if ((shortLocal == options.my_team) || (shortVisitor == options.my_team)){
							blnReminder = true;
						}
						else{
							blnReminder = false;
						}

						createPIN(matches[i].id, TimelineTime, pinTitle, Subtitle, jornada, estadio, lastUpdate, 
								  shortVisitor,shortLocal, visitor_goals,local_goals,State, blnReminder, matches[i].local, matches[i].visitor, estadio );

					}

					arrLocal = arrLocal + "|" + local;
					arrVisitor = arrVisitor + "|" + visitor;
					arrLocalGoals = arrLocalGoals + "|" + local_goals;
					arrVisitorGoals = arrVisitorGoals + "|" + visitor_goals;
					arrLiveMinute = arrLiveMinute + "|" + live_min;
					arrStatus = arrStatus + "|" + status;
					//arrSchedules = arrSchedules + "|" + matches[i].schedule;
				}

				//fix bundesliga, Liga Nos and Primera División Argentina
				if (league_id==8 || league_id==19 || league_id == 675) {
					arrLocal = arrLocal + "|XX";
					arrVisitor = arrVisitor + "|XX";
					arrLocalGoals = arrLocalGoals + "|XX";
					arrVisitorGoals = arrVisitorGoals + "|XX";
					arrLiveMinute = arrLiveMinute + "|XX";
					//arrStatus = arrStatus + "|XX";
					//arrSchedules = arrSchedules + "|" + matches[i].schedule;
					}

				//fix odd scenarios with more than one match per round (will be better fixed in a later release)
				//if more matches than expected, truncate to 10 matches per week (for now...)
				
				if(league_id == 69){
					if (arrLocal.length > 32){
						arrLocal = arrLocal.substring(0, 32);
						arrVisitor = arrVisitor.substring(0, 32);
						arrLocalGoals = arrLocalGoals.substring(0, 32);
						arrVisitorGoals = arrVisitorGoals.substring(0, 32);
						arrLiveMinute = arrLiveMinute.substring(0, 32);
						arrStatus = arrStatus.substring(0, 32);	
					}
	
				}


			//developer trace
				console.log("Jornada: "+round);
				console.log("Local: " + arrLocal);
				console.log("Visitante: " + arrVisitor);
				console.log("Goles Local: " + arrLocalGoals);
				console.log("Goles Visitante: " + arrVisitorGoals);
				console.log("Minuto: " + arrLiveMinute);
				console.log("Estado: " + arrStatus);
				//console.log("Horarios: " + arrSchedules);

				//Send the info to the Pebble
			  Pebble.sendAppMessage({
				"local":arrLocal,
				"visitor":arrVisitor,
				"local_goals":arrLocalGoals,
				"visitor_goals":arrVisitorGoals,
				"live_minute":arrLiveMinute,
				"status":arrStatus,
				"round":round,});
						}//Pebble.sendAppMessage
						}//If(Response)
		  }//If req.status ==200 
		else {
			console.log("Error WFW");
		  } //else
		};//if req.status == 4
	  req.send(null);
	}
}//gerWorldCupMatchs


///////////////////////////////////////
//Setup the connection with the watch//
///////////////////////////////////////
//Displays the configuration page in the phone
Pebble.addEventListener('showConfiguration', function(e) {
  var uri = 'http://yweather.es/fpsettings37.html?' + //PRO
	//var uri = 'http://dabdemon.github.io/balonpie/development.html?' + //DEV
	'&league_id=' + encodeURIComponent(options.league_id)+
	'&my_team=' + encodeURIComponent(options.my_team)+
	'&timeline_pins=' + encodeURIComponent(options.timeline_pins);

	console.log('showing configuration at uri: ' + uri);
	Pebble.openURL(uri);
});

//Retrieve user settings after submitting
Pebble.addEventListener('webviewclosed', function(e) {
  if (e.response) {
    options = JSON.parse(decodeURIComponent(e.response));
    localStorage.setItem('options', JSON.stringify(options));
    console.log('storing options: ' + JSON.stringify(options));
    getLigaBBVA();
  } else {
    console.log('no options received');
  }
});


//Receive the Pebble's call to refresh the weather info
Pebble.addEventListener("appmessage",
                        function(e) {
                          getLigaBBVA();
                        });

//Initiate the Appsync (This event is called just once)
Pebble.addEventListener("ready", function(e) {
  console.log("connect!" + e.ready);
  getLigaBBVA();

});

//CREATE A NEW PIN
function createPIN(id, time, title, subtitle, body, locationName, lastUpdate, nameHome,nameAway,scoreHome , scoreAway, State, blnReminder, local_long, visitor_long, fieldName){


  // Create the pin
/*
  var pin = {
		  "id": id,
		  "time": time,
		  "layout": {
			"type": "genericPin",
			"title": title,
			"subtitle": subtitle,
			"body": body,
			"locationName":locationName, 
			"foregroundColor": "#FFFFFF",
    		"backgroundColor": "#55AA55",
			"tinyIcon": "system://images/SOCCER_GAME"
		  },
	  "actions": [
    {
      "title": "Open Football Pal",
      "type": "openWatchApp",
      "launchCode": 15
    }]
		};
*/
	
	var pin ={};
	
	
	if (blnReminder==true){
		pin = {
		  "id": id,
		  "time": time,
		  "duration": 110,
		 "layout": {
				"type": "sportsPin",
				"title": title,
				"subtitle": subtitle,
				"body": body,
				"tinyIcon": "system://images/SOCCER_GAME",
				"largeIcon": "system://images/SOCCER_GAME",
				"lastUpdated": lastUpdate,
			 	"nameHome": nameHome,
				"nameAway": nameAway,
				"scoreHome": scoreHome,
				"scoreAway": scoreAway,
				"sportsGameState": State
			  },
		"reminders": [
				{
				  "time": time,
				  "layout": {
					"type": "genericReminder",
					"tinyIcon": "system://images/SOCCER_GAME",
					"title": local_long + " vs. " + visitor_long,//title,
					"subtitle": fieldName,//subtitle,
					"body": body
				  }
				}
			  ],
	  "actions": [
    {
      "title": "Open Football Pal",
      "type": "openWatchApp",
      "launchCode": 15
    }]
		};
		
	}
	else{
		 pin = {
		  "id": id,
		  "time": time,
		  "duration": 110,
		 "layout": {
				"type": "sportsPin",
				"title": title,
				"subtitle": subtitle,
				"body": body,
				"tinyIcon": "system://images/SOCCER_GAME",
				"largeIcon": "system://images/SOCCER_GAME",
				"lastUpdated": lastUpdate,
			 	"nameHome": nameHome,
				"nameAway": nameAway,
				"scoreHome": scoreHome,
				"scoreAway": scoreAway,
				"sportsGameState": State
			  },
	  "actions": [
    {
      "title": "Open Football Pal",
      "type": "openWatchApp",
      "launchCode": 15
    }]
		};
	}

  console.log('Inserting pin in the future: ' + JSON.stringify(pin));

  insertUserPin(pin, function(responseText) { 
    console.log('Result: ' + responseText);
  });
}

/******************************* timeline lib *********************************/

// The timeline public URL root
var API_URL_ROOT = 'https://timeline-api.getpebble.com/';

/**
 * Send a request to the Pebble public web timeline API.
 * @param pin The JSON pin to insert. Must contain 'id' field.
 * @param type The type of request, either PUT or DELETE.
 * @param callback The callback to receive the responseText after the request has completed.
 */
function timelineRequest(pin, type, callback) {
  // User or shared?
  var url = API_URL_ROOT + 'v1/user/pins/' + pin.id;

  // Create XHR
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    console.log('timeline: response received: ' + this.responseText);
    callback(this.responseText);
  };
  xhr.open(type, url);

  // Get token
	
  Pebble.getTimelineToken(function(token) {
	  
    // Add headers
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-User-Token', '' + token);

    // Send
    xhr.send(JSON.stringify(pin));
    console.log('timeline: request sent.');
  }, function(error) { console.log('timeline: error getting timeline token: ' + error); });

}

	

/**
 * Insert a pin into the timeline for this user.
 * @param pin The JSON pin to insert.
 * @param callback The callback to receive the responseText after the request has completed.
 */
function insertUserPin(pin, callback) {
  timelineRequest(pin, 'PUT', callback);
}

/**
 * Delete a pin from the timeline for this user.
 * @param pin The JSON pin to delete.
 * @param callback The callback to receive the responseText after the request has completed.
 */
function deleteUserPin(pin, callback) {
  timelineRequest(pin, 'DELETE', callback);
}

/***************************** end timeline lib *******************************/
