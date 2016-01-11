var league_id = "1"; // 1 = Liga BBVA, 7 = Serie A, 8 = Bundesliga, 
					 // 9 = Liga Holandesa, 11 = Bundesliga Austria, 
					// 12 = Liga Belga, 13 = Liga Danesa, 14 = Liga Escocia, 
					// 15 = Liga Eslovena, 16 = Ligue 1 (Francia), 17 = Liga Griega
					// 18 = Liga Noruega, 19 = Liga Portuguesa, 20 = Liga Rumana
					// 21 = Liga Sudafricana, 22 = Liga Sueca, 24 = Liga Brasil
					// 31 = Liga Finlandia, 107 = CHAMPIONS LEAGUE
					// 69 = MLS (USA)


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
	141950 : "01", //Kansas City Sporting
	141941 : "02", //Toronto FC
	141932 : "03", //Chicago Fire
	141939 : "04", //Orlando City
	141945 : "05", //Los Angeles Galaxy
	141951 : "06", //Vancouver Whitecaps
	141946 : "07", //Portland Timbers
	141936 : "08", //New England Revolution
	141947 : "09", //Real Salt Lake
	141942 : "10", //Colorado Rapids
	141948 : "11", //San Jose Earthquakes
	141943 : "12", //FC Dallas
	141937 : "13", //New York City
	141935 : "14", //Montreal Impact
	141933 : "15", //Columbus Crew
	141949 : "16", //Seattle Sounders
	141934 : "17", //DC United
	141940 : "18", //Philadelphia Union
	141938 : "19", //New York RB
	141944 : "20", //Houston Dynamo
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
	141950 : "SKC", //Kansas City Sporting
	141941 : "TFC", //Toronto FC
	141932 : "CHI", //Chicago Fire
	141939 : "ORL", //Orlando City
	141945 : "LAG", //Los Angeles Galaxy
	141951 : "VAN", //Vancouver Whitecaps
	141946 : "POR", //Portland Timbers
	141936 : "NER", //New England Revolution
	141947 : "RSL", //Real Salt Lake
	141942 : "COL", //Colorado Rapids
	141948 : "SJE", //San Jose Earthquakes
	141943 : "FCD", //FC Dallas
	141937 : "NYC", //New York City
	141935 : "MTL", //Montreal Impact
	141933 : "CLB", //Columbus Crew
	141949 : "SEA", //Seattle Sounders
	141934 : "DCU", //DC United
	141940 : "PHI", //Philadelphia Union
	141938 : "NYR", //New York RB
	141944 : "HOU", //Houston Dynamo
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
	141950 : "Sporting Park", //Kansas City Sporting
	141941 : "BMO Field", //Toronto FC
	141932 : "Toyota Park", //Chicago Fire
	141939 : "ESPN Wide World of Sports Complex Field 17", //Orlando City
	141945 : "Stubhub Center", //Los Angeles Galaxy
	141951 : "BC Place", //Vancouver Whitecaps
	141946 : "Providence Park", //Portland Timbers
	141936 : "Gillette Stadium", //New England Revolution
	141947 : "Rio Tinto Stadium", //Real Salt Lake
	141942 : "Dick's Sporting Goods Park", //Colorado Rapids
	141948 : "Avaya Stadium", //San Jose Earthquakes
	141943 : "Toyota Stadium", //FC Dallas
	141937 : "Yankee Stadium", //New York City
	141935 : "Saputo Stadium", //Montreal Impact
	141933 : "Columbus Crew Stadium", //Columbus Crew
	141949 : "CenturyLink Field", //Seattle Sounders
	141934 : "Robert F. Kennedy Memorial Stadium", //DC United
	141940 : "PPL Park", //Philadelphia Union
	141938 : "Red Bull Arena", //New York RB
	141944 : "BBVA Compass Stadium", //Houston Dynamo
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

					createPIN(matches[i].id, TimelineTime, pinTitle, Subtitle, jornada, estadio, lastUpdate, shortVisitor,shortLocal, visitor_goals,local_goals,State, blnReminder );

				}
				
				arrLocal = arrLocal + "|" + local;
				arrVisitor = arrVisitor + "|" + visitor;
				arrLocalGoals = arrLocalGoals + "|" + local_goals;
				arrVisitorGoals = arrVisitorGoals + "|" + visitor_goals;
				arrLiveMinute = arrLiveMinute + "|" + live_min;
				arrStatus = arrStatus + "|" + status;
				//arrSchedules = arrSchedules + "|" + matches[i].schedule;
			}
			
			//fix bundesliga and Liga Nos
			if (league_id==8 || league_id==19) {
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
				
				if (arrLocal.length > 32){
					arrLocal = arrLocal.substring(0, 32);
					arrVisitor = arrVisitor.substring(0, 32);
					arrLocalGoals = arrLocalGoals.substring(0, 32);
					arrVisitorGoals = arrVisitorGoals.substring(0, 32);
					arrLiveMinute = arrLiveMinute.substring(0, 32);
					arrStatus = arrStatus.substring(0, 32);	
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
}//gerWorldCupMatchs


///////////////////////////////////////
//Setup the connection with the watch//
///////////////////////////////////////
//Displays the configuration page in the phone
Pebble.addEventListener('showConfiguration', function(e) {
  var uri = 'http://yweather.es/fpsettings35.html?' + //Here you need to enter your configuration webservice
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
function createPIN(id, time, title, subtitle, body, locationName, lastUpdate, nameHome,nameAway,scoreHome , scoreAway, State, blnReminder){


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
					"title": title,
					"subtitle": subtitle,
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
