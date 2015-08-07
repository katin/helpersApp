/* testWrapper.js
 *
 * A simple shell for developing components
 * Uses vanilla JS so as to not require jQuery, etc.
 *
 */

testWrapper = {
	
	/**
	 * start
	 *  
	 * Call routines to set up needed environment for the
	 *  component(s) under development, then activate the
	 *  component(s).		
	 */

	start: function(){

		document.getElementById('message').innerHTML += '<br/><span class="status-message">Test wrapper active.</span>';

		mapModule.displayMap({
            lat: -20.000,
            lng: 150.000,
            fromName: 'Tom',
            message: 'Thanks for the help man!',
            aboutName: 'Fred'
        });
		
	},
	

};
