 //Variable de entorno.
if (window.location.host == "www.bbvaopenmind.com") {var envDev = false;} else { var envDev = true;}
var URL = window.location;
var URLdomain = window.location.host;
var scriptCodeAdobe;
var scriptCodeAnalytics; 

	if (envDev) {
		console.log("URL: " + URL);
		console.log("URLdomain: " + URLdomain);
	}

//Obtencion array scripts options.
var dataCookies = getJsonCookies();

if(dataCookies === false){
   if (envDev) {
        console.log("❌ No tenemos el JSON en Storage, tomamos el array PHP. (No se actualiza en caliente)");
    }
}else{
    OnetrustJsonScripts = dataCookies;
    if (envDev) {
        console.log("🔥 Si tenemos el JSON, seteamos el array de scripts");
    }
}

if (envDev) {
    console.info("Array scripts");
    console.log(OnetrustJsonScripts);
}


//Funcion de activación de cookies por categorías.
function OptanonWrapper() {

    //Comprobamos si la politica ha sido aceptada.
    var bannerAceptado = Optanon.IsAlertBoxClosedAndValid();
	if (bannerAceptado) {
        //Si ha aceptado la cookie de categoría C0003 cambiamos la url de youtubeNoCookie a la original con cookies
		if (OnetrustActiveGroups.indexOf("C0003") > 0){
			jQuery('iframe[src*="youtu"]').each(function(){
				var urlYoutube = jQuery(this).attr('src');
				jQuery(this).attr('src', changeYoutubeNOCookieUrlAYoutube(urlYoutube));
			});
		}
    }
    //Comprobamos si el banner ha sido aceptado y si tenemos disponible el array de scripts proviniente del Back de WP.
    if ( (OnetrustJsonScripts != "undefined") && (bannerAceptado) ) {

        if (envDev) {
            console.time("Tiempo de ejecución");
            console.info("🆗 Banner aceptado!");
        }
       
        //Convertimos los grupos activos a un array.
        OnetrustActiveGroupsArray = OnetrustActiveGroups.split(',');

        if (OnetrustActiveGroupsArray[0] === '') {
            OnetrustActiveGroupsArray.splice(0, 1);
        }
       
        if (OnetrustActiveGroupsArray[OnetrustActiveGroupsArray.length-1] === '') {
            OnetrustActiveGroupsArray.splice(OnetrustActiveGroupsArray.length-1, 1);
        }

        if (envDev) {
            console.info("ℹ️ Categorias aceptadas por el user");
            console.log(OnetrustActiveGroupsArray);
        }

        //Variables temporales para almacenar código.
        var catAdobeScripts = '<!-- Start Adobe OneTrustScripts  --> \n'; 
        var catGoogleAnalyticsScripts = '<!-- Start GoogleAnalytics OneTrustScripts  --> \n'; 

        if (envDev) { 
            console.groupCollapsed("📝 Scripts registrados");
        }
		var scriptAdobeHead = false;
		var scriptAnalytics = false;

        //Recorremos el array de los scripts que tenemos dados de alta. 
        jQuery.each(OnetrustJsonScripts, function(i, item)  {
            
            //Configurable en Opciones -> Scripts.
            var scriptName = item.script;
            var scriptCode = item.codigo;
            var scriptLocation = item.location;
            var scriptCategory = item.categoria_onetrust;

            //Si la categoría ha sido aceptada registramos el script.
            if ( (jQuery.inArray( scriptCategory, OnetrustActiveGroupsArray ) > 0) && (scriptCategory !== "C0001") ) {

                if (envDev) { 
                    console.log(scriptName + " perteneciente a la categoría: " + scriptCategory);
                }

                //Añadimos los scripts a su respectivo contenedor.
                //Scripts Adobe head
				if (!scriptAdobeHead){
					if (scriptCategory == 'C0002' && scriptName == 'Adobe Tag Manager') {	
							scriptAdobeHead = true;
							scriptCodeAdobe = scriptCode;
					}
				}				
				
                //Scripts GoogleAnalytics
				if (!scriptAnalytics){
					if (scriptCategory == 'C0003' && scriptName == 'GoogleAnalytics') {
						scriptAnalytics = true;
						scriptCodeAnalytics = scriptCode;
					}
				}
            } 
        });
		
		if ( scriptAdobeHead && scriptAnalytics) {
			catAdobeScripts = catAdobeScripts + scriptCodeAdobe + '\n';
			catGoogleAnalyticsScripts = catGoogleAnalyticsScripts + scriptCodeAnalytics + '\n';
		}
		
        if (envDev) { 
            console.groupEnd();
        }

        //Cierre de las variables temporales para almacenar código.
        catAdobeScripts = catAdobeScripts + '<!-- End Adobe OneTrustScripts -->';
        catGoogleAnalyticsScripts = catGoogleAnalyticsScripts + '<!-- End  GoogleAnalytics OneTrustScripts -->';
       
        
        if (envDev) {
            console.groupCollapsed("ℹ️ Scripts insertados");

            console.info("ℹ️ Scripts Header_preend");
            console.log(catAdobeScripts);

            console.info("ℹ️ Scripts Head_append");
            console.log(catGoogleAnalyticsScripts);

            console.groupEnd();
        }

        //Insertamos los scripts en sus emplazamientos correspondientes.
        jQuery( "head" ).prepend(catAdobeScripts);
        jQuery( "head" ).append(catGoogleAnalyticsScripts);

        if (envDev) {
            console.timeEnd("Tiempo de ejecución");
        }
    }
}

function changeYoutubeNOCookieUrlAYoutube(urlYoutube) {
    return urlYoutube.replace("youtube-nocookie.com", "youtube.com");;
}

function changeYoutubeUrlAYoutubeNOCookie(urlYoutube) {
    return urlYoutube.replace("youtube.com", "youtube-nocookie.com");;
}

function getJsonCookies(){
    try{
	   
	    var jsonUrl='';
        var randVer = Math.floor(Math.random() * 100) + 1;
    
        if (envDev) {
            console.info("🔗 Url del recurso JSON");
            console.info(jsonUrl);
			jsonUrl = cb_options + "/ArrayScriptsSandbox.json?ver=" + randVer ;
        }else {
			jsonUrl = cb_options + "/ArrayScripts.json?ver=" + randVer ;
		}
		
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", jsonUrl, false);  
        xmlHttp.send(null);      
        var response = JSON.parse(xmlHttp.response);
        return response;
		
    }catch(error) {
	console.log("Excepción!!!" + error) ;
      return false;
    }
    
}

function callGaOnclick(type, title){
	if(typeof ga == "function"){
		ga('send', 'event', 'Downloads', type , title);
	}
}

