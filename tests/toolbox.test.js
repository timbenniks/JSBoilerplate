/*globals jQuery,module,test,ok,equal,QUnit*/

(function($, QUnit, NAMESPACE) 
{
	/* basics
	----------------------------------------------------- */
	
	var ns = NAMESPACE;
	
	/* Toolbox
	----------------------------------------------------- */
	
	module('Toolbox');
	test('Constants', function()
	{
		equal(ns.constants.document[0], $(document)[0], 'NAMESPACE.constants.document is $(document)');
		equal(ns.constants.window[0], $(window)[0], 'NAMESPACE.constants.window is $(window)');
		equal(ns.constants.location, window.location, 'NAMESPACE.constants.location is window.location');
	});
	
}(jQuery, QUnit, window.NAMESPACE = window.NAMESPACE || {}));