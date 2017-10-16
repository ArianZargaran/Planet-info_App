var obj = { mercury:  ["Mercury", "4,879", "57,909,227", "88 days"],
            venus:    ["Venus", "12,104", "108,209,475", "225 days"],
            earth :   ["Earth", "12,742", "149,598,262", "365.24 days"],
            mars:     ["Mars", "6,779", "227,943,824", "1.9 years"],
            jupiter:  ["Jupiter", "139,822", "778,340,821", "11.9 years"],
            saturn:   ["Saturn", "116,464", "1,426,666,422", "29.5 years"],
            uranus:   ["Uranus", "50,724", "2,870,658,186", "88.5 years"],
            neptune:  ["Neptune", "49,244", "4,498,396,441", "164.8 years"]};

function displayInfo(){
  var formValue = document.getElementById("field").value.toLowerCase();

  if(!formValue) {
    var innerBox = "Ops!, please enter at least a value!";
  } else if (obj[formValue] === undefined) {
    var innerBox = "Sorry, we didn't discover that planet yet";
  } else {
    var innerBox = obj[formValue][0] + " has a diameter of " + obj[formValue][1] + "km. It's located at almost " + obj[formValue][2] + "km from the Sun. " + obj[formValue][0] + " takes " + obj[formValue][3] + " to turn around the Sun.";
  }

  var text = document.createTextNode(innerBox);
  var paragraph = document.createElement("p")

  var newDiv = document.createElement("div");

  newDiv.className = 'tp_info';
  newDiv.id = "myDiv";
  var section = document.getElementById("section")
  var removeElem = document.getElementById("myDiv");

  if(section.contains(removeElem)){
    console.log("Ok");
    removeElem.parentNode.removeChild(removeElem);
  }

  var includeDiv = section.appendChild(newDiv);

  paragraph.id = 'paragraph';
  newDiv.appendChild(paragraph);
  paragraph.appendChild(text);

  var form = document.getElementById("form").reset();
}
