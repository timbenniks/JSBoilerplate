/*globals jQuery*/

/* 

var ajaxOptions = 
{
	url: 'ajax.json',
	dataType: 'json',
	data: { "data":"data" }
}

NAMESPACE.Mediator.broadcast('Get', [ajaxOptions, 'TimeLineUpdate']);

*/

(function($, NAMESPACE) 
{
	var ajaxHandler = function() 
	{
		var mediator = NAMESPACE.Mediator,
	
		call = function(method, options, handle)
		{
			var ajaxOptions = $.extend(true, options, 
			{
				success: function(data, textStatus, jqXHR)
				{
					var result = [{'data': data, 'textStatus': textStatus, 'jqXHR': jqXHR}];
										
					mediator.broadcast('AjaxResult', [result, handle]);
				},
				
				error: function(jqXHR, textStatus, errorThrown)
				{
					var result = [{'jqXHR': jqXHR, 'textStatus': textStatus, 'errorThrown': errorThrown}];
					
					mediator.broadcast('AjaxError', [result, handle]);
				},

				method: method
			});
			
			$.ajax(ajaxOptions);
		},
	
		listeners = 
		{
			onGet: function(options, handle)
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
	
	NAMESPACE.Mediator.add('ajaxHandler', ajaxHandler);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});