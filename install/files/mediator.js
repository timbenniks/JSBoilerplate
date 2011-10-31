/*globals jQuery*/

(function($, NAMESPACE)
{
	NAMESPACE.Mediator = function()
	{
		var components = {},
			ns = NAMESPACE,

		error = function(error)
		{
			ns.catchError(error);
		},

		manageComponentConstants = function(component)
		{
			if(typeof ns.constants === 'undefined')
			{
				ns.constants = {};
			}
			
			if(component && typeof component.constants === 'object')
			{
				$.extend(ns.constants, component.constants);
			}
			
			return ns.constants;
		},

		broadcast = function(event, args, source)
		{
			var e = event || false,
				a = args  || [],
				s;

			if (!e)
			{
				return;
			}

			$.each(components, function(index, component) 
			{
				if (typeof component["on" + e] === "function")
				{
					try
					{
						s = source || component;
						component["on" + e].apply(s, a);
					}
					catch (err)
					{
						error(err);
					}
				}
			});
		},

		removeComponent = function(name)
		{
			if (components.hasOwnProperty(name))
			{
				delete components[name];
			}
		},

		addComponent = function(name, component, replaceDuplicate)
		{
			if (components.hasOwnProperty(name))
			{
				try
				{
					if (replaceDuplicate)
					{
						removeComponent(name);
					}
					else
					{
						throw new Error('Mediator name conflict: ' + name);
					}
				}
				catch (error)
				{
					error(error);
				}
			}

			components[name] = component;

			manageComponentConstants(components[name]);
		},

		getComponent = function(name)
		{
			return components[name] || false;			
		},

		contains = function(name)
		{
			return (components.hasOwnProperty(name));
		},
		
		returnComponents = function()
		{
			return components;
		};

		return {
			add:				addComponent,
			remove:				removeComponent,
			get:				getComponent,
			has:				contains,
			broadcast:			broadcast,
			manageConstants:	manageComponentConstants,
			getAll:				returnComponents
		};
	}();

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});