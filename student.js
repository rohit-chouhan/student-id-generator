//Getting all Value
function getting(field, value) {
    document.querySelector("#set" + field).textContent = value;
}

// File Show
var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('student_image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

//Popup
var contentPopup = document.getElementById('contentPopup');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    contentPopup.style.display = "block";
}
span.onclick = function () {
    contentPopup.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == contentPopup) {
        contentPopup.style.display = "none";
    }
}

//Adding new Filed
function addfield() {
    console.log("Add Field Called");
    var label = document.querySelector("#get_label").value;
    var get_type = document.querySelector("#get_type").value;

    if (get_type == 'date') {
        fun_type = 'onchange';
    } else {
        fun_type = 'onkeyup';
    }
    document.getElementById("data").innerHTML += `
    <div id="field">
    <label>`+ label + `</label>
    <input type="`+ get_type + `" ` + fun_type + `="getting('` + label.replace(" ", "_") + `',this.value)"/>
  </div>
    `;

    document.getElementById("_data").innerHTML += `
    <div id="field_data">
    <p>
    `+ label + `&nbsp;&nbsp;&nbsp;<span id="set` + label.replace(" ", "_") + `"></span>
    </p>
  </div>
    `;
}

//print id
function print_id() {
    var divContents = document.getElementById("student_id").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<head>');
    a.document.write('<link rel="stylesheet" type="text/css" href="style.css" />');
    a.document.write('</head>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}