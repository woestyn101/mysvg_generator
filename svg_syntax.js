<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>

fs.writeFile('./examples/main.svg', 
'<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' +

' <circle cx="150" cy="100" r="80" fill="green" />' +
Myshape.endTag()

, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });