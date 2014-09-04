//Declare and Import references
#include <pebble.h>
#include "pebble_fonts.h"
	
#define DIAL_RADIUS 3

static const char *LigaBBVA[] = {
	NULL,
	"MAL", //Málaga
	"ATH", //Athletic de Bilbao
	"SEV", //Sevilla
	"VCF", //Valencia
	"GRA", //Granada
	"DEP", //Deportivo
	"ALM", //Almeria
	"ESP", //Español
	"EIB", //Eibar
	"RSO", //Real Sociedad
	"CEL", //Celta de Vigo
	"GET", //Getafe
	"LEV", //Levante
	"VIL", //Villareal
	"RMA", //Real Madrid
	"COR", //Córdoba
	"RAY", //Rayo Vallecano
	"ATM", //Atlético de Madrid
	"FCB", //Barça
	"ELC", //Elche
};

static const int PageNumbers[6] = {
	0,
	3, // Page 1
	9, // Page 2
	15, //Page 3
	21, //Page 4
	27, //Page 5
};

static const char LigaBBVA_escudos[] = {
	RESOURCE_ID_MAL,
	RESOURCE_ID_MAL,
	RESOURCE_ID_ATH,
	RESOURCE_ID_SEV,
	RESOURCE_ID_VCF,
	RESOURCE_ID_GRA,
	RESOURCE_ID_DEP,
	RESOURCE_ID_ALM,
	RESOURCE_ID_ESP,
	RESOURCE_ID_EIB,
	RESOURCE_ID_RSO,
	RESOURCE_ID_CEL,
	RESOURCE_ID_GET,
	RESOURCE_ID_LEV,
	RESOURCE_ID_VIL,
	RESOURCE_ID_RMA,
	RESOURCE_ID_COR,
	RESOURCE_ID_RAY,
	RESOURCE_ID_ATM,
	RESOURCE_ID_FCB,
	RESOURCE_ID_ELC,

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
const int inbound_size = 256;
const int outbound_size = 256;
						  
GPoint Center1, Center2, Center3, Center4, Center5;
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
char txtLocals[] = "01|01|02|03|04|05|06|07|08|09|10";
char txtVisitors[] = "11|11|12|13|14|15|16|17|18|19|20";
char txtLocalGoals[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtVisitorGoals[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtLiveMinutes[] = "XX|XX|XX|XX|XX|XX|XX|XX|XX|XX|XX";
char txtStatuses[] = "-1|-1|-1|-1|-1|-1|-1|-1|-1|-1|-1";

static char jornada[] = "Round ";

int intRound = 2;
char txtRound[]="  ";

char weekday_num[]="  ";
char month_num[]="  ";
char day_month[]="  ";

int intLocal;
int intVisitor;

int intPage = 1;

InverterLayer *inv_layer;


						 

//#define WEEKDAY_FRAME    (GRect(5, 2, 102, 168-145)) //,,95,
//#define TIME_FRAME       (GRect(0, 15, 144, 168-16))
//#define DATE_FRAME       (GRect(1, 69, 139, 168-62))
//#define RESULTS_FRAME    (GRect(1, 70, 144, 198))
//#define BANNER_FRAME        (GRect(0, 154, 144, 14)) 

static Window *s_window;
static GBitmap *s_res_visitor1;
static GBitmap *s_res_local1;
static GBitmap *s_res_local2;
static GBitmap *s_res_visitor2;
static GBitmap *s_res_liga_bbva;
static GFont s_res_gothic_14;
static GFont s_res_gothic_28_bold;
static BitmapLayer *visitor1_img;
static BitmapLayer *local1_img;
static BitmapLayer *local2_img;
static BitmapLayer *visitor2_img;
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

static TextLayer *Weekday_Layer;
static TextLayer *results_layer;


//HANDLE THE TIME
void handle_tick(struct tm *tick_time, TimeUnits units_changed)
{
		
//Init the date
			
	//Get the English fortmat
	strftime(month_text,sizeof(month_text),"%B %e",tick_time);
	strftime(weekday_text,sizeof(weekday_text),"%A",tick_time);

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
void LaLiga_FillArrLocal(char* Locals, int intPage)
{
	
	
	int intLocal;
	int a;
	int b;
	

	//Split the string to get Local 1
	if (Locals[PageNumbers[intPage]] == '0') {a = 0;}
	else {a = Locals[PageNumbers[intPage]]-'0';}
	a=a*10;
	
	b = Locals[PageNumbers[intPage]+1] - '0';
	
	intLocal = a+b;
			
	memcpy(&local1, LigaBBVA[intLocal], strlen(LigaBBVA[intLocal])+1);
	if (s_res_local1!= NULL) {gbitmap_destroy(s_res_local1);}
	s_res_local1 = gbitmap_create_with_resource(LigaBBVA_escudos[intLocal]);	

	
	//Split the string to get Local 2
	if (Locals[PageNumbers[intPage]+3] == '0') {a = 0;}
	else {a = Locals[PageNumbers[intPage]+3]-'0';}
	a=a*10;
	
	b = Locals[PageNumbers[intPage]+4] - '0';
	
	intLocal = a+b;
			
	memcpy(&local2, LigaBBVA[intLocal], strlen(LigaBBVA[intLocal])+1);
	if (s_res_local2!= NULL) {gbitmap_destroy(s_res_local2);}
	s_res_local2 = gbitmap_create_with_resource(LigaBBVA_escudos[intLocal]);
		
}

void LaLiga_FillArrVisitor(char* Visitors, int intPage)
{
	
	int intVisitor;
	int a;
	int b;
	

	//Split the string to get Visitor 1
	if (Visitors[PageNumbers[intPage]] == '0') {a = 0;}
	else {a = Visitors[PageNumbers[intPage]]-'0';}
	a=a*10;
	
	b = Visitors[PageNumbers[intPage]+1] - '0';
	
	intVisitor = a+b;
			
	memcpy(&visitor1, LigaBBVA[intVisitor], strlen(LigaBBVA[intVisitor])+1);
	if (s_res_visitor1!= NULL) {gbitmap_destroy(s_res_visitor1);}
	s_res_visitor1 = gbitmap_create_with_resource(LigaBBVA_escudos[intVisitor]);


	//Split the string to get Visitor 2
	if (Visitors[PageNumbers[intPage]+3] == '0') {a = 0;}
	else {a = Visitors[PageNumbers[intPage]+3]-'0';}
	a=a*10;
	
	b = Visitors[PageNumbers[intPage]+4] - '0';
	
	intVisitor = a+b;
			
	memcpy(&visitor2, LigaBBVA[intVisitor], strlen(LigaBBVA[intVisitor])+1);
	if (s_res_visitor2!= NULL) {gbitmap_destroy(s_res_visitor2);}
	s_res_visitor2 = gbitmap_create_with_resource(LigaBBVA_escudos[intVisitor]);
		
}

void LaLiga_FillArrLocalGoals(char* LocalGoals, int intPage)
{
	
	int intLocalGoals;
	int a;
	int b;
	

	//Split the string to get Local 1
	if (LocalGoals[PageNumbers[intPage]] == '0') {a = 0;}
	else {a = LocalGoals[PageNumbers[intPage]]-'0';}
	a=a*10;
	
	b = LocalGoals[PageNumbers[intPage]+1] - '0';
	
	intLocalGoals = a+b;
			
	snprintf(local1goals,2,"%d",intLocalGoals);
	
	//Split the string to get Local 2
	if (LocalGoals[PageNumbers[intPage]+3] == '0') {a = 0;}
	else {a = LocalGoals[PageNumbers[intPage]+3]-'0';}
	a=a*10;
	
	b = LocalGoals[PageNumbers[intPage]+4] - '0';
	
	intLocalGoals = a+b;
			
	snprintf(local2goals,2,"%d",intLocalGoals);
	

		
}

void LaLiga_FillArrVisitorGoals(char* VisitorGoals, int intPage)
{

	int intVisitorGoals;
	int a;
	int b;
	

	//Split the string to get Local 1
	if (VisitorGoals[PageNumbers[intPage]] == '0') {a = 0;}
	else {a = VisitorGoals[PageNumbers[intPage]]-'0';}
	a=a*10;
	
	b = VisitorGoals[PageNumbers[intPage]+1] - '0';
	
	intVisitorGoals = a+b;
			
	snprintf(visitor1goals,2,"%d",intVisitorGoals);
	
	//Split the string to get Local 2
	if (VisitorGoals[PageNumbers[intPage]+3] == '0') {a = 0;}
	else {a = VisitorGoals[PageNumbers[intPage]+3]-'0';}
	a=a*10;
	
	b = VisitorGoals[PageNumbers[intPage]+4] - '0';
	
	intVisitorGoals = a+b;
			
	snprintf(visitor2goals,2,"%d",intVisitorGoals);

}

void LaLiga_FillArrLiveMinute(char* Matches, char* Status, int intPage)
{

	int intMinute;
	int a;
	int b;
	
	//Status: 
	//-1 = Not Started
	//00 = In Progress
	//+1 = Finish

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
	else if ((Status[PageNumbers[intPage]] == '+')){memcpy(&txtlive_minute1,"FIN",3);} //Matc 1 already finish
	
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
	else if ((Status[PageNumbers[intPage]+3] == '+')){memcpy(&txtlive_minute2,"FIN",3);} //Matc 2 already finish

}

/********************************/
/* Refresh data from the server */
/********************************/

static void SplitDateFromArrays(void) {
			
			LaLiga_FillArrLocal(txtLocals,intPage);
			LaLiga_FillArrVisitor(txtVisitors,intPage);
			LaLiga_FillArrLocalGoals(txtLocalGoals,intPage);
			LaLiga_FillArrVisitorGoals(txtVisitorGoals,intPage);
			LaLiga_FillArrLiveMinute(txtLiveMinutes,txtStatuses,intPage);
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
		
			//Decrease the Page Number
			intPage = intPage + 1;
			//But... Hey! There must be a page limit!! (in La Liga BBVA there are just 5 pages per round)
			if (intPage > 5) {intPage = 5;}
		
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
	  //window_single_click_subscribe(BUTTON_ID_SELECT, select_pressed);
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
static uint8_t sync_buffer[256];



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
 			memcpy(&txtRound,  new_tuple->value->cstring, strlen( new_tuple->value->cstring));    
	  //Fill Locals array
	SplitDateFromArrays();
      		break; 
	    
  
  }
}

void DrawPageIndicator(Layer *me, GContext *ctx)
{
	//Page 1
	Center1 = GPoint(50, 160);
	
	graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_draw_circle(ctx, Center1, DIAL_RADIUS);
	
	if(intPage == 1){
		graphics_context_set_fill_color(ctx, GColorWhite);
    	graphics_fill_circle(ctx, Center1, DIAL_RADIUS);
	}

	//Page 2
	Center2 = GPoint(60, 160);
	
	graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_draw_circle(ctx, Center2, DIAL_RADIUS);
	
	if(intPage == 2){
		graphics_context_set_fill_color(ctx, GColorWhite);
    	graphics_fill_circle(ctx, Center2, DIAL_RADIUS);
	}
	
	//Page 3
	Center3 = GPoint(70, 160);
	
	graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_draw_circle(ctx, Center3, DIAL_RADIUS);
	
	if(intPage == 3){
		graphics_context_set_fill_color(ctx, GColorWhite);
    	graphics_fill_circle(ctx, Center3, DIAL_RADIUS);
	}
	//Page 4
	Center4 = GPoint(80, 160);
	
	graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_draw_circle(ctx, Center4, DIAL_RADIUS);
	
	if(intPage == 4){
		graphics_context_set_fill_color(ctx, GColorWhite);
    	graphics_fill_circle(ctx, Center4, DIAL_RADIUS);
	}
	//Page 5
	Center5 = GPoint(90, 160);
	
	graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_draw_circle(ctx, Center5, DIAL_RADIUS);
	
	if(intPage == 5){
		graphics_context_set_fill_color(ctx, GColorWhite);
    	graphics_fill_circle(ctx, Center5, DIAL_RADIUS);
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
	
	//Initialize the Message Service
	SetupMessages();
	
	//Fill Locals array
	SplitDateFromArrays();
	
	//Create the main window
	s_window = window_create(); 
	window_set_fullscreen(s_window,true);
	window_stack_push(s_window, true /* Animated */);
	window_set_background_color(s_window, GColorBlack);
	
	//Draw the page indicator
	GRect window_bounds = GRect(0, 0, 144, 168);
    dial_layer = layer_create(window_bounds);
	layer_set_update_proc(dial_layer, DrawPageIndicator);
	layer_add_child(window_get_root_layer(s_window), dial_layer);


	  s_res_liga_bbva = gbitmap_create_with_resource(RESOURCE_ID_LIGA_BBVA);
	  s_res_gothic_14 = fonts_get_system_font(FONT_KEY_GOTHIC_14);
	  s_res_gothic_28_bold = fonts_get_system_font(FONT_KEY_GOTHIC_28_BOLD);
	
	
	  // visitor1_img
	  visitor1_img = bitmap_layer_create(GRect(98, 62, 40, 40));
	  bitmap_layer_set_bitmap(visitor1_img, s_res_visitor1);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(visitor1_img));
	
	  // local1_img
	  local1_img = bitmap_layer_create(GRect(1, 62, 40, 40));
	  bitmap_layer_set_bitmap(local1_img, s_res_local1);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(local1_img));

	  // local2_img
	  local2_img = bitmap_layer_create(GRect(1, 111, 40, 40));
	  bitmap_layer_set_bitmap(local2_img, s_res_local2);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(local2_img));

	  // visitor2_img
	  visitor2_img = bitmap_layer_create(GRect(98, 111, 40, 40));
	  bitmap_layer_set_bitmap(visitor2_img, s_res_visitor2);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(visitor2_img));

	  // league_img
	  league_img = bitmap_layer_create(GRect(95, 35, 43, 18));
	  bitmap_layer_set_bitmap(league_img, s_res_liga_bbva);
	  layer_add_child(window_get_root_layer(s_window),  bitmap_layer_get_layer(league_img));

	  // jornada_layer
	  jornada_layer = text_layer_create(GRect(1, 35, 40, 20));
	  text_layer_set_background_color(jornada_layer, GColorClear);
	  text_layer_set_text_color(jornada_layer, GColorWhite);
	  text_layer_set_text(jornada_layer, jornada);
	  text_layer_set_text_alignment(jornada_layer, GTextAlignmentRight);
	  text_layer_set_font(jornada_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(jornada_layer));
	
	  // RoundNumber_layer
	  //snprintf(txtRound,2,"%d",intRound);
	  RoundNumber_layer = text_layer_create(GRect(46, 35, 8, 20));
	  text_layer_set_background_color(RoundNumber_layer, GColorClear);
	  text_layer_set_text_color(RoundNumber_layer, GColorWhite);
	  text_layer_set_text(RoundNumber_layer, txtRound);
	  text_layer_set_text_alignment(RoundNumber_layer, GTextAlignmentLeft);
	  text_layer_set_font(RoundNumber_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(RoundNumber_layer));

	  // date_layer
	  date_layer = text_layer_create(GRect(65, 14, 74, 20));
	  text_layer_set_background_color(date_layer, GColorClear);
	  text_layer_set_text_color(date_layer, GColorWhite);
	  text_layer_set_text(date_layer, month_text);
	  text_layer_set_text_alignment(date_layer, GTextAlignmentRight);
	  text_layer_set_font(date_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(date_layer));

	  // weekday_layer
	  weekday_layer = text_layer_create(GRect(65, 1, 74, 20));
	  text_layer_set_background_color(weekday_layer, GColorClear);
	  text_layer_set_text_color(weekday_layer, GColorWhite);
	  text_layer_set_text(weekday_layer, weekday_text);
	  text_layer_set_text_alignment(weekday_layer, GTextAlignmentRight);
	  text_layer_set_font(weekday_layer, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(weekday_layer));

	  // time_layer
	  time_layer = text_layer_create(GRect(2, 2, 66, 28));
	  text_layer_set_background_color(time_layer, GColorClear);
	  text_layer_set_text_color(time_layer, GColorWhite);
	  text_layer_set_text(time_layer, time_text);
	  text_layer_set_text_alignment(time_layer, GTextAlignmentCenter);
	  text_layer_set_font(time_layer, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(time_layer));

	  // local1_layer
	  local1_layer = text_layer_create(GRect(39, 61, 30, 16));
	  text_layer_set_background_color(local1_layer, GColorClear);
	  text_layer_set_text_color(local1_layer, GColorWhite);
	  text_layer_set_text(local1_layer, local1);
	  text_layer_set_text_alignment(local1_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local1_layer));

	  // local2_layer
	  local2_layer = text_layer_create(GRect(39, 110, 30, 16));
	  text_layer_set_background_color(local2_layer, GColorClear);
	  text_layer_set_text_color(local2_layer, GColorWhite);
	  text_layer_set_text(local2_layer, local2);
	  text_layer_set_text_alignment(local2_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local2_layer));

	  // visitant1_layer
	  visitant1_layer = text_layer_create(GRect(74, 61, 30, 16));
	  text_layer_set_background_color(visitant1_layer, GColorClear);
	  text_layer_set_text_color(visitant1_layer, GColorWhite);
	  text_layer_set_text(visitant1_layer, visitor1);
	  text_layer_set_text_alignment(visitant1_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitant1_layer));

	  // visitant2_layer
	  visitant2_layer = text_layer_create(GRect(74, 110, 30, 16));
	  text_layer_set_background_color(visitant2_layer, GColorClear);
	  text_layer_set_text_color(visitant2_layer, GColorWhite);
	  text_layer_set_text(visitant2_layer, visitor2);
	  text_layer_set_text_alignment(visitant2_layer, GTextAlignmentCenter);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitant2_layer));

	  // local1_goals
	  local1_goals = text_layer_create(GRect(37, 73, 28, 28));
	  text_layer_set_background_color(local1_goals, GColorClear);
	  text_layer_set_text_color(local1_goals, GColorWhite);
	  text_layer_set_text(local1_goals, local1goals);
	  text_layer_set_text_alignment(local1_goals, GTextAlignmentCenter);
	  text_layer_set_font(local1_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local1_goals));

	  // visitor1_goals
	  visitor1_goals = text_layer_create(GRect(75, 73, 28, 28));
	  text_layer_set_background_color(visitor1_goals, GColorClear);
	  text_layer_set_text_color(visitor1_goals, GColorWhite);
	  text_layer_set_text(visitor1_goals, visitor1goals);
	  text_layer_set_text_alignment(visitor1_goals, GTextAlignmentCenter);
	  text_layer_set_font(visitor1_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitor1_goals));

	  // local2_goals
	  local2_goals = text_layer_create(GRect(37, 121, 28, 28));
	  text_layer_set_background_color(local2_goals, GColorClear);
	  text_layer_set_text_color(local2_goals, GColorWhite);
	  text_layer_set_text(local2_goals, local2goals);
	  text_layer_set_text_alignment(local2_goals, GTextAlignmentCenter);
	  text_layer_set_font(local2_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(local2_goals));

	  // visitor2_goals
	  visitor2_goals = text_layer_create(GRect(75, 121, 28, 28));
	  text_layer_set_background_color(visitor2_goals, GColorClear);
	  text_layer_set_text_color(visitor2_goals, GColorWhite);
	  text_layer_set_text(visitor2_goals, visitor2goals);
	  text_layer_set_text_alignment(visitor2_goals, GTextAlignmentCenter);
	  text_layer_set_font(visitor2_goals, s_res_gothic_28_bold);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(visitor2_goals));

	  // live_minute1
	  live_minute1 = text_layer_create(GRect(60, 81, 20, 15));
	  text_layer_set_background_color(live_minute1, GColorClear);
	  text_layer_set_text_color(live_minute1, GColorWhite);
	  text_layer_set_text(live_minute1, txtlive_minute1);
	  text_layer_set_text_alignment(live_minute1, GTextAlignmentCenter);
	  text_layer_set_font(live_minute1, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(live_minute1));

	  // live_minute2
	  live_minute2 = text_layer_create(GRect(60, 129, 20, 15));
	  text_layer_set_background_color(live_minute2, GColorClear);
	  text_layer_set_text_color(live_minute2, GColorWhite);
	  text_layer_set_text(live_minute2, txtlive_minute2);
	  text_layer_set_text_alignment(live_minute2, GTextAlignmentCenter);
	  text_layer_set_font(live_minute2, s_res_gothic_14);
	  layer_add_child(window_get_root_layer(s_window), text_layer_get_layer(live_minute2));
	
		//Invert layer for date and time
		inv_layer = inverter_layer_create(GRect(0, 0, 144, 57));
		layer_add_child(window_get_root_layer(s_window), (Layer*) inv_layer);
	
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

