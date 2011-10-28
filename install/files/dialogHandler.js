/*globals jQuery*/

(function($, NAMESPACE) 
{
	var dialogHandler = function() 
	{
		var	ns = NAMESPACE,
			mediator = ns.Mediator,
			dialogInstance = mediator.get('dialog'),
						
		listeners = 
		{
			onInit: function()
			{
				$('.trigger-dialog-show').bind('click', function()
				{
					dialogInstance.setContent('<h1>Monkey</h1>');
					mediator.broadcast('ShowDialog');
				});
				
				$('.trigger-dialog-hide').bind('click', function()
				{
					mediator.broadcast('HideDialog');
				});
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('dialogHandler', dialogHandler);

}(jQuery, window.NAMESPACE = window.NAMESPACE || {}));