window.onload = function() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  var button = document.createElement("input");
  button.setAttribute('type', 'button', 'value');
  button.setAttribute('value', 'Generate a table');
  button.setAttribute('onclick', 'generate_table()');
body.appendChild(button);

  generate_table();
}


function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  image = ["image1.jpg", "image2.jpg", "image3.jpg"]

  // creating all cells
  for (var i = 0; i < 1; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      //var cellText = document.createTextNode("cell in row "+i+", column "+j);
      var cellText = document.createElement("img");
      cellText.setAttribute('src', 'images/' + image[j]);
      cellText.setAttribute('class', 'images');
      cellText.setAttribute('alt', image[j]);
      //cellText.setAttribute('src', 'https://pbs.twimg.com/profile_images/1253065166058655744/DfI9TE-i_400x400.jpg');
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
