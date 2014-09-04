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


//function getWorldCupMatchs() 
function getLigaBBVA(){

	//Define variables
	var resultados = "";
	var response;
	var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?tz=Europe/Madrid&format=json&req=matchs&key=721430254d3a0ca7684955899533eb08&league=1&round=&order=twin&twolegged=1&year=2014");
	//var query = encodeURI("http://www.resultados-futbol.com/scripts/api/api.php?key=721430254d3a0ca7684955899533eb08&format=json&req=matchsday&country=es");
	var req = new XMLHttpRequest();
	var i;
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
