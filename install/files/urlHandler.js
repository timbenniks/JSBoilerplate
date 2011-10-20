/*globals jQuery*/

(function($, NAMESPACE) 
{
	var urlHandler = function() 
	{
		var loc = NAMESPACE.constants.location,
			win = NAMESPACE.constants.window,
			mediator = NAMESPACE.Mediator,
			parsedUrl =  new Array(),
		
		bindHashChange = function()
		{
			win.bind('hashchange', listeners.onHashChange).trigger('hashchange');
		},
		
		parseHash = function()
		{
			if(loc.hash)
			{
				parsedUrl = loc.hash.replace('#', '').split('/');

				mediator.broadcast('Url', [parsedUrl]);
			}
			else
			{
				mediator.broadcast('NoUrl');
			}
		},
		
		listeners = 
		{
			onInit: function() 
			{
				bindHashChange();
			},
			
			onHashChange: function()
			{
				parseHash();
			},
			
			getUrlParameters: function()
			{
				return parsedUrl;
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('urlHandler', urlHandler);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});