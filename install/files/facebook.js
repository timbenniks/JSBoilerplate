/*globals FB, jQuery*/

(function($, NAMESPACE) 
{
	var facebook = function() 
	{
		var ns = NAMESPACE, 
			mediator = ns.Mediator,
			win = ns.constants.window,
			doc = ns.constants.document,
			fbkOptions,
		
		init = function()
		{
			fbkOptions = ns.constants.facebook;
			
			doc.find('body').append('<div id="fb-root"></div>');
			
			(function ()
			{
				var e = document.createElement('script');
				e.async = true;
				e.src = 'http://connect.facebook.net/'+ fbkOptions.locale +'/all.js';
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
			onFacebookLogin: login,
			constants: 
			{
				facebook: 
				{
					initOptions: 
					{
						apiKey: '269201589764235',
						appId: '269201589764235',
						status: true,
						cookie: true,
						xfbml: true,
						oauth: true
					},
					
					permissions: 'publish_stream',
					locale: 'en_US'
				}
			}
		};
		
		return listeners;
	}();
		
	NAMESPACE.Mediator.add('facebook', facebook);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});