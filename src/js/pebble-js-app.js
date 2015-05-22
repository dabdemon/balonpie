var league_id = "1"; // 1 = Liga BBVA, 7 = Serie A, 8 = Bundesliga, 
					 // 9 = Liga Holandesa, 11 = Bundesliga Austria, 
					// 12 = Liga Belga, 13 = Liga Danesa, 14 = Liga Escocia, 
					// 15 = Liga Eslovena, 16 = Ligue 1 (Francia), 17 = Liga Griega
					// 18 = Liga Noruega, 19 = Liga Portuguesa, 20 = Liga Rumana
					// 21 = Liga Sudafricana, 22 = Liga Sueca, 24 = Liga Brasil
					// 31 = Liga Finlandia, 107 = CHAMPIONS LEAGUE


//key de regalo = 41d55642f6613d82dae41eac2ecc4d65

var LigaBBVA = {
	//Liga BBVA (Spain)
	69600 : "01", // "MAL", //Málaga
	69593 : "02", //"ATH", //Athletic de Bilbao
	69594 : "03", //"SEV", //Sevilla
	69597 : "04", //"VCF", //Valencia
	69604 : "05", //"GRA", //Granada
	69705 : "06", //"DEP", //Deportivo
	69606 : "07", //"ALM", //Almeria
	69603 : "08", //"ESP", //Español
	69706 : "09", //"EIB", //Eibar
	69596 : "10", //"RSO", //Real Sociedad
	69598 : "11", //"CEL", //Celta de Vigo
	69602 : "12", //"GET", //Getafe
	69599 : "13", //"LEV", //Levante
	69595 : "14", //"VIL", //Villareal
	69592 : "15", //"RMA", //Real Madrid
	69894 : "16", //"COR", //Córdoba
	69601 : "17", //"RAY", //Rayo Vallecano
	69590 : "18", //"ATM", //Atlético de Madrid
	69591 : "19", //"FCB", //Barça
	69605 : "20", //"ELC", //Elche
	//Serie A (Italy)
	69708 : "21", // "EMP", //Empoli
	69574 : "22", //"ROM", //Roma
	69573 : "23", //"JUV", //Juventus
	69585 : "24", //"UDI", //Udinese
	69584 : "25", //"SAM", //Sampdoria
	69579 : "26", //"TOR", //Torino
	69576 : "27", //"FIO", //Fiorentina
	69586 : "28", //"GEN", //Genoa
	69587 : "29", //"CAG", //Cagliari
	69583 : "30", //"ATL", //Atalanta
	69577 : "31", //"INT", //Inter
	69589 : "32", //"SAS", //Sassuolo Calcio
	69575 : "33", //"NAP", //Napoli
	69588 : "34", //"CHI", //Chievo
	69581 : "35", //"LAZ", //Lazio
	70499 : "36", //"CES", //Cesena
	69578 : "37", //"PAR", //Parma
	69580 : "38", //"ACM", //Milan
	69582 : "39", //"HLL", //Hellas Verona
	69707 : "40", //"PAL", //Palermo
	//Bundesliga (Germany)
	69550 : "41", // "Hamburger SV"
	69536 : "42", //"Schalke 04"
	69543 : "43", //"Hannover 96"
	69546 : "44", //"SC Freiburg"
	69539 : "45", // "Borussia Monchengladbach"
	69541 : "46", //"FC Augsburg"
	69534 : "47", //"Bayern Munchen"
	69540 : "48", //"Mainz 05"
	69551 : "49", //"Köln""
	69538 : "50", //"Wolfsburg"
	69547 : "51", //Eintracht Frankfurt
	69537 : "52", //B. Leverkusen
	69542 : "53", //Hoffenheim 
	69544 : "54", //Hertha BSC
	69535 : "55", //B. Dortmund
	69545 : "56", //Werder Bremen
	69552 : "57", //Paderborn 
	69548 : "58", //Stuttgart 
	//59 : dummy
	//60 : dummy
	
};

var TeamShortName = {
	//Liga BBVA (Spain)
	69600 : "MAL", //Málaga
	69593 : "ATH", //Athletic de Bilbao
	69594 : "SEV", //Sevilla
	69597 : "VCF", //Valencia
	69604 : "GRA", //Granada
	69705 : "DEP", //Deportivo
	69606 : "ALM", //Almeria
	69603 : "ESP", //Español
	69706 : "EIB", //Eibar
	69596 : "RSO", //Real Sociedad
	69598 : "CEL", //Celta de Vigo
	69602 : "GET", //Getafe
	69599 : "LEV", //Levante
	69595 : "VIL", //Villareal
	69592 : "RMA", //Real Madrid
	69894 : "COR", //Córdoba
	69601 : "RAY", //Rayo Vallecano
	69590 : "ATM", //Atlético de Madrid
	69591 : "FCB", //Barça
	69605 : "ELC", //Elche
	//Serie A (Italy)
	69708 : "EMP", //Empoli
	69574 : "ROM", //Roma
	69573 : "JUV", //Juventus
	69585 : "UDI", //Udinese
	69584 : "SAM", //Sampdoria
	69579 : "TOR", //Torino
	69576 : "FIO", //Fiorentina
	69586 : "GEN", //Genoa
	69587 : "CAG", //Cagliari
	69583 : "ATL", //Atalanta
	69577 : "INT", //Inter
	69589 : "SAS", //Sassuolo Calcio
	69575 : "NAP", //Napoli
	69588 : "CHI", //Chievo
	69581 : "LAZ", //Lazio
	70499 : "CES", //Cesena
	69578 : "PAR", //Parma
	69580 : "ACM", //Milan
	69582 : "HLL", //Hellas Verona
	69707 : "PAL", //Palermo
	//Bundesliga (Germany)
	69550 : "HSV", // "Hamburger SV"
	69536 : "S04", //"Schalke 04"
	69543 : "HAN", //"Hannover 96"
	69546 : "SCF", //"SC Freiburg"
	69539 : "MON", // "Borussia Monchengladbach"
	69541 : "AUG", //"FC Augsburg"
	69534 : "BYM", //"Bayern Munchen"
	69540 : "M05", //"Mainz 05"
	69551 : "COL", //"Köln""
	69538 : "WOL", //"Wolfsburg"
	69547 : "EIN", //Eintracht Frankfurt
	69537 : "LEV", //B. Leverkusen
	69542 : "HOF", //Hoffenheim 
	69544 : "HER", //Hertha BSC
	69535 : "BVB", //B. Dortmund
	69545 : "BRE", //Werder Bremen
	69552 : "PAD", //Paderborn 
	69548 : "STU", //Stuttgart 
};

var FieldName = {
	//Liga BBVA (Spain)
	69600 : "La Rosaleda", //Málaga
	69593 : "San Mames", //Athletic de Bilbao
	69594 : "Ramon Sanchez Pizjuan", //Sevilla
	69597 : "Mestalla", //Valencia
	69604 : "Nuevo Los Carmenes", //Granada
	69705 : "Municipal Riazor", //Deportivo
	69606 : "Los Juegos del Mediterraneo", //Almeria
	69603 : "Power8 Stadium", //Español
	69706 : "Municipal de Ipurua", //Eibar
	69596 : "Anoeta", //Real Sociedad
	69598 : "Balaidos", //Celta de Vigo
	69602 : "Coliseum Alfonso Perez", //Getafe
	69599 : "Ciutat de Valencia", //Levante
	69595 : "El Madrigal", //Villareal
	69592 : "Santiago Bernabeu", //Real Madrid
	69894 : "Municipal Nuevo Arcangel", //Córdoba
	69601 : "Vallecas", //Rayo Vallecano
	69590 : "Vicente Calderon", //Atlético de Madrid
	69591 : "Camp Nou", //Barça
	69605 : "Martinez Valero", //Elche
	//Serie A (Italy)
	69708 : "Carlo Castellani", //Empoli
	69574 : "Stadio Olimpico di Roma", //Roma
	69573 : "Juventus Stadium", //Juventus
	69585 : "Stadio Communale Friuli", //Udinese
	69584 : "Stadio Luigi Ferraris", //Sampdoria
	69579 : "Stadio Olimpico di Torino", //Torino
	69576 : "Stadio Artemio Franchi", //Fiorentina
	69586 : "Stadio Comunale Luigi Ferraris", //Genoa
	69587 : "Stadio Is Arenas", //Cagliari
	69583 : "Stadio Atleti Azzurri d'Italia", //Atalanta
	69577 : "Stadio Giuseppe Meazza", //Inter
	69589 : "Stadio Citta del Tricolore", //Sassuolo Calcio
	69575 : "San Paolo", //Napoli
	69588 : "Stadio Marc'Antonio Bentegodi", //Chievo
	69581 : "Stadio Olimpico", //Lazio
	70499 : "Stadio Dino Manuzzi", //Cesena
	69578 : "Ennio Tardini", //Parma
	69580 : "San Siro", //Milan
	69582 : "Stadio Marc'Antonio Bentegodi", //Hellas Verona
	69707 : "Stadio Renzo Barbera", //Palermo
	//Bundesliga (Germany)
	69550 : "Imtech Arena", // "Hamburger SV"
	69536 : "Arena AufSchalke", //"Schalke 04"
	69543 : "HDI-Arena", //"Hannover 96"
	69546 : "MAGE SOLAR Stadion", //"SC Freiburg"
	69539 : "Borussia-Park", // "Borussia Monchengladbach"
	69541 : "SGL Arena", //"FC Augsburg"
	69534 : "Allianz Arena", //"Bayern Munchen"
	69540 : "Coface Arena", //"Mainz 05"
	69551 : "RheinEnergie", //"Köln""
	69538 : "Volkswagen-Arena", //"Wolfsburg"
	69547 : "Commerzbank-Arena", //Eintracht Frankfurt
	69537 : "BayArena", //B. Leverkusen
	69542 : "Wirsol Rhein-Neckar-Arena", //Hoffenheim 
	69544 : "Olympiastadion Berlin", //Hertha BSC
	69535 : "Signal Iduna Park", //B. Dortmund
	69545 : "Weserstadion", //Werder Bremen
	69552 : "Benteler-Arena", //Paderborn 
	69548 : "Mercedes-Benz-Arena", //Stuttgart 
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
if (options === null) options = {	'league_id' : "1" //Default to La Liga BBVA
};


//function getWorldCupMatchs() 
function getLigaBBVA(){
	
	//Get the league identifier from settings
	league_id = options['league_id'];

	//Define variables
	var resultados = "";
	var response;
	//var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchs&key=721430254d3a0ca7684955899533eb08&league=1&round=&order=twin&twolegged=1&year=2014");
	var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=GMT&format=json&req=matchs&key=721430254d3a0ca7684955899533eb08&league="+league_id+"&round=&order=twin&twolegged=1&year=2014");
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
				if (live_min.length > 2) {live_min = "99";} //truncate to 2 digits
					
				//TRIM to just 3 chars
				//local = local.substring(0, 3);
				//visitor = visitor.substring(0, 3);
				//UPPERCASE
				//local = local.toUpperCase();
				//visitor = visitor.toUpperCase();
				
				//Concatenate the results to the output chain
				resultados = resultados+ "\n" + local +" "+ matches[i].result + " "+ visitor + " (" + matches[i].live_minute+"')";
				
				//Create Timeline PIN
				if (typeof Pebble.getTimelineToken === 'function') {
					
					var TimelineTime;
					var matchtime = (matches[i].hour) + ":" + matches[i].minute;
					TimelineTime = Left(matches[i].schedule,10) + "T" +  matchtime  + ":00Z";
					var shortLocal = TeamShortName[matches[i].team1];
					var shortVisitor = TeamShortName[matches[i].team2];
					var pinTitle = shortLocal+ " - " + shortVisitor;

					//get the TV Channels
					var channels;
					for (j=0;j<matches[i].channels.length;j++){
						if (j===0){channels = matches[i].channels[j].name;}
						else{channels = channels + ", " + matches[i].channels[j].name;}
					}

					//remove the special chars (making the PIN fail)
					channels = channels.replace("ú", "u");

					var estadio = FieldName[matches[i].team1];

					//ensure we are not sending a NULL TV channel (PIN will fail)
					if (channels===""){channels=" ";}

					//Concatenate the "Round" in the right language
					var jornada;
					if (league_id== "1"){jornada = "Liga BBVA - Jornada " + round;}
					else if (league_id =="7"){jornada = "Serie A - Giornate " + round;}
					else if (league_id =="8"){jornada = "Bundesliga - Spieltag " + round;}
					else {jornada = "Round " + round;}

					console.log("PIN ID: "+matches[i].id);
					console.log("TimelineTime: "+TimelineTime);
					console.log("pinTitle: "+pinTitle);

					createPIN(matches[i].id, TimelineTime, pinTitle, channels, jornada, estadio);

					//clear channels
					channels = "";
				}
				
				arrLocal = arrLocal + "|" + local;
				arrVisitor = arrVisitor + "|" + visitor;
				arrLocalGoals = arrLocalGoals + "|" + local_goals;
				arrVisitorGoals = arrVisitorGoals + "|" + visitor_goals;
				arrLiveMinute = arrLiveMinute + "|" + live_min;
				arrStatus = arrStatus + "|" + status;
				arrSchedules = arrSchedules + "|" + matches[i].schedule;
			}
			
			//fix bundesliga
			if (league_id==8){
				arrLocal = arrLocal + "|XX";
				arrVisitor = arrVisitor + "|XX";
				arrLocalGoals = arrLocalGoals + "|XX";
				arrVisitorGoals = arrVisitorGoals + "|XX";
				arrLiveMinute = arrLiveMinute + "|XX";
				arrStatus = arrStatus + "|XX";
				//arrSchedules = arrSchedules + "|" + matches[i].schedule;
				}
		//developer trace
			console.log("Jornada: "+round);
			console.log("Local: " + arrLocal);
			console.log("Visitante: " + arrVisitor);
			console.log("Goles Local: " + arrLocalGoals);
			console.log("Goles Visitante: " + arrVisitorGoals);
			console.log("Minuto: " + arrLiveMinute);
			console.log("Estado: " + arrStatus);
			console.log("Horarios: " + arrSchedules);
			
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
  var uri = 'http://dabdemon.github.io/balonpie/development.html?' + //Here you need to enter your configuration webservice
	//'&league_id=' + encodeURIComponent(options['league_id']) +
	'&league_id=' + encodeURIComponent(options['league_id']);

	//console.log('showing configuration at uri: ' + uri);
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
function createPIN(id, time, title, subtitle, body, locationName){


  // Create the pin
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
