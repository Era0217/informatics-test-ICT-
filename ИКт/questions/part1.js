const questions = [
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
      { text: "true", correct: true },
      { text: "false", correct: false },
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
      { text: "The physical parts of a computer", correct: true },
      { text: "It is an evolving set of technologies", correct: false },
      { text: "It is the transmission of signs, signals, messages, writings, images and sounds", correct: false },
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
      { text: "Ctrl+c3", correct: false },
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
  },
  {
    id: 51,
    text: "What kind of address C1 is",
    answers: [
      { text: "relative", correct: true },
      { text: "mixed", correct: false },
      { text: "absolute", correct: false },
      { text: "books", correct: false },
      { text: "address", correct: false }
    ]
  },
  {
    id: 52,
    text: "###### means:",
    answers: [
      { text: "The cell is not enough to see all values", correct: true },
      { text: "You have entered a wrong number", correct: false },
      { text: "You have misspelled something", correct: false },
      { text: "No any mean", correct: false },
      { text: "address", correct: false }
    ]
  },
  {
    id: 53,
    text: "In order to multiply items in Excel you would use:",
    answers: [
      { text: "*", correct: true },
      { text: "@", correct: false },
      { text: "^", correct: false },
      { text: "#", correct: false },
      { text: "<", correct: false }
    ]
  },
  {
    id: 54,
    text: "If cells: A1=90; A2=85; A3=80; A4=75; A5=75. What will be your formula if you are going to get the total? Choose INCORRECT answer!",
    answers: [
      { text: "=SIN(A1:A5)", correct: true },
      { text: "=SUM(A2:A5)", correct: false },
      { text: "=A1+A2+A3+A4+A5", correct: false },
      { text: "=sum(a1:a5)", correct: false },
      { text: "=IF(E10>74,'PASSED','FAILED')", correct: false }
    ]
  },
  {
    id: 55,
    text: "The value in cell E10 = 75, if the student's mark (E10) is higher than 74, the results will be 'PASSED' or 'FAILED'. Possible correct formula:",
    answers: [
      { text: "=IF(E10>74,'PASSED','FAILED')", correct: true },
      { text: "= IF(E10>75,'PASSED','FAILED')", correct: false },
      { text: "= And(E10>74,'PASSED','FAILED')", correct: false },
      { text: "= Count(E10>75,'PASSED','FAILED')", correct: false },
      { text: "=SUM(A2:A5)", correct: false }
    ]
  },
  {
    id: 56,
    text: "E-Government portal of Kazakhstan",
    answers: [
      { text: "egov.kz", correct: true },
      { text: "egov.com", correct: false },
      { text: "gov.kz", correct: false },
      { text: "egoverment.kz", correct: false },
      { text: "egov.ru", correct: false }
    ]
  },
  {
    id: 57,
    text: "EDS stands for …",
    answers: [
      { text: "Electronic Digital Signature", correct: true },
      { text: "Electronic Demography Situation", correct: false },
      { text: "Economic Digital Signature", correct: false },
      { text: "Electronic Digital Sample", correct: false },
      { text: "Hyper Text Markup Literature", correct: false }
    ]
  },
  {
    id: 58,
    text: "HTML stands for …",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Term Manual Literature", correct: false },
      { text: "Hyper Topic Markup Languages", correct: false },
      { text: "Hyper Text Markup Literature", correct: false },
      { text: "Electronic Digital Sample", correct: false }
    ]
  },
  {
    id: 59,
    text: "… determines that the document background – yellow color and the text will be blue (HTML)",
    answers: [
      { text: "<BODY BGCOLOR = yellow TEXT = blue >", correct: true },
      { text: "<BODY BACKGROUND = yellow TEXT = blue >", correct: false },
      { text: "<BODY BACKGROUND = 'image.jpg' TEXT = red>", correct: false },
      { text: "<BODY BGCOLOR = 'yellow' TEXT = red>", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 60,
    text: "… determines that the document background – image type and the text will be red (HTML)",
    answers: [
      { text: "<BODY BACKGROUND = 'image.jpg' TEXT = red>", correct: true },
      { text: "<BODY BGCOLOR = yellow TEXT = blue >", correct: false },
      { text: "<BODY BACKGROUND = image.pdf TEXT = blue >", correct: false },
      { text: "<BODY BGCOLOR = 'image.jpg' TEXT = red >", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 61,
    text: "How to identify the numbered and unnumbered lists (HTML)",
    answers: [
      { text: "<OL>….</OL> and <UL>…..</UL>", correct: true },
      { text: "<I> …. </ I> and <B> …. </B>", correct: false },
      { text: "<BR >…. <BR >", correct: false },
      { text: "<H1> … </ H1> and <H2> … </ H2>", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 62,
    text: "How to identify the italic and bold text (HTML)",
    answers: [
      { text: "<I> …. </ I> and <B> …. </B>", correct: true },
      { text: "<OL>….</OL> and <UL>…..</UL>", correct: false },
      { text: "<BR >…. <BR >", correct: false },
      { text: "<H1> … </ H1> and <H2> … </ H2>", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 63,
    text: "How to identify the Headers of paragraph (HTML)",
    answers: [
      { text: "<H1> … </ H1> and <H2> … </ H2>", correct: true },
      { text: "<I> …. </ I> and <B> …. </B>", correct: false },
      { text: "<OL>….</OL> and <UL>…..</UL>", correct: false },
      { text: "<BR >…. <BR >", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 64,
    text: "How to identify the beginning of a new paragraph (HTML)",
    answers: [
      { text: "<P>", correct: true },
      { text: "<H1> … </ H1> and <H2> … </ H2>", correct: false },
      { text: "<I> …. </ I> and <B> …. </B>", correct: false },
      { text: "<OL>….</OL> and <UL>…..</UL>", correct: false },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false }
    ]
  },
  {
    id: 65,
    text: "How to insert a hyperlink to a document of this type to Task1.html (HTML)",
    answers: [
      { text: "<A HREF='Task1.html'> TEXT </A>", correct: true },
      { text: "<IMG SRC = ' Task1.html ' ALT = 'TEXT'>", correct: false },
      { text: "<BODY BGCOLOR = 'Task1.html ' TEXT = black>", correct: false },
      { text: "<MARQUEE> TEXT </ MARQUEE>", correct: false },
      { text: "Text file", correct: false }
    ]
  },
  {
    id: 66,
    text: "In the HTML every code called as …",
    answers: [
      { text: "tags", correct: true },
      { text: "taps", correct: false },
      { text: "link", correct: false },
      { text: "text", correct: false },
      { text: "Text file", correct: false }
    ]
  },
  {
    id: 67,
    text: "This diagram is used as a tool to visualize the workflow",
    answers: [
      { text: "Gantt chart", correct: true },
      { text: "Pie chart", correct: false },
      { text: "Surface chart", correct: false },
      { text: "Line chart", correct: false },
      { text: "Pdf flie", correct: false }
    ]
  },
  {
    id: 68,
    text: "… is a computer file created using a special hypertext markup language HTML.",
    answers: [
      { text: "Web page", correct: true },
      { text: "Text file", correct: false },
      { text: "Excel file", correct: false },
      { text: "Pdf flie", correct: false },
      { text: "Picture", correct: false }
    ]
  },
  {
    id: 69,
    text: "Web-site …",
    answers: [
      { text: "collection of web pages, which are united by some principle", correct: true },
      { text: "collection of word files, which are united by some principle", correct: false },
      { text: "collection of excel files, which are united by some principle", correct: false },
      { text: "collection of pictures, which are united by some principle", correct: false },
      { text: "collection of pdf files, which are united by some principle", correct: false }
    ]
  },
  {
    id: 70,
    text: "What is identifying a resource, provides information on the location of this resource?",
    answers: [
      { text: "URL", correct: true },
      { text: "URI", correct: false },
      { text: "URN", correct: false },
      { text: "HTTP", correct: false },
      { text: "WWW", correct: false }
    ]
  },
  {
    id: 71,
    text: "Choose tags to create a table in HTML?",
    answers: [
      { text: "TABLE, TR, TD", correct: true },
      { text: "ALIGN", correct: false },
      { text: "HEAD", correct: false },
      { text: "BEGIN", correct: false },
      { text: "END", correct: false }
    ]
  },
  {
    id: 72,
    text: "Choose tags to enter the window’s title in HTML?",
    answers: [
      { text: "HEAD, TITLE", correct: true },
      { text: "ALIGN", correct: false },
      { text: "TABLE", correct: false },
      { text: "BEGIN", correct: false },
      { text: "END", correct: false }
    ]
  },
  {
    id: 73,
    text: "… - application layer protocol of data transmission.",
    answers: [
      { text: "http", correct: true },
      { text: "www", correct: false },
      { text: "wwws", correct: false },
      { text: "domain", correct: false },
      { text: ".com", correct: false }
    ]
  },
  {
    id: 74,
    text: "… - standardized markup language for documents on the world wide web.",
    answers: [
      { text: "html", correct: true },
      { text: "gmail", correct: false },
      { text: "http", correct: false },
      { text: "www", correct: false },
      { text: "domain", correct: false }
    ]
  },
  {
    id: 75,
    text: "… - technology of description of the appearance of a document executed by the markup language.",
    answers: [
      { text: "CSS", correct: true },
      { text: "Doc", correct: false },
      { text: "Xls", correct: false },
      { text: ".net", correct: false },
      { text: "html", correct: false }
    ]
  },
  {
    id: 76,
    text: "… is the integrated mechanism of interaction between the state and citizens, state agencies with each other, ensuring consistency with the help of informational technologies.",
    answers: [
      { text: "Electronic government", correct: true },
      { text: "Electronic company", correct: false },
      { text: "Electronic university", correct: false },
      { text: "Electronic school", correct: false },
      { text: "Government", correct: false }
    ]
  },
  {
    id: 77,
    text: "What is PowerPoint?",
    answers: [
      { text: "It is a computer program that allows you to create and show slides to support a presentation.", correct: true },
      { text: "It is a computer program that allows you to create tables.", correct: false },
      { text: "It is a computer program that allows you to create text document.", correct: false },
      { text: "It is a computer program that allows you to paint picture.", correct: false },
      { text: "It is a computer program that allows you to create video.", correct: false }
    ]
  },
  {
    id: 78,
    text: "PowerPoint can be used to:",
    answers: [
      { text: "Organise and structure your presentation.", correct: true },
      { text: "Resizing", correct: false },
      { text: "Rotating", correct: false },
      { text: "Calculating", correct: false },
      { text: "DOS", correct: false }
    ]
  },
  {
    id: 79,
    text: "In what mobile generation was appeared Wi-Fi technology?",
    answers: [
      { text: "4 G", correct: true },
      { text: "1 G", correct: false },
      { text: "2 G", correct: false },
      { text: "3 G", correct: false },
      { text: "5 G", correct: false }
    ]
  },
  {
    id: 80,
    text: "Android is best classified as one of the fastest growing of these",
    answers: [
      { text: "mobile operating systems", correct: true },
      { text: "desktop operating systems", correct: false },
      { text: "network operating systems", correct: false },
      { text: "stand-alone operating systems", correct: false },
      { text: "DOS", correct: false }
    ]
  },
  {
    id: 81,
    text: "How much space Google gives users as free?",
    answers: [
      { text: "15Gb", correct: true },
      { text: "5Gb", correct: false },
      { text: "10Gb", correct: false },
      { text: "20Gb", correct: false },
      { text: "limitless", correct: false }
    ]
  },
  {
    id: 82,
    text: "Conversion of a hexadecimal number 3D to binary number is",
    answers: [
      { text: "111101", correct: true },
      { text: "110011", correct: false },
      { text: "11000110", correct: false },
      { text: "110001", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    id: 83,
    text: "The decimal equivalent of the binary number 100101 is",
    answers: [
      { text: "37", correct: true },
      { text: "33", correct: false },
      { text: "46", correct: false },
      { text: "28", correct: false },
      { text: "73", correct: false }
    ]
  },
  {
    id: 84,
    text: "Conversion of an octal number 106 to binary number is",
    answers: [
      { text: "1000110", correct: true },
      { text: "1100110", correct: false },
      { text: "1110010", correct: false },
      { text: "10000110", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    id: 85,
    text: "Conversion of an octal number 73 to binary number is",
    answers: [
      { text: "111011", correct: true },
      { text: "10111", correct: false },
      { text: "111100", correct: false },
      { text: "110010", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    id: 86,
    text: "The decimal equivalent of the binary number 1010100 is",
    answers: [
      { text: "84", correct: true },
      { text: "46", correct: false },
      { text: "64", correct: false },
      { text: "39", correct: false },
      { text: "98", correct: false }
    ]
  },
  {
    id: 87,
    text: "Conversion of a hexadecimal number D8 to binary number is",
    answers: [
      { text: "11011000", correct: true },
      { text: "11001100", correct: false },
      { text: "10001101", correct: false },
      { text: "10101101", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    id: 88,
    text: "The octal equivalent of the number 10011.1101 is",
    answers: [
      { text: "23.53", correct: true },
      { text: "23.64", correct: false },
      { text: "32.54", correct: false },
      { text: "63.51", correct: false },
      { text: "None of these", correct: false }
    ]
  },
  {
    id: 89,
    text: "The decimal equivalent of the binary number 101011 is",
    answers: [
      { text: "43", correct: true },
      { text: "41", correct: false },
      { text: "39", correct: false },
      { text: "44", correct: false },
      { text: "46", correct: false }
    ]
  },
  {
    id: 90,
    text: "HTML file’s type?",
    answers: [
      { text: ".html", correct: true },
      { text: "text editor", correct: false },
      { text: "excel", correct: false },
      { text: "paint", correct: false },
      { text: "calculator", correct: false }
    ]
  },
  {
    id: 91,
    text: "Format of the HTML document.",
    answers: [
      { text: ".html", correct: true },
      { text: ".ppt", correct: false },
      { text: ".docx", correct: false },
      { text: ".xlsx", correct: false },
      { text: "text editor", correct: false }
    ]
  },
  {
    id: 92,
    text: "… - is a program to create video.",
    answers: [
      { text: "Windows Movie Maker", correct: true },
      { text: "Power Point", correct: false },
      { text: "Paint", correct: false },
      { text: "Excel", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 93,
    text: "Select the function to display records that meet certain criteria in Excel.",
    answers: [
      { text: "filter", correct: true },
      { text: "sort", correct: false },
      { text: "color", correct: false },
      { text: "nothing", correct: false },
      { text: "start", correct: false }
    ]
  },
  {
    id: 94,
    text: "Find the NAME whose 2nd letter is 'm' using the text filter in Excel.",
    answers: [
      { text: "equals ?m*", correct: true },
      { text: "start m*", correct: false },
      { text: "consist 'm'", correct: false },
      { text: "equals ???m*", correct: false },
      { text: "start #8*m*", correct: false }
    ]
  },
  {
    id: 95,
    text: "Tag for background’s color of the document in HTML?",
    answers: [
      { text: "BODY BGCOLOR", correct: true },
      { text: "HEAD", correct: false },
      { text: "TITLE", correct: false },
      { text: "END", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 96,
    text: "an example of numbered list in HTML.",
    answers: [
      { text: "OL", correct: true },
      { text: "AL", correct: false },
      { text: "IL", correct: false },
      { text: "UL", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 97,
    text: "Tag of unnumbered list in HTML.",
    answers: [
      { text: "UL", correct: true },
      { text: "AL", correct: false },
      { text: "IL", correct: false },
      { text: "OL", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 98,
    text: "Tag for the first level, size of words in HTML.",
    answers: [
      { text: " H1", correct: true },
      { text: " H2", correct: false },
      { text: " H6", correct: false },
      { text: " H8", correct: false },
      { text: " H4", correct: false }
    ]
  },
  {
    id: 99,
    text: "Tag for the second level, size of words in HTML.",
    answers: [
      { text: " H2", correct: true },
      { text: " H1", correct: false },
      { text: " H6", correct: false },
      { text: " H8", correct: false },
      { text: " H5", correct: false }
    ]
  },
  {
    id: 100,
    text: "Tag for the third level, size of words in HTML.",
    answers: [
      { text: " H3", correct: true },
      { text: " H1", correct: false },
      { text: " H6", correct: false },
      { text: " H8", correct: false },
      { text: " H5", correct: false }
    ]
  },
  {
    id: 101,
    text: "Tag for the fourth level, size of words in HTML.",
    answers: [
      { text: " H4", correct: true },
      { text: " H1", correct: false },
      { text: " H6", correct: false },
      { text: " H8", correct: false },
      { text: " H5", correct: false }
    ]
  },
  {
    id: 102,
    text: "Tag for the fifth level, size of words in HTML.",
    answers: [
      { text: "H5", correct: true },
      { text: "H1", correct: false },
      { text: "H6", correct: false },
      { text: "H8", correct: false },
      { text: "H4", correct: false }
    ]
  },
  {
    id: 103,
    text: "Tag for the sixth level, size of words in HTML.",
    answers: [
      { text: "H6", correct: true },
      { text: "H1", correct: false },
      { text: "H2", correct: false },
      { text: "H8", correct: false },
      { text: "H4", correct: false }
    ]
  },
  {
    id: 104,
    text: "Tag for italic words in HTML.",
    answers: [
      { text: "I", correct: true },
      { text: "B", correct: false },
      { text: "U", correct: false },
      { text: "T", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 105,
    text: "Tag for bold words in HTML.",
    answers: [
      { text: "B", correct: true },
      { text: "I", correct: false },
      { text: "U", correct: false },
      { text: "T", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 106,
    text: "Tag for underline words in HTML.",
    answers: [
      { text: "U", correct: true },
      { text: "I", correct: false },
      { text: "B", correct: false },
      { text: "T", correct: false },
      { text: "SU", correct: false }
    ]
  },
  {
    id: 107,
    text: "Tag for superscript words in HTML.",
    answers: [
      { text: "SUP", correct: true },
      { text: "SUT", correct: false },
      { text: "SUB", correct: false },
      { text: "SU", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 108,
    text: "Tag for subscript words in HTML.",
    answers: [
      { text: "SUB", correct: true },
      { text: "SUT", correct: false },
      { text: "SUP", correct: false },
      { text: "SU", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 109,
    text: "Tag for beginning of a new paragraph in HTML.",
    answers: [
      { text: "P", correct: true },
      { text: "SUT", correct: false },
      { text: "SUP", correct: false },
      { text: "SU", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 110,
    text: "Tag for scrolling text in HTML.",
    answers: [
      { text: "MARQUEE", correct: true },
      { text: "SUT", correct: false },
      { text: "SUP", correct: false },
      { text: "SU", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 111,
    text: "Tag to insert picture in HTML.",
    answers: [
      { text: "IMG SRC", correct: true },
      { text: "SUT", correct: false },
      { text: "SUP", correct: false },
      { text: "SU", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 112,
    text: "Tags to skip three lines in HTML.",
    answers: [
      { text: "<BR> <BR> <BR>", correct: true },
      { text: "<BR BR BR>", correct: false },
      { text: "<BR> <BR>", correct: false },
      { text: "<BR> BR>", correct: false },
      { text: "<BR\\ BR\\ BR>", correct: false }
    ]
  },
  {
    id: 113,
    text: "Tags to skip two lines in HTML.",
    answers: [
      { text: "<BR> <BR>", correct: true },
      { text: "<BR BR BR>", correct: false },
      { text: "<BR> <BR> <BR>", correct: false },
      { text: "<BR> <BR> <BR> <BR>", correct: false },
      { text: "<BR BR BR BR>", correct: false }
    ]
  },
  {
    id: 114,
    text: "Tags to skip four lines in HTML.",
    answers: [
      { text: "<BR> <BR> <BR> <BR>", correct: true },
      { text: "<BR BR BR BR>", correct: false },
      { text: "<BR> <BR> <BR>", correct: false },
      { text: "<BR> <BR>", correct: false },
      { text: "<BR BR BR>", correct: false }
    ]
  },
  {
    id: 115,
    text: "Tag to insert a hyperlink in HTML.",
    answers: [
      { text: "A HREF", correct: true },
      { text: "BODY", correct: false },
      { text: "ALIGN", correct: false },
      { text: "HEIGHT", correct: false },
      { text: "BODY BACKGROUND", correct: false }
    ]
  },
  {
    id: 116,
    text: "Tag to insert background’s picture in HTML.",
    answers: [
      { text: "BODY BACKGROUND", correct: true },
      { text: "HREF", correct: false },
      { text: "ALIGN", correct: false },
      { text: "HEIGHT", correct: false },
      { text: "BODY", correct: false }
    ]
  },
  {
    id: 117,
    text: "Function in excel filter, which shows text finishes with letter 'z'?",
    answers: [
      { text: "ends with z", correct: true },
      { text: "greater than z", correct: false },
      { text: "less than z", correct: false },
      { text: "equals z", correct: false },
      { text: "begins with a", correct: false }
    ]
  },
  {
    id: 118,
    text: "Function in excel filter, which shows text starts with letter 'a'?",
    answers: [
      { text: "begins with a", correct: true },
      { text: "greater than a", correct: false },
      { text: "less than a", correct: false },
      { text: "equals a", correct: false },
      { text: "equals z", correct: false }
    ]
  },
  {
    id: 119,
    text: "The valid format of MS Word is ___",
    answers: [
      { text: ".doc", correct: true },
      { text: ".exe", correct: false },
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".gif", correct: false }
    ]
  },
  {
    id: 120,
    text: "The valid format of MS Excel is ___",
    answers: [
      { text: ".xls", correct: true },
      { text: ".doc", correct: false },
      { text: ".png", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".gif", correct: false }
    ]
  },
  {
    id: 121,
    text: "Line spacing is in the ____ of MS Word",
    answers: [
      { text: "Home tab", correct: true },
      { text: "Format tab", correct: false },
      { text: "View tab", correct: false },
      { text: "Insert tab", correct: false },
      { text: "Page setup", correct: false }
    ]
  },
  {
    id: 122,
    text: "Arial, Cambria, Verdana, Times New Roman are the name of ____",
    answers: [
      { text: "Font face", correct: true },
      { text: "Highlights", correct: false },
      { text: "Text", correct: false },
      { text: "Alignment", correct: false },
      { text: "Page setup", correct: false }
    ]
  },
  {
    id: 123,
    text: "Which file format cannot be added to a Word document using Special Paste?",
    answers: [
      { text: ".ppz", correct: true },
      { text: ".png", correct: false },
      { text: ".jpg", correct: false },
      { text: ".gif", correct: false },
      { text: ".doc", correct: false }
    ]
  },
  {
    id: 124,
    text: "Which of the following is not an option in clipboard?",
    answers: [
      { text: "Page setup", correct: true },
      { text: "Cut", correct: false },
      { text: "Copy", correct: false },
      { text: "Paste", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 125,
    text: "We can insert a page number at",
    answers: [
      { text: "Both", correct: true },
      { text: "None", correct: false },
      { text: "Footer", correct: false },
      { text: "Header", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 126,
    text: "We can remove / hide border of a shape by selecting …",
    answers: [
      { text: "No Outline", correct: true },
      { text: "No Border", correct: false },
      { text: "No Line", correct: false },
      { text: "White Line", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 127,
    text: "Google Docs is most similar to which application?",
    answers: [
      { text: "MS Word", correct: true },
      { text: "MS Power Point", correct: false },
      { text: "MS Excel", correct: false },
      { text: "MS Access", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 128,
    text: "Google Sheets is most similar to which application?",
    answers: [
      { text: "MS Excel", correct: true },
      { text: "MS Word", correct: false },
      { text: "MS Power Point", correct: false },
      { text: "MS Access", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 129,
    text: "Google Slides is most similar to which application?",
    answers: [
      { text: "MS Power Point", correct: true },
      { text: "MS Excel", correct: false },
      { text: "MS Word", correct: false },
      { text: "MS Outlook", correct: false },
      { text: "Google Drive", correct: false }
    ]
  },
  {
    id: 130,
    text: "Google Docs allows you to insert or upload images from which source(s)?",
    answers: [
      { text: "All of them", correct: true },
      { text: "Google Drive", correct: false },
      { text: "The web search tool built into Google Docs", correct: false },
      { text: "Your computer's hard drive", correct: false },
      { text: "insert a drawing", correct: false }
    ]
  },
  {
    id: 131,
    text: "To add text boxes or shapes to your document, you will need to ________.",
    answers: [
      { text: "insert a drawing", correct: true },
      { text: "use the File menu", correct: false },
      { text: "insert a special character", correct: false },
      { text: "format the paragraph style", correct: false },
      { text: "All of them", correct: false }
    ]
  },
  {
    id: 132,
    text: "Year of invention of the telegraph?",
    answers: [
      { text: "1837", correct: true },
      { text: "1876", correct: false },
      { text: "1947", correct: false },
      { text: "2001", correct: false },
      { text: "1860", correct: false }
    ]
  },
  {
    id: 133,
    text: "Year of invention of the telephone?",
    answers: [
      { text: "1876", correct: true },
      { text: "1947", correct: false },
      { text: "1837", correct: false },
      { text: "2001", correct: false },
      { text: "1860", correct: false }
    ]
  },
  {
    id: 134,
    text: "When did World Wide Web introduce?",
    answers: [
      { text: "1990", correct: true },
      { text: "1837", correct: false },
      { text: "1850", correct: false },
      { text: "2014", correct: false },
      { text: "1860", correct: false }
    ]
  },
  {
    id: 135,
    text: "When does IBM announce its Systems Network Architecture (SNA)?",
    answers: [
      { text: "1974", correct: true },
      { text: "1999", correct: false },
      { text: "1860", correct: false },
      { text: "2018", correct: false },
      { text: "2001", correct: false }
    ]
  },
  {
    id: 136,
    text: "The electronic transmission of signals for communications",
    answers: [
      { text: "Telephone, Radio, Television", correct: true },
      { text: "Car, Motorbike", correct: false },
      { text: "Bike, Plane", correct: false },
      { text: "Computer network", correct: false },
      { text: "Radio", correct: false }
    ]
  },
  {
    id: 137,
    text: "What does share hardware, programs, and databases across the organization?",
    answers: [
      { text: "Computer network", correct: true },
      { text: "Radio", correct: false },
      { text: "Television", correct: false },
      { text: "Pdf flie", correct: false },
      { text: "Picture", correct: false }
    ]
  },
  {
    id: 138,
    text: "What Internet networking technologies are being used as technology platform",
    answers: [
      { text: "Web browser suites, HTML", correct: true },
      { text: "Text file", correct: false },
      { text: "Excel file", correct: false },
      { text: "Pdf flie", correct: false },
      { text: "Picture", correct: false }
    ]
  },
  {
    id: 139,
    text: "First ARPANET appeared in …",
    answers: [
      { text: "1969", correct: true },
      { text: "1869", correct: false },
      { text: "1769", correct: false },
      { text: "2016", correct: false },
      { text: "2020", correct: false }
    ]
  },
  {
    id: 140,
    text: "First e-mail program created in….",
    answers: [
      { text: "1971", correct: true },
      { text: "2011", correct: false },
      { text: "2020", correct: false },
      { text: "1945", correct: false },
      { text: "1987", correct: false }
    ]
  },
  {
    id: 141,
    text: "ARPANET stopped to exist in …",
    answers: [
      { text: "1990", correct: true },
      { text: "2020", correct: false },
      { text: "2010", correct: false },
      { text: "1950", correct: false },
      { text: "1930", correct: false }
    ]
  },
  {
    id: 142,
    text: "How many generations of computers you now?",
    answers: [
      { text: "5", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    id: 143,
    text: "The third generation of computers covers the period:",
    answers: [
      { text: "1965-1970", correct: true },
      { text: "1971-1982", correct: false },
      { text: "1982-1994", correct: false },
      { text: "1959-1964", correct: false },
      { text: "1995-now", correct: false }
    ]
  },
  {
    id: 144,
    text: "First generation computers are characterized by",
    answers: [
      { text: "Vacuum tubes and magnetic drum", correct: true },
      { text: "Minicomputers", correct: false },
      { text: "Magnetic tape", correct: false },
      { text: "Integrated circuit", correct: false },
      { text: "Transistor", correct: false }
    ]
  },
  {
    id: 145,
    text: "The transistorized computer circuits were introduced in the",
    answers: [
      { text: "Second generation", correct: true },
      { text: "First generation", correct: false },
      { text: "Third generation", correct: false },
      { text: "Fourth generation", correct: false },
      { text: "Fifth generation", correct: false }
    ]
  },
  {
    id: 146,
    text: "Integrated circuit (ICs) as basic electronic component (SSIC and MSIC)",
    answers: [
      { text: "Third Generation of Computers", correct: true },
      { text: "Fourth Generation of Computers", correct: false },
      { text: "Second Generation of Computers", correct: false },
      { text: "First Generation of Computers", correct: false },
      { text: "Fifth Generation", correct: false }
    ]
  },
  {
    id: 147,
    text: "The monitor of a computer is connected to it by a",
    answers: [
      { text: "Cable", correct: true },
      { text: "Wire", correct: false },
      { text: "Bus", correct: false },
      { text: "Line driver", correct: false },
      { text: "internet", correct: false }
    ]
  },
  {
    id: 148,
    text: "Which of the following is still useful for adding numbers?",
    answers: [
      { text: "Abacus", correct: true },
      { text: "EDSAC", correct: false },
      { text: "ENIAC", correct: false },
      { text: "UNIVAC", correct: false },
      { text: " IBM PC", correct: false }
    ]
  },
  {
    id: 149,
    text: "When was built the first computer and how is called?",
    answers: [
      { text: "In the 1940’s, ENIAC", correct: true },
      { text: "In the 1950’s, ANIAC", correct: false },
      { text: "In the 1930’s, ANIAC", correct: false },
      { text: "In the 1970’s, IBM PC", correct: false },
      { text: "In the 1990’s, ENIAC", correct: false }
    ]
  },
  {
    id: 150,
    text: "Computer understands _________________ language",
    answers: [
      { text: "Binary language", correct: true },
      { text: "Double language", correct: false },
      { text: "Bit language", correct: false },
      { text: "ROM language", correct: false },
      { text: "language", correct: false }
    ]
  },
  {
    id: 151,
    text: "Which of the following are file extensions for text editor files?",
    answers: [
      { text: ".txt", correct: true },
      { text: ".swf", correct: false },
      { text: ".jpeg", correct: false },
      { text: ".mpeg", correct: false },
      { text: ".mp3", correct: false }
    ]
  },
  {
    id: 152,
    text: "What does ICT stand for?",
    answers: [
      { text: "Information and Communication Technology", correct: true },
      { text: " International Computer Technology", correct: false },
      { text: "Internet Communication Tools", correct: false },
      { text: "Integrated Computer Technologies", correct: false },
      { text: "Integrated Communication Technologies", correct: false }
    ]
  },
  {
    id: 153,
    text: "What is the main function of an operating system?",
    answers: [
      { text: " To manage computer hardware and software", correct: true },
      { text: " To run programs", correct: false },
      { text: "To protect data", correct: false },
      { text: " To organize files", correct: false },
      { text: " CPU", correct: false }
    ]
  },
  {
    id: 154,
    text: "Which of the following is an example of hardware?",
    answers: [
      { text: " CPU", correct: true },
      { text: " Windows", correct: false },
      { text: " Microsoft Word", correct: false },
      { text: " Google Chrome", correct: false },
      { text: " Encrypts data", correct: false }
    ]
  },
  {
    id: 155,
    text: "What is the primary purpose of a database?",
    answers: [
      { text: " To store and manage data", correct: true },
      { text: " To run programs", correct: false },
      { text: " To process data", correct: false },
      { text: " To enhance internet speed", correct: false },
      { text: " Encrypts data", correct: false }
    ]
  },
  {
    id: 156,
    text: "What does CPU stand for?",
    answers: [
      { text: " Central Processing Unit", correct: true },
      { text: " Central Programming Unit", correct: false },
      { text: " Computer Peripheral Unit", correct: false },
      { text: " Central Power Unit", correct: false },
      { text: " Encrypts data", correct: false }
    ]
  },
  {
    id: 157,
    text: "Which one of the following is an example of cloud storage?",
    answers: [
      { text: " Google Drive", correct: true },
      { text: " External hard drive", correct: false },
      { text: " USB flash drive", correct: false },
      { text: " CD", correct: false },
      { text: " Encrypts data", correct: false }
    ]
  },
  {
    id: 158,
    text: "What is the full form of Wi-Fi?",
    answers: [
      { text: " Wireless Fidelity", correct: true },
      { text: " Wireless Functionality", correct: false },
      { text: " Wired Fidelity", correct: false },
      { text: " Wired Functionality", correct: false },
      { text: " Encrypts data", correct: false }
    ]
  },
  {
    id: 159,
    text: "What does a firewall do?",
    answers: [
      { text: " Protects networks from unauthorized access", correct: true },
      { text: " Encrypts data", correct: false },
      { text: " Manages user passwords", correct: false },
      { text: " Improves computer performance", correct: false },
      { text: " Wired Functionality", correct: false }
    ]
  },
  {
    id: 160,
    text: "What is a URL?",
    answers: [
      { text: "Uniform Resource Locator", correct: true },
      { text: "Universal Resource Link", correct: false },
      { text: "Uniform Resource Link", correct: false },
      { text: "Universal Retrieval Locator", correct: false },
      { text: "Microsoft Word", correct: false }
    ]
  },
  {
    id: 161,
    text: "What is malware?",
    answers: [
      { text: "Software that damages or disrupts systems", correct: true },
      { text: "Software that enhances performance", correct: false },
      { text: "Software that protects your computer", correct: false },
      { text: "Software used to design websites", correct: false },
      { text: "Microsoft Word", correct: false }
    ]
  },
  {
    id: 162,
    text: "Which one of these is an operating system?",
    answers: [
      { text: "Linux", correct: true },
      { text: "Microsoft Word", correct: false },
      { text: "Google Chrome", correct: false },
      { text: "Photoshop", correct: false },
      { text: "USB", correct: false }
    ]
  },
  {
    id: 163,
    text: "What is the role of a router in a network?",
    answers: [
      { text: "To direct data traffic between devices", correct: true },
      { text: "To store data", correct: false },
      { text: "To encrypt data", correct: false },
      { text: "To manage email services", correct: false },
      { text: "USB", correct: false }
    ]
  },
  {
    id: 164,
    text: "What does DNS stand for?",
    answers: [
      { text: "Domain Name System", correct: true },
      { text: "Digital Network Service", correct: false },
      { text: "Domain Name Service", correct: false },
      { text: "Dynamic Network System", correct: false },
      { text: "USB", correct: false }
    ]
  },
  {
    id: 165,
    text: "Which of the following is NOT a type of computer memory?",
    answers: [
      { text: "USB", correct: true },
      { text: "SSD", correct: false },
      { text: "RAM", correct: false },
      { text: "ROM", correct: false },
      { text: "NTML", correct: false }
    ]
  },
  {
    id: 166,
    text: "What is the primary function of a web browser?",
    answers: [
      { text: "To access and view websites", correct: true },
      { text: "To run operating systems", correct: false },
      { text: "To store files", correct: false },
      { text: "To process data", correct: false },
      { text: "NTML", correct: false }
    ]
  },
  {
    id: 167,
    text: "What is cloud computing?",
    answers: [
      { text: "Using the internet for data storage and processing", correct: true },
      { text: "Storing data on physical servers", correct: false },
      { text: "Using a home computer for data storage", correct: false },
      { text: "Storing files in physical locations", correct: false },
      { text: "NTML", correct: false }
    ]
  },
  {
    id: 168,
    text: "Which of the following is a search engine?",
    answers: [
      { text: "Google", correct: true },
      { text: "Facebook", correct: false },
      { text: "Instagram", correct: false },
      { text: " Skype", correct: false },
      { text: "NTML", correct: false }
    ]
  },
  {
    id: 169,
    text: "Which programming language is widely used for web development?",
    answers: [
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "Ruby", correct: false },
      { text: "NTML", correct: false }
    ]
  },
  {
    id: 170,
    text: "What is the main function of RAM in a computer?",
    answers: [
      { text: "To store data temporarily for quick access", correct: true },
      { text: "To store data permanently", correct: false },
      { text: "To process data", correct: false },
      { text: "To provide internet access", correct: false },
      { text: "To store data", correct: false }
    ]
  },
  {
    id: 171,
    text: "What is a domain name?",
    answers: [
      { text: "The unique address of a website on the internet", correct: true },
      { text: "The physical address of a website", correct: false },
      { text: "A password for accessing websites", correct: false },
      { text: "A type of computer virus", correct: false },
      { text: "To provide internet access", correct: false }
    ]
  },
  {
    id: 172,
    text: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyper Transfer Machine Language", correct: false },
      { text: "HomeText Machine Language", correct: false },
      { text: "HyperTask Management Language", correct: false },
      { text: "HyperTask Management", correct: false }
    ]
  },
  {
    id: 173,
    text: "What is the primary function of an antivirus program?",
    answers: [
      { text: "To protect the computer from viruses and malware", correct: true },
      { text: "To store documents", correct: false },
      { text: "To organize files", correct: false },
      { text: "To enhance internet speed", correct: false },
      { text: "Windows 10", correct: false }
    ]
  },
  {
    id: 174,
    text: "What is a VPN (Virtual Private Network)?",
    answers: [
      { text: "A tool for anonymous internet browsing", correct: true },
      { text: "A software for web design", correct: false },
      { text: "A type of computer virus", correct: false },
      { text: "A type of cloud service", correct: false },
      { text: "Windows 10", correct: false }
    ]
  },
  {
    id: 175,
    text: "What is the function of a modem?",
    answers: [
      { text: "To connect to the internet", correct: true },
      { text: "To process data", correct: false },
      { text: "To store files", correct: false },
      { text: "To display images on the screen", correct: false },
      { text: "A software program", correct: false }
    ]
  },
  {
    id: 176,
    text: "Which of the following is a type of software?",
    answers: [
      { text: "Windows 10", correct: true },
      { text: "CPU", correct: false },
      { text: "RAM", correct: false },
      { text: "Monitor", correct: false },
      { text: " Program", correct: false }
    ]
  },
  {
id: 177,
text: "What is a 'cookie' in the context of web browsing?",
answers: [
{ text: "A small text file for storing user information", correct: true },
{ text: "A physical device", correct: false },
{ text: "A tool for improving internet speed", correct: false },
{ text: "A type of virus", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 178,
text: "What does IoT stand for?",
answers: [
{ text: "Internet of Things", correct: true },
{ text: "Input of Tools", correct: false },
{ text: "Interface of Technology", correct: false },
{ text: "Intelligence of Technology", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 179,
text: "What is a URL shortener used for?",
answers: [
{ text: "To shorten long web addresses", correct: true },
{ text: "To encrypt URLs", correct: false },
{ text: "To change the domain of a website", correct: false },
{ text: "To create new websites", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 180,
text: "What is the function of a database management system (DBMS)?",
answers: [
{ text: "To organize, store, and retrieve data", correct: true },
{ text: "To manage hardware devices", correct: false },
{ text: "To run software programs", correct: false },
{ text: "To protect data from viruses", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 181,
text: "What is e-commerce?",
answers: [
{ text: "The process of buying and selling goods over the internet", correct: true },
{ text: "A way of storing data", correct: false },
{ text: "The act of programming websites", correct: false },
{ text: "A method of exchanging goods in person", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 182,
text: "What is the main difference between RAM and ROM?",
answers: [
{ text: "RAM is temporary, while ROM is permanent", correct: true },
{ text: "RAM is used for storage, while ROM is used for processing", correct: false },
{ text: "RAM is faster than ROM", correct: false },
{ text: "RAM is used for input, while ROM is used for output", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 183,
text: "What is an algorithm?",
answers: [
{ text: "A set of instructions to solve a problem", correct: true },
{ text: "A programming language", correct: false },
{ text: "A type of computer hardware", correct: false },
{ text: "A method of storing data", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 184,
text: "Which of the following is NOT a function of a network?",
answers: [
{ text: "Protecting computers from viruses", correct: true },
{ text: "Storing data on a cloud", correct: false },
{ text: "Sharing files", correct: false },
{ text: "Sharing printers", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 185,
text: "What does the term “bandwidth” refer to in networking?",
answers: [
{ text: "The speed at which data is transmitted", correct: true },
{ text: "The size of a network", correct: false },
{ text: "The number of devices connected to a network", correct: false },
{ text: "The amount of storage available", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 186,
text: "What is encryption?",
answers: [
{ text: "The process of securing data by converting it into an unreadable format", correct: true },
{ text: "The process of compressing files", correct: false },
{ text: "The process of deleting unnecessary files", correct: false },
{ text: "The process of organizing data", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 187,
text: "What is a spreadsheet used for?",
answers: [
{ text: "Managing and analyzing data", correct: true },
{ text: "Writing code", correct: false },
{ text: "Creating presentations", correct: false },
{ text: "Designing websites", correct: false },
{ text: "A software program", correct: false }
]
},
{
id: 188,
text: "What is a blog?",
answers: [
{ text: "A personal journal or article published on the internet", correct: true },
{ text: "A type of cloud service", correct: false },
{ text: "A software program", correct: false },
{ text: "A website for storing and sharing photos", correct: false },
{ text: "Writing code", correct: false }
]
},
{
id: 189,
text: "What is the function of a computer's motherboard?",
answers: [
{ text: "To connect all the components of the computer", correct: true },
{ text: "To process data", correct: false },
{ text: "To store data", correct: false },
{ text: "To display images", correct: false },
{ text: "E-commerce", correct: false }
]
},
{
id: 190,
text: "What is SEO (Search Engine Optimization)?",
answers: [
{ text: "A method of improving website visibility in search engines", correct: true },
{ text: "A type of programming language", correct: false },
{ text: "A way to protect websites from hacking", correct: false },
{ text: "A method of creating digital ads", correct: false },
{ text: "Writing code", correct: false }
]
},
{
id: 191,
text: "Which of these is a type of online transaction?",
answers: [
{ text: "E-commerce", correct: true },
{ text: "Spamming", correct: false },
{ text: "File sharing", correct: false },
{ text: "Cloud computing", correct: false },
{ text: "Writing code", correct: false }
]
},
{
id: 192,
text: "What does the term 'big data' refer to?",
answers: [
{ text: "A collection of large and complex datasets", correct: true },
{ text: "Small datasets used for analysis", correct: false },
{ text: "A network protocol", correct: false },
{ text: "Writing code", correct: false },
{ text: "A type of computer virus", correct: false }
]
},
{
id: 193,
text: "What is a system analyst responsible for?",
answers: [
{ text: "Analyzing and improving IT systems", correct: true },
{ text: "Writing code", correct: false },
{ text: "Protecting a computer from viruses", correct: false },
{ text: "Managing hardware components", correct: false },
{ text: "A type of computer virus", correct: false }
]
},
{
id: 194,
text: "What is Bluetooth used for?",
answers: [
{ text: "To connect devices wirelessly over short distances", correct: true },
{ text: "To increase internet speed", correct: false },
{ text: "To manage files on the internet", correct: false },
{ text: "To encrypt data", correct: false },
{ text: "JavaScript", correct: false }
]
},
{
id: 195,
text: "Which of the following is a common web development language?",
answers: [
{ text: "JavaScript", correct: true },
{ text: "Excel", correct: false },
{ text: "Adobe Photoshop", correct: false },
{ text: "WordPress", correct: false },
{ text: "To encrypt data", correct: false }
]
},
{
id: 196,
text: "What is the purpose of the 'cloud' in cloud computing?",
answers: [
{ text: "To store and process data over the internet", correct: true },
{ text: "To store files in a physical location", correct: false },
{ text: "To provide internet access", correct: false },
{ text: "To protect data from viruses", correct: false },
{ text: "To encrypt data", correct: false }
]
},
{
id: 197,
text: "What is the difference between a static and a dynamic website?",
answers: [
{ text: "A static website never changes, while a dynamic website can change content based on user interaction", correct: true },
{ text: "A static website is more secure", correct: false },
{ text: "A dynamic website loads faster than a static one", correct: false },
{ text: "There is no difference", correct: false },
{ text: "To encrypt data", correct: false }
]
},
{
id: 198,
text: "What is a search engine?",
answers: [
{ text: "A website that indexes and retrieves other websites", correct: true },
{ text: "A type of computer", correct: false },
{ text: "A program used for writing code", correct: false },
{ text: "A type of malware", correct: false },
{ text: "To encrypt data", correct: false }
]
},
{
id: 199,
text: "What is the purpose of a backup in data management?",
answers: [
{ text: "To create copies of data in case of loss", correct: true },
{ text: "To encrypt data", correct: false },
{ text: "To improve internet speed", correct: false },
{ text: "To organize files", correct: false },
{ text: "To output hard copies of digital documents", correct: false }
]
},
{
id: 200,
text: "What is the purpose of a printer in computing?",
answers: [
{ text: "To output hard copies of digital documents", correct: true },
{ text: "To store data", correct: false },
{ text: "To process data", correct: false },
{ text: "To display images", correct: false },
{ text: "To organize files", correct: false }
]
},
{
id: 201,
text: "What does a computer virus do?",
answers: [
{ text: "Damages or disrupts the normal function of a computer", correct: true },
{ text: "Enhances computer performance", correct: false },
{ text: "Improves internet speed", correct: false },
{ text: "Protects the system from threats", correct: false },
{ text: "To organize files", correct: false }
]
},
{
id: 202,
text: "What branch of science does Computer Science study?",
answers: [
{ text: "Computers and information processing", correct: true },
{ text: "Mathematics", correct: false },
{ text: "Biology", correct: false },
{ text: "Physics", correct: false },
{ text: "Memory, keyboard, mouse", correct: false }
]
},
{
id: 203,
text: "Which of these are main computer devices?",
answers: [
{ text: "Microprocessor, Ram, monitor", correct: true },
{ text: "Printing device, mouse, scanner", correct: false },
{ text: "Operating system, programs", correct: false },
{ text: "Memory, keyboard, mouse", correct: false },
{ text: "Printing device, flash drive, speakers", correct: false }
]
},
{
id: 204,
text: "What is an algorithm?",
answers: [
{ text: "A sequence of actions to be performed to achieve a specific goal", correct: true },
{ text: "Data storage device", correct: false },
{ text: "The principle of operation of the computer", correct: false },
{ text: "Program execution sequence", correct: false },
{ text: "Information processing method", correct: false }
]
},
{
id: 205,
text: "What is the operating system?",
answers: [
{ text: "Computer hardware device management program", correct: true },
{ text: "Program creator", correct: false },
{ text: "Information device", correct: false },
{ text: "Computer games system", correct: false },
{ text: "Computer program", correct: false }
]
},
{
id: 206,
text: "What is CPU?",
answers: [
{ text: "Processor", correct: true },
{ text: "Ram", correct: false },
{ text: "Hard drive", correct: false },
{ text: "Printing device", correct: false },
{ text: "Device interface", correct: false }
]
},
{
id: 207,
text: "What Is virtual memory?",
answers: [
{ text: "Secondary memory used by the operating system", correct: true },
{ text: "The physical memory of the computer", correct: false },
{ text: "Information Storage Device", correct: false },
{ text: "Video content on the screen", correct: false },
{ text: "Memory used over the Internet", correct: false }
]
},
{
id: 208,
text: "What is a virus?",
answers: [
{ text: "A program that violates the security of a computer system", correct: true },
{ text: "Information Storage Device", correct: false },
{ text: "Type of computer memory", correct: false },
{ text: "Programming language", correct: false },
{ text: "A program that speeds up the operation of the computer", correct: false }
]
},
{
id: 109,
text: "What is e-mail?",
answers: [
{ text: "Service for sending texts and files in electronic form", correct: true },
{ text: "Data processing system over the Internet", correct: false },
{ text: "Internet Browser", correct: false },
{ text: "Electronic Document Storage System", correct: false },
{ text: "Document scanning device", correct: false }
]
},
{
id: 210,
text: "What is the Internet?",
answers: [
{ text: "Communication system of computers around the world", correct: true },
{ text: "System that works offline", correct: false },
{ text: "Information processing device", correct: false },
{ text: "Computer program", correct: false },
{ text: "System for sending text only", correct: false }
]
},
{
id: 211,
text: "What is HTML?",
answers: [
{ text: "Markup language used to create web pages", correct: true },
{ text: "Text processing program", correct: false },
{ text: "Operating system", correct: false },
{ text: "Programming language", correct: false },
{ text: "Image processing program", correct: false }
]
},
{
id: 212,
text: "How to convert numbers to binary?",
answers: [
{ text: "By dividing the decimal number by 2", correct: true },
{ text: "By dividing the binary number by 10", correct: false },
{ text: "By dividing the decimal number by 16", correct: false },
{ text: "By adding numbers", correct: false },
{ text: "By multiplying the numbers", correct: false }
]
},
{
id: 213,
text: "What types of Algorithms Are there?",
answers: [
{ text: "Linear, branched and repetitive", correct: true },
{ text: "Linear and conditional", correct: false },
{ text: "Simple and complex", correct: false },
{ text: "Open and closed", correct: false },
{ text: "Linear only", correct: false }
]
},
{
id: 214,
text: "When is the listing structure used?",
answers: [
{ text: "In Data Processing in algorithms", correct: true },
{ text: "In data storage", correct: false },
{ text: "In syntax management in programming languages", correct: false },
{ text: "In the protection of information", correct: false },
{ text: "In speeding up the operation of the computer", correct: false }
]
},
{
id: 215,
text: "What programming languages are there?",
answers: [
{ text: "All answers are correct", correct: true },
{ text: "Python, C++, Java", correct: false },
{ text: "HTML, CSS, JavaScript", correct: false },
{ text: "SQL, PHP, Ruby", correct: false },
{ text: "Python, Pascal, Java", correct: false }
]
},
{
id: 216,
text: "The main functions of the operating system?",
answers: [
{ text: "User interface management, resource management, task execution", correct: true },
{ text: "Data Protection, information storage", correct: false },
{ text: "Display only texts", correct: false },
{ text: "Game management", correct: false },
{ text: "Creating programs", correct: false }
]
},
{
id: 217,
text: "What is the electronic spreadsheet used for?",
answers: [
{ text: "To work with numerical data", correct: true },
{ text: "To work with texts", correct: false },
{ text: "To clean the computer", correct: false },
{ text: "To surf the Internet", correct: false },
{ text: "For programming", correct: false }
]
},
{
id: 218,
text: "In what sense is the concept of 'algorithm' used in Mathematics?",
answers: [
{ text: "Sequence of actions to solve the problem", correct: true },
{ text: "Structural drawing", correct: false },
{ text: "Rule for multiplying numbers", correct: false },
{ text: "Programming language", correct: false },
{ text: "System workflow", correct: false }
]
},
{
id: 219,
text: "What is a browser?",
answers: [
{ text: "Program for browsing the Internet", correct: true },
{ text: "Computer memory management program", correct: false },
{ text: "The program that controls the operation of the hard drive", correct: false },
{ text: "Document editing program", correct: false },
{ text: "Program for creating a network", correct: false }
]
},
{
id: 220,
text: "What is an operating system?",
answers: [
{ text: "Computer hardware and software component management system", correct: true },
{ text: "Program creation tool", correct: false },
{ text: "A device that provides an interface to the user", correct: false },
{ text: "Means of communication of a computer with the internet", correct: false },
{ text: "System used only for programs", correct: false }
]
},
{
id: 221,
text: "What are the ways to write an algorithm?",
answers: [
{ text: "All approaches are used", correct: true },
{ text: "In the form of a diagram", correct: false },
{ text: "Only in text form", correct: false },
{ text: "Only in the form of drawings", correct: false },
{ text: "Only by solving the problem", correct: false }
]
},
{
id: 222,
text: "The main function of the keyboard?",
answers: [
{ text: "Entering data into the computer", correct: true },
{ text: "Creating programs", correct: false },
{ text: "Control the operation of printing devices", correct: false },
{ text: "Email verification", correct: false },
{ text: "Internet connection", correct: false }
]
},
{
id: 223,
text: "Service of the device 'modem'?",
answers: [
{ text: "Distribution and reception of information for internet access", correct: true },
{ text: "Hard disk management", correct: false },
{ text: "Extract images", correct: false },
{ text: "Data storage", correct: false },
{ text: "Installation of programs", correct: false }
]
},
{
id: 224,
text: "How to use the Internet anonymously?",
answers: [
{ text: "Using the VPN", correct: true },
{ text: "Register only with your own name", correct: false },
{ text: "Use only certain sites", correct: false },
{ text: "Encrypt files", correct: false },
{ text: "Remember Password", correct: false }
]
},
{
id: 225,
text: "Which programs are most often used to process video content from a digital camera?",
answers: [
{ text: "Adobe Premiere, Final Cut Pro", correct: true },
{ text: "Adobe Photoshop, CorelDRAW", correct: false },
{ text: "Windows Media Player, VLC Media Player", correct: false },
{ text: "Microsoft Word, Excel", correct: false },
{ text: "VLC Player, QuickTime", correct: false }
]
},
{
id: 226,
text: "Which are the main computer devices?",
answers: [
{ text: "Processor, RAM, hard drive", correct: true },
{ text: "Monitor, printing device, drawing tablet", correct: false },
{ text: "Keyboard, mouse, printer", correct: false },
{ text: "Computer virus, programs", correct: false },
{ text: "Scanner, microphone, speaker", correct: false }
]
},
{
id: 227,
text: "What is HTML used for?",
answers: [
{ text: "To create web pages", correct: true },
{ text: "To protect information on the network", correct: false },
{ text: "For editing texts and images", correct: false },
{ text: "To speed up the operation of the computer", correct: false },
{ text: "For image processing", correct: false }
]
},
{
id: 228,
text: "What is an operating system?",
answers: [
{ text: "A program that manages the hardware part of the computer", correct: true },
{ text: "A program that includes all computer programs", correct: false },
{ text: "Program for opening the Internet", correct: false },
{ text: "Text editor", correct: false },
{ text: "Computer virus", correct: false }
]
},
{
id: 229,
text: "What is a database management System (DBMS)?",
answers: [
{ text: "System for storing and managing data", correct: true },
{ text: "Text processing program", correct: false },
{ text: "Program for creating websites", correct: false },
{ text: "Computer protection system", correct: false },
{ text: "Graphic image editing program", correct: false }
]
},
{
id: 230,
text: "What is the definition of the algorithm?",
answers: [
{ text: "Step-By-Step Solution sequence", correct: true },
{ text: "Data storage method", correct: false },
{ text: "Type of program code", correct: false },
{ text: "Working Principle of the device", correct: false },
{ text: "The structure of the Web page", correct: false }
]
},
{
id: 231,
text: "What is a computer network?",
answers: [
{ text: "Communication system between computers", correct: true },
{ text: "Program management system on your computer", correct: false },
{ text: "Sending a message by email", correct: false },
{ text: "Tools for editing images", correct: false },
{ text: "Data storage tools of computers", correct: false }
]
},
{
id: 232,
text: "What is Microsoft Excel used for?",
answers: [
{ text: "For data processing and analysis", correct: true },
{ text: "To create web pages", correct: false },
{ text: "For video editing", correct: false },
{ text: "To send an email", correct: false },
{ text: "To make notes", correct: false }
]
},
{
id: 233,
text: "What are the tools used to ensure online security?",
answers: [
{ text: "Antivirus programs, firewalls", correct: true },
{ text: "High speed internet", correct: false },
{ text: "Package programs", correct: false },
{ text: "Updates of operating systems", correct: false },
{ text: "Email address", correct: false }
]
},
{
id: 234,
text: "What is an IP address?",
answers: [
{ text: "The location of the computer on the internet", correct: true },
{ text: "Name of the program on the network", correct: false },
{ text: "The code that controls the operation of the computer", correct: false },
{ text: "Login of the user who is on the Internet", correct: false },
{ text: "Website name", correct: false }
]
},
{
id: 235,
text: "What is the function of a hard drive (HDD)?",
answers: [
{ text: "Permanent data storage", correct: true },
{ text: "Temporary data storage", correct: false },
{ text: "Speed up the operation of the computer", correct: false },
{ text: "Execution of programs", correct: false },
{ text: "Save videos", correct: false }
]
},
{
id: 236,
text: "For what purpose is Excel used?",
answers: [
{ text: "Data processing", correct: true },
{ text: "Create graphics", correct: false },
{ text: "Video processing", correct: false },
{ text: "Sound processing", correct: false },
{ text: "Write code", correct: false }
]
},
{
id: 237,
text: "In what form is the address of a cell written in Excel?",
answers: [
{ text: "A5", correct: true },
{ text: "65", correct: false },
{ text: "5B", correct: false },
{ text: "5A", correct: false },
{ text: "5-5", correct: false }
]
},
{
id: 238,
text: "What data types are used in Excel?",
answers: [
{ text: "Numbers", correct: true },
{ text: "Total", correct: false },
{ text: "Texts", correct: false },
{ text: "Date and time", correct: false },
{ text: "Logical values", correct: false }
]
},
{
id: 239,
text: "What is the number system?",
answers: [
{ text: "Method of writing numbers with a certain set of characters", correct: true },
{ text: "All the answers written above are correct", correct: false },
{ text: "A system that displays only numerical values", correct: false },
{ text: "Mixed character system", correct: false },
{ text: "A system that works through a finite set of numbers", correct: false }
]
},
{
id: 240,
text: "How many characters are used in the decimal system?",
answers: [
{ text: "10", correct: true },
{ text: "5", correct: false },
{ text: "8", correct: false },
{ text: "12", correct: false },
{ text: "2", correct: false }
]
},
{
id: 241,
text: "How many characters are used in the binary number system?",
answers: [
{ text: "2", correct: true },
{ text: "10", correct: false },
{ text: "8", correct: false },
{ text: "16", correct: false },
{ text: "4", correct: false }
]
},
{
id: 242,
text: "What characters are used in the octal number system?",
answers: [
{ text: "0-7", correct: true },
{ text: "0-9", correct: false },
{ text: "0-5", correct: false },
{ text: "0-15", correct: false },
{ text: "0-8", correct: false }
]
},
{
id: 243,
text: "What characters are used in the hexadecimal number system?",
answers: [
{ text: "0-9 and a-F", correct: true },
{ text: "0-9", correct: false },
{ text: "0-7", correct: false },
{ text: "0-15", correct: false },
{ text: "1-16", correct: false }
]
},
{
id: 244,
text: "Find the binary number that corresponds to the Decimal System: 5",
answers: [
{ text: "101", correct: true },
{ text: "100", correct: false },
{ text: "110", correct: false },
{ text: "1001", correct: false },
{ text: "111", correct: false }
]
},
{
id: 245,
text: "Find the binary number corresponding to the Octal System: 7",
answers: [
{ text: "111", correct: true },
{ text: "101", correct: false },
{ text: "100", correct: false },
{ text: "1110", correct: false },
{ text: "110", correct: false }
]
},
{
id: 246,
text: "Find the binary number corresponding to the hexadecimal system: A",
answers: [
{ text: "1010", correct: true },
{ text: "1101", correct: false },
{ text: "1001", correct: false },
{ text: "1111", correct: false },
{ text: "1011", correct: false }
]
},
{
id: 247,
text: "What is the value of 1011 in the binary number system in the decimal system?",
answers: [
{ text: "11", correct: true },
{ text: "13", correct: false },
{ text: "9", correct: false },
{ text: "5", correct: false },
{ text: "6", correct: false }
]
},
{
id: 248,
text: "Convert 15 in decimal to binary:",
answers: [
{ text: "1111", correct: true },
{ text: "1001", correct: false },
{ text: "1010", correct: false },
{ text: "1101", correct: false },
{ text: "1000", correct: false }
]
},
{
id: 249,
text: "What is the value of the number 17 in the Octal system in the binary system?",
answers: [
{ text: "1111", correct: true },
{ text: "11001", correct: false },
{ text: "10011", correct: false },
{ text: "100001", correct: false },
{ text: "10101", correct: false }
]
},
{
id: 250,
text: "What is the value of the number B in the hexadecimal system in the binary system?",
answers: [
{ text: "1011", correct: true },
{ text: "1101", correct: false },
{ text: "1001", correct: false },
{ text: "1110", correct: false },
{ text: "1010", correct: false }
]
},
{
id: 251,
text: "What number is obtained when converting 11001 in binary to decimal?",
answers: [
{ text: "25", correct: true },
{ text: "19", correct: false },
{ text: "21", correct: false },
{ text: "15", correct: false },
{ text: "18", correct: false }
]
},
{
id: 252,
text: "What number comes up when you convert 1111 in binary to decimal?",
answers: [
{ text: "15", correct: true },
{ text: "9", correct: false },
{ text: "12", correct: false },
{ text: "8", correct: false },
{ text: "10", correct: false }
]
},
{
id: 253,
text: "What number is obtained when converting the number 23 in the Octal system to the binary system?",
answers: [
{ text: "10011", correct: true },
{ text: "11001", correct: false },
{ text: "11101", correct: false },
{ text: "10001", correct: false },
{ text: "100001", correct: false }
]
},
{
id: 254,
text: "What number comes up when you convert 100110 in binary to octal?",
answers: [
{ text: "46", correct: true },
{ text: "56", correct: false },
{ text: "45", correct: false },
{ text: "31", correct: false },
{ text: "55", correct: false }
]
}
];