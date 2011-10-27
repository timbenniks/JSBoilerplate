/*globals jQuery*/

(function($, NAMESPACE) 
{
	var constantsHandler = function() 
	{
		var ns = NAMESPACE,
			mediator = ns.Mediator,
			constants = ns.constants,
		
		listeners = 
		{
			onManageConstantsThenInit: function()
			{
				mediator.manageConstants();
				mediator.broadcast('Init');
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('constantsHandler', constantsHandler);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});