/**
* Create and Display the helper map
* 
* @class MapModule
* @author #WeLearnJS Team
*
*/

mapModule = {

		/* local variables */
	_debug:		false,


	/**
	 * Display Map
	 *  
	 */

	displayMap: function(){
		/* ... */

		document.getElementById('message').innerHTML += '<br/><span class="status-message">mapModule says hello.</span>';
    
        
        
        var map = new google.maps.Map(document.getElementById('mapCanvas'), {
                zoom: 2,
                center: {lat: -20.000, lng: 150.00}
        });   
    
		
	},
    /**
     * Create Marker
     * Function to place new Persons on the map.
     */
    addHelper: function(twitterHandle, lat, lng){
        
    }
	

};