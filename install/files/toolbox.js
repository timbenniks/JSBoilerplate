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
			document: $(document),
			location: window.location,
			facebook: 
			{
				initOptions: 
				{
					apiKey: '7ab92fa4972e7384a0eb7bac37dcc9ab',
					appId: '269201589764235',
					status: true,
					cookie: true,
					xfbml: true,
					oauth: true
				},
				
				permissions: 'publish_stream',
				locale: 'en_US'
			}
		}
	});
})(jQuery, window.NAMESPACE = window.NAMESPACE || {});