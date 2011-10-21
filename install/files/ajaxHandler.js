/*globals jQuery*/
(function($, NAMESPACE) 
{
	var ajaxhandler = function() 
	{
		var win = NAMESPACE.constants.window,
			mediator = NAMESPACE.Mediator,
	
		call = function(method, options, handle)
		{
			var ajaxOptions = $.extend(true, options, 
			{
				success: function(data)
				{
					mediator.broadcast('AjaxSuccess', [{data: data}, {handle: handle}]);
				},
				
				error: function(data)
				{
					mediator.broadcast('AjaxError', [{data: data}, {handle: handle}]);
				},

				method: method
			});
			
			$.ajax(ajaxOptions);
		},
	
		listeners = 
		{			
			onGet : function(handle, options)
			{
				call('get', options, handle);
			},
			
			onPost: function(options, handle) 
			{
				call('post', options, handle);
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('ajaxhandler', ajaxhandler);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});