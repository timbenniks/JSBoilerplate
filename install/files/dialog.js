/*globals jQuery*/

(function($, NAMESPACE) 
{
	var dialog = function() 
	{
		var	ns = NAMESPACE,
			mediator = ns.Mediator,
			doc = ns.constants.document,
			win = ns.constants.window,
			dialog,
			dialogContentHolder,
			dialogCloseBtn,
			dialogContent = 'Use the setContent function to add content to the dialog.',
		
		build = function()
		{
			dialog = $('<div id="dialog"></div>').hide();
			dialogContentHolder = $('<div class="dialog-content-holder"></div>');
			dialogCloseBtn = $('<div class="dialog-close-btn">close</div>');
			
			dialog
				.append(dialogCloseBtn)
				.append(dialogContentHolder)
				.appendTo(doc.find('body'));
			
			
		},
		
		position = function()
		{
			var dialogWidth = dialog.outerWidth(),
				dialogHeight = dialog.outerHeight(),
				windowWidth = win.width(),
				windowHeight = win.height(),
				windowScrollTop = win.scrollTop(),
				windowScrollLeft = win.scrollLeft(),
				top = ((windowHeight - dialogHeight) / 2),
				left = ((windowWidth - dialogWidth) / 2);
			
			if (windowScrollTop > 0) { top += windowScrollTop; }
			if (windowScrollLeft > 0) { left += windowScrollLeft; }
			
			if(top < 0) { top = windowScrollTop; }
			if(left < 0) { left = windowScrollLeft; }
			
			dialog.css({ top: top, left:left });
		},
		
		fill = function()
		{
			dialogContentHolder.html(dialogContent);
		},
		
		setFill = function(content)
		{
			dialogContent = content;
		},
		
		hide = function(callback)
		{
			if(typeof dialog !== 'undefined')
			{
				dialog.fadeOut(300, function()
				{
					$(this).remove();
					mediator.broadcast('DialogHidden');
					
					if(callback && typeof callback === 'function')
			{
				callback();
			}
				});
			}
			else 
			{
				if(callback && typeof callback === 'function')
				{
					callback();
				}
			}
		},
		
		bindListeners = function()
		{
			dialogCloseBtn.bind('click', hide);
			win.bind('scroll resize', position);
		},
		
		show = function()
		{
			hide(function()
			{
				build();
				bindListeners();
				fill();
				position();
				
				dialog.fadeIn(300, function()
				{
					mediator.broadcast('DialogVisible');
				});
			});
		},
					
		listeners = 
		{
			onShowDialog: show,
			onHideDialog: hide,		
			setContent: function(content)
			{
				setFill(content);
			}
		};
		
		return listeners;
	}();
	
	NAMESPACE.Mediator.add('dialog', dialog);

}(jQuery, window.NAMESPACE = window.NAMESPACE || {}));