
let to_do_list = [];
let datearr = [];
let inputvalue;
let dateValue;
let newhtml = '';
to_do_list = JSON.parse(localStorage.getItem("name"));
datearr = JSON.parse(localStorage.getItem("date"));


function getvalue() {
  if(to_do_list === null && datearr === null){
     to_do_list = [];
     datearr =[];
  }
  let textbox = document.querySelector('#text-box');
  inputvalue = textbox.value;
  let dateElement = document.querySelector(".dateicon");
  dateValue = dateElement.value;

  if (textbox.value !== "" && dateElement.value !== "") {
    to_do_list.push(inputvalue);
    datearr.push(dateValue);
    textbox.value = "";
    dateElement.value = "";
    console.log(to_do_list + datearr)
    displaytodolist();
  }
}
function displaytodolist() {
  newhtml = "";
  for (let i = 0; i < to_do_list.length; i++) {
    newhtml +=
      ` <div class="lists">
        <span>${to_do_list[i]}</span>
        <p>${datearr[i]}</p>
        <button class="btn" onclick="to_do_list.splice(${i}, 1);datearr.splice(${i},1);displaytodolist();">delete</button>
        </div>
        `
    document.querySelector(".todo-container").innerHTML = newhtml;
    localStorage.setItem("name", JSON.stringify(to_do_list))
    localStorage.setItem("date", JSON.stringify(datearr))
  }
}

