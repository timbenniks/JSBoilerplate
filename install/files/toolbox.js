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
		
		capitalize: function(string)
		{
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		
		constants: 
		{
			window: $(window),
			document: $(document),
			location: window.location
		}
	});
})(jQuery, window.NAMESPACE = window.NAMESPACE || {});