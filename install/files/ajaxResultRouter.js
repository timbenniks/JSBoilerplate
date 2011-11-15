/*globals jQuery*/
(function($, LE) 
{
	var ajaxResultRouter = function() 
	{
		var ns = NAMESPACE, 
			mediator = ns.Mediator,
		
		listeners = 
		{			
			onAjaxResult: function(result, handle)
			{
				mediator.broadcast(handle, [result[0]]);
			},
			
			onAjaxError: function(result, handle)
			{
				mediator.broadcast(handle+'Error', [result[0]]);
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('ajaxResultRouter', ajaxResultRouter);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});