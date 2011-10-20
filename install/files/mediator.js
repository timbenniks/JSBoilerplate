(function(NAMESPACE)
{
	NAMESPACE.Mediator = function()
	{
		var components = {},

		debug = function(debug)
		{
			NAMESPACE.log(debug);
		},

		error = function(error)
		{
			NAMESPACE.catchError(error);
		},

		broadcast = function(event, args, source)
		{
			var e = event || false,
				a = args  || [],
				c, s;

			if (!e)
			{
				return;
			}

			debug(["Mediator received", e, a].join(' '));

			for (c in components)
			{
				if (typeof components[c]["on" + e] === "function")
				{
					try
					{
						debug("Mediator calling " + e + " on " + c);

						s = source || components[c];
						components[c]["on" + e].apply(s, a);
					}
					catch (err)
					{
						error(err);
					}
				}
			}
		},

		removeComponent = function(name)
		{
			if (name in components)
			{
				delete components[name];
			}
		},

		addComponent = function(name, component, replaceDuplicate)
		{
			if (name in components)
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
		 },

		getComponent = function(name)
		{
			return components[name] || false;			
		},

		contains = function(name)
		{
			return (name in components);
		};

		return {
			name:		"Mediator",
			add:		addComponent,
			remove:		removeComponent,
			get:		getComponent,
			has:		contains,
			broadcast:	broadcast
		};
	}();

})(window.NAMESPACE = window.NAMESPACE || {});