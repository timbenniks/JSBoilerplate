/*globals jQuery*/

(function($, NAMESPACE) 
{
	var form = function ()
	{
		var ns = NAMESPACE,
			mediator = ns.Mediator,
			elementsToValidate,
			formData,
			formMethod,
			formAction,
			postOptions,

		validate = function (form)
		{
			ns.constants.errorElements = [];

			elementsToValidate = form.find('[data-val]');

			elementsToValidate.each(function ()
			{
				var element = $(this);

				element
					.removeData('error')
					.removeData('errorKind');

				$.each(element.data(), function (whatToValidateOn, value)
				{
					if (whatToValidateOn === 'val')
					{
						return false;
					}
					else
					{
						mediator.broadcast(ns.capitalize(whatToValidateOn), [element]);
					}
				});
			});

			if (ns.constants.errorElements.length)
			{
				return false;
			}
			else
			{
				return true;
			}
		},

		listeners =
		{
			onSubmit: function (form)
			{
				formData = form.serialize();
				formMethod = form.attr('method');
				formAction = form.attr('action');

				postOptions =
				{
					url: formAction,
					data: formData
    		    };

				mediator.broadcast(ns.capitalize(formMethod), [postOptions, 'FormSubmit']);
			},

			onValidateForm: function (form)
			{
				if (validate(form))
				{
					mediator.broadcast('FormValidated', [form]);
				}
				else
				{
					mediator.broadcast('FormErrored', [form, ns.constants.errorElements]);
				}
			},

			constants:
			{
				formErrorElements: []
			}
		};

		return listeners;
	} ();

	NAMESPACE.Mediator.add('form', form);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});