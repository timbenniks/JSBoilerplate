(function($, LE) 
{
    var formValidators = function()
    {
	    var ns = NAMESPACE,
			mediator = ns.Mediator,

        listeners = 
        {
            onValRequired: function(element) 
            {
				if(element.val() == '')
				{
					element
						.data('error', true)
						.data('errorKind', element.data('valRequired'));
				
					ns.constants.errorElements.push(element);
				}
            },

			onValChecked: function(element) 
            {
				if(!element.is(':checked'))
				{
					element
						.data('error', true)
						.data('errorKind', element.data('valChecked'));
				
					ns.constants.errorElements.push(element);
				}
            }
        };
    
        return listeners;
    }();
	
    NAMESPACE.Mediator.add('formValidators', formValidators);

})(jQuery, window.NAMESPACE = window.NAMESPACE || {});