/*globals jQuery*/

(function($, NAMESPACE) 
{
	var urlHandler = function() 
	{
		var ns = NAMESPACE,
			loc = ns.constants.location,
			win = ns.constants.window,
			mediator = ns.Mediator,
			parsedUrl = [],
		
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
		
		unparam: function(parameters)
		{
			var returnObj = {},
				segment = parameters.replace(/^.*\?/,'').split('&'),
				length = segment.length, 
				i = 0, 
				splittedSegment;
			
			for (;i < length; i++) 
			{
				if (!segment[i]) 
				{ 
					continue; 
				}
				
				splittedSegment = segment[i].split('=');
				returnObj[splittedSegment[0]] = splittedSegment[1];
			}

			return returnObj;
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