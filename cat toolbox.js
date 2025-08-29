class CatToolboxExtension {
	getInfo() {
		return {
			id: 'cattoolbox',
			name: 'Cat Toolbox',
			color1: '#F75e25',
			color2: '#FF6000',
			blocks: [{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Uhrzeit',
				},
				{
					opcode: 'getTime',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Uhrzeit',
				},
				{
					opcode: 'getHour',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Stunde',
				},
				{
					opcode: 'getMinute',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Minute',
				},
				{
					opcode: 'getSecond',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Sekunde',
				},
				{
					opcode: 'getMillisecond',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Millisekunde',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Datum',
				},
				{
					opcode: 'getDate',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Datum',
				},
				{
					opcode: 'getDayName',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Wochentag (Name)',
				},
				{
					opcode: 'getDayNumber',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Wochentag (Zahl)',
				},
				{
					opcode: 'getDay',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Tag',
				},
				{
					opcode: 'getMonth',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Monat (Zahl)',
				},
				{
					opcode: 'getMonthName',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Monat (Name)',
				},
				{
					opcode: 'getYear',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Jahr',
				},
				{
					opcode: 'getWeekNumber',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Kalenderwoche',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Mehr Zeitblöcke',
				},
				{
					opcode: 'getTimeDate',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Datum und Uhrzeit',
				},
				{
					opcode: 'getTimezone',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Zeitzone',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Batterie',
				},
				{
					opcode: 'getBatteryLevel',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Akkustand',
				},
				{
					opcode: 'getBatteryLevelNumber',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Akkustand als Zahl',
				},
				{
					opcode: 'isCharging',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Lädt dieses Gerät?',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Sonderblöcke',
				},
				{
					opcode: 'stringToBoolean',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '[STRING]',
					arguments: {
						STRING: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Text'
						}
					}
				},
				{
					opcode: 'replaceall',
					blockType: Scratch.BlockType.REPORTER,
					text: '[B] (Ersetze alle [A] durch [C])',
					arguments: {
						A: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						},
						B: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Ha11o Welt!'
						},
						C: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'l'
						}
					}
				},
				{
					opcode: 'replacefirst',
					blockType: Scratch.BlockType.REPORTER,
					text: '[B] (Ersetze erstes [A] durch [C])',
					arguments: {
						A: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						},
						B: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Ha11o Welt!'
						},
						C: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'l'
						}
					}
				},
				{
					opcode: 'newLine',
					blockType: Scratch.BlockType.REPORTER,
					text: '[TextA]\\n[TextB]',
					arguments: {
						TextA: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Text 1',
						},
						TextB: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'Text 2',
						},
					},
				},
				{
					opcode: 'findNthElement',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Element [n] in [text] vor/nach [separator]',
					arguments: {
						n: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 2
						},
						text: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'a|b|c'
						},
						separator: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '|'
						}
					},
					func: 'findNthElement'
				},
				{
					opcode: 'substringFromTo',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Zeichen von [A] bis [B] aus [TEXT]',
					arguments: {
						A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
						B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hallo Welt' }
					}
				},
				{
					opcode: 'erstelleHTMLString',
					blockType: Scratch.BlockType.REPORTER,
					text: 'HTML-String für Text [TEXT] Schriftart [FONT] Farbe [COLOR] Größe [SIZE] Format [FORMAT]',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hallo Welt!' },
						FONT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Arial' },
						COLOR: { type: Scratch.ArgumentType.STRING, menu: 'farben', acceptReporters: true },
						SIZE: { type: Scratch.ArgumentType.STRING, defaultValue: '16px' },
						FORMAT: { type: Scratch.ArgumentType.STRING, menu: 'formate', acceptReporters: true }
					}
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Mathe',
				},
				{
					opcode: 'calculateAverage',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Durchschnitt von [NUMBERS] berechnen',
					arguments: {
						NUMBERS: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1,2,3',
						},
					},
				},
				{
					opcode: 'infinity',
					blockType: Scratch.BlockType.REPORTER,
					text: '∞',
				},
				{
					opcode: 'pi',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Konstante π',
				},
				{
					opcode: 'e',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Konstante e',
				},
				{
					opcode: 'power',
					blockType: Scratch.BlockType.REPORTER,
					text: '[BASE] ^ [EXPONENT]',
					arguments: {
						BASE: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 2
						},
						EXPONENT: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 3
						}
					}
				},
				{
					opcode: 'negative',
					blockType: Scratch.BlockType.REPORTER,
					text: '-[NUMBER]',
					arguments: {
						NUMBER: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 3
						}
					}
				},
				{
					opcode: 'clampValue',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Begrenze [A] auf [MIN] bis [MAX]',
					arguments: {
						A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 120 },
						MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
						MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 }
					}
				},
				{
					opcode: 'mapRange',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Wandle [VALUE] von [FROM_MIN]–[FROM_MAX] in [TO_MIN]–[TO_MAX] um',
					arguments: {
						VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 75 },
						FROM_MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
						FROM_MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
						TO_MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
						TO_MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 }
					}
				},
				{
					opcode: 'convertNumber',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Kurzschreibweise von [NUM] [STATE]',
					arguments: {
						NUM: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1000 },
						STATE: { type: Scratch.ArgumentType.STRING, menu: 'onOff' }
					}
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Timer',
				},
				{
					opcode: 'startTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Starte Timer [ID] für [TAGE]:[STUNDEN]:[MINUTEN]:[SEKUNDEN].[MILLISEKUNDEN]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						},
						TAGE: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						},
						STUNDEN: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						},
						MINUTEN: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						},
						SEKUNDEN: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 10
						},
						MILLISEKUNDEN: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						}
					},
				},
				{
					opcode: 'pauseTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Pausiere Timer [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'resumeTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Setze Timer [ID] fort',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'restartTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Starte Timer [ID] neu',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'resetTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Setze Timer [ID] zurück',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'deleteTimer',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Lösche Timer [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'deleteAllTimers',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Lösche alle Timer',
				},
				{
					opcode: 'checkTimer',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Timer [ID] abgelaufen?',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'getRemainingTimeFormatted',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Status Timer [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'getTimerInSeconds',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Timer [ID] in Sekunden (exakt)',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'showTimers',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Zeige alle Timer',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Stoppuhr',
				},
				{
					opcode: 'startStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Starte Stoppuhr [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'pauseStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Pausiere Stoppuhr [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'resumeStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Setze Stoppuhr [ID] fort',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'resetStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Starte Stoppuhr [ID] neu',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'stopStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Setze Stoppuhr [ID] zurück',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'saveLap',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Speichere Runde von Stoppuhr [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'clearLaps',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Lösche Runden von Stoppuhr [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'deleteStopwatch',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Lösche Stoppuhr [ID]',
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'deleteAllStopwatches',
					blockType: Scratch.BlockType.COMMAND,
					text: 'Lösche alle Stoppuhren',
				},
				{
					opcode: 'getStopwatch',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Stoppuhr [ID]',
					disableMonitor: false,
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'getLaps',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Runden von Stoppuhr [ID]',
					disableMonitor: false,
					arguments: {
						ID: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: '1'
						}
					},
				},
				{
					opcode: 'showStopwatches',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Zeige alle Stoppuhren',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Farben'
				},
				{
					opcode: 'farbeZuHex',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Farbe [FARBENNAME]',
					arguments: {
						FARBENNAME: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'rot'
						}
					},
				},
				{
					opcode: 'farbeAuswahlZuHex',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Farbe [FARBE]',
					arguments: {
						FARBE: {
							type: Scratch.ArgumentType.COLOR,
							defaultValue: '#FF0000'
						}
					},
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Zeit Plus',
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: '• Format: DD.MM.YYYY hh:mm:ss (EU)',
				},
				{
					opcode: 'isProgressivelyValid',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Ist bisherige Eingabe [TEXT] noch gültig?',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '30.0' }
					}
				},
				{
					opcode: 'isValidFlexibleDateTime',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Ist [TEXT] ein gültiges Datum (Uhrzeit optional)?',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '29.02.2024 23:59' }
					}
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: '• RAWSTRING - ohne Trennungen',
				},
				{
					opcode: 'isProgressivelyValidRaw',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Ist RAWSTRING [TEXT] noch gültig?',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '290220241230' }
					}
				},
				{
					opcode: 'isValidFlexibleDateTimeRaw',
					blockType: Scratch.BlockType.BOOLEAN,
					text: 'Ist RAWSTRING [TEXT] ein gültiges Datum (Uhrzeit optional)?',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '29022024' }
					}
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: '• Formatumwandlung',
				},
				{
					opcode: 'formatRawLive',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Formatiere [TEXT] zu EU-Format',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '29022024123059' }
					}
				},
				{
					opcode: 'convertRawToIso',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Konvertiere [TEXT] zu ISO-Format',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '29022024123059' }
					}
				},
				{
					opcode: 'convertFormattedToIso',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Konvertiere EU-Format [TEXT] zu ISO-Format',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '29.02.2024 12:30:59' }
					}
				},
				{
					opcode: 'convertIsoToEu',
					blockType: Scratch.BlockType.REPORTER,
					text: 'Konvertiere ISO-Datum [TEXT] zu EU-Format',
					arguments: {
						TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '2024-02-29 23:59:59' }
					}
				},
				{
					opcode: 'dummyLabel',
					blockType: Scratch.BlockType.LABEL,
					text: 'Infos über die Erweiterung'
				},
				{
					opcode: 'info',
					blockType: Scratch.BlockType.REPORTER,
					text: '- [AUSWAHL]',
					arguments: {
						AUSWAHL: {
							type: Scratch.ArgumentType.STRING,
							menu: 'infoMenu'
						}
					},
				}
			],
			menus: {
				infoMenu: {
					acceptReporters: true,
					items: ['Version', 'Änderungen', 'Programmierer', 'Copyright', 'Sprachen', 'Hinweis & Infos', 'Erreichbarkeit']
				},
				formate: {
					acceptReporters: true,
					items: [
						'kein',
						'fett',
						'kursiv',
						'unterstrichen',
						'fett und kursiv',
						'fett und unterstrichen',
						'kursiv und unterstrichen',
						'fett, kursiv und unterstrichen'
					]
				},
				farben: {
					acceptReporters: true,
					items: [
						'schwarz', 'weiß', 'blau', 'braun', 'cyan', 'gelb', 'grau',
					'grün', 'lila', 'magenta', 'orange', 'rosa', 'rot'
					]
				},
				onOff: {
					acceptReporters: true,
					items: ['einschalten', 'ausschalten']
				}
			}
		};
	}
/* Trennung */
	constructor() {
		this.timers = {};
		this.stopwatches = {};
		this.kurzschreibweiseEnabled = true;
	}
	getTime() {
		const now = new Date();
		return now.toTimeString().split(' ')[0];
	}
	getHour() {
		return String(new Date().getHours()).padStart(2, '0');
	}
	getMinute() {
		return String(new Date().getMinutes()).padStart(2, '0');
	}
	getSecond() {
		return String(new Date().getSeconds()).padStart(2, '0');
	}
	getMillisecond() {
		return ('00' + new Date().getMilliseconds()).slice(-3);
	}
	getTimezone() {
		const offset = -new Date().getTimezoneOffset();
		const sign = offset >= 0 ? '+' : '-';
		const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
		const minutes = String(Math.abs(offset) % 60).padStart(2, '0');
		return `UTC${sign}${hours}:${minutes}`;
	}
	getDate() {
		const now = new Date();
		return now.toLocaleDateString('de-DE', {
			weekday: 'long',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	}
	getDayName() {
		return new Date().toLocaleDateString('de-DE', {
			weekday: 'long'
		});
	}
	getDayNumber() {
		return new Date().getDay();
	}
	getDay() {
		return String(new Date().getDate()).padStart(2, '0');
	}
	getMonth() {
		return String(new Date().getMonth() + 1).padStart(2, '0');
	}
	getMonthName() {
		return new Date().toLocaleDateString('de-DE', {
			month: 'long'
		});
	}
	getYear() {
		return new Date().getFullYear();
	}
	getWeekNumber() {
		const now = new Date();
		const oneJan = new Date(now.getFullYear(), 0, 1);
		const numberOfDays = Math.floor((now - oneJan) / (24 * 60 * 60 * 1000));
		return Math.ceil((now.getDay() + 1 + numberOfDays) / 7);
	}
	getBatteryLevel() {
		return navigator.getBattery().then(battery => battery.level * 100 + '%');
	}
	getBatteryLevelNumber() {
		return navigator.getBattery().then(battery => battery.level * 100);
	}
	isCharging() {
		return navigator.getBattery().then(battery => battery.charging ? 'true' : 'false');
	}
	stringToBoolean(args) {
		return args.STRING;
	}
	replaceall(args) {
		return args.B.toString().replaceAll(args.A.toString(), args.C.toString());
	}
	replacefirst(args) {
		return args.B.toString().replace(args.A.toString(), args.C.toString());
	}
	newLine(args) {
		const Text1 = args.TextA;
		const Text2 = args.TextB;
		return (Text1 + '\n' + Text2);
	}
	findNthElement(args) {
		const elements = String(args.text).split(args.separator);
		const index = args.n - 1;
		if (index >= 0 && index < elements.length) {
			return elements[index];
		} else {
			return '';
		}
	}
	substringFromTo({ A, B, TEXT }) {
		const text = String(TEXT || '');
		const start = Math.max(0, Number(A) - 1);
		const end = Math.min(text.length, Number(B));
	return text.slice(start, end);
	}
	erstelleHTMLString(args) {
		const text = args.TEXT;
		const schriftart = args.FONT;
		const farbe = args.COLOR;
		const groesse = args.SIZE;
		const format = args.FORMAT;
		const farben = {
			rot: '#FF0000', grün: '#00FF00', blau: '#0000FF', gelb: '#FFFF00',
			schwarz: '#000000', weiß: '#FFFFFF', orange: '#FFA500', lila: '#800080',
			rosa: '#FFC0CB', braun: '#A52A2A', grau: '#808080', cyan: '#00FFFF',
			magenta: '#FF00FF'
		};
		const hexFarbe = farben[farbe.toLowerCase()] || farbe;
		let htmlString = `<span style="font-family:${schriftart}; color:${hexFarbe}; font-size:${groesse};`;
		if (format && format !== 'kein') {
			if (format.includes('fett')) htmlString += ' font-weight:bold;';
			if (format.includes('kursiv')) htmlString += ' font-style:italic;';
			if (format.includes('unterstrichen')) htmlString += ' text-decoration:underline;';
		}
		htmlString += `">${text.split('\\n').join('<br>')}</span>`;
		return htmlString;
	}
	calculateAverage(args) {
		const numbers = args.NUMBERS.split(',').map(Number);
		const sum = numbers.reduce((a, b) => a + b, 0);
		return sum / numbers.length;
	}
	infinity() {
		return 'Infinity';
	}
	pi() {
		return '3.141592653589793';
	}
	e() {
		return '2.718281828459045';
	}
	power(args) {
		return Math.pow(args.BASE, args.EXPONENT);
	}
	negative(args) {
		return args.NUMBER * -1;
	}
	clampValue({ A, MIN, MAX }) {
		const a = Number(A);
		const min = Number(MIN);
		const max = Number(MAX);
		return Math.min(Math.max(a, min), max);
	}
	mapRange({ VALUE, FROM_MIN, FROM_MAX, TO_MIN, TO_MAX }) {
		const value = Number(VALUE);
		const fromMin = Number(FROM_MIN);
		const fromMax = Number(FROM_MAX);
		const toMin = Number(TO_MIN);
		const toMax = Number(TO_MAX);
		if (fromMax === fromMin) return toMin;
		const ratio = (value - fromMin) / (fromMax - fromMin);
		return toMin + ratio * (toMax - toMin);
	}
	convertNumber(args) {
		this.kurzschreibweiseEnabled = args.STATE === 'einschalten';
		return this.formatNumber(Number(args.NUM));
		}
		formatNumber(num) {
		if (!this.kurzschreibweiseEnabled || Math.abs(num) < 1) return num.toString();
		const units = [
			'', ' K', ' M', ' B', ' T', ' QA', ' QI', ' SX', ' SP', ' OC', ' NO',
			' DC', ' UD', ' DD', ' TD', ' QAD', ' QID', ' SXD', ' SPD', ' OCD', ' NOD',
			' VI', ' UV', ' DV', ' TV', ' QAV', ' QIV', ' SXV', ' SPV', ' OCV', ' NOV',
			' TR', ' UT', ' DT', ' TT', ' QAT', ' QIT', ' SXT', ' SPT', ' OCT', ' NOT',
			' QT', ' UQT', ' DQT', ' TQT', ' QAQT', ' QIQT', ' SXQT', ' SPQT', ' OCQT', ' NOQT'
		];
		let power = Math.floor(Math.log10(Math.abs(num)) / 3);
		if (power < units.length) {
			power = Math.min(power, units.length - 1);
			const scaled = num / Math.pow(10, power * 3);
			return `${scaled.toFixed(1).replace(/\.$/, ',')}${units[power]}`;
		}
		const exponent = Math.floor(Math.log10(Math.abs(num)));
		const mantissa = num / Math.pow(10, exponent);
		const superscript = (n) => {
			const chars = '⁰¹²³⁴⁵⁶⁷⁸⁹';
			return n.toString().split('').map(char => chars[char] || '').join('');
		};
		return `${mantissa.toFixed(1)}×10${superscript(exponent)}`;
	}
	getTimeDate(args) {
		const now = new Date();
		return (now.toLocaleDateString('de-DE', {
			weekday: 'long',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}) + '\n' + now.toTimeString().split(' ')[0] + ' Uhr')
	}
	startTimer(args) {
		const id = args.ID;
		const tage = args.TAGE;
		const stunden = args.STUNDEN;
		const minuten = args.MINUTEN;
		const sekunden = args.SEKUNDEN;
		const millisekunden = args.MILLISEKUNDEN;
		const duration = (((tage * 24 + stunden) * 60 + minuten) * 60 + sekunden) * 1000 + millisekunden;
		this.timers[id] = {
			start: Date.now(),
			duration: duration,
			paused: false,
			pauseTime: 0
		};
	}
	pauseTimer(args) {
		const id = args.ID;
		if (this.timers[id] && !this.timers[id].paused) {
			this.timers[id].pauseTime = Date.now();
			this.timers[id].paused = true;
		}
	}
	resumeTimer(args) {
		const id = args.ID;
		if (this.timers[id] && this.timers[id].paused) {
			this.timers[id].start += (Date.now() - this.timers[id].pauseTime);
			this.timers[id].paused = false;
		}
	}
	restartTimer(args) {
		const id = args.ID;
		if (this.timers[id]) {
			this.timers[id].start = Date.now();
			this.timers[id].paused = false;
			this.timers[id].pauseTime = 0;
		}
	}
	resetTimer(args) {
		const id = args.ID;
		if (this.timers[id]) {
			this.timers[id] = {
				start: 0,
				duration: 0,
				paused: false,
				pauseTime: 0
			};
		}
	}
	checkTimer(args) {
		const id = args.ID;
		if (!this.timers[id] || this.timers[id].start === 0) return false;
		return (Date.now() - this.timers[id].start) >= this.timers[id].duration;
	}
	getRemainingTimeFormatted(args) {
		const id = args.ID;
		if (!this.timers[id] || this.timers[id].start === 0) return 'Kein Timer gestellt.';
		let remainingTime = this.timers[id].duration - (Date.now() - this.timers[id].start);
		if (this.timers[id].paused) {
			remainingTime = this.timers[id].duration - (this.timers[id].pauseTime - this.timers[id].start);
		}
		if (remainingTime < 0) remainingTime = 0;
		const msmsms = remainingTime % 1000;
		remainingTime = Math.floor(remainingTime / 1000);
		const s = remainingTime % 60;
		remainingTime = Math.floor(remainingTime / 60);
		const m = remainingTime % 60;
		remainingTime = Math.floor(remainingTime / 60);
		const h = remainingTime % 24;
		const d = Math.floor(remainingTime / 24);
		return `${String(d).padStart(2, '0' )}:${String(h).padStart(2, '0' )}:${String(m).padStart(2, '0' )}:${String(s).padStart(2, '0' )}.${String(msmsms).padStart(3, '0' )}`;
	}
	getTimerInSeconds(args) {
		const id = args.ID;
		if (!this.timers[id] || this.timers[id].start === 0) return 0;
		let remainingTime = this.timers[id].duration - (Date.now() - this.timers[id].start);
		if (this.timers[id].paused) {
			remainingTime = this.timers[id].duration - (this.timers[id].pauseTime - this.timers[id].start);
		}
		if (remainingTime < 0) remainingTime = 0;
		return (remainingTime / 1000).toFixed(3);
	}
	startStopwatch(args) {
		const id = args.ID;
		if (!this.stopwatches[id]) {
			this.stopwatches[id] = {
				startTime: 0,
				elapsedTime: 0,
				running: false,
				laps: []
			};
		}
		if (!this.stopwatches[id].running) {
			this.stopwatches[id].startTime = Date.now() - this.stopwatches[id].elapsedTime;
			this.stopwatches[id].running = true;
		}
	}
	pauseStopwatch(args) {
		const id = args.ID;
		if (this.stopwatches[id] && this.stopwatches[id].running) {
			this.stopwatches[id].elapsedTime = Date.now() - this.stopwatches[id].startTime;
			this.stopwatches[id].running = false;
		}
	}
	resumeStopwatch(args) {
		const id = args.ID;
		if (this.stopwatches[id] && !this.stopwatches[id].running) {
			this.stopwatches[id].startTime = Date.now() - this.stopwatches[id].elapsedTime;
			this.stopwatches[id].running = true;
		}
	}
	resetStopwatch(args) {
		const id = args.ID;
		if (this.stopwatches[id]) {
			this.stopwatches[id].startTime = Date.now();
			this.stopwatches[id].elapsedTime = 0;
			this.stopwatches[id].running = true;
		}
	}
	stopStopwatch(args) {
		const id = args.ID;
		if (this.stopwatches[id]) {
			this.stopwatches[id] = {
				startTime: 0,
				elapsedTime: 0,
				running: false,
				laps: []
			};
		}
	}
	saveLap(args) {
		const id = args.ID;
		if (this.stopwatches[id] && this.stopwatches[id].running) {
			const lapTime = Date.now() - this.stopwatches[id].startTime;
			const lastLapTime = this.stopwatches[id].laps.length > 0 ? this.stopwatches[id].laps[this.stopwatches[id].laps.length - 1].time : 0;
			const lapDuration = lapTime - lastLapTime;
			this.stopwatches[id].laps.push({
				time: lapTime,
				duration: lapDuration
			});
		}
	}
	clearLaps(args) {
		const id = args.ID;
		if (this.stopwatches[id]) {
			this.stopwatches[id].laps = [];
		}
	}
	getStopwatch(args) {
		const id = args.ID;
		if (!this.stopwatches[id]) return 'Inaktiv.';
		return this.formatTime(this.stopwatches[id].running ? Date.now() - this.stopwatches[id].startTime : this.stopwatches[id].elapsedTime);
	}
	getLaps(args) {
		const id = args.ID;
		if (!this.stopwatches[id]) return 'Keine Runden aufgenommen.';
		return this.stopwatches[id].laps.map((lap, index) => `Runde ${index + 1}: ${this.formatTime(lap.duration)}`).join('\n');
	}
	formatTime(ms) {
		const milliseconds = Math.floor(ms % 1000).toString().padStart(3, '0');
		const seconds = Math.floor((ms / 1000) % 60).toString().padStart(2, '0');
		const minutes = Math.floor((ms / (1000 * 60)) % 60).toString().padStart(2, '0');
		const hours = Math.floor((ms / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
		const days = Math.floor(ms / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
		return `${days}:${hours}:${minutes}:${seconds}.${milliseconds}`;
	}
	showTimers() {
		const timerKeys = Object.keys(this.timers);
		if (timerKeys.length === 0) return 'Keine Timer vorhanden.';
		return timerKeys.map(id => `Timer ${id}: ${this.getRemainingTimeFormatted({ ID: id })}`).join('\n');
	}
	showStopwatches() {
		const stopwatchKeys = Object.keys(this.stopwatches);
		if (stopwatchKeys.length === 0) return 'Keine Stoppuhren vorhanden.';
		return stopwatchKeys.map(id => `Stoppuhr ${id}: ${this.getStopwatch({ ID: id })}`).join('\n');
	}
	deleteTimer(args) {
		const id = args.ID;
		if (this.timers[id]) {
			delete this.timers[id];
		}
	}
	deleteAllTimers() {
		this.timers = {};
	}
	deleteStopwatch(args) {
		const id = args.ID;
		if (this.stopwatches[id]) {
			delete this.stopwatches[id];
		}
	}
	deleteAllStopwatches() {
		this.stopwatches = {};
	}
	farbeZuHex(args) {
		const farben = {
			"farbe 1 der erweiterung": "#f75e25",
			"farbe 2 der erweiterung": "#ff6000",
			"rot": "#ff0000",
			"grün": "#00ff00",
			"blau": "#0000ff",
			"gelb": "#ffff00",
			"schwarz": "#000000",
			"weiß": "#ffffff",
			"orange": "#ffa500",
			"lila": "#800080",
			"rosa": "#ffc0cb",
			"braun": "#a52a2a",
			"grau": "#808080",
			"cyan": "#00ffff",
			"magenta": "#ff00ff",
			"limette": "#00ff00",
			"kastanienbraun": "#800000",
			"marineblau": "#000080",
			"oliv": "#808000",
			"blaugrün": "#008080",
			"veilchen": "#ee82ee",
			"indigo": "#4b0082",
			"gold": "#ffd700",
			"silber": "#c0c0c0",
			"beige": "#f5f5dc",
			"koralle": "#ff7f50",
			"karmesinrot": "#dc143c",
			"khaki": "#f0e68c",
			"lavendel": "#e6e6fa",
			"orchidee": "#da70d6",
			"pflaume": "#dda0dd",
			"lachs": "#fa8072",
			"türkis": "#40e0d0",
			"pfirsich": "#ffdab9",
			"minze": "#98ff98",
			"aprikose": "#fbceb1",
			"schokolade": "#d2691e",
			"hellbraun": "#d2b48c",
			"rose": "#ff007f",
			"bernstein": "#ffbf00",
			"smaragd": "#50c878",
			"jade": "#00a86b",
			"rubin": "#e0115f",
			"saphir": "#0f52ba",
			"bronze": "#cd7f32",
			"messing": "#b5a642",
			"kupfer": "#b87333",
			"elfenbein": "#fffff0",
			"kohle": "#36454f",
			"denim": "#1560bd",
			"sand": "#c2b280",
			"ultramarinblau": "#3f00ff",
			"ultramarinblau hell": "#4169e1",
			"amethyst": "#9966cc",
			"aquamarin": "#7fffd4",
			"azurblau": "#007fff",
			"bordeaux": "#800020",
			"chartreuse": "#7fff00",
			"zimt": "#d2691e",
			"smaragdgrün": "#50c878",
			"flieder": "#c8a2c8",
			"fuchsia": "#ff00ff",
			"honiggelb": "#ffb300",
			"jaguar": "#080808",
			"königsblau": "#4169e1",
			"lavendelblau": "#ccccff",
			"limonengrün": "#32cd32",
			"mandarine": "#ff8c00",
			"mauve": "#e0b0ff",
			"neongrün": "#39ff14",
			"ocker": "#cc7722",
			"periwinkle": "#ccccff",
			"pfauenblau": "#00a693",
			"quarz": "#51484f",
			"rubinrot": "#9b111e",
			"safran": "#f4c430",
			"schiefergrau": "#708090",
			"sepia": "#704214",
			"terracotta": "#e2725b",
			"thulianpink": "#de6fa1",
			"ultraviolett": "#6f00ff",
			"vanille": "#f3e5ab",
			"wiesengrün": "#7bb661",
			"xanadu": "#738678",
			"zinnober": "#e34234",
			"alabaster": "#fafafa",
			"bernsteinfarben": "#ffbf00",
			"blassgrün": "#98fb98",
			"blassrosa": "#ffdab9",
			"blassviolett": "#dda0dd",
			"blassgelb": "#ffffe0",
			"blassblau": "#afeeee",
			"blassrot": "#ffb6c1",
			"blassorange": "#ffe4b5",
			"blassbraun": "#f5f5dc",
			"blassgrau": "#d3d3d3",
			"blasscyan": "#e0ffff",
			"blassmagenta": "#ff00ff",
			"blasslimette": "#00ff00",
			"blasskastanienbraun": "#800000",
			"blassmarineblau": "#000080",
			"blassoliv": "#808000",
			"blassblaugrün": "#008080",
			"blassveilchen": "#ee82ee",
			"blassindigo": "#4b0082",
			"blassgold": "#ffd700",
			"blasssilber": "#c0c0c0",
			"blassbeige": "#f5f5dc",
			"blasskoralle": "#ff7f50",
			"blasskarmesinrot": "#dc143c",
			"blasskhaki": "#f0e68c",
			"blasslavendel": "#e6e6fa",
			"blassorchidee": "#da70d6",
			"blasspflaume": "#dda0dd",
			"blasslachs": "#fa8072",
			"blasstürkis": "#40e0d0",
			"blasspfirsich": "#ffdab9",
			"blassminze": "#98ff98",
			"blassaprikose": "#fbceb1",
			"blassschokolade": "#d2691e",
			"blasshellbraun": "#d2b48c",
			"blassrose": "#ff007f",
			"blassbernstein": "#ffbf00",
			"blasssmaragd": "#50c878",
			"blassjade": "#00a86b",
			"blassrubin": "#e0115f",
			"blasssaphir": "#0f52ba",
			"blassbronze": "#cd7f32",
			"blassmessing": "#b5a642",
			"blasskupfer": "#b87333",
			"blasselfenbein": "#fffff0",
			"blasskohle": "#36454f",
			"blassdenim": "#1560bd",
			"blasssand": "#c2b280",
			"blassultramarinblau": "#3f00ff",
			"blassultramarinblau hell": "#4169e1",
			"blassamethyst": "#9966cc",
			"blassaquamarin": "#7fffd4",
			"blassazurblau": "#007fff",
			"blassbordeaux": "#800020",
			"blasschartreuse": "#7fff00",
		};
		if (!isNaN(parseFloat(args.FARBENNAME)) && isFinite(args.FARBENNAME)) {
			return "Fehler: Dieser Eintrag ist nicht in der Liste."
		} else {
			return farben[args.FARBENNAME.toLowerCase()] || "Fehler: Dieser Eintrag ist nicht in der Liste.";
		}
	}
	farbeAuswahlZuHex(args) {
		return args.FARBE.toLowerCase()
	}
	info(args) {
		if (args.AUSWAHL === 'Version') {
			return 'Version 2025.35.12';
		}
		if (args.AUSWAHL === 'Änderungen') {
			return 'Mehrere Blöcke hinzugefügt\nBugs behoben\Erweiterungen kombiniert in diese';
		}
		if (args.AUSWAHL === 'Programmierer') {
			return 'Made by Cat27082024/Ben5594';
		}
		if (args.AUSWAHL === 'Copyright') {
			return '© Open Source-Lizenz\n\nDiese Erweiterung darf nach eigenem Willen verwendet werden.\nSie darf auch remixed und geteilt werden, solange der Name des Entwicklers angegeben ist.';
		}
		if (args.AUSWAHL === 'Sprachen') {
			return 'Verfügbar auf deutsch';
		}
		if (args.AUSWAHL === 'Hinweis & Infos') {
			return 'Bei den Zeiten gibt es einzelne Blöcke, damit man sie direkt aus der Palette greifen kann.\n\nNoch ein kleiner Tipp: Beim Block, der was mit Farbe zu tun hat, kann man auch den HDC von \"Farbe 1 der Erweiterung\" oder \"Farbe 2 der Erweiterung\" herausfinden.';
		}
		if (args.AUSWAHL === 'Erreichbarkeit') {
			return 'Wenn du ein Anliegen wegen dieser Erweiterung hast, dann schreibe mich doch gerne über GitHub mit einem Kommentar zur Erweiterung an.\nBitte Bugs mit dem Blocknamen (wie in TurboWarp angezeigt) und evtl. Fehlermeldung melden. Vielen Dank.';
		}
		return 'Fehler: Dieser Eintrag ist nicht in der Liste.';
	}
	isProgressivelyValidRaw({ TEXT }) {
		const formatted = this.formatRaw(TEXT);
		return this.isProgressivelyValid({ TEXT: formatted });
	}
	isValidFlexibleDateTimeRaw({ TEXT }) {
		const formatted = this.formatRaw(TEXT);
		return this.isValidFlexibleDateTime({ TEXT: formatted });
	}
	formatRaw(raw) {
		const d = String(raw || '').replace(/\D/g, '');
		let r = '';
		if (d.length >= 1) r += d.slice(0, 1);
		if (d.length >= 2) r += d.slice(1, 2);
		if (d.length >= 3) r += '.' + d.slice(2, 3);
		if (d.length >= 4) r += d.slice(3, 4);
		if (d.length >= 5) r += '.' + d.slice(4, 5);
		if (d.length >= 6) r += d.slice(5, 6);
		if (d.length >= 7) r += d.slice(6, 7);
		if (d.length >= 8) r += d.slice(7, 8);
		if (d.length >= 9) r += ' ' + d.slice(8, 9);
		if (d.length >= 10) r += d.slice(9, 10);
		if (d.length >= 11) r += ':' + d.slice(10, 11);
		if (d.length >= 12) r += d.slice(11, 12);
		if (d.length >= 13) r += ':' + d.slice(12, 13);
		if (d.length >= 14) r += d.slice(13, 14);
		return r;
	}
	isProgressivelyValid({ TEXT }) {
		const str = String(TEXT || '').trim();
		if (!/^[0-9.:\s]*$/.test(str)) return false;
		const parts = str.split(/\s+/);
		const datePart = parts[0] || '';
		const timePart = parts[1] || '';
		const dateSegments = datePart.split('.');
		if (dateSegments.length > 3) return false;
		const [dd, mm, yyyy] = dateSegments.map(s => s.trim());
		let day = dd ? Number(dd) : null;
		let month = mm ? Number(mm) : null;
		let year = yyyy ? Number(yyyy) : null;
		if (dd && dd.length === 1 && Number(dd[0]) > 3) return false;
		if (mm && mm.length === 1 && Number(mm[0]) > 1) return false;
		if (dd) {
			if (!/^\d{1,2}$/.test(dd)) return false;
			if (dd.length === 2 && (day < 1 || day > 31)) return false;
		}
		if (mm) {
			if (!/^\d{1,2}$/.test(mm)) return false;
			if (mm.length === 2 && (month < 1 || month > 12)) return false;
		}
		if (yyyy) {
			if (!/^\d{1,4}$/.test(yyyy)) return false;
			if (yyyy.length === 4 && (year < 1000 || year > 9999)) return false;
		}
		if (day !== null && mm) {
			const validMonths = this.validMonthsForDay(day, year);
			if (mm.length === 2 && !validMonths.includes(month)) return false;
		}
		if (timePart) {
			const timeSegments = timePart.split(':');
			if (timeSegments.length > 3) return false;
			const [hh, min, ss] = timeSegments.map(s => s.trim());
			if (hh) {
				if (!/^\d{1,2}$/.test(hh)) return false;
				if (hh.length === 1 && Number(hh[0]) > 2) return false;
				const hour = Number(hh);
				if (hh.length === 2 && (hour < 0 || hour > 23)) return false;
			}
			if (min) {
				if (!/^\d{1,2}$/.test(min)) return false;
				if (min.length === 1 && Number(min[0]) > 5) return false;
				const minute = Number(min);
				if (min.length === 2 && (minute < 0 || minute > 59)) return false;
			}
			if (ss) {
				if (!/^\d{1,2}$/.test(ss)) return false;
				if (ss.length === 1 && Number(ss[0]) > 5) return false;
				const second = Number(ss);
				if (ss.length === 2 && (second < 0 || second > 59)) return false;
			}
		}
		return true;
	}
	isValidFlexibleDateTime({ TEXT }) {
		const str = String(TEXT || '').trim();
		const dateOnly = /^(\d{2})\.(\d{2})\.(\d{4})$/;
		const dateWithTime = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/;
		const dateWithFullTime = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
		let match;
		if ((match = str.match(dateWithFullTime))) {
			return this.validate(match[1], match[2], match[3], match[4], match[5], match[6]);
		}
		if ((match = str.match(dateWithTime))) {
			return this.validate(match[1], match[2], match[3], match[4], match[5], '00');
		}
		if ((match = str.match(dateOnly))) {
			return this.validate(match[1], match[2], match[3], '00', '00', '00');
		}
		return false;
	}
	validate(dd, mm, yyyy, hh, min, ss) {
		const day = Number(dd);
		const month = Number(mm);
		const year = Number(yyyy);
		const hour = Number(hh);
		const minute = Number(min);
		const second = Number(ss);
		if (
			month < 1 || month > 12 ||
			hour < 0 || hour > 23 ||
			minute < 0 || minute > 59 ||
			second < 0 || second > 59
		) return false;
		const daysInMonth = [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		return day >= 1 && day <= daysInMonth[month - 1];
	}
	validMonthsForDay(day, year) {
		const all = [1,2,3,4,5,6,7,8,9,10,11,12];
		const m31 = [1,3,5,7,8,10,12];
		const mExclFeb = all.filter(m => m !== 2);
		if (day === 31) return m31;
		if (day === 30) return mExclFeb;
		if (day === 29) {
			if (year && String(year).length === 4) {
				return this.isLeapYear(year) ? all : mExclFeb;
			}
			return all;
		}
		if (day >= 1 && day <= 28) return all;
		return [];
	}
	isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	}
	formatRawLive({ TEXT }) {
		const d = String(TEXT || '').replace(/\D/g, '');
		let r = '';
		if (d.length >= 1) r += d.slice(0, 1);
		if (d.length >= 2) r += d.slice(1, 2);
		if (d.length >= 3) r += '.' + d.slice(2, 3);
		if (d.length >= 4) r += d.slice(3, 4);
		if (d.length >= 5) r += '.' + d.slice(4, 5);
		if (d.length >= 6) r += d.slice(5, 6);
		if (d.length >= 7) r += d.slice(6, 7);
		if (d.length >= 8) r += d.slice(7, 8);
		if (d.length >= 9) r += ' ' + d.slice(8, 9);
		if (d.length >= 10) r += d.slice(9, 10);
		if (d.length >= 11) r += ':' + d.slice(10, 11);
		if (d.length >= 12) r += d.slice(11, 12);
		if (d.length >= 13) r += ':' + d.slice(12, 13);
		if (d.length >= 14) r += d.slice(13, 14);
		return r;
	}
	convertRawToIso({ TEXT }) {
		const digits = String(TEXT || '').replace(/\D/g, '');
		const dd = digits.slice(0, 2);
		const mm = digits.slice(2, 4);
		const yyyy = digits.slice(4, 8);
		const hh = digits.slice(8, 10) || '00';
		const min = digits.slice(10, 12) || '00';
		const ss = digits.slice(12, 14) || '00';
		if (dd.length < 2 || mm.length < 2 || yyyy.length < 4) return '';
		return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
	}
	convertFormattedToIso({ TEXT }) {
		const str = String(TEXT || '').trim();
		const match = str.match(/^(\d{2})\.(\d{2})\.(\d{4})(?: (\d{2}):(\d{2})(?::(\d{2}))?)?$/);
		if (!match) return '';
		const [, dd, mm, yyyy, hh = '00', min = '00', ss = '00'] = match;
		return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
	}
	convertIsoToEu({ TEXT }) {
		const str = String(TEXT || '').trim();
		const match = str.match(/^(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2})(?::(\d{2}))?)?$/);
		if (!match) return '';
		const [, yyyy, mm, dd, hh = '00', min = '00', ss = '00'] = match;
		return `${dd}.${mm}.${yyyy} ${hh}:${min}:${ss}`;
	}
}
Scratch.extensions.register(new CatToolboxExtension());