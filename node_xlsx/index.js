var XLSX = require('xlsx');
var Workbook = require('workbook');
 
var workbook = new Workbook()
    .addRowsToSheet("Main", [
      [
        {
           v: "This is a submerged cell",
        },
        {
             v: "Pirate ship",
        },
        {
             v: "Sunken treasure",
        }
       ],
      [
        {"v": "Blank"},
        {"v": "Red", "s": {fill: { fgColor: { rgb: "FF0000"}}}},
        {"v": "Green", "s": {fill: { fgColor: { rgb: "FF0000"}}}},
        {"v": "Blue", "s": {fill: { fgColor: { rgb: "FF00FF"}}}}
      ],
      [
        {"v": "Default"},
        {"v": "Arial", "s": {font: {name: "Arial", sz: 24}}},
        {"v": "Times New Roman", "s": {font: {name: "Times New Roman", sz: 16}}},
        {"v": "Courier New", "s": {font: {name: "Courier New", sz: 14}}}
      ],
      [
        0.618033989,
        {"v": 0.618033989},
        {"v": 0.618033989, "t": "n"},
        {"v": 0.618033989, "t": "n", "s": { "numFmt": "0.00%"}},
        {"v": 0.618033989, "t": "n", "s": { "numFmt": "0.00%"}, fill: { fgColor: { rgb: "FFFFCC00"}}},
        [(new Date()).toLocaleString()]
      ]
    ])
    .addRowsToSheet("sheet2 dsf", [
      [
        {
           v: "1123",
        },
        {
             v: "sdfdsf",
        },
        {
             v: "asdfadsfsdafsdaf",
        }
       ],
      [
        {"v": "Blank"},
        {"s": {fill: { fgColor: { rgb: "FF0000"}}},"v": "Red", },
        {"v": "Green", "s": {fill: { fgColor: { rgb: "FF0000"}}}},
        {"v": "Blue", "s": {fill: { fgColor: { rgb: "FF00FF"}}}}
      ],
      [
        {"v": "Default"},
        {"v": "Arial", "s": {font: {name: "Arial", sz: 24}}},
        {"v": "Times New Roman", "s": {font: {name: "Times New Roman", sz: 16}}},
        {"v": "Courier New", "s": {font: {name: "Courier New", sz: 14}}}
      ],
      [
        0.618033989,
        {"v": 0.618033989},
        {"v": 0.618033989, "t": "n"},
        {"v": 0.618033989, "t": "n", "s": { "numFmt": "0.00%"}},
        {"v": 0.618033989, "t": "n", "s": { "numFmt": "0.00%"}, fill: { fgColor: { rgb: "FFFFCC00"}}},
        [(new Date()).toLocaleString()]
      ]
    ])
    .finalize();
 
var OUTFILE = '/tmp/wb.xlsx';
XLSX.writeFile(workbook, OUTFILE);
console.log("Results written to " + OUTFILE)