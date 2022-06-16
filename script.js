function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());

  // for multi-selects, we need special handling
  //formJSON.snacks = data.getAll('snacks');

  const results = document.querySelector('.results pre');
  results.innerText = JSON.stringify(formJSON, null, 2);

  const project_json = JSON.stringify(formJSON, null, 2);
  console.log(project_json);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://np9u4av9mc.execute-api.us-east-1.amazonaws.com/" , true);
  xhr.setRequestHeader('Content-Type', '*');
  xhr.send(JSON.stringify({
      'id': 'abcdef234',
      'price': 12345,
      'name': 'myitem'
  }));
}

var x = 1;

function addFields(){

    // Get the element where the inputs will be added to
    var container = document.getElementById("container");
    // Remove every children it had before
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<window.x;i++){

        container.appendChild(document.createElement("hr"));
        container.appendChild(document.createElement("br"));

        const para = document.createElement("p");
        const textNode = document.createTextNode("Major Milestone " + (i+2) + ": ");
        para.appendChild(textNode);

        // Append a node with a random text
        container.appendChild(para);
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = ("milestone" + (i + 2));
        input.placeholder = "Name ";
        container.appendChild(input);

        var input2 = document.createElement("input");
        input2.type = "date";
        input2.name = ("baseline_due_date" + (i + 2));
        const para2 = document.createElement("p");
        var textNode2 = document.createTextNode("Baseline Due Date: ");
        para2.appendChild(textNode2);
        container.appendChild(para2);
        container.appendChild(input2);

        var input3 = document.createElement("input");
        input3.type = "date";
        input3.name = ("revised_due_date" + (i + 2));
        const para3 = document.createElement("p");
        var textNode3 = document.createTextNode("Revised Due Date: ");
        para3.appendChild(textNode3);
        container.appendChild(para3);
        container.appendChild(input3);

        container.appendChild(document.createElement("br"));
        const para4 = document.createElement("p");
        var textNode4 = document.createTextNode("Status: ");
        para4.appendChild(textNode4);
        container.appendChild(para4);

        //Create array of options to be added
        var array = ["Future","In-Process","At Risk","Delayed","Completed"];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.name = ("status" + (i + 2));
        container.appendChild(selectList);

        //Create and append the options
        for (var a = 0; a < array.length; a++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[a]);
            option.text = array[a];
            selectList.appendChild(option);
        }

        var input5 = document.createElement("input");
        input5.type = "number";
        input5.min = 1;
        input5.max = 100;
        input5.name = ("percent_complete" + (i + 2));
        input5.placeholder = "% Complete ";
        container.appendChild(input5);

        var textarea = document.createElement("textarea");
        textarea.type = "text";
        textarea.name = ("comments" + (i + 2));
        textarea.rows = "6";
        textarea.cols = "55";
        textarea.placeholder = "Comments ";
        container.appendChild(textarea);
    }

    window.x++

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    container.appendChild(btn).onclick = function() {removeFields();}

    function removeFields( ){
            window.x--

            var times = 15;

            for(var i = 0; i < times; i++){
              container.removeChild(container.lastChild);
            }

            if (window.x >= 2){
              container.appendChild(btn).onclick = function() {removeFields();}
            }
    }
}

var y = 1;

function addFields2(){

    // Get the element where the inputs will be added to
    var container2 = document.getElementById("container2");
    // Remove every children it had before
    while (container2.hasChildNodes()) {
        container2.removeChild(container2.lastChild);
    }
    for (i=0;i<window.y;i++){

        container2.appendChild(document.createElement("hr"));
        container2.appendChild(document.createElement("br"));

        const para = document.createElement("p");
        const textNode = document.createTextNode("Issue/Risk " + (i+2) + ": ");
        para.appendChild(textNode);

        // Append a node with a random text
        container2.appendChild(para);
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.name = ("issue-risk" + (i + 2));
        input.placeholder = "Name ";
        container2.appendChild(input);

        var input2 = document.createElement("input");
        input2.type = "date";
        input2.name = ("due_date" + (i + 2));
        const para2 = document.createElement("p");
        var textNode2 = document.createTextNode("Due Date: ");
        para2.appendChild(textNode2);
        container2.appendChild(para2);
        container2.appendChild(input2);

        var input3 = document.createElement("input");
        input3.type = "date";
        input3.name = ("revised_due_date" + (i + 2));
        const para3 = document.createElement("p");
        var textNode3 = document.createTextNode("Revised Due Date: ");
        para3.appendChild(textNode3);
        container2.appendChild(para3);
        container2.appendChild(input3);

        container2.appendChild(document.createElement("br"));
        const para4 = document.createElement("p");
        var textNode4 = document.createTextNode("Type: ");
        para4.appendChild(textNode4);
        container2.appendChild(para4);

        //Create array of options to be added
        var array = ["Issue","Risk","Decision"];

        //Create and append select list
        var selectList = document.createElement("select");
        selectList.name = ("type" + (i + 2));
        container2.appendChild(selectList);

        //Create and append the options
        for (var a = 0; a < array.length; a++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[a]);
            option.text = array[a];
            selectList.appendChild(option);
        }

        var textarea = document.createElement("textarea");
        textarea.type = "text";
        textarea.name = ("mitigation" + (i + 2));
        textarea.rows = "6";
        textarea.cols = "55";
        textarea.placeholder = "Mitigation ";
        container2.appendChild(textarea);
    }

    window.y++

    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    container2.appendChild(btn).onclick = function() {removeFields2();}

    function removeFields2( ){
            window.y--

            var times = 13;

            for(var i = 0; i < times; i++){
              container2.removeChild(container2.lastChild);
            }

            if (window.y >= 2){
              container2.appendChild(btn).onclick = function() {removeFields2();}
            }
    }
}


const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
