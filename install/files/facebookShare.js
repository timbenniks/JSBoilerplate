/*globals FB, jQuery*/

(function($, NAMESPACE) 
{
	var facebookShare = function() 
	{
		var ns = NAMESPACE,
			mediator = ns.Mediator,
			shareDefaults = { method: 'feed', dislpay: 'dialog' },
			shareOptions,
					
		shareWithDialog = function(options)
		{
			shareOptions = $.extend({}, options, shareDefaults);
			
			FB.ui(shareOptions, function(response)
			{
				mediator.broadcast('FacebookShareDone', [response]);
			});
		},
		
		shareAsApp = function(userId, options)
		{
			shareOptions = $.extend({}, options, shareDefaults);
			
			FB.api(userId + '/feed', 'post', shareOptions, function(response)
			{
				mediator.broadcast('FacebookShareDone', [response]);
			});			
		},
		
		listeners = 
		{
			onFacebookShareWithDialog: function(options)
			{
				shareWithDialog(options);
			},
			
			onFacebookShareAsApp: function(options)
			{
				shareAsApp(options);
			}
		};
		
		return listeners;
	}();
		
	NAMESPACE.Mediator.add('facebookShare', facebookShare);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});