/*globals jQuery*/

(function($, NAMESPACE) 
{
	var dialog = function() 
	{
		var	ns = NAMESPACE,
			mediator = 	ns.Mediator,
			
		listeners = 
		{
			onInit: function() 
			{
				
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('dialog', dialog);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});