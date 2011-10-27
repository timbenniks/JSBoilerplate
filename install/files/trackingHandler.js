/*globals jQuery*/

(function($, NAMESPACE) 
{
	var trackingHandler = function() 
	{
		var ns = NAMESPACE,
			mediator = ns.Mediator,
		
		extractTrackingData = function(object)
		{
			var trackingData = $(object).data('tracking') || new Object();
			
			if(!trackingData.category) { trackingData.category = '' }
			if(!trackingData.action) { trackingData.action = '' }
			if(!trackingData.label) { trackingData.label = '' }

			return trackingData;
		},
		
		listeners =
		{
			onInit: function() 
			{
				$('.trigger-tracking-event').bind('click', function(event)
				{
					mediator.broadcast('TrackEvent', [extractTrackingData(this)])
				});
				
				mediator.broadcast('TrackPageView', ['example.com']);
			}
		}
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('trackingHandler', trackingHandler);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});