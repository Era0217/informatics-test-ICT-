const questionsPart1 = [
  {
    id: 1,
    text: "A monitor displays information...",
    answers: [
      { text: "true", correct: true },
      { text: "false", correct: false },
      { text: "monitor", correct: false },
      { text: "information", correct: false },
      { text: "displays", correct: false }
    ]
  },
  {
    id: 2,
    text: "A microphone is used an input device...",
    answers: [
      { text: "false", correct: true }, // По вашему правилу (первый из файла)
      { text: "true", correct: false },
      { text: "microphone", correct: false },
      { text: "monitor", correct: false },
      { text: "information", correct: false }
    ]
  },
  {
    id: 3,
    text: "The binary equivalent of the Octal number 13 is",
    answers: [
      { text: "1011", correct: true },
      { text: "1101", correct: false },
      { text: "11001", correct: false },
      { text: "1001", correct: false },
      { text: "10001", correct: false }
    ]
  },
  {
    id: 4,
    text: "Which of the following are file extensions for audio files?",
    answers: [
      { text: ".mp3", correct: true },
      { text: ".txt", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".mpeg", correct: false },
      { text: ".audio", correct: false }
    ]
  },
  {
    id: 5,
    text: "What software is needed to create slideshows?",
    answers: [
      { text: "MS Powerpoint", correct: true },
      { text: "Paint", correct: false },
      { text: "Windows XP", correct: false },
      { text: "MS Word", correct: false },
      { text: "Slideshows", correct: false }
    ]
  },
  {
    id: 6,
    text: "Which of the following would you use to find information on the internet?",
    answers: [
      { text: "Search Engine", correct: true },
      { text: "Word Processor", correct: false },
      { text: "Photo Editor", correct: false },
      { text: "Email", correct: false },
      { text: "internet", correct: false }
    ]
  },
  {
    id: 7,
    text: "Presentation Graphics may contain",
    answers: [
      { text: "All of this", correct: true },
      { text: "Text", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".mpeg", correct: false },
      { text: "Graphics", correct: false }
    ]
  },
  {
    id: 8,
    text: "Most popular Spreadsheet Editor",
    answers: [
      { text: "Microsoft Excel", correct: true },
      { text: "Microsoft Access", correct: false },
      { text: "Microsoft Word", correct: false },
      { text: "MySQL", correct: false },
      { text: "Microsoft", correct: false }
    ]
  },
  {
    id: 9,
    text: "Create text-based documents, reports, letters, and memos",
    answers: [
      { text: "Google Docs, MS Word", correct: true },
      { text: "OpenOffice Calc, Notepad", correct: false },
      { text: "MS Word, IBM Db2", correct: false },
      { text: "MS Excell, MS Access", correct: false },
      { text: "MySQL", correct: false }
    ]
  },
  {
    id: 10,
    text: "The computer translates the condition of each switch to a number. What number is represented by the OFF state?",
    answers: [
      { text: "0", correct: true },
      { text: "-3.75", correct: false },
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "01", correct: false }
    ]
  },
  {
    id: 11,
    text: "What is Computer software?",
    answers: [
      { text: "It is programming code executed on a computer processor", correct: true },
      { text: "It is the application of computers to store, study, retrieve, transmit, and manipulate data", correct: false },
      { text: "It is an evolving set of technologies", correct: false },
      { text: "It is the transmission of signs, signals, messages, writings, images and sounds", correct: false },
      { text: "It is Computer", correct: false }
    ]
  },
  {
    id: 12,
    text: "What is Computer hardware?",
    answers: [
      { text: "Physical parts of a computer", correct: true }, // Обобщено из контекста
      { text: "It is the application of computers to store, study, retrieve, transmit, and manipulate data", correct: false },
      { text: "It is an evolving set of technologies", correct: false },
      { text: "It is programming code executed on a computer processor", correct: false },
      { text: "It is Computer", correct: false }
    ]
  },
  {
    id: 13,
    text: "Terabyte (TB) =",
    answers: [
      { text: "1024 Gigabytes", correct: true },
      { text: "1024 Megabytes", correct: false },
      { text: "1024 Kilobytes", correct: false },
      { text: "1000 Megabytes", correct: false },
      { text: "1 bytes", correct: false }
    ]
  },
  {
    id: 14,
    text: "Kilobyte (KB) =",
    answers: [
      { text: "1024 bytes", correct: true },
      { text: "1024 Gigabytes", correct: false },
      { text: "1024 Kilobytes", correct: false },
      { text: "1000 Megabytes", correct: false },
      { text: "1 bytes", correct: false }
    ]
  },
  {
    id: 15,
    text: "Short cut key for Bold is",
    answers: [
      { text: "Ctrl+b", correct: true },
      { text: "Ctrl+x", correct: false },
      { text: "Ctrl+z", correct: false },
      { text: "Ctrl+c", correct: false },
      { text: "Ctrl+v", correct: false }
    ]
  },
  {
    id: 16,
    text: "The smallest measurement of memory is",
    answers: [
      { text: "Bits", correct: true },
      { text: "Bytes", correct: false },
      { text: "Gigabytes", correct: false },
      { text: "Kilobytes", correct: false },
      { text: "Megabytes", correct: false }
    ]
  },
  {
    id: 17,
    text: "Short cut key for Copy is",
    answers: [
      { text: "Ctrl+c", correct: true },
      { text: "Ctrl+x", correct: false },
      { text: "Ctrl+z", correct: false },
      { text: "Ctrl+f", correct: false },
      { text: "Ctrl+b", correct: false }
    ]
  },
  {
    id: 18,
    text: "Short cut key for Undo is",
    answers: [
      { text: "Ctrl+z", correct: true },
      { text: "Ctrl+c", correct: false },
      { text: "Ctrl+b", correct: false },
      { text: "Ctrl+f", correct: false },
      { text: "Ctrl+x", correct: false }
    ]
  },
  {
    id: 19,
    text: "Short cut key for Cut is",
    answers: [
      { text: "Ctrl+x", correct: true },
      { text: "Ctrl+c", correct: false },
      { text: "Ctrl+z", correct: false },
      { text: "Ctrl+f", correct: false },
      { text: "Ctrl+b", correct: false }
    ]
  },
  {
    id: 20,
    text: "How many bits is a byte?",
    answers: [
      { text: "8", correct: true },
      { text: "16", correct: false },
      { text: "2", correct: false },
      { text: "32", correct: false },
      { text: "42", correct: false }
    ]
  },
  {
    id: 21,
    text: "Which of these is a valid e-mail address?",
    answers: [
      { text: "professor@learnthenet.com", correct: true },
      { text: "www.learnthenet.com", correct: false },
      { text: "professor.at.learnthenet", correct: false },
      { text: "professor.at.learn@thenet", correct: false },
      { text: "professor.at.learn@@thenet", correct: false }
    ]
  },
  {
    id: 22,
    text: "Convert hexadecimal value 16 to decimal",
    answers: [
      { text: "22", correct: true },
      { text: "16", correct: false },
      { text: "20", correct: false },
      { text: "32", correct: false },
      { text: "52", correct: false }
    ]
  },
  {
    id: 23,
    text: "You can take a selection that you have cut or copied from the clipboard and___it into a document",
    answers: [
      { text: "Paste", correct: true },
      { text: "Cut", correct: false },
      { text: "Copy", correct: false },
      { text: "Undo", correct: false },
      { text: "Ctrl+z", correct: false }
    ]
  },
  {
    id: 24,
    text: "Short cut key for Paste is",
    answers: [
      { text: "Ctrl+v", correct: true },
      { text: "Ctrl+c", correct: false },
      { text: "Ctrl+z", correct: false },
      { text: "Ctrl+f", correct: false },
      { text: "Ctrl+b", correct: false }
    ]
  },
  {
    id: 25,
    text: "Times New Roman, Comic Sans and Calibri are called__",
    answers: [
      { text: "Fonts", correct: true },
      { text: "Variations", correct: false },
      { text: "Font sizes", correct: false },
      { text: "Alligment", correct: false },
      { text: "Thermodynamics", correct: false }
    ]
  },
  {
    id: 26,
    text: "What happens in a document when the 'cut' command is used?",
    answers: [
      { text: "Selected text or graphics are removed", correct: true },
      { text: "Only half the screen is seen", correct: false },
      { text: "Font size will change", correct: false },
      { text: "The application stops running", correct: false },
      { text: "Thermodynamics", correct: false }
    ]
  },
  {
    id: 27,
    text: "Which of the following is not currently a topic in computer science?",
    answers: [
      { text: "Thermodynamics", correct: true },
      { text: "Artificial intelligence", correct: false },
      { text: "Speech recognition", correct: false },
      { text: "Multiprocessing", correct: false },
      { text: "Variations", correct: false }
    ]
  },
  {
    id: 28,
    text: "The 0 and 1 in the binary numbering system are called binary digits or",
    answers: [
      { text: "bits", correct: true },
      { text: "bytes", correct: false },
      { text: "kilobytes", correct: false },
      { text: "decimal bytes", correct: false },
      { text: "Variations", correct: false }
    ]
  },
  {
    id: 29,
    text: "The binary equivalent of the Hexadecimal number 74A is",
    answers: [
      { text: "11101001010", correct: true },
      { text: "1111111101", correct: false },
      { text: "11110111111", correct: false },
      { text: "100010111101", correct: false },
      { text: "11111111010", correct: false }
    ]
  },
  {
    id: 30,
    text: "Why we need a program Excel?",
    answers: [
      { text: "Processing an electronic table", correct: true },
      { text: "Making a textual program", correct: false },
      { text: "Making only a diagram", correct: false },
      { text: "Drawing a picture", correct: false },
      { text: "Variations", correct: false }
    ]
  },
  {
    id: 31,
    text: "The binary equivalent of the Hexadecimal number 7BD is",
    answers: [
      { text: "11110111101", correct: true },
      { text: "111010111101", correct: false },
      { text: "100010111101", correct: false },
      { text: "100001000100", correct: false },
      { text: "111101111010", correct: false }
    ]
  },
  {
    id: 32,
    text: "The computer translates the condition of each switch to a number. What number is represented by the ON state?",
    answers: [
      { text: "1", correct: true },
      { text: "11", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: false },
      { text: "01", correct: false }
    ]
  },
  {
    id: 33,
    text: "What is the meaning of '$' in the program Excel",
    answers: [
      { text: "In the process of copying, not to change the cell address", correct: true },
      { text: "Changing only cell's format", correct: false },
      { text: "It is impossible to change the meaning of cell", correct: false },
      { text: "returns currency meaning", correct: false },
      { text: "Choose a ABS function", correct: false }
    ]
  },
  {
    id: 34,
    text: "To make a cell ABSOLUTE address, we should..",
    answers: [
      { text: "Choose a formula value and press the button F4", correct: true },
      { text: "Put the symbol '$' at the end of cell address", correct: false },
      { text: "Choose a ABS function", correct: false },
      { text: "Put the symbol '#' at the beginning of cell address", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 35,
    text: "What is the meaning of 'C$5' in the program Excel",
    answers: [
      { text: "When copying a formula, changing only column's address", correct: true },
      { text: "When copying a formula, changing only row's address", correct: false },
      { text: "Value with formula putting into C5 cell", correct: false },
      { text: "When copying a formula, changing to a new address", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 36,
    text: "What 'Master function' button used for in the Excel?",
    answers: [
      { text: "Insert functions, which quickly and easily predefined formulas", correct: true },
      { text: "Calls a mathematical functions", correct: false },
      { text: "Change the paragraph interval", correct: false },
      { text: "Calls only statistical functions", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 37,
    text: "Choose the right cell address",
    answers: [
      { text: "B1", correct: true },
      { text: "A10000", correct: false },
      { text: "#A10", correct: false },
      { text: "BZ_99", correct: false },
      { text: "BB1", correct: false }
    ]
  },
  {
    id: 38,
    text: "Choose the right cell address",
    answers: [
      { text: "A2", correct: true },
      { text: "@A2", correct: false },
      { text: "#A2", correct: false },
      { text: "2A", correct: false },
      { text: "#A10", correct: false }
    ]
  },
  {
    id: 39,
    text: "What is MIN() function",
    answers: [
      { text: "Returns the smallest number in a set of values", correct: true },
      { text: "Returns the biggest number in a set of values", correct: false },
      { text: "Returns the average (arithmetic mean) of the arguments", correct: false },
      { text: "Returns the lowercase letters", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 40,
    text: "What is MAX() function",
    answers: [
      { text: "Returns the biggest number in a set of values", correct: true },
      { text: "Returns the smallest number in a set of values", correct: false },
      { text: "Returns the average (arithmetic mean) of the arguments", correct: false },
      { text: "Returns the lowercase letters", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 41,
    text: "What is AVERAGE() function",
    answers: [
      { text: "Returns the average (arithmetic mean) of the arguments", correct: true },
      { text: "Returns the biggest number in a set of values", correct: false },
      { text: "Returns the smallest number in a set of values", correct: false },
      { text: "Returns the lowercase letters", correct: false },
      { text: "In the process of copying, not to change the cell address", correct: false }
    ]
  },
  {
    id: 42,
    text: "Before we start writing any formula to a cell, we select it and press the symbol....",
    answers: [
      { text: "equally", correct: true },
      { text: "plus", correct: false },
      { text: "acloud", correct: false },
      { text: "multiplication", correct: false },
      { text: "smooth", correct: false }
    ]
  },
  {
    id: 43,
    text: "Choose wrong expression in the Excel",
    answers: [
      { text: "50X10", correct: true },
      { text: "A3*B3", correct: false },
      { text: "A3*10", correct: false },
      { text: "50*10", correct: false },
      { text: "50*50", correct: false }
    ]
  },
  {
    id: 44,
    text: "Choose right expression in the Excel",
    answers: [
      { text: "A3*10", correct: true },
      { text: "50X10", correct: false },
      { text: "3A*B3", correct: false },
      { text: "2B/10", correct: false },
      { text: "@", correct: false }
    ]
  },
  {
    id: 45,
    text: "What will we get in cell A3, if the cells are A1=500; A2=450, then select these two cells and use autofill?",
    answers: [
      { text: "400", correct: true },
      { text: "550", correct: false },
      { text: "850", correct: false },
      { text: "500", correct: false },
      { text: "950", correct: false }
    ]
  },
  {
    id: 46,
    text: "What will we get in cell A3, if the cells are A1=300; A2=350, then select these two cells and use autofill?",
    answers: [
      { text: "400", correct: true },
      { text: "350", correct: false },
      { text: "250", correct: false },
      { text: "650", correct: false },
      { text: "750", correct: false }
    ]
  },
  {
    id: 47,
    text: "Can a cell be transferred from horizontal position to vertical in the Excel?",
    answers: [
      { text: "Yes, go to the field orientation and change position to 90°.in Alignment tab", correct: true },
      { text: "No", correct: false },
      { text: "Only in Word Art program", correct: false },
      { text: "Yes, if text don't have numbers", correct: false },
      { text: "No, go to the field orientation and change position to 30°.in Alignment tab", correct: false }
    ]
  },
  {
    id: 48,
    text: "What kind of address $C$1 is",
    answers: [
      { text: "absolute", correct: true },
      { text: "relative", correct: false },
      { text: "mixed", correct: false },
      { text: "books", correct: false },
      { text: "address", correct: false }
    ]
  },
  {
    id: 49,
    text: "What kind of address C$1 is",
    answers: [
      { text: "mixed", correct: true },
      { text: "absolute", correct: false },
      { text: "relative", correct: false },
      { text: "books", correct: false },
      { text: "address", correct: false }
    ]
  },
  {
    id: 50,
    text: "What kind of address $C1 is",
    answers: [
      { text: "mixed", correct: true },
      { text: "absolute", correct: false },
      { text: "relative", correct: false },
      { text: "books", correct: false },
      { text: "address", correct: false }
    ]
  }
];
