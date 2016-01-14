//Declare and Import references
#include <pebble.h>
#include "pebble_fonts.h"
	
#define DIAL_RADIUS 3
	
#define NUM_MENU_SECTIONS 2
#define NUM_FIRST_MENU_ITEMS 2
#define NUM_SECOND_MENU_ITEMS 1

static const char *LigaBBVA[] = {
	//Liga BBVA (Spain)
	"", //DUMMY
	"MAL", //Málaga
	"ATH", //Athletic de Bilbao
	"SEV", //Sevilla
	"VCF", //Valencia
	"GRA", //Granada
	"DEP", //Deportivo
	"SPO", //Sporting de Gijón
	"ESP", //Español
	"EIB", //Eibar
	"RSO", //Real Sociedad
	"CEL", //Celta de Vigo
	"GET", //Getafe
	"LEV", //Levante
	"VIL", //Villareal
	"RMA", //Real Madrid
	"BET", //Betis
	"RAY", //Rayo Vallecano
	"ATM", //Atlético de Madrid
	"FCB", //Barça
	"UDL", //Las Palmas
	//Serie A (Italy)
	"EMP", //Empoli
	"ROM", //Roma
	"JUV", //Juventus
	"UDI", //Udinese
	"SAM", //Sampdoria
	"TOR", //Torino
	"FIO", //Fiorentina
	"GEN", //Genoa
	"CAR", //Carpi
	"ATL", //Atalanta
	"INT", //Inter
	"SAS", //Sassuolo Calcio
	"NAP", //Napoli
	"CHI", //Chievo
	"LAZ", //Lazio
	"BOL", //Bologna
	"FRO", //Frosinone
	"ACM", //Milan
	"HLL", //Hellas Verona
	"PAL", //Palermo
	//Bundesliga (Germany)
	"HSV", // "Hamburger SV"
	"S04", //"Schalke 04"
	"HAN", //"Hannover 96"
	"ING", //"FC Ingolstadt "
	"MON", // "Borussia Monchengladbach"
	"AUG", //"FC Augsburg"
	"BYM", //"Bayern Munchen"
	"M05", //"Mainz 05"
	"COL", //"Köln""
	"WOL", //"Wolfsburg"
	"EIN", //Eintracht Frankfurt
	"LEV", //B. Leverkusen
	"HOF", //Hoffenheim 
	"HER", //Hertha BSC
	"BVB", //B. Dortmund
	"BRE", //Werder Bremen
	"DAR", //Darmstadt 98 
	"STU", //Stuttgart 
	"",//DUMMY
	"",//DUMMY
	//MLS (USA)
	"SKC", //Kansas City Sporting
	"TFC", //Toronto FC
	"CHI", //Chicago Fire
	"ORL", //Orlando City
	"LAG", //Los Angeles Galaxy
	"VAN", //Vancouver Whitecaps
	"POR", //Portland Timbers
	"NER", //New England Revolution
	"RSL", //Real Salt Lake
	"COL", //Colorado Rapids
	"SJE", //San Jose Earthquakes
	"FCD", //FC Dallas
	"NYC", //New York City
	"MTL", //Montreal Impact
	"CLB", //Columbus Crew
	"SEA", //Seattle Sounders
	"DCU", //DC United
	"PHI", //Philadelphia Union
	"NYR", //New York RB
	"HOU", //Houston Dynamo
	//Liga Nos (Portugal) - (2016)
	"BEL", //Belenenses 
	"RAV", //Rio Ave
	"BEN", //Benfica
	"EST", //Estoril
	"BRA", //Sporting Braga
	"NAC", //Nacional
	"PFE", //Paços de Ferreira
	"ACA", //Academica
	"MOR", //Moreirense
	"ARO", //Arouca
	"SET", //Vitória Setúbal
	"BOA", //Boavista
	"POR", //Porto
	"GUI", //Vitória Guimarães
	"UNI", //União Madeira
	"MAR", //Marítimo 
	"TON", //Tondela
	"SPO", //Sporting CP
	"",//DUMMY
	"",//DUMMY
	//Barclays Premier League (England)
	"MUN", //Manchester United
	"TOT", //Tottenham Hotspur
	"EVE", //Everton
	"WAT", //Watford
	"BOU", //AFC Bournemouth
	"AVL", //Aston Villa
	"LEI", //Leicester
	"SUN", //Sunderland
	"NOR", //Norwich City
	"CRY", //Crystal Palace
	"CHE", //Chelsea
	"SWA", //Swansea City
	"NEW", //NewCastle
	"SOU", //Southampton
	"ARS", //Arsenal
	"WHU", //West Ham
	"STK", //Stoke City
	"LIV", //Liverpool
	"WBA", //West Bromwich Albion
	"MCI", //Manchester City
	//Ligue 1 (France) 
	"PSG", //PSG (Parc des Princes)
	"SCB", //Bastia (Armand-Cesari-Furiani)
	"OL", //Olympique Lyonnais (Parc OL)
	"EST", //Troyes (de L'Aube)
	"SCO", //Angers SCO (Jean-Bouin)
	"SMC", //Caen (Michel d'Ornano)
	"SR", //Stade de Reims (Auguste Delaune)
	"TFC", //Toulouse (Stadium Municipal)
	"MH", //Montpellier (Stade de la Mosson)
	"GB", //Girondins Bordeaux (Stade Bordeaux-Atlantique)
	"ASM", //Monaco (Louis II)
	"GFA", //Gazélec Ajaccio (Ange Casanova)
	"SRF", //Rennes (Roazhon Park)
	"FCL", //Lorient (Moustoir)
	"FCN", //Nantes (La Beaujoire)
	"SE", //Saint Etienne (Geoffroy-Guichard)
	"OSC", //Lille (Stade Pierre Mauroy)
	"OGC", //Nice (Stade Pierre Mauroy)
	"OM", //Olympique Marsella (Vélodrome)
	"EAG", //Guingamp (Roudourou)
	//Primera División Argentina [League 7]
	"SAR", //Sarmiento (Eva Peron de Junin)
	"VEL", //Vélez Sarsfield
	"ATT", //Atl.Tucumán (Monumental Presidente Jose Fierro)
	"RAC", //Racing Club (Presidente Juan Domingo Peron, Avellaneda)
	"TEM", //Temperley (Alfredo Beranger)
	"BOC", //Boca Juniors (Alberto Jacinto Armando)
	"DYJ", //Defensa y Justicia (Norberto Tito Tomaghello)
	"UNI", //Unión Santa Fé (Leonardo Carol Madelon)
	"EST", //Estudiantes La Plata (Ciudad de La Plata)
	"LAN", //Lanus (Ciudad de Lanus - Nestor Diaz Perez)
	"HUR", //CA Huracán (Tomas Adolfo Duco)
	"RAF", //Atlético Rafaela (Nuevo Monumental, Rafaela)
	"ARG", //Argentinos Juniors (Diego Armando Maradona)
	"TIG", //Tigre (Jose Dellagiovanna)
	"ALD", //Aldosivi (Jose Maria Minella)
	"OLI", //Olimpo (Roberto Natalio Carminatti)
	"CEN", //Rosario Central (Dr. Lisandro de la Torre)
	"GOD", //Godoy Cruz (Malvinas Argentinas, Mendoza)
	"IND", //Independiente (Libertadores de America)
	"BEL", //Belgrano (Mario Alberto Kempes)
	"RIV", //River Plate (Monumental Antonio Vespucio Liberti)
	"QUI", //Quilmes (Estadio Centenario Dr. Jose Luis Meiszner)
	"COL", //Colón (Brigadier General Estanislao Lopez)
	"ARS", //Arsenal de Sarandi (Julio Humberto Grondona)
	"BAN", //Banfield (Florencio Sola)
	"GLP", //Gimnasia La Plata (Juan Carlos Zerillo)
	"PAT", //Patronato (Presbitero Bartolome Grella)
	"SLO", //San Lorenzo (Pedro Bidegain)
	"SMA", //San Martín San Juan (Ingeniero Hilario Sanchez)
	"NOB", //Newell's Old Boys (Marcelo Alberto Bielsa)
};
static const int PageNumbers[9] = {
	0,
	3, // Page 1
	9, // Page 2
	15, //Page 3
	21, //Page 4
	27, //Page 5
	33, //Page 6
	39, //Page 7
	45, //Page 8
};
static const char LigaBBVA_escudos[] = {
	//Liga BBVA (Spain)
	RESOURCE_ID_DUMMY, //Dummy (0 is not a valid identifier in the code)
	RESOURCE_ID_MAL,
	RESOURCE_ID_ATH,
	RESOURCE_ID_SEV,
	RESOURCE_ID_VCF,
	RESOURCE_ID_GRA,
	RESOURCE_ID_DEP,
	RESOURCE_ID_SPO,
	RESOURCE_ID_ESP,
	RESOURCE_ID_EIB,
	RESOURCE_ID_RSO,
	RESOURCE_ID_CEL,
	RESOURCE_ID_GET,
	RESOURCE_ID_LEV,
	RESOURCE_ID_VIL,
	RESOURCE_ID_RMA,
	RESOURCE_ID_BET,
	RESOURCE_ID_RAY,
	RESOURCE_ID_ATM,
	RESOURCE_ID_FCB,
	RESOURCE_ID_UDL,
	//Serie A (Italy)
	RESOURCE_ID_EMP,
	RESOURCE_ID_ROM,
	RESOURCE_ID_JUV,
	RESOURCE_ID_UDI,
	RESOURCE_ID_SAM,
	RESOURCE_ID_TOR,
	RESOURCE_ID_FIO,
	RESOURCE_ID_GEN,
	RESOURCE_ID_CAR,
	RESOURCE_ID_ATL,
	RESOURCE_ID_INT,
	RESOURCE_ID_SAS,
	RESOURCE_ID_NAP,
	RESOURCE_ID_CHI,
	RESOURCE_ID_LAZ,
	RESOURCE_ID_BOL,
	RESOURCE_ID_FRO,
	RESOURCE_ID_ACM,
	RESOURCE_ID_HLL,
	RESOURCE_ID_PAL,
	//Bundesliga (Germany)
	RESOURCE_ID_HSV,
	RESOURCE_ID_S04,
	RESOURCE_ID_HAN,
	RESOURCE_ID_ING,
	RESOURCE_ID_MON,
	RESOURCE_ID_AUG,
	RESOURCE_ID_BYM,
	RESOURCE_ID_M05,
	RESOURCE_ID_COL,
	RESOURCE_ID_WOL,
	RESOURCE_ID_EIN,
	RESOURCE_ID_BLEV,
	RESOURCE_ID_HOF,
	RESOURCE_ID_HER,
	RESOURCE_ID_BVB,
	RESOURCE_ID_BRE,
	RESOURCE_ID_DAR,
	RESOURCE_ID_STU,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	//MLS (USA) 
	RESOURCE_ID_KCW,
	RESOURCE_ID_TORO,
	RESOURCE_ID_CFS,
	RESOURCE_ID_ORL,
	RESOURCE_ID_GAL,
	RESOURCE_ID_VAN,
	RESOURCE_ID_PORT,
	RESOURCE_ID_NER,
	RESOURCE_ID_RSL,
	RESOURCE_ID_CORA,
	RESOURCE_ID_SJE,
	RESOURCE_ID_DAL,
	RESOURCE_ID_NYC,
	RESOURCE_ID_MONT,
	RESOURCE_ID_COC,
	RESOURCE_ID_SES,
	RESOURCE_ID_DCU,
	RESOURCE_ID_PHU,
	RESOURCE_ID_RBN,
	RESOURCE_ID_HOD,
	//Liga Nos (Portugal)
	RESOURCE_ID_BEL,
	RESOURCE_ID_RAV,
	RESOURCE_ID_BEN,
	RESOURCE_ID_EST,
	RESOURCE_ID_BRA,
	RESOURCE_ID_NAC,
	RESOURCE_ID_FER,
	RESOURCE_ID_ACA,
	RESOURCE_ID_MOR,
	RESOURCE_ID_ARO,
	RESOURCE_ID_VIT,
	RESOURCE_ID_BOA,
	RESOURCE_ID_POR,
	RESOURCE_ID_GUI,
	RESOURCE_ID_UNI,
	RESOURCE_ID_MAR,
	RESOURCE_ID_TON,
	RESOURCE_ID_SPOP,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	//Barclays Premier League (England)
	RESOURCE_ID_UNT,
	RESOURCE_ID_TOT,
	RESOURCE_ID_EVE,
	RESOURCE_ID_WAT,
	RESOURCE_ID_BOU,
	RESOURCE_ID_AVL,
	RESOURCE_ID_LEI,
	RESOURCE_ID_SUN,
	RESOURCE_ID_NOR,
	RESOURCE_ID_CRY,
	RESOURCE_ID_CHE,
	RESOURCE_ID_SWA,
	RESOURCE_ID_NEW,
	RESOURCE_ID_SOU,
	RESOURCE_ID_ARS,
	RESOURCE_ID_WHU,
	RESOURCE_ID_STK,
	RESOURCE_ID_LIV,
	RESOURCE_ID_WBA,
	RESOURCE_ID_MCI,
	//Ligue 1 (France)
	RESOURCE_ID_PSG,
	RESOURCE_ID_SCB,
	RESOURCE_ID_OL,
	RESOURCE_ID_ESTAC,
	RESOURCE_ID_SCO,
	RESOURCE_ID_SMC,
	RESOURCE_ID_SR,
	RESOURCE_ID_TFC,
	RESOURCE_ID_MH,
	RESOURCE_ID_GB,
	RESOURCE_ID_ASM,
	RESOURCE_ID_GFC,
	RESOURCE_ID_SRF,
	RESOURCE_ID_FCL,
	RESOURCE_ID_FCN,
	RESOURCE_ID_SE,
	RESOURCE_ID_OSC,
	RESOURCE_ID_NIC,
	RESOURCE_ID_OM,
	RESOURCE_ID_EAG,
	//Primera División Argentina
	RESOURCE_ID_SAR,
	RESOURCE_ID_VEL,
	RESOURCE_ID_ATT,
	RESOURCE_ID_RAC,
	RESOURCE_ID_TEM,
	RESOURCE_ID_BOC,
	RESOURCE_ID_DYJ,
	RESOURCE_ID_CAU,
	RESOURCE_ID_EDLP,
	RESOURCE_ID_LAN,
	RESOURCE_ID_HUR,
	RESOURCE_ID_RAF,
	RESOURCE_ID_ARG,
	RESOURCE_ID_TIG,
	RESOURCE_ID_ALD,
	RESOURCE_ID_OLI,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
	RESOURCE_ID_DUMMY,
};
static const char Liga_Banner[] ={
	RESOURCE_ID_LIGA_BBVA, //Liga BBVA (Spain)
	RESOURCE_ID_SerieA, //Serie A (Italy)
	RESOURCE_ID_bundesliga, //Bundesliga (Germany)
	RESOURCE_ID_MLS, //Major League Soccer (USA)
	RESOURCE_ID_LigaNOS, //Liga Nos (Portugal)
	RESOURCE_ID_premier, //Barcleys Premier League (England)
	RESOURCE_ID_Ligue1, //Ligue 1 (France)
	RESOURCE_ID_LIGA_BBVA, //Primera División (Argentina)
};

						  
enum WeatherKey {
	LOCAL_KEY = 0x0,        // TUPLE_STRING
	VISITOR_KEY = 0x1,
	LOCAL_GOALS_KEY = 0x2,
	VISITOR_GOALS_KEY = 0x3,
	LIVE_MINUTE_KEY = 0x4,
	STATUS_KEY = 0x5,
	ROUND_KEY = 0x6,
};




/***************************/
/* CODE FROM THE WATCHFACE */
/***************************/
						  
// Setup messaging
const int inbound_size = 512;
const int outbound_size = 512;
						  
GPoint Center1, Center2, Center3, Center4, Center5, Center6, Center7, Center8;
Layer *dial_layer;

static char strResults[100];
static char time_text[] = "00:00";
static char weekday_text[] = "XXXXXXXXXXXX";
static char date_text[] = "XXX 00";
static char month_text[] = "XXXXXXXXXXXXX";
static char banner[] = "resultados-futbol.com";

char local1[] = "   ";
char local2[] = "   ";
char visitor1[] = "   ";
char visitor2[] = "   ";
char local1goals[] = "  ";
char visitor1goals[] = "  ";
char local2goals[] = "  ";
char visitor2goals[] = "  ";
char txtlive_minute1[] = "   ";
char txtlive_minute2[] = "   ";

//Variables to get the data from the net
char txtLocals[] = "00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00"; //Initialize to dummy (production)
//char txtLocals[] = "00|01|02|03|04|05|06|07|08|09|10"; //Initialize to dummy (test)
char txtVisitors[] = "00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00|00"; //Initialize to dummy (production)
//char txtVisitors[] = "00|11|12|13|14|15|16|17|18|19|20"; //Initialize to dummy (test)
char txtLocalGoals[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtVisitorGoals[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtLiveMinutes[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtStatuses[] = "00|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1"; //PRODUCTION
//char txtStatuses[] = "01|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1"; //TEST

static char jornada[] = "Round ";


int intRound = 2;
char txtRound[]="  ";

char weekday_num[]="  ";
char month_num[]="  ";
char day_month[]="  ";

int intLocal;
int intVisitor;

int intPage = 1;
int i=0;
int intLeague_Id = 1;

//InverterLayer *inv_layer;


						 

#define HEADER_FRAME		PBL_IF_ROUND_ELSE(GRect(0, 0, 188, 57),GRect(0, 0, 144, 57))
#define WINDOW_BOUNDS		PBL_IF_ROUND_ELSE(GRect(0, 0, 188, 188),GRect(0, 0, 144, 168))
#define LEAGUE_FRAME		PBL_IF_ROUND_ELSE(GRect(95, 35, 67, 18),GRect(75, 35, 67, 18))
#define	ROUND_FRAME			PBL_IF_ROUND_ELSE(GRect(21, 35, 40, 20),GRect(1, 35, 40, 20))
#define ROUND_NUMBER_FRAME	PBL_IF_ROUND_ELSE(GRect(66, 35, 15, 20),GRect(46, 35, 15, 20))
#define DATE_FRAME			PBL_IF_ROUND_ELSE(GRect(1000, 14, 74, 20),GRect(65, 14, 74, 20))
#define WEEKDAY_FRAME		PBL_IF_ROUND_ELSE(GRect(1000, 1, 74, 20),GRect(65, 1, 74, 20))
#define TIME_FRAME			PBL_IF_ROUND_ELSE(GRect(0, 2, 188, 28),GRect(2, 2, 66, 28))
#define LOCAL1_FRAME		PBL_IF_ROUND_ELSE(GRect(59, 61, 30, 16),GRect(39, 61, 30, 16))
#define LOCAL2_FRAME		PBL_IF_ROUND_ELSE(GRect(59, 110, 30, 16),GRect(39, 110, 30, 16))
#define VISITANT1_FRAME		PBL_IF_ROUND_ELSE(GRect(92, 61, 30, 16),GRect(72, 61, 30, 16))
#define VISITANT2_FRAME		PBL_IF_ROUND_ELSE(GRect(92, 110, 30, 16),GRect(72, 110, 30, 16))
#define LOCAL1_GOALS		PBL_IF_ROUND_ELSE(GRect(57, 73, 28, 28),GRect(37, 73, 28, 28))
#define LOCAL2_GOALS		PBL_IF_ROUND_ELSE(GRect(57, 121, 28, 28),GRect(37, 121, 28, 28))
#define VISITANT1_GOALS		PBL_IF_ROUND_ELSE(GRect(95, 73, 28, 28),GRect(75, 73, 28, 28))
#define VISITANT2_GOALS		PBL_IF_ROUND_ELSE(GRect(95, 121, 28, 28),GRect(75, 121, 28, 28))
#define LIVE_MINUTE1		PBL_IF_ROUND_ELSE(GRect(80, 81, 20, 15),GRect(60, 81, 20, 15))
#define LIVE_MINUTE2		PBL_IF_ROUND_ELSE(GRect(80, 129, 20, 15),GRect(60, 129, 20, 15))
#define LOCAL1_IMAGE		PBL_IF_ROUND_ELSE(GRect(21, 62, 40, 40),GRect(1, 62, 40, 40))
#define VISITANT1_IMAGE		PBL_IF_ROUND_ELSE(GRect(120, 62, 40, 40),GRect(100, 62, 40, 40))
#define LOCAL2_IMAGE		PBL_IF_ROUND_ELSE(GRect(21, 111, 40, 40),GRect(1, 111, 40, 40))
#define VISITANT2_IMAGE		PBL_IF_ROUND_ELSE(GRect(120, 111, 40, 40),GRect(100, 111, 40, 40))

#define NOT_AVAILABLE		PBL_IF_ROUND_ELSE(GRect(0, 57, 188, 188-57),GRect(0, 57, 144, 168-57))

#define Center1Point	PBL_IF_ROUND_ELSE(GPoint(70, 165),GPoint(50, 160))
#define Center2Point	PBL_IF_ROUND_ELSE(GPoint(80, 165),GPoint(60, 160))
#define Center3Point	PBL_IF_ROUND_ELSE(GPoint(90, 165),GPoint(70, 160))
#define Center4Point	PBL_IF_ROUND_ELSE(GPoint(100, 165),GPoint(80, 160))
#define Center5Point 	PBL_IF_ROUND_ELSE(GPoint(110, 165),GPoint(90, 160))

#define Center1P	PBL_IF_ROUND_ELSE(GPoint(60, 165),GPoint(40, 160))
#define Center2P	PBL_IF_ROUND_ELSE(GPoint(70, 165),GPoint(50, 160))
#define Center3P	PBL_IF_ROUND_ELSE(GPoint(80, 165),GPoint(60, 160))
#define Center4P	PBL_IF_ROUND_ELSE(GPoint(90, 165),GPoint(70, 160))
#define Center5P 	PBL_IF_ROUND_ELSE(GPoint(100, 165),GPoint(80, 160))
#define Center6P 	PBL_IF_ROUND_ELSE(GPoint(110, 165),GPoint(90, 160))
#define Center7P 	PBL_IF_ROUND_ELSE(GPoint(120, 165),GPoint(100, 160))
#define Center8P 	PBL_IF_ROUND_ELSE(GPoint(130, 165),GPoint(110, 160))

static Window *s_window;
static GBitmap *s_res_visitor1;
static GBitmap *s_res_local1;
static GBitmap *s_res_local2;
static GBitmap *s_res_visitor2;
static GBitmap *escudo_visitante1;
static GBitmap *escudo_visitante2;
static GBitmap *s_res_liga_bbva;
static GFont s_res_gothic_14;
static GFont s_res_gothic_28_bold;
static BitmapLayer *visitor1_layer;
static BitmapLayer *local1_img;
static BitmapLayer *local2_img;
static BitmapLayer *visitor2_layer;
static BitmapLayer *league_img;
static TextLayer *jornada_layer;
static TextLayer *RoundNumber_layer;
static TextLayer *date_layer;
static TextLayer *weekday_layer;
static TextLayer *time_layer;
static TextLayer *local1_layer;
static TextLayer *local2_layer;
static TextLayer *visitant1_layer;
static TextLayer *visitant2_layer;
static TextLayer *local1_goals;
static TextLayer *visitor1_goals;
static TextLayer *local2_goals;
static TextLayer *visitor2_goals;
static TextLayer *live_minute1;
static TextLayer *live_minute2;
static TextLayer *header_layer;

static TextLayer *not_available;

static TextLayer *Weekday_Layer;
static TextLayer *results_layer;




/////////////////////
// HANDLE THE TIME //
/////////////////////

void handle_tick(struct tm *tick_time, TimeUnits units_changed)
{
		
//Init the date
			
	
	strftime(weekday_text,sizeof(weekday_text),"%A",tick_time);
	
	//get the local date
	char *sys_locale = setlocale(LC_ALL, "");
		
	if (strcmp("en_US", sys_locale) == 0) {
		strftime(month_text,sizeof(month_text),"%B %e",tick_time);
			
	} else {
		strftime(month_text,sizeof(month_text),"%e %B",tick_time);
	}

	text_layer_set_text(weekday_layer,weekday_text); //Update the weekday layer  
	text_layer_set_text(date_layer,month_text); 
	

	if (units_changed & MINUTE_UNIT) 
	{
			//Format the Local Time	
			clock_copy_time_string(time_text, sizeof(time_text));
  			text_layer_set_text(time_layer, time_text);


	} //MINUTE CHANGES
} //HANDLE_TICK 

//////////////////
// LA LIGA BBVA //
//////////////////
//Get the LeagueID
int getLeague(char* Array)
{
	int intLeagueID;
	//Get the right League Header

		intLeagueID = Array[1] - '0';

	
	
	return intLeagueID;
}

void LaLiga_FillArrLocal(char* Locals, int intPage, int intLeague)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "LaLiga_FillArrLocal: Heap free is %u bytes", heap_bytes_free());
	
	int intLocal;
	int a;
	int b;
	
	int intArrayStartPos = intLeague * 20;
	


	//Split the string to get Local 1
	if (Locals[PageNumbers[intPage]] == 'X'){
		
		//clear the labels
		memset(&local1[0], 0, sizeof(local1));
		//clears the images
		//if (s_res_local1!=NULL) {gbitmap_destroy(s_res_local1); }
		gbitmap_destroy(s_res_local1);
		//add dummy
		s_res_local1 = gbitmap_create_with_resource(RESOURCE_ID_DUMMY);	
	
	}
	
	else{
		
		if (Locals[PageNumbers[intPage]] == '0') {a = 0;}
		else {a = Locals[PageNumbers[intPage]]-'0';}
		a=a*10;

		b = Locals[PageNumbers[intPage]+1] - '0';

		intLocal = a+b+intArrayStartPos;

		memcpy(&local1, LigaBBVA[intLocal], strlen(LigaBBVA[intLocal])+1);
		//if (s_res_local1!=NULL) {gbitmap_destroy(s_res_local1);}
		gbitmap_destroy(s_res_local1);
		s_res_local1 = gbitmap_create_with_resource(LigaBBVA_escudos[intLocal]);		
	}
		

	
	//Split the string to get Local 2
	if (Locals[PageNumbers[intPage]+3] == 'X') {
		
		//clear the labels
		memset(&local2[0], 0, sizeof(local2));
		//clears the images
		//if (s_res_local2!=NULL) {gbitmap_destroy(s_res_local2);}
		gbitmap_destroy(s_res_local2);
		//add dummy
		s_res_local2 = gbitmap_create_with_resource(RESOURCE_ID_DUMMY);
		
	}
	else {
		if (Locals[PageNumbers[intPage]+3] == '0') {a = 0;}
		else {a = Locals[PageNumbers[intPage]+3]-'0';}
		a=a*10;

		b = Locals[PageNumbers[intPage]+4] - '0';

		intLocal = a+b+intArrayStartPos;

		memcpy(&local2, LigaBBVA[intLocal], strlen(LigaBBVA[intLocal])+1);
		//if (s_res_local2!=NULL) {gbitmap_destroy(s_res_local2);}
		gbitmap_destroy(s_res_local2);
		s_res_local2 = gbitmap_create_with_resource(LigaBBVA_escudos[intLocal]);
	}
		
}

void LaLiga_FillArrVisitor(char* Visitors, int intPage, int intLeague)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "LaLiga_FillArrVisitor: Heap free is %u bytes", heap_bytes_free());
	
	int intVisitor;
	int a;
	int b;
	
	int intArrayStartPos = intLeague * 20;

	//Split the string to get Visitor 1
	if (Visitors[PageNumbers[intPage]] == 'X') {
		
		//clear the labels
		memset(&visitor1[0], 0, sizeof(visitor1));
		//clears the images
		//if (escudo_visitante1!=NULL) {gbitmap_destroy(escudo_visitante1);}
		gbitmap_destroy(escudo_visitante1);
		//add dummy
		escudo_visitante1 = gbitmap_create_with_resource(RESOURCE_ID_DUMMY);
		
	}
	else{
		if (Visitors[PageNumbers[intPage]] == '0') {a = 0;}
		else {a = Visitors[PageNumbers[intPage]]-'0';}
		a=a*10;

		b = Visitors[PageNumbers[intPage]+1] - '0';

		intVisitor = a+b+intArrayStartPos;

		memcpy(&visitor1, LigaBBVA[intVisitor], strlen(LigaBBVA[intVisitor])+1);
		//if (escudo_visitante1!=NULL) {gbitmap_destroy(escudo_visitante1); }
		gbitmap_destroy(escudo_visitante1);
		escudo_visitante1 = gbitmap_create_with_resource(LigaBBVA_escudos[intVisitor]);
	}
		


	//Split the string to get Visitor 2
	if (Visitors[PageNumbers[intPage]+3] == 'X') {
		//clear the labels
		memset(&visitor2[0], 0, sizeof(visitor2));
		//clears the images
		//if (escudo_visitante2!=NULL) {gbitmap_destroy(escudo_visitante2);}
		gbitmap_destroy(escudo_visitante2);
		//add dummy
		escudo_visitante2 = gbitmap_create_with_resource(RESOURCE_ID_DUMMY);
		
	}
	else{
		
		if (Visitors[PageNumbers[intPage]+3] == '0') {a = 0;}
		else {a = Visitors[PageNumbers[intPage]+3]-'0';}
		a=a*10;

		b = Visitors[PageNumbers[intPage]+4] - '0';

		intVisitor = a+b+intArrayStartPos;

		memcpy(&visitor2, LigaBBVA[intVisitor], strlen(LigaBBVA[intVisitor])+1);
		//if (escudo_visitante2!=NULL) {gbitmap_destroy(escudo_visitante2);}
		gbitmap_destroy(escudo_visitante2);
		escudo_visitante2 = gbitmap_create_with_resource(LigaBBVA_escudos[intVisitor]);
	}
}

void LaLiga_FillArrLocalGoals(char* LocalGoals, int intPage)
{
	
	int intLocalGoals;
	int a;
	int b;
	

	//Split the string to get Local 1
	if (LocalGoals[PageNumbers[intPage]] == 'X') {
		
		//clear the labels
		memset(&local1goals[0], 0, sizeof(local1goals));
		
	}
	else {
		
		if (LocalGoals[PageNumbers[intPage]] == '0') {a = 0;}
		else {a = LocalGoals[PageNumbers[intPage]]-'0';}
		a=a*10;

		b = LocalGoals[PageNumbers[intPage]+1] - '0';

		intLocalGoals = a+b;

		snprintf(local1goals,2,"%d",intLocalGoals);
	}
	
	if (LocalGoals[PageNumbers[intPage]+3] == 'X') {
		
		//clear the labels
		memset(&local2goals[0], 0, sizeof(local2goals));
		
	}
	else{
		//Split the string to get Local 2
		if (LocalGoals[PageNumbers[intPage]+3] == '0') {a = 0;}
		else {a = LocalGoals[PageNumbers[intPage]+3]-'0';}
		a=a*10;

		b = LocalGoals[PageNumbers[intPage]+4] - '0';

		intLocalGoals = a+b;

		snprintf(local2goals,2,"%d",intLocalGoals);
	
	}
		
}

void LaLiga_FillArrVisitorGoals(char* VisitorGoals, int intPage)
{

	int intVisitorGoals;
	int a;
	int b;
	

	//Split the string to get Local 1
	if (VisitorGoals[PageNumbers[intPage]] == 'X') {
		
		//clear the labels
		memset(&visitor1goals[0], 0, sizeof(visitor1goals));
		
	}
	else{
		if (VisitorGoals[PageNumbers[intPage]] == '0') {a = 0;}
		else {a = VisitorGoals[PageNumbers[intPage]]-'0';}
		a=a*10;

		b = VisitorGoals[PageNumbers[intPage]+1] - '0';

		intVisitorGoals = a+b;

		snprintf(visitor1goals,2,"%d",intVisitorGoals);
	}
	
	//Split the string to get Local 2
	if (VisitorGoals[PageNumbers[intPage]+3] == 'X') {
		
		//clear the labels
		memset(&visitor2goals[0], 0, sizeof(visitor2goals));
		
	}
	else{
		if (VisitorGoals[PageNumbers[intPage]+3] == '0') {a = 0;}
		else {a = VisitorGoals[PageNumbers[intPage]+3]-'0';}
		a=a*10;

		b = VisitorGoals[PageNumbers[intPage]+4] - '0';

		intVisitorGoals = a+b;

		snprintf(visitor2goals,2,"%d",intVisitorGoals);
	}

}

void LaLiga_FillArrLiveMinute(char* Matches, char* Status, int intPage, int intLeague)
{

	int intMinute;
	int a;
	int b;
	

	if(s_res_liga_bbva!=NULL){gbitmap_destroy(s_res_liga_bbva);}
	s_res_liga_bbva = gbitmap_create_with_resource(Liga_Banner[intLeague]);
	
	/*
	if (intHeader == 0) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_LIGA_BBVA);}
	else if (intHeader == 1) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_SerieA);}
	else if (intHeader == 2) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_bundesliga);}
	else if (intHeader == 3) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_MLS);}
	else if (intHeader == 4) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_LigaNOS);}
	else if (intHeader == 5) {s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_LigaNOS);}
	*/
	
	
	
	//Status: 
	//-1 = Not Started
	//00 = In Progress
	//+1 = Finish
	if (Status[PageNumbers[intPage]] == 'X'){
		
		//clear the labels
		memset(&txtlive_minute1[0], 0, sizeof(txtlive_minute1));
		
	}
	else{

		if (Status[PageNumbers[intPage]] == '0') {

			//Split the string to get Local 1
			if (Matches[PageNumbers[intPage]] == '0') {a = 0;}
			else {a = Matches[PageNumbers[intPage]]-'0';}
			a=a*10;

			b = Matches[PageNumbers[intPage]+1] - '0';

			intMinute = a+b;

			snprintf(txtlive_minute1,4,"%d",intMinute);
			strncat(txtlive_minute1,"'",1);

		} //Match 1 is playing
		else if (Status[PageNumbers[intPage]] == '-'){memcpy(&txtlive_minute1,"---",3);} //Match 1 didn't start yet
		else if (Status[PageNumbers[intPage]] == '+'){memcpy(&txtlive_minute1,"FIN",3);} //Matc 1 already finish
	}
	
	if (Status[PageNumbers[intPage]+3] == 'X'){
		
		//clear the labels
		memset(&txtlive_minute2[0], 0, sizeof(txtlive_minute2));
		
	}
	else{

		if (Status[PageNumbers[intPage]+3] == '0') {
			//Split the string to get Local 2
			if (Matches[PageNumbers[intPage]+3] == '0') {a = 0;}
			else {a = Matches[PageNumbers[intPage]+3]-'0';}		
			a=a*10;

			b = Matches[PageNumbers[intPage]+4] - '0';

			intMinute = a+b;

			snprintf(txtlive_minute2,4,"%d",intMinute);
			strncat(txtlive_minute2,"'",1);

		} //Match 2 is playing
		else if (Status[PageNumbers[intPage]+3] == '-'){memcpy(&txtlive_minute2,"---",3);} //Match 2 didn't start yet
		else if (Status[PageNumbers[intPage]+3] == '+'){memcpy(&txtlive_minute2,"FIN",3);} //Match 2 already finish
	}
}

/********************************/
/* Refresh data from the server */
/********************************/

static void SplitDateFromArrays(void) {
	
	        int intLeague;
	        intLeague = getLeague(txtStatuses);
	
		if ((intPage > 5) && (intLeague != 7)){
			//if the active page is not valid, reset to first page. 
			intPage = 1;
		} 
	
	if (intLeague != -1){
		LaLiga_FillArrLocal(txtLocals,intPage, intLeague);
		LaLiga_FillArrVisitor(txtVisitors,intPage, intLeague);
		LaLiga_FillArrLocalGoals(txtLocalGoals,intPage);
		LaLiga_FillArrVisitorGoals(txtVisitorGoals,intPage);
		LaLiga_FillArrLiveMinute(txtLiveMinutes,txtStatuses,intPage, intLeague);

	}	

}


static void send_cmd(void) {

         Tuplet value = TupletCString(0, "");
        
         DictionaryIterator *iter;
         app_message_outbox_begin(&iter);
        
         if (iter == NULL) {
                return;
         }
        
         dict_write_tuplet(iter, &value);
         dict_write_end(iter);
        
         app_message_outbox_send();
	
}

	void RefreshData(ClickRecognizerRef recognizer, void *context) {
		//reset the timer/chrono when double clicks the select button
		send_cmd();
	}

	void PageUp(ClickRecognizerRef recognizer, void *context)
		{
		
			//Decrease the Page Number
			intPage = intPage - 1;
			//But... Hey! There must be at least 1 page!
			if (intPage < 1) {intPage = 1;}
		
			//and... refresh the screen data
			SplitDateFromArrays();
		
	}

	void PageDown(ClickRecognizerRef recognizer, void *context)
		{
		
			int intLeague;
	        intLeague = getLeague(txtStatuses);
		
			//Default Page Limit to 5 (regular league with 20 teams)
			int intPageLimit = 5;
			//Primera División Argenitina has 30 teams, so we need 8 pages
			if (intLeague == 7){intPageLimit = 8;}
			
			//Decrease the Page Number
			intPage = intPage + 1;
			//But... Hey! There must be a page limit!! (in La Liga BBVA there are just 5 pages per round)
			if (intPage > intPageLimit) {intPage = intPageLimit;}
		
			//and... refresh the screen data
			SplitDateFromArrays();
	}

	//****************************//
	// Configure Buttons behavior //
	//****************************//
	void select_long_release_handler(ClickRecognizerRef recognizer, void *context) {
	  // This is needed to avoid missing clicks. Seems to be a bug in the SDK.
	}

	void config_provider(Window *window) {
	 // SELECT BUTTON
	  //window_single_click_subscribe(BUTTON_ID_SELECT, CallMenu);
	  //window_long_click_subscribe(BUTTON_ID_SELECT,700,toggle_setting_mode,select_long_release_handler);
	  window_multi_click_subscribe(BUTTON_ID_SELECT,2,2,0,false,RefreshData);	
	  
	// UP BUTTON
	  window_single_click_subscribe(BUTTON_ID_UP, PageUp);
		
	// DOWN BUTTON
	  window_single_click_subscribe(BUTTON_ID_DOWN, PageDown);
	  
	} //config_provider END

//*****************//
// AppSync options //
//*****************//



static AppSync sync;
static uint8_t sync_buffer[512];



static void sync_tuple_changed_callback(const uint32_t key,
                                        const Tuple* new_tuple,
                                        const Tuple* old_tuple,
                                        void* context) {

        
  // App Sync keeps new_tuple in sync_buffer, so we may use it directly
  switch (key) {
    	case STATUS_KEY:
			memcpy(&txtStatuses,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));   
	  //Fill Locals array
	SplitDateFromArrays();
      		break;
	  
	    case LOCAL_KEY:
			memcpy(&txtLocals,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));    
	  //Fill Locals array
	SplitDateFromArrays();
      		break;
	  
	    case VISITOR_KEY:
			memcpy(&txtVisitors,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));  
	  //Fill Locals array
	SplitDateFromArrays();
      		break;
	  
	    case LOCAL_GOALS_KEY:
			memcpy(&txtLocalGoals,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));  
	  //Fill Locals array
	SplitDateFromArrays();
      		break;
	  
	    case VISITOR_GOALS_KEY:
 			memcpy(&txtVisitorGoals,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));         
	  //Fill Locals array
	SplitDateFromArrays();
      		break;
	  
	    case LIVE_MINUTE_KEY:
 			memcpy(&txtLiveMinutes,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));    
	  //Fill Locals array
	SplitDateFromArrays();
      		break; 
	  
	  	case ROUND_KEY:
	  //First clear the previously saved values to avoid overlaps
	        memset(&txtRound[0], 0, sizeof(txtRound));
	  //Then fill the Round value
 			memcpy(&txtRound,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));    
	  //Fill Locals array
	SplitDateFromArrays();
      		break; 
	    
  
  }
}

void DrawPageIndicator(Layer *me, GContext *ctx)
{
	int intLeague;
	intLeague = getLeague(txtStatuses);
	
	//Page 1
	if (intLeague == 7){Center1 = Center1P;}
	else {Center1 = Center1Point;}

		#ifdef PBL_COLOR
		  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_stroke_color(ctx, GColorWhite);
		#endif
    	graphics_draw_circle(ctx, Center1, DIAL_RADIUS);
	
	if(intPage == 1){
		#ifdef PBL_COLOR
		  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_fill_color(ctx, GColorWhite);
		#endif
    	graphics_fill_circle(ctx, Center1, DIAL_RADIUS);
	}

	//Page 2
	if (intLeague == 7){Center2 = Center2P;}
	else {Center2 = Center2Point;}
	
		#ifdef PBL_COLOR
		  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_stroke_color(ctx, GColorWhite);
		#endif
    graphics_draw_circle(ctx, Center2, DIAL_RADIUS);
	
	if(intPage == 2){
		#ifdef PBL_COLOR
		  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_fill_color(ctx, GColorWhite);
		#endif
    	graphics_fill_circle(ctx, Center2, DIAL_RADIUS);
	}
	
	//Page 3
	if (intLeague == 7){Center3 = Center3P;}
	else {Center3 = Center3Point;}
	
		#ifdef PBL_COLOR
		  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_stroke_color(ctx, GColorWhite);
		#endif
			
    graphics_draw_circle(ctx, Center3, DIAL_RADIUS);
	
	if(intPage == 3){
		#ifdef PBL_COLOR
		  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_fill_color(ctx, GColorWhite);
		#endif
		
    	graphics_fill_circle(ctx, Center3, DIAL_RADIUS);
	}
	//Page 4
	if (intLeague == 7){Center4 = Center4P;}
	else {Center4 = Center4Point;}
	
		#ifdef PBL_COLOR
		  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_stroke_color(ctx, GColorWhite);
		#endif
    graphics_draw_circle(ctx, Center4, DIAL_RADIUS);
	
	if(intPage == 4){
		#ifdef PBL_COLOR
		  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_fill_color(ctx, GColorWhite);
		#endif
    	graphics_fill_circle(ctx, Center4, DIAL_RADIUS);
	}
	//Page 5
	if (intLeague == 7){Center5 = Center5P;}
	else {Center5 = Center5Point;}
	
	
		#ifdef PBL_COLOR
		  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_stroke_color(ctx, GColorWhite);
		#endif
    graphics_draw_circle(ctx, Center5, DIAL_RADIUS);
	
	if(intPage == 5){
		
		#ifdef PBL_COLOR
		  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
		#else
		  graphics_context_set_fill_color(ctx, GColorWhite);
		#endif
			
    	graphics_fill_circle(ctx, Center5, DIAL_RADIUS);
	}
	
	
	if (intLeague == 7){
		
			//Page 6
			Center6 = Center6P;


			#ifdef PBL_COLOR
			  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
			#else
			  graphics_context_set_stroke_color(ctx, GColorWhite);
			#endif
			graphics_draw_circle(ctx, Center6, DIAL_RADIUS);

			if(intPage == 6){

				#ifdef PBL_COLOR
				  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
				#else
				  graphics_context_set_fill_color(ctx, GColorWhite);
				#endif

				graphics_fill_circle(ctx, Center6, DIAL_RADIUS);
			}
		
					//Page 6
			Center7 = Center7P;


			#ifdef PBL_COLOR
			  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
			#else
			  graphics_context_set_stroke_color(ctx, GColorWhite);
			#endif
			graphics_draw_circle(ctx, Center7, DIAL_RADIUS);

			if(intPage == 7){

				#ifdef PBL_COLOR
				  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
				#else
				  graphics_context_set_fill_color(ctx, GColorWhite);
				#endif

				graphics_fill_circle(ctx, Center7, DIAL_RADIUS);
			}
		
			//Page 8
			Center8 = Center8P;


			#ifdef PBL_COLOR
			  graphics_context_set_stroke_color(ctx, GColorJaegerGreen);
			#else
			  graphics_context_set_stroke_color(ctx, GColorWhite);
			#endif
			graphics_draw_circle(ctx, Center8, DIAL_RADIUS);

			if(intPage == 8){

				#ifdef PBL_COLOR
				  graphics_context_set_fill_color(ctx, GColorJaegerGreen);
				#else
				  graphics_context_set_fill_color(ctx, GColorWhite);
				#endif

				graphics_fill_circle(ctx, Center8, DIAL_RADIUS);
			}
	}
	  
	
}
						  
void SetupMessages(){

	
               app_message_open(inbound_size, outbound_size);
        
				
                Tuplet initial_values[] = {
					TupletCString(LOCAL_KEY, ""),
					TupletCString(VISITOR_KEY, ""),
					TupletCString(LOCAL_GOALS_KEY, ""),
					TupletCString(VISITOR_GOALS_KEY, ""),
					TupletCString(LIVE_MINUTE_KEY, ""),
					TupletCString(STATUS_KEY, ""),
					TupletCString(ROUND_KEY, ""),
                }; //TUPLET INITIAL VALUES
        		
	
               app_sync_init(&sync, sync_buffer, sizeof(sync_buffer), initial_values,
               ARRAY_LENGTH(initial_values), sync_tuple_changed_callback,
               NULL, NULL);
}
						  
void handle_init(void)
{
	
	
	//Use the internationalization API to detect the user's language
	setlocale(LC_ALL, i18n_get_system_locale());
	
	//Developer Hardcode - REMOVE!!
	escudo_visitante1 = gbitmap_create_with_resource(LigaBBVA_escudos[0]);
	escudo_visitante2 = gbitmap_create_with_resource(LigaBBVA_escudos[0]);
	s_res_local1 = gbitmap_create_with_resource(LigaBBVA_escudos[0]);
	s_res_local2 = gbitmap_create_with_resource(LigaBBVA_escudos[0]);

	//Initialize the Message Service
	SetupMessages();
	
	//Fill Locals array
	SplitDateFromArrays();

	
	//Create the main window
	s_window = window_create(); 
	window_stack_push(s_window, true /* Animated */);

		#ifdef PBL_COLOR
		  window_set_background_color(s_window, GColorWhite );
		#else
		  window_set_background_color(s_window, GColorBlack);
		#endif
	
	// HEADER
	  	header_layer = text_layer_create(HEADER_FRAME);
	  	
	  	layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(header_layer));
		#ifdef PBL_COLOR
		  	text_layer_set_background_color(header_layer, GColorJaegerGreen);
		#else
			text_layer_set_background_color(header_layer, GColorWhite);
		#endif
	
	//Draw the page indicator
	GRect window_bounds = WINDOW_BOUNDS;
    dial_layer = layer_create(window_bounds);
	layer_set_update_proc(dial_layer, DrawPageIndicator);
	layer_add_child(window_get_root_layer(s_window), dial_layer);


	  //s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_SerieA);
	  s_res_gothic_14 = fonts_get_system_font(FONT_KEY_GOTHIC_14);
	  s_res_gothic_28_bold = fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD);
	
	
	

	  // league_img
		league_img = bitmap_layer_create(LEAGUE_FRAME);
		bitmap_layer_set_compositing_mode(league_img, GCompOpSet);

			
		bitmap_layer_set_bitmap(league_img, s_res_liga_bbva);
	  	layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(league_img));

	  // jornada_layer
	  jornada_layer = text_layer_create(ROUND_FRAME);
	  text_layer_set_background_color(jornada_layer, GColorClear);
	  
		#ifdef PBL_COLOR
		  text_layer_set_text_color(jornada_layer, GColorWhite);
		#else
		  text_layer_set_text_color(jornada_layer, GColorBlack);
		#endif
			
	  text_layer_set_text(jornada_layer, jornada);
	  text_layer_set_text_alignment(jornada_layer, GTextAlignmentRight);
	  text_layer_set_font(jornada_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(jornada_layer));
	
	  // RoundNumber_layer
	  //snprintf(txtRound,2,"%d",intRound);
	  RoundNumber_layer = text_layer_create(ROUND_NUMBER_FRAME);
	  text_layer_set_background_color(RoundNumber_layer, GColorClear);
	  #ifdef PBL_COLOR
		  text_layer_set_text_color(RoundNumber_layer, GColorWhite);
		#else
		  text_layer_set_text_color(RoundNumber_layer, GColorBlack);
		#endif
	  text_layer_set_text(RoundNumber_layer, txtRound);
	  text_layer_set_text_alignment(RoundNumber_layer, GTextAlignmentLeft);
	  text_layer_set_font(RoundNumber_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(RoundNumber_layer));

	  // date_layer
	  date_layer = text_layer_create(DATE_FRAME);
	  text_layer_set_background_color(date_layer, GColorClear);
	  #ifdef PBL_COLOR
		  text_layer_set_text_color(date_layer, GColorWhite);
		#else
		  text_layer_set_text_color(date_layer, GColorBlack);
		#endif
	  text_layer_set_text(date_layer, month_text);
	  text_layer_set_text_alignment(date_layer, GTextAlignmentRight);
	  text_layer_set_font(date_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(date_layer));

	  // weekday_layer
	  weekday_layer = text_layer_create(WEEKDAY_FRAME);
	  text_layer_set_background_color(weekday_layer, GColorClear);
	  #ifdef PBL_COLOR
		  text_layer_set_text_color(weekday_layer, GColorWhite);
		#else
		  text_layer_set_text_color(weekday_layer, GColorBlack);
		#endif
	  text_layer_set_text(weekday_layer, weekday_text);
	  text_layer_set_text_alignment(weekday_layer, GTextAlignmentRight);
	  text_layer_set_font(weekday_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(weekday_layer));

	  // time_layer
	  time_layer = text_layer_create(TIME_FRAME);
	  text_layer_set_background_color(time_layer, GColorClear);
	  #ifdef PBL_COLOR
		  text_layer_set_text_color(time_layer, GColorWhite);
		#else
		  text_layer_set_text_color(time_layer, GColorBlack);
		#endif
	  text_layer_set_text(time_layer, time_text);
	  text_layer_set_text_alignment(time_layer, GTextAlignmentCenter);
	  text_layer_set_font(time_layer, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(time_layer));

	  // local1_layer
	  local1_layer = text_layer_create(LOCAL1_FRAME);
	  text_layer_set_background_color(local1_layer, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(local1_layer, GColorBlack);
		#else
		  text_layer_set_text_color(local1_layer, GColorWhite);
		#endif
	  text_layer_set_text(local1_layer, local1);
	  text_layer_set_text_alignment(local1_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local1_layer));

	  // local2_layer
	  local2_layer = text_layer_create(LOCAL2_FRAME);
	  text_layer_set_background_color(local2_layer, GColorClear);
		#ifdef PBL_COLOR
		  text_layer_set_text_color(local2_layer, GColorBlack);
		#else
		  text_layer_set_text_color(local2_layer, GColorWhite);
		#endif
	  text_layer_set_text(local2_layer, local2);
	  text_layer_set_text_alignment(local2_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local2_layer));

	  // visitant1_layer
	
	  visitant1_layer = text_layer_create(VISITANT1_FRAME);
	  text_layer_set_background_color(visitant1_layer, GColorClear);
		#ifdef PBL_COLOR
		  text_layer_set_text_color(visitant1_layer, GColorBlack);
		#else
		  text_layer_set_text_color(visitant1_layer, GColorWhite);
		#endif
	  text_layer_set_text(visitant1_layer, visitor1);
	  text_layer_set_text_alignment(visitant1_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitant1_layer));
	  

	  // visitant2_layer
	
	  visitant2_layer = text_layer_create(VISITANT2_FRAME);
	  text_layer_set_background_color(visitant2_layer, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(visitant2_layer, GColorBlack);
		#else
		  text_layer_set_text_color(visitant2_layer, GColorWhite);
		#endif
	  text_layer_set_text(visitant2_layer, visitor2);
	  text_layer_set_text_alignment(visitant2_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitant2_layer));
	  

	  // local1_goals
	  local1_goals = text_layer_create(LOCAL1_GOALS);
	  text_layer_set_background_color(local1_goals, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(local1_goals, GColorMidnightGreen );
		#else
		  text_layer_set_text_color(local1_goals, GColorWhite);
		#endif
	  text_layer_set_text(local1_goals, local1goals);
	  text_layer_set_text_alignment(local1_goals, GTextAlignmentCenter);
	  text_layer_set_font(local1_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local1_goals));

	  // visitor1_goals
	
	
	  visitor1_goals = text_layer_create(VISITANT1_GOALS);
	  text_layer_set_background_color(visitor1_goals, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(visitor1_goals, GColorMidnightGreen );
		#else
		  text_layer_set_text_color(visitor1_goals, GColorWhite);
		#endif
	  text_layer_set_text(visitor1_goals, visitor1goals);
	  text_layer_set_text_alignment(visitor1_goals, GTextAlignmentCenter);
	  text_layer_set_font(visitor1_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitor1_goals));
	  

	  // local2_goals
	  local2_goals = text_layer_create(LOCAL2_GOALS);
	  text_layer_set_background_color(local2_goals, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(local2_goals, GColorMidnightGreen );
		#else
		  text_layer_set_text_color(local2_goals, GColorWhite);
		#endif
	  text_layer_set_text(local2_goals, local2goals);
	  text_layer_set_text_alignment(local2_goals, GTextAlignmentCenter);
	  text_layer_set_font(local2_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local2_goals));

	
	  // visitor2_goals
	
	
	  visitor2_goals = text_layer_create(VISITANT2_GOALS);
	  text_layer_set_background_color(visitor2_goals, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(visitor2_goals, GColorMidnightGreen );
		#else
		  text_layer_set_text_color(visitor2_goals, GColorWhite);
		#endif
	  text_layer_set_text(visitor2_goals, visitor2goals);
	  text_layer_set_text_alignment(visitor2_goals, GTextAlignmentCenter);
	  text_layer_set_font(visitor2_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitor2_goals));
	

	  // live_minute1
	  live_minute1 = text_layer_create(LIVE_MINUTE1);
	  text_layer_set_background_color(live_minute1, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(live_minute1, GColorBlack);
		#else
		  text_layer_set_text_color(live_minute1, GColorWhite);
		#endif
	  text_layer_set_text(live_minute1, txtlive_minute1);
	  text_layer_set_text_alignment(live_minute1, GTextAlignmentCenter);
	  text_layer_set_font(live_minute1, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(live_minute1));

	  // live_minute2
	  live_minute2 = text_layer_create(LIVE_MINUTE2);
	  text_layer_set_background_color(live_minute2, GColorClear);
	  	#ifdef PBL_COLOR
		  text_layer_set_text_color(live_minute2, GColorBlack);
		#else
		  text_layer_set_text_color(live_minute2, GColorWhite);
		#endif
	  text_layer_set_text(live_minute2, txtlive_minute2);
	  text_layer_set_text_alignment(live_minute2, GTextAlignmentCenter);
	  text_layer_set_font(live_minute2, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(live_minute2));
	
	  
	  // local1_img
	  local1_img = bitmap_layer_create(LOCAL1_IMAGE);
	  bitmap_layer_set_bitmap(local1_img, s_res_local1);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(local1_img));
			
		// visitor1_img
	  visitor1_layer = bitmap_layer_create(VISITANT1_IMAGE);
	  bitmap_layer_set_bitmap(visitor1_layer, escudo_visitante1);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(visitor1_layer));
	
	  // local2_img
	  local2_img = bitmap_layer_create(LOCAL2_IMAGE);
	  bitmap_layer_set_bitmap(local2_img, s_res_local2);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(local2_img));
		

	  // visitor2_img
	  visitor2_layer = bitmap_layer_create(VISITANT2_IMAGE);
	  bitmap_layer_set_bitmap(visitor2_layer, escudo_visitante2);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(visitor2_layer));
			

		//check the Pebble model to determine if the image is colored or not
			bitmap_layer_set_compositing_mode(local1_img, GCompOpSet);
			bitmap_layer_set_compositing_mode(visitor1_layer, GCompOpSet);
			bitmap_layer_set_compositing_mode(visitor2_layer, GCompOpSet);
			bitmap_layer_set_compositing_mode(local2_img, GCompOpSet);

	
        // Ensures time is displayed immediately (will break if NULL tick event accessed).
         // (This is why it's a good idea to have a separate routine to do the update itself.)
	
		time_t now = time(NULL);
	  	struct tm *current_time = localtime(&now);
		handle_tick(current_time, MINUTE_UNIT);
		tick_timer_service_subscribe(SECOND_UNIT, &handle_tick);
	
    
		//*********//
		// BUTTONS //
		//*********//
		window_set_click_config_provider(s_window, (ClickConfigProvider) config_provider);
	
	  
	
	
        
} //HANDLE_INIT

//**********************//
// Kill the application //
//**********************//
void handle_deinit(void)
{
        
   //Deallocate the main window
    window_destroy(s_window);

} //HANDLE_DEINIT

						  
//*************//
// ENTRY POINT //
//*************//
int main(void)
{        
        handle_init();
        app_event_loop();
        handle_deinit();
}

