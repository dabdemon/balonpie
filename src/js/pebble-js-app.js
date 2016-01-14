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
	//Liga BBVA (Spain) (2016) [LEAGUE 0]
	214628 : "01", // "MAL", //Málaga
	214626 : "02", //"ATH", //Athletic de Bilbao
	214624 : "03", //"SEV", //Sevilla
	214623 : "04", //"VCF", //Valencia
	214635 : "05", //"GRA", //Granada
	214634 : "06", //"DEP", //Deportivo
	214619 : "07", //Sporting de Gijón
	214629 : "08", //"ESP", //Español
	214636 : "09", //"EIB", //Eibar
	214631 : "10", //"RSO", //Real Sociedad
	214627 : "11", //"CEL", //Celta de Vigo
	214633 : "12", //"GET", //Getafe
	214632 : "13", //"LEV", //Levante
	214625 : "14", //"VIL", //Villareal
	214621 : "15", //"RMA", //Real Madrid
	214618 : "16", //Betis
	214630 : "17", //"RAY", //Rayo Vallecano
	214622 : "18", //"ATM", //Atlético de Madrid
	214620 : "19", //"FCB", //Barça
	218388 : "20", //Las Palmas
	//Serie A (Italy) (2015) [LEAGUE 1]
	212687 : "01", // "EMP", //Empoli
	212697 : "02", //"ROM", //Roma
	212692 : "03", //"JUV", //Juventus
	212701 : "04", //"UDI", //Udinese
	212698 : "05", //"SAM", //Sampdoria
	212700 : "06", //"TOR", //Torino
	212688 : "07", //"FIO", //Fiorentina
	212689 : "08", //"GEN", //Genoa
	212703 : "09", //"CAR", //Carpi
	212685 : "10", //"ATL", //Atalanta
	212691 : "11", //"INT", //Inter
	212699 : "12", //"SAS", //Sassuolo Calcio
	212695 : "13", //"NAP", //Napoli
	212686 : "14", //"CHI", //Chievo
	212693 : "15", //"LAZ", //Lazio
	212702 : "16", //"BOL", //Bologna
	212704 : "17", //"FRO", //Frosinone
	212694 : "18", //"ACM", //Milan
	212690 : "19", //"HLL", //Hellas Verona
	212696 : "20", //"PAL", //Palermo
	//Bundesliga (Germany) (2016) [League 2]
	210688  : "01", // "Hamburger SV"
	210694  : "02", //"Schalke 04"
	210689  : "03", //"Hannover 96"
	210698  : "04", //FC Ingolstadt 
	210685  : "05", // "Borussia Monchengladbach"
	210687  : "06", //"FC Augsburg"
	210684  : "07", //"Bayern Munchen"
	210693  : "08", //"Mainz 05"
	210692  : "09", //"Köln""
	210697  : "10", //"Wolfsburg"
	210686  : "11", //Eintracht Frankfurt
	210683  : "12", //B. Leverkusen
	210691  : "13", //Hoffenheim 
	210690  : "14", //Hertha BSC
	210682  : "15", //B. Dortmund
	210696  : "16", //Werder Bremen
	210699  : "17", //Darmstadt 98
	210695  : "18", //Stuttgart 
	//59 : dummy
	//60 : dummy
	//MLS (USA) (2015) [League 3]
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
	//Liga Nos (Portugal) - (2016) [League 4]
	214934 : "01", //Belenenses 
	214943 : "02", //Rio Ave
	214935 : "03", //Benfica
	214937 : "04", //Estoril
	214944 : "05", //Sporting Braga
	214940 : "06", //Nacional
	214941 : "07", //Paços de Ferreira
	214932 : "08", //Academica
	214939 : "09", //Moreirense
	214933 : "10", //Arouca
	214954 : "11", //Vitória Setúbal
	214936 : "12", //Boavista
	214942 : "13", //Porto
	214953 : "14", //Vitória Guimarães
	214951 : "15", //União Madeira
	214938 : "16", //Marítimo 
	214948 : "17", //Tondela
	214947 : "18", //Sporting CP
	//"99": Dummy
	//"100": Dummy
	//Barclays Premier League (England) [League 5]
	210922 : "01", //Manchester United
	210928 : "02", //Tottenham Hotspur
	210918 : "03", //Everton
	210931 : "04", //Watford
	210932 : "05", //AFC Bournemouth
	210915 : "06", //Aston Villa
	210919 : "07", //Leicester
	210926 : "08", //Sunderland
	210933 : "09", //Norwich City
	210917 : "10", //Crystal Palace
	210916 : "11", //Chelsea
	210927 : "12", //Swansea City
	210923 : "13", //NewCastle
	210924 : "14", //Southampton
	210914 : "15", //Arsenal
	210930 : "16", //West Ham
	210925 : "17", //Stoke City
	210920 : "18", //Liverpool
	210929 : "19", //West Bromwich Albion
	210921 : "20", //Manchester City
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
	214628  : "MAL", //Málaga
	214626  : "ATH", //Athletic de Bilbao
	214624  : "SEV", //Sevilla
	214623  : "VCF", //Valencia
	214635  : "GRA", //Granada
	214634  : "DEP", //Deportivo
	//69606 : "ALM", //Almeria
	214619 : "SPO", //Sporting de Gijón
	214629  : "ESP", //Español
	214636  : "EIB", //Eibar
	214631  : "RSO", //Real Sociedad
	214627  : "CEL", //Celta de Vigo
	214633  : "GET", //Getafe
	214632  : "LEV", //Levante
	214625  : "VIL", //Villareal
	214621  : "RMA", //Real Madrid
	//69894 : "COR", //Córdoba
	214618  : "BET", //Betis
	214630  : "RAY", //Rayo Vallecano
	214622  : "ATM", //Atlético de Madrid
	214620  : "FCB", //Barça
	//69605 : "ELC", //Elche
	218388 : "UDL", //Las Palmas
	//Serie A (Italy)
	212687 : "EMP", //Empoli
	212697 : "ROM", //Roma
	212692 : "JUV", //Juventus
	212701 : "UDI", //Udinese
	212698 : "SAM", //Sampdoria
	212700 : "TOR", //Torino
	212688 : "FIO", //Fiorentina
	212689 : "GEN", //Genoa
	212703 : "CAR", //Carpi
	212685 : "ATL", //Atalanta
	212691 : "INT", //Inter
	212699 : "SAS", //Sassuolo Calcio
	212695 : "NAP", //Napoli
	212686 : "CHI", //Chievo
	212693 : "LAZ", //Lazio
	212702 : "BOL", //Bologna
	212704 : "FRO", //Frosinone
	212694 : "ACM", //Milan
	212690 : "HLL", //Hellas Verona
	212696 : "PAL", //Palermo
	//Bundesliga (Germany)
	210688 : "HSV", // "Hamburger SV"
	210694 : "S04", //"Schalke 04"
	210689 : "HAN", //"Hannover 96"
	//69546 : "SCF", //"SC Freiburg"
	210698 : "ING", //FC Ingolstadt 
	210685 : "MON", // "Borussia Monchengladbach"
	210687 : "AUG", //"FC Augsburg"
	210684 : "BYM", //"Bayern Munchen"
	210693 : "M05", //"Mainz 05"
	210692 : "COL", //"Köln""
	210697 : "WOL", //"Wolfsburg"
	210686 : "EIN", //Eintracht Frankfurt
	210683 : "LEV", //B. Leverkusen
	210691 : "HOF", //Hoffenheim 
	210690 : "HER", //Hertha BSC
	210682 : "BVB", //B. Dortmund
	210696 : "BRE", //Werder Bremen
	//69552 : "PAD", //Paderborn 
	210699  : "DAR", //Darmstadt 98
	210695 : "STU", //Stuttgart 
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
	214934 : "BEL", //Belenenses 
	214943 : "RAV", //Rio Ave
	214935 : "BEN", //Benfica
	214937 : "EST", //Estoril
	214944 : "BRA", //Sporting Braga
	214940 : "NAC", //Nacional
	214941 : "PFE", //Paços de Ferreira
	214932 : "ACA", //Academica
	214939 : "MOR", //Moreirense
	214933 : "ARO", //Arouca
	214954 : "SET", //Vitória Setúbal
	214936 : "BOA", //Boavista
	214942 : "POR", //Porto
	214953 : "GUI", //Vitória Guimarães
	214951 : "UNI", //União Madeira
	214938 : "MAR", //Marítimo 
	214948 : "TON", //Tondela
	214947 : "SPO", //Sporting CP
	//Barclays Premier League (England)
	210922 : "MUN", //Manchester United
	210928 : "TOT", //Tottenham Hotspur
	210918 : "EVE", //Everton
	210931 : "WAT", //Watford
	210932 : "BOU", //AFC Bournemouth
	210915 : "AVL", //Aston Villa
	210919 : "LEI", //Leicester
	210926 : "SUN", //Sunderland
	210933 : "NOR", //Norwich City
	210917 : "CRY", //Crystal Palace
	210916 : "CHE", //Chelsea
	210927 : "SWA", //Swansea City
	210923 : "NEW", //NewCastle
	210924 : "SOU", //Southampton
	210914 : "ARS", //Arsenal
	210930 : "WHU", //West Ham
	210925 : "STK", //Stoke City
	210920 : "LIV", //Liverpool
	210929 : "WBA", //West Bromwich Albion
	210921 : "MCI", //Manchester City
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
	214628  : "La Rosaleda", //Málaga
	214626  : "San Mames", //Athletic de Bilbao
	214624  : "Ramon Sanchez Pizjuan", //Sevilla
	214623  : "Mestalla", //Valencia
	214635  : "Nuevo Los Carmenes", //Granada
	214634  : "Municipal Riazor", //Deportivo
	214619  : "Municipal El Molinon", //Sporting de Gijón
	214629  : "Power8 Stadium", //Español
	214636  : "Municipal de Ipurua", //Eibar
	214631  : "Anoeta", //Real Sociedad
	214627  : "Balaidos", //Celta de Vigo
	214633  : "Coliseum Alfonso Perez", //Getafe
	214632  : "Ciutat de Valencia", //Levante
	214625  : "El Madrigal", //Villareal
	214621  : "Santiago Bernabeu", //Real Madrid
	214618  : "Benito Villamarin", //Betis
	214630  : "Vallecas", //Rayo Vallecano
	214622  : "Vicente Calderon", //Atlético de Madrid
	214620  : "Camp Nou", //Barça
	218388  : "Gran Canaria", //Las Palmas
	//Serie A (Italy)
	212687 : "Carlo Castellani", //Empoli
	212697 : "Stadio Olimpico di Roma", //Roma
	212692 : "Juventus Stadium", //Juventus
	212701 : "Stadio Communale Friuli", //Udinese
	212698 : "Stadio Luigi Ferraris", //Sampdoria
	212700 : "Stadio Olimpico di Torino", //Torino
	212688 : "Stadio Artemio Franchi", //Fiorentina
	212689 : "Stadio Comunale Luigi Ferraris", //Genoa
	212703 : "Stadio Sandro Cabassi", //Carpi
	212685 : "Stadio Atleti Azzurri d'Italia", //Atalanta
	212691 : "Stadio Giuseppe Meazza", //Inter
	212699 : "Stadio Citta del Tricolore", //Sassuolo Calcio
	212695 : "San Paolo", //Napoli
	212686 : "Stadio Marc'Antonio Bentegodi", //Chievo
	212693 : "Stadio Olimpico", //Lazio
	212702 : "Stadio Renato Dall'Ara", //Bologna
	212704 : "Stadio Comunale Matusa", //Frosinone
	212694 : "San Siro", //Milan
	212690 : "Stadio Marc'Antonio Bentegodi", //Hellas Verona
	212696 : "Stadio Renzo Barbera", //Palermo
	//Bundesliga (Germany)
	210688 : "Imtech Arena", // "Hamburger SV"
	210694 : "Arena AufSchalke", //"Schalke 04"
	210689 : "HDI-Arena", //"Hannover 96"
	210698  : "Audi-Sportpark", //FC Ingolstadt
	210685 : "Borussia-Park", // "Borussia Monchengladbach"
	210687 : "SGL Arena", //"FC Augsburg"
	210684 : "Allianz Arena", //"Bayern Munchen"
	210693 : "Coface Arena", //"Mainz 05"
	210692 : "RheinEnergie", //"Köln""
	210697 : "Volkswagen-Arena", //"Wolfsburg"
	210686 : "Commerzbank-Arena", //Eintracht Frankfurt
	210683 : "BayArena", //B. Leverkusen
	210691 : "Wirsol Rhein-Neckar-Arena", //Hoffenheim 
	210690 : "Olympiastadion Berlin", //Hertha BSC
	210682 : "Signal Iduna Park", //B. Dortmund
	210696 : "Weserstadion", //Werder Bremen
	210699  : "Stadion am Bollenfalltor", //Darmstadt 98
	210695 : "Mercedes-Benz-Arena", //Stuttgart 
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
	214934 : "Estadio do Restelo", //Belenenses 
	214943 : "Estadio do Rio Ave Futebol Clube", //Rio Ave
	214935 : "Estadio da Luz", //Benfica
	214937 : "Estadio Antonio Coimbra da Mota", //Estoril
	214944 : "Estadio AXA", //Sporting Braga
	214940 : "Estadio da Madeira", //Nacional
	214941 : "Estadio da Capital do Movel", //Paços de Ferreira
	214932 : "Estadio Cidade de Coimbra", //Academica
	214939 : "Comendador Joaquim Almeida Freitas", //Moreirense
	214933 : "Estadio Municipal de Arouca", //Arouca
	214954 : "Estadio do Bonfim", //Vitória Setúbal
	214936 : "Bessa Seculo XXI", //Boavista
	214942 : "Estadio Do Dragao", //Porto
	214953 : "Estadio Dom Afonso Henriques", //Vitória Guimarães
	214951 : "Estadio Municipal de Machico", //União Madeira
	214938 : "Estadio dos Barreiros", //Marítimo 
	214948 : "Joao Cardoso", //Tondela
	214947 : "Jose Alvalade", //Sporting CP
	//Barclays Premier League (England)
	210922 : "Old Trafford", //Manchester United
	210928 : "White Hart Lane", //Tottenham Hotspur
	210918 : "Goodison Park", //Everton
	210931 : "Vicarage Road Stadium", //Watford
	210932 : "The Goldsands Stadium", //AFC Bournemouth
	210915 : "Villa Park", //Aston Villa
	210919 : "King Power Stadium", //Leicester
	210926 : "Stadium of Light", //Sunderland
	210933 : "Carrow Road", //Norwich City
	210917 : "Selhurst Park", //Crystal Palace
	210916 : "Stamford Bridge", //Chelsea
	210927 : "Liberty Stadium", //Swansea City
	210923 : "St. James Park", //NewCastle
	210924 : "St. Marys Stadium", //Southampton
	210914 : "Emirates Stadium", //Arsenal
	210930 : "Boleyn Ground", //West Ham
	210925 : "Britannia Stadium", //Stoke City
	210920 : "Anfield", //Liverpool
	210929 : "The Hawthorns", //West Bromwich Albion
	210921 : "Etihad Stadium", //Manchester City
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
  //var uri = 'http://yweather.es/fpsettings35.html?' + //PRO
	var uri = 'http://dabdemon.github.io/balonpie/development.html?' + //DEV
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
