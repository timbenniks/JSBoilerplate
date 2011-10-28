/*globals jQuery,module,test,ok,equal,QUnit*/

(function($, QUnit, NAMESPACE) 
{
	/* basics
	----------------------------------------------------- */
	
	var ns = NAMESPACE,
	mediator = ns.Mediator,

	mediatorMock = function() 
	{
		var privateVar = 'private',

		privateFunction = function()
		{
			return 'private function';
		},

		functions = 
		{
			publicFunction: function()
			{
				return 'public funciton';
			},
			
			onBroadcast: function(variable)
			{
				ns.test = variable;
			},
			
			constants: 
			{
				mock: 'mock'
			}
		};
		
		return functions;
	}();
		
	
	/* Mediator
	----------------------------------------------------- */
	
	module('Mediator');

	test('Add', function()
	{
		mediator.add('mediatorMock', mediatorMock, true);
		
		var allComponents = mediator.getAll(),
			mediatorHasMock = allComponents.hasOwnProperty('mediatorMock');
		
		equal(mediatorHasMock, true, 'The Mediator added mediatorMock in it\'s memory.');
	});

	test('Has', function()
	{
		mediator.add('mediatorMock', mediatorMock, true);
		equal(ns.Mediator.has('mediatorMock'), true, 'The Mediator has mediatorMock in it\'s memory.');
	});
	
	test('Remove', function()
	{
		mediator.add('mediatorMock', mediatorMock, true);
		mediator.remove('mediatorMock');
		
		var allComponents = mediator.getAll(),
			mediatorHasMock = allComponents.hasOwnProperty('mediatorMock');
		
		equal(mediatorHasMock, false, 'The Mediator removed mediatorMock from it\'s memory.');
	});
	
	test('Get', 2, function()
	{
		mediator.add('mediatorMock', mediatorMock, true);
		equal(typeof mediator.get('mediatorMock'), 'object', 'The Mediator returned an object.');
		equal(typeof mediator.get('mediatorMock').publicFunction, 'function', '"publicFunction" in mediatorMock returned as function.');
	});
	
	test('Broadcast', function()
	{
		mediator.add('mediatorMock', mediatorMock, true);
		mediator.broadcast('Broadcast', ['NiceString']);
		
		equal(ns.test, 'NiceString', 'variable "ns.test" was set to "NiceString" by the broadcast method "Broadcast"');
	});
	
	test('Constants', function()
	{
		var constants = ns.constants;
		
		mediator.manageConstants();
		
		equal(ns.constants.mock, 'mock', 'The "mock" constant has been added to the constants object.');
	});
	
}(jQuery, QUnit, window.NAMESPACE = window.NAMESPACE || {}));