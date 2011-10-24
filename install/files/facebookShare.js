/*globals FB, jQuery*/

(function($, NAMESPACE) 
{
	var facebookShare = function() 
	{
		var shareDefaults = { method: 'feed', dislpay: 'dialog' },
			shareOptions,
		
		share = function(options)
		{
			shareOptions = $.extend({}, options, shareDefaults);
			
			FB.ui(shareOptions, function(response)
			{
				mediator.broadcast('FacebookShareDone', [response]);
			});
		},
		
		listeners = 
		{
			onFacebookShare: function(options)
			{
				share(options);
			}
		};
		
		return listeners;
	}();
		
	NAMESPACE.Mediator.add('facebookShare', facebookShare);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});