/*globals FB, jQuery*/

(function($, NAMESPACE) 
{
	var facebook = function() 
	{
		var mediator = NAMESPACE.Mediator,
			facebookLocale = 'en_US',
			win = NAMESPACE.constants.window,
			doc = NAMESPACE.constants.document,
			fbkOptions = NAMESPACE.constants.facebook,
		
		init = function()
		{
			doc.find('body').append('<div id="fb-root"></div>');
			
			(function ()
			{
				var e = document.createElement('script');
				e.async = true;
				e.src = 'http://connect.facebook.net/'+ facebookLocale +'/all.js';
				document.getElementById('fb-root').appendChild(e);
			}());	
			
			win[0].fbAsyncInit = function ()
			{
				FB.init(fbkOptions.initOptions);
				FB.Canvas.setAutoResize();
			};
		},
		
		login = function()
		{
			FB.login(function(result)
			{
				if(result.status === 'unknown')
				{
					mediator.broadcast('FacebookLoginError', [result]);
				}
				else
				{
					mediator.broadcast('FacebookLoggedIn', [result]);
				}
			},
			{
				scope: fbkOptions.permissions
			});
		},
		
		listeners = 
		{
			onInit: init,
			onFacebookLogin: login
		};
		
		return listeners;
	}();
		
	NAMESPACE.Mediator.add('facebook', facebook);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});