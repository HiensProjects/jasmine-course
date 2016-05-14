/* globals define, describe, beforeEach */
define(['numbers', 'events', 'lib/matchers'], function(numbers, events, matchers) {
	'use strict';

	describe('The numbers module', function() {
		// describe('The add method', function() {
			var output;

			beforeEach(function() {
				this.numberInput1 = 1;
				this.numberInput2 = 2;
				this.stringInput1 = '1';
				this.stringInput2 = 'oops';

				jasmine.addMatchers(matchers);
			});

		// 	// it('should accept one or more numerical arguments and return the sum of them', function() {
		// 	// 	// act
		// 	// 	output = numbers.add(this.numberInput1, this.numberInput2);

		// 	// 	// assert
		// 	// 	expect(output).toEqual(3);
		// 	// 	expect(output).not.toEqual(5);
		// 	// });

		// 	// it('should try to parse an integer when a string is passed to the method', function() {
		// 	// 	// act
		// 	// 	output = numbers.add(this.numberInput1, this.numberInput2);

		// 	// 	// assert
		// 	// 	expect(output).toEqual(3);
		// 	// });

		// 	it('should ignore the argument if it is not a parseable string', function() {
		// 		// act
		// 		output = numbers.add(this.numberInput1, this.stringInput2);

		// 		// assert
		// 		expect(output).toEqual(1);
		// 	});

		// 	it('should publish an added event showing the operands passed to the method and the result', function() {
		// 		var x, length, calls;
		// 		spyOn(events, 'publish');
		// 		// spyOn(events, 'publish').and.callThrough();
		// 		// spyOn(events, 'publish').and.returnValue(false);
		// 		// spyOn(events, 'publish').and.callFake(function(name, args) {
		// 		// 	window.alert(name);
		// 		// });
		// 		// spyOn(events, 'publish').and.throwError('oops');
		// 		// events.publish.and.stub();
		// 		// expect(function() {
		// 			// numbers.add(1, 1);
		// 		// }).toThrowError('oops');

		// 		expect(events.publish.calls.any()).toBe(false);

		// 		numbers.add(this.numberInput1, this.numberInput2);

		// 		expect(events.publish).toHaveBeenCalled();
		// 		expect(events.publish).toHaveBeenCalledWith('added', {
		// 			operands: [this.numberInput1, this.numberInput2],
		// 			result: 3
		// 		});

		// 		expect(events.publish.calls.count()).toEqual(1);

		// 		numbers.add(this.numberInput1, this.stringInput1);
		// 		// events.publish.calls.reset();

		// 		expect(events.publish.calls.count()).toEqual(2);

		// 		expect(events.publish.calls.mostRecent().args).toEqual([
		// 			jasmine.any(String),
		// 			jasmine.any(Object)
		// 		]);

		// 		expect(events.publish.calls.allArgs()).toEqual([
		// 			[
		// 				jasmine.any(String),
		// 				jasmine.any(Object)
		// 			],
		// 			[
		// 				jasmine.any(String),
		// 				jasmine.any(Object)
		// 			]
		// 		]);

		// 		calls = events.publish.calls.all();

		// 		for (x = 0, length = calls.length; x < length; x += 1) {
		// 			console.log(calls[x]);
		// 			expect(calls[x].object.id).toEqual('events');
		// 		}
		// 	});

		// 	it('sould returns numbers that are either odd or even', function() {
		// 		output = numbers.add(this.numberInput1, this.numberInput2);

		// 		expect(output).toBeOdd();
		// 	});
		// });

		// describe('The addAfterDelay method', function() {
		// 	var noop = function() {};

		// 	beforeEach(function() {
		// 		spyOn(numbers, 'add');

		// 		jasmine.clock().install();
		// 	});


		// 	afterEach(function() {
		// 		jasmine.clock().uninstall();
		// 	});

		// 	it('should invoke the add method after a specified delay', function() {
		// 		numbers.addAfterDelay(1000, noop, 1, 2);

		// 		expect(numbers.add).not.toHaveBeenCalled();
		// 		jasmine.clock().tick(1001);
		// 		expect(numbers.add).toHaveBeenCalled();
		// 	});
		// });

		describe('The async call', function() {
			it('should return numbers that are either odd or even', function(done) {
				var that = this;

				numbers.add(this.numberInput1, this.numberInput2);

				events.subscribe('added', function(data) {
					expect(data.operands).toEqual([that.numberInput1, that.numberInput2]);
					expect(data.result).toEqual(3);
					expect(data.triviaFact).toEqual(jasmine.any(String));

					done();
				});
			});
		});
	});
});
