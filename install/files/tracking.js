/*globals _gaq*/

(function(NAMESPACE) 
{
	var tracking = function() 
	{
		var	trackEvent = function (trackingData)
		{
			_gaq.push(['_trackEvent', trackingData.category, trackingData.action, trackingData.label]);
		},

		trackPageView = function (url)
		{
			_gaq.push(['_trackPageview', url]);
		},
		
		listeners = 
		{
			onTrackEvent: function(trackingData) 
			{
				trackEvent(trackingData);
			},
			
			onTrackPageView: function(url)
			{
				trackPageView(url);
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('tracking', tracking);

})(window.NAMESPACE = window.NAMESPACE || {});