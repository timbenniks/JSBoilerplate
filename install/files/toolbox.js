/*globals jQuery*/

(function($, NAMESPACE) 
{
	$.extend(NAMESPACE,
	{
		catchError: function(error)
		{
			this.log("Error: [" + error.message + "] in: " + error.fileName + ", on: " + error.lineNumber);
		},

		log: function () 
		{
			if (window.console && typeof window.console.log === 'function') 
			{
				console.log.apply(window.console, arguments);
			}
		},
		
		constants: 
		{
			window: $(window),
			location: window.location			
		}
	});
})(jQuery, window.NAMESPACE = window.NAMESPACE || {});