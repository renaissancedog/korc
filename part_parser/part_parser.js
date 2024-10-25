module.exports =
	/*
	 * Generated by PEG.js 0.10.0.
	 *
	 * http://pegjs.org/
	 */
	(function () {
		'use strict';

		function peg$subclass(child, parent) {
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
		}

		function peg$SyntaxError(message, expected, found, location) {
			this.message = message;
			this.expected = expected;
			this.found = found;
			this.location = location;
			this.name = 'SyntaxError';

			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, peg$SyntaxError);
			}
		}

		peg$subclass(peg$SyntaxError, Error);

		peg$SyntaxError.buildMessage = function (expected, found) {
			var DESCRIBE_EXPECTATION_FNS = {
				literal: function (expectation) {
					return '"' + literalEscape(expectation.text) + '"';
				},

				class: function (expectation) {
					var escapedParts = '',
						i;

					for (i = 0; i < expectation.parts.length; i++) {
						escapedParts +=
							expectation.parts[i] instanceof Array
								? classEscape(expectation.parts[i][0]) +
									'-' +
									classEscape(expectation.parts[i][1])
								: classEscape(expectation.parts[i]);
					}

					return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
				},

				any: function (expectation) {
					return 'any character';
				},

				end: function (expectation) {
					return 'end of input';
				},

				other: function (expectation) {
					return expectation.description;
				}
			};

			function hex(ch) {
				return ch.charCodeAt(0).toString(16).toUpperCase();
			}

			function literalEscape(s) {
				return s
					.replace(/\\/g, '\\\\')
					.replace(/"/g, '\\"')
					.replace(/\0/g, '\\0')
					.replace(/\t/g, '\\t')
					.replace(/\n/g, '\\n')
					.replace(/\r/g, '\\r')
					.replace(/[\x00-\x0F]/g, function (ch) {
						return '\\x0' + hex(ch);
					})
					.replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
						return '\\x' + hex(ch);
					});
			}

			function classEscape(s) {
				return s
					.replace(/\\/g, '\\\\')
					.replace(/\]/g, '\\]')
					.replace(/\^/g, '\\^')
					.replace(/-/g, '\\-')
					.replace(/\0/g, '\\0')
					.replace(/\t/g, '\\t')
					.replace(/\n/g, '\\n')
					.replace(/\r/g, '\\r')
					.replace(/[\x00-\x0F]/g, function (ch) {
						return '\\x0' + hex(ch);
					})
					.replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
						return '\\x' + hex(ch);
					});
			}

			function describeExpectation(expectation) {
				return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
			}

			function describeExpected(expected) {
				var descriptions = new Array(expected.length),
					i,
					j;

				for (i = 0; i < expected.length; i++) {
					descriptions[i] = describeExpectation(expected[i]);
				}

				descriptions.sort();

				if (descriptions.length > 0) {
					for (i = 1, j = 1; i < descriptions.length; i++) {
						if (descriptions[i - 1] !== descriptions[i]) {
							descriptions[j] = descriptions[i];
							j++;
						}
					}
					descriptions.length = j;
				}

				switch (descriptions.length) {
					case 1:
						return descriptions[0];

					case 2:
						return descriptions[0] + ' or ' + descriptions[1];

					default:
						return (
							descriptions.slice(0, -1).join(', ') +
							', or ' +
							descriptions[descriptions.length - 1]
						);
				}
			}

			function describeFound(found) {
				return found ? '"' + literalEscape(found) + '"' : 'end of input';
			}

			return (
				'Expected ' +
				describeExpected(expected) +
				' but ' +
				describeFound(found) +
				' found.'
			);
		};

		function peg$parse(input, options) {
			options = options !== void 0 ? options : {};

			var peg$FAILED = {},
				peg$startRuleFunctions = { START: peg$parseSTART },
				peg$startRuleFunction = peg$parseSTART,
				peg$c0 = function (blocks) {
					if ($garbage.length) blocks.$garbage = $garbage;
					return blocks;
				},
				peg$c1 = peg$anyExpectation(),
				peg$c2 = ' ',
				peg$c3 = peg$literalExpectation(' ', false),
				peg$c4 = '\t',
				peg$c5 = peg$literalExpectation('\t', false),
				peg$c6 = '\uFEFF',
				peg$c7 = peg$literalExpectation('\uFEFF', false),
				peg$c8 = function () {
					return;
				},
				peg$c9 = '\r',
				peg$c10 = peg$literalExpectation('\r', false),
				peg$c11 = '\n',
				peg$c12 = peg$literalExpectation('\n', false),
				peg$c13 = '//',
				peg$c14 = peg$literalExpectation('//', false),
				peg$c15 = /^[^\n]/,
				peg$c16 = peg$classExpectation(['\n'], true, false),
				peg$c17 = function (text) {
					return trim(text.join(''));
				},
				peg$c18 = /^[#0-9A-Za-z_,\-]/,
				peg$c19 = peg$classExpectation(
					['#', ['0', '9'], ['A', 'Z'], ['a', 'z'], '_', ',', '-'],
					false,
					false
				),
				peg$c20 = function (text) {
					return text.join('');
				},
				peg$c21 = '/',
				peg$c22 = peg$literalExpectation('/', false),
				peg$c23 = function (text) {
					return '/';
				},
				peg$c24 = /^[^\n\/]/,
				peg$c25 = peg$classExpectation(['\n', '/'], true, false),
				peg$c26 = function (text) {
					return trimall(trimex(text.join('')));
				},
				peg$c27 = 'title',
				peg$c28 = peg$literalExpectation('title', false),
				peg$c29 = '=',
				peg$c30 = peg$literalExpectation('=', false),
				peg$c31 = function (value) {
					return ['title', value];
				},
				peg$c32 = function (name, value) {
					return [name, value];
				},
				peg$c33 = '{',
				peg$c34 = peg$literalExpectation('{', false),
				peg$c35 = '}',
				peg$c36 = peg$literalExpectation('}', false),
				peg$c37 = function (type, properties) {
					return [type, properties];
				},
				peg$c38 = function (properties) {
					var block = {};
					for (var x = 0, xl = properties.length; x < xl; ++x) {
						var value = properties[x];
						if (Array.isArray(value)) {
							if (Object.prototype.hasOwnProperty.call(block, value[0])) {
								if (Array.isArray(block[value[0]])) {
									block[value[0]].push(value[1]);
								} else {
									block[value[0]] = [block[value[0]], value[1]];
								}
							} else {
								block[value[0]] = [value[1]];
							}
						}
					}
					return block;
				},
				peg$c39 = /^[^\n{}]/,
				peg$c40 = peg$classExpectation(['\n', '{', '}'], true, false),
				peg$c41 = function (garbage) {
					$garbage.push({
						start: location().start,
						end: location().end,
						value: garbage.join('')
					});
					return;
				},
				peg$c42 = function (garbage) {
					if (garbage.length)
						$garbage.push({
							start: location().start,
							end: location().end,
							value: garbage.join('')
						});
					return;
				},
				peg$currPos = 0,
				peg$savedPos = 0,
				peg$posDetailsCache = [{ line: 1, column: 1 }],
				peg$maxFailPos = 0,
				peg$maxFailExpected = [],
				peg$silentFails = 0,
				peg$result;

			if ('startRule' in options) {
				if (!(options.startRule in peg$startRuleFunctions)) {
					throw new Error(
						'Can\'t start parsing from rule "' + options.startRule + '".'
					);
				}

				peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
			}

			function text() {
				return input.substring(peg$savedPos, peg$currPos);
			}

			function location() {
				return peg$computeLocation(peg$savedPos, peg$currPos);
			}

			function expected(description, location) {
				location =
					location !== void 0
						? location
						: peg$computeLocation(peg$savedPos, peg$currPos);

				throw peg$buildStructuredError(
					[peg$otherExpectation(description)],
					input.substring(peg$savedPos, peg$currPos),
					location
				);
			}

			function error(message, location) {
				location =
					location !== void 0
						? location
						: peg$computeLocation(peg$savedPos, peg$currPos);

				throw peg$buildSimpleError(message, location);
			}

			function peg$literalExpectation(text, ignoreCase) {
				return { type: 'literal', text: text, ignoreCase: ignoreCase };
			}

			function peg$classExpectation(parts, inverted, ignoreCase) {
				return {
					type: 'class',
					parts: parts,
					inverted: inverted,
					ignoreCase: ignoreCase
				};
			}

			function peg$anyExpectation() {
				return { type: 'any' };
			}

			function peg$endExpectation() {
				return { type: 'end' };
			}

			function peg$otherExpectation(description) {
				return { type: 'other', description: description };
			}

			function peg$computePosDetails(pos) {
				var details = peg$posDetailsCache[pos],
					p;

				if (details) {
					return details;
				} else {
					p = pos - 1;
					while (!peg$posDetailsCache[p]) {
						p--;
					}

					details = peg$posDetailsCache[p];
					details = {
						line: details.line,
						column: details.column
					};

					while (p < pos) {
						if (input.charCodeAt(p) === 10) {
							details.line++;
							details.column = 1;
						} else {
							details.column++;
						}

						p++;
					}

					peg$posDetailsCache[pos] = details;
					return details;
				}
			}

			function peg$computeLocation(startPos, endPos) {
				var startPosDetails = peg$computePosDetails(startPos),
					endPosDetails = peg$computePosDetails(endPos);

				return {
					start: {
						offset: startPos,
						line: startPosDetails.line,
						column: startPosDetails.column
					},
					end: {
						offset: endPos,
						line: endPosDetails.line,
						column: endPosDetails.column
					}
				};
			}

			function peg$fail(expected) {
				if (peg$currPos < peg$maxFailPos) {
					return;
				}

				if (peg$currPos > peg$maxFailPos) {
					peg$maxFailPos = peg$currPos;
					peg$maxFailExpected = [];
				}

				peg$maxFailExpected.push(expected);
			}

			function peg$buildSimpleError(message, location) {
				return new peg$SyntaxError(message, null, null, location);
			}

			function peg$buildStructuredError(expected, found, location) {
				return new peg$SyntaxError(
					peg$SyntaxError.buildMessage(expected, found),
					expected,
					found,
					location
				);
			}

			function peg$parseSTART() {
				var s0, s1, s2, s3, s4;

				s0 = peg$currPos;
				s1 = peg$parseNIL();
				if (s1 !== peg$FAILED) {
					s2 = peg$parsePROPERTIES();
					if (s2 !== peg$FAILED) {
						s3 = peg$parseNIL();
						if (s3 !== peg$FAILED) {
							s4 = peg$parseEOF_GARBAGE();
							if (s4 !== peg$FAILED) {
								peg$savedPos = s0;
								s1 = peg$c0(s2);
								s0 = s1;
							} else {
								peg$currPos = s0;
								s0 = peg$FAILED;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$FAILED;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseEOF() {
				var s0, s1;

				s0 = peg$currPos;
				peg$silentFails++;
				if (input.length > peg$currPos) {
					s1 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s1 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c1);
					}
				}
				peg$silentFails--;
				if (s1 === peg$FAILED) {
					s0 = void 0;
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseWS() {
				var s0, s1;

				if (input.charCodeAt(peg$currPos) === 32) {
					s0 = peg$c2;
					peg$currPos++;
				} else {
					s0 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c3);
					}
				}
				if (s0 === peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 9) {
						s0 = peg$c4;
						peg$currPos++;
					} else {
						s0 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c5);
						}
					}
					if (s0 === peg$FAILED) {
						s0 = peg$currPos;
						if (input.charCodeAt(peg$currPos) === 65279) {
							s1 = peg$c6;
							peg$currPos++;
						} else {
							s1 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c7);
							}
						}
						if (s1 !== peg$FAILED) {
							peg$savedPos = s0;
							s1 = peg$c8();
						}
						s0 = s1;
					}
				}

				return s0;
			}

			function peg$parseLF() {
				var s0, s1;

				if (input.charCodeAt(peg$currPos) === 13) {
					s0 = peg$c9;
					peg$currPos++;
				} else {
					s0 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c10);
					}
				}
				if (s0 === peg$FAILED) {
					s0 = peg$currPos;
					if (input.charCodeAt(peg$currPos) === 10) {
						s1 = peg$c11;
						peg$currPos++;
					} else {
						s1 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c12);
						}
					}
					if (s1 !== peg$FAILED) {
						peg$savedPos = s0;
						s1 = peg$c8();
					}
					s0 = s1;
				}

				return s0;
			}

			function peg$parseCOMMENT() {
				var s0, s1, s2, s3;

				s0 = peg$currPos;
				if (input.substr(peg$currPos, 2) === peg$c13) {
					s1 = peg$c13;
					peg$currPos += 2;
				} else {
					s1 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c14);
					}
				}
				if (s1 !== peg$FAILED) {
					s2 = [];
					if (peg$c15.test(input.charAt(peg$currPos))) {
						s3 = input.charAt(peg$currPos);
						peg$currPos++;
					} else {
						s3 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c16);
						}
					}
					if (s3 !== peg$FAILED) {
						while (s3 !== peg$FAILED) {
							s2.push(s3);
							if (peg$c15.test(input.charAt(peg$currPos))) {
								s3 = input.charAt(peg$currPos);
								peg$currPos++;
							} else {
								s3 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c16);
								}
							}
						}
					} else {
						s2 = peg$FAILED;
					}
					if (s2 !== peg$FAILED) {
						peg$savedPos = s0;
						s1 = peg$c8();
						s0 = s1;
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseNIL() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				s2 = peg$parseWS();
				if (s2 === peg$FAILED) {
					s2 = peg$parseLF();
					if (s2 === peg$FAILED) {
						s2 = peg$parseCOMMENT();
					}
				}
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					s2 = peg$parseWS();
					if (s2 === peg$FAILED) {
						s2 = peg$parseLF();
						if (s2 === peg$FAILED) {
							s2 = peg$parseCOMMENT();
						}
					}
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c8();
				}
				s0 = s1;

				return s0;
			}

			function peg$parseANY() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (peg$c15.test(input.charAt(peg$currPos))) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c16);
					}
				}
				if (s2 !== peg$FAILED) {
					while (s2 !== peg$FAILED) {
						s1.push(s2);
						if (peg$c15.test(input.charAt(peg$currPos))) {
							s2 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s2 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c16);
							}
						}
					}
				} else {
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c17(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseVAR() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (peg$c18.test(input.charAt(peg$currPos))) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c19);
					}
				}
				if (s2 !== peg$FAILED) {
					while (s2 !== peg$FAILED) {
						s1.push(s2);
						if (peg$c18.test(input.charAt(peg$currPos))) {
							s2 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s2 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c19);
							}
						}
					}
				} else {
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c20(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseSLASH() {
				var s0, s1, s2, s3, s4;

				s0 = peg$currPos;
				s1 = peg$currPos;
				if (input.charCodeAt(peg$currPos) === 47) {
					s2 = peg$c21;
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c22);
					}
				}
				if (s2 !== peg$FAILED) {
					s3 = peg$currPos;
					peg$silentFails++;
					if (input.charCodeAt(peg$currPos) === 47) {
						s4 = peg$c21;
						peg$currPos++;
					} else {
						s4 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c22);
						}
					}
					peg$silentFails--;
					if (s4 === peg$FAILED) {
						s3 = void 0;
					} else {
						peg$currPos = s3;
						s3 = peg$FAILED;
					}
					if (s3 !== peg$FAILED) {
						s2 = [s2, s3];
						s1 = s2;
					} else {
						peg$currPos = s1;
						s1 = peg$FAILED;
					}
				} else {
					peg$currPos = s1;
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c23(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseVALUE() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (peg$c24.test(input.charAt(peg$currPos))) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c25);
					}
				}
				if (s2 === peg$FAILED) {
					s2 = peg$parseSLASH();
				}
				if (s2 !== peg$FAILED) {
					while (s2 !== peg$FAILED) {
						s1.push(s2);
						if (peg$c24.test(input.charAt(peg$currPos))) {
							s2 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s2 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c25);
							}
						}
						if (s2 === peg$FAILED) {
							s2 = peg$parseSLASH();
						}
					}
				} else {
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c17(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseVALUE2() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (peg$c15.test(input.charAt(peg$currPos))) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c16);
					}
				}
				if (s2 !== peg$FAILED) {
					while (s2 !== peg$FAILED) {
						s1.push(s2);
						if (peg$c15.test(input.charAt(peg$currPos))) {
							s2 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s2 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c16);
							}
						}
					}
				} else {
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c26(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseTHETITLE() {
				var s0, s1, s2, s3, s4, s5, s6;

				s0 = peg$currPos;
				s1 = peg$parseNIL();
				if (s1 !== peg$FAILED) {
					if (input.substr(peg$currPos, 5) === peg$c27) {
						s2 = peg$c27;
						peg$currPos += 5;
					} else {
						s2 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c28);
						}
					}
					if (s2 !== peg$FAILED) {
						s3 = [];
						s4 = peg$parseWS();
						while (s4 !== peg$FAILED) {
							s3.push(s4);
							s4 = peg$parseWS();
						}
						if (s3 !== peg$FAILED) {
							if (input.charCodeAt(peg$currPos) === 61) {
								s4 = peg$c29;
								peg$currPos++;
							} else {
								s4 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c30);
								}
							}
							if (s4 !== peg$FAILED) {
								s5 = [];
								s6 = peg$parseWS();
								while (s6 !== peg$FAILED) {
									s5.push(s6);
									s6 = peg$parseWS();
								}
								if (s5 !== peg$FAILED) {
									s6 = peg$parseVALUE2();
									if (s6 === peg$FAILED) {
										s6 = null;
									}
									if (s6 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c31(s6);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$FAILED;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$FAILED;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseVARIABLE() {
				var s0, s1, s2, s3, s4, s5, s6, s7;

				s0 = peg$currPos;
				s1 = peg$parseNIL();
				if (s1 !== peg$FAILED) {
					s2 = peg$parseVAR();
					if (s2 !== peg$FAILED) {
						s3 = [];
						s4 = peg$parseWS();
						while (s4 !== peg$FAILED) {
							s3.push(s4);
							s4 = peg$parseWS();
						}
						if (s3 !== peg$FAILED) {
							if (input.charCodeAt(peg$currPos) === 61) {
								s4 = peg$c29;
								peg$currPos++;
							} else {
								s4 = peg$FAILED;
								if (peg$silentFails === 0) {
									peg$fail(peg$c30);
								}
							}
							if (s4 !== peg$FAILED) {
								s5 = [];
								s6 = peg$parseWS();
								while (s6 !== peg$FAILED) {
									s5.push(s6);
									s6 = peg$parseWS();
								}
								if (s5 !== peg$FAILED) {
									s6 = peg$parseVALUE();
									if (s6 === peg$FAILED) {
										s6 = null;
									}
									if (s6 !== peg$FAILED) {
										s7 = peg$parseNIL();
										if (s7 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c32(s2, s6);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$FAILED;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$FAILED;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseBLOCK() {
				var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

				s0 = peg$currPos;
				s1 = peg$parseVAR();
				if (s1 !== peg$FAILED) {
					s2 = peg$parseNIL();
					if (s2 !== peg$FAILED) {
						if (input.charCodeAt(peg$currPos) === 123) {
							s3 = peg$c33;
							peg$currPos++;
						} else {
							s3 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c34);
							}
						}
						if (s3 !== peg$FAILED) {
							s4 = peg$parseNIL();
							if (s4 !== peg$FAILED) {
								s5 = peg$parsePROPERTIES();
								if (s5 !== peg$FAILED) {
									s6 = peg$parseNIL();
									if (s6 !== peg$FAILED) {
										s7 = peg$currPos;
										if (input.charCodeAt(peg$currPos) === 125) {
											s8 = peg$c35;
											peg$currPos++;
										} else {
											s8 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c36);
											}
										}
										if (s8 !== peg$FAILED) {
											s9 = peg$parseNIL();
											if (s9 !== peg$FAILED) {
												s8 = [s8, s9];
												s7 = s8;
											} else {
												peg$currPos = s7;
												s7 = peg$FAILED;
											}
										} else {
											peg$currPos = s7;
											s7 = peg$FAILED;
										}
										if (s7 === peg$FAILED) {
											s7 = peg$parseEOF();
										}
										if (s7 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c37(s1, s5);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
							} else {
								peg$currPos = s0;
								s0 = peg$FAILED;
							}
						} else {
							peg$currPos = s0;
							s0 = peg$FAILED;
						}
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parsePROPERTIES() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				s2 = peg$parseBLOCK();
				if (s2 === peg$FAILED) {
					s2 = peg$parseVARIABLE();
					if (s2 === peg$FAILED) {
						s2 = peg$parseGARBAGE();
					}
				}
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					s2 = peg$parseBLOCK();
					if (s2 === peg$FAILED) {
						s2 = peg$parseVARIABLE();
						if (s2 === peg$FAILED) {
							s2 = peg$parseGARBAGE();
						}
					}
				}
				if (s1 !== peg$FAILED) {
					peg$savedPos = s0;
					s1 = peg$c38(s1);
				}
				s0 = s1;

				return s0;
			}

			function peg$parseGARBAGE() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (peg$c39.test(input.charAt(peg$currPos))) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c40);
					}
				}
				if (s2 !== peg$FAILED) {
					while (s2 !== peg$FAILED) {
						s1.push(s2);
						if (peg$c39.test(input.charAt(peg$currPos))) {
							s2 = input.charAt(peg$currPos);
							peg$currPos++;
						} else {
							s2 = peg$FAILED;
							if (peg$silentFails === 0) {
								peg$fail(peg$c40);
							}
						}
					}
				} else {
					s1 = peg$FAILED;
				}
				if (s1 !== peg$FAILED) {
					if (input.charCodeAt(peg$currPos) === 10) {
						s2 = peg$c11;
						peg$currPos++;
					} else {
						s2 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c12);
						}
					}
					if (s2 === peg$FAILED) {
						s2 = peg$parseEOF();
					}
					if (s2 !== peg$FAILED) {
						peg$savedPos = s0;
						s1 = peg$c41(s1);
						s0 = s1;
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			function peg$parseEOF_GARBAGE() {
				var s0, s1, s2;

				s0 = peg$currPos;
				s1 = [];
				if (input.length > peg$currPos) {
					s2 = input.charAt(peg$currPos);
					peg$currPos++;
				} else {
					s2 = peg$FAILED;
					if (peg$silentFails === 0) {
						peg$fail(peg$c1);
					}
				}
				while (s2 !== peg$FAILED) {
					s1.push(s2);
					if (input.length > peg$currPos) {
						s2 = input.charAt(peg$currPos);
						peg$currPos++;
					} else {
						s2 = peg$FAILED;
						if (peg$silentFails === 0) {
							peg$fail(peg$c1);
						}
					}
				}
				if (s1 !== peg$FAILED) {
					s2 = peg$parseEOF();
					if (s2 !== peg$FAILED) {
						peg$savedPos = s0;
						s1 = peg$c42(s1);
						s0 = s1;
					} else {
						peg$currPos = s0;
						s0 = peg$FAILED;
					}
				} else {
					peg$currPos = s0;
					s0 = peg$FAILED;
				}

				return s0;
			}

			var trim = function (str) {
				return str.replace(/\s+$/, '');
			};
			var trimall = function (str) {
				return str.replace(/\s+$/, '').replace(/\s+/, '');
			};
			var trimex = function (str) {
				var n = str.lastIndexOf('=');
				if (n > 0) {
					return str.substr(n + 1);
				}
				return str.replace(/#autoLOC_[0-9]+/, '');
			};

			var $garbage = [];

			peg$result = peg$startRuleFunction();

			if (peg$result !== peg$FAILED && peg$currPos === input.length) {
				return peg$result;
			} else {
				if (peg$result !== peg$FAILED && peg$currPos < input.length) {
					peg$fail(peg$endExpectation());
				}

				throw peg$buildStructuredError(
					peg$maxFailExpected,
					peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
					peg$maxFailPos < input.length
						? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
						: peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
				);
			}
		}

		return {
			SyntaxError: peg$SyntaxError,
			parse: peg$parse
		};
	})();
