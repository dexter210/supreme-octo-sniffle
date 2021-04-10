var array = [
 
var textEle = document.body.querySelector(".text");
var textEle1 = document.body.querySelector(".text2");
var textEle2 = document.body.querySelector(".text3");

function app() {
  notepage();
  addNotes();
  nav();
  sortArray();
}
function notepage() {
  displayNotes();
}

function displayNotes() {
  clear();
  for (var i = 0; i < array.importance; i++) {
    array.innerHTML = array.importance[i];
    array.imporatance.sort(function (a, b) {
      return b - a;
    });
  }
}
function sortArray() {
  var sortBy = [
    {
      prop: "importance",
      direction: -1
    }
  ];
  array.sort(function (a, b) {
    let i = 0,
      res = 0;
    while (i < sortBy.length && res === 0) {
      res =
        sortBy[i].direction *
        (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString()
          ? -1
          : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString()
          ? 1
          : 0);
      i++;
    }
    return res;
  });

  for (var i = 0; i < array.length; i++) {
    var ele1 = document.createElement("div");
    ele1.innerHTML = array[i].text;
    document.body.appendChild(ele1);
  }
}

function addNotes() {
  clear();
  clear2();
  var addEle = document.createElement("div");
  addEle.innerHTML = "";
  textEle.appendChild(addEle);
  list.push({
      name: addNotes.value
    });
}
function nav() {
  document.body
    .querySelector(".disNtes1")
    .addEventListener("click", function () {
      displayNotes();
      var title = document.createElement("div");
      title.innerHTML = "These are your current notes";
      textEle2.appendChild(title);
    });

  document.body
    .querySelector(".disNtes2")
    .addEventListener("click", function () {
      addNotes();
    });
}
function clear() {
  textEle.innerHTML = "";
  textEle2.innerHTML = "";
}
function clear2() {
  textEle1.innerHTML = "";
  textEle2.innerHTML = "";
}

app();

var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (validation(inputName === "coolStudent123") && inputPass.value === "Password") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success logging in..";
  } else {
    if (!validation(inputName === "coolStudent123") && inputPass.value === "coolPassword") {
      errorDiv.innerHTML = "Username is incorrect";
    } else if (validation(inputName === "coolStudent123") && inputPass.value !== "coolPassword") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "Neither Username or Password is right";
    }
  }
  return true
  console.log(list);
});
function validation(ele) {
  if (ele.value !== "") {
    return true;
  } else {
    return false;
  }
}