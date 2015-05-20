var LigaBBVA = {
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
};

var TeamShortName = {
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
};

var FieldName = {
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


//function getWorldCupMatchs() 
function getLigaBBVA(){

	//Define variables
	var resultados = "";
	var response;
	var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchs&key=721430254d3a0ca7684955899533eb08&league=1&round=&order=twin&twolegged=1&year=2014");
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
	var arrStatus = "-1";
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
				var TimelineTime;
				var matchtime = (parseInt(matches[i].hour) - 2) + ":" + matches[i].minute;
				//The GMT time is hardcoded but will be fixed to be dynamic pretty soon.
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
				
				var estadio = FieldName[matches[i].team1];
				
				console.log("PIN ID: "+matches[i].id);
				console.log("TimelineTime: "+TimelineTime);
				console.log("pinTitle: "+pinTitle);
				
				createPIN(matches[i].id, TimelineTime, pinTitle, channels, "Round " + round, estadio);
				
				//clear channels
				channels = "";
				
				arrLocal = arrLocal + "|" + local;
				arrVisitor = arrVisitor + "|" + visitor;
				arrLocalGoals = arrLocalGoals + "|" + local_goals;
				arrVisitorGoals = arrVisitorGoals + "|" + visitor_goals;
				arrLiveMinute = arrLiveMinute + "|" + live_min;
				arrStatus = arrStatus + "|" + status;
				arrSchedules = arrSchedules + "|" + matches[i].schedule;
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
