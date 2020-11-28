Show();

function hasValue(key) {
  for (x = 0; x < localStorage.length; x++) {
    if (localStorage.key(x) === key) {
      return true;
    }
  }
  return false;
}
var i = 0;

document.getElementById('submit').addEventListener('click', function (e) {
  // alert('Date added successfully');
  let title = [document.getElementById('title').value, new Date().toLocaleString()];
  let text = document.getElementById('text').value;

  if ((title && text) != '') {
    if (!hasValue(JSON.stringify(title))) {
      localStorage.setItem(JSON.stringify(title), text);
    } else {
      localStorage.setItem(JSON.stringify(title.push(i)), text);
      i++;
    }

  } else {
    alert('you can\' save without fillign correct data');
  }
  document.getElementById('title').value = '';
  document.getElementById('text').value = '';
  Show();
});

function cls() {
  if (confirm('Are You sure want to delete data?')) {
    localStorage.clear();
    console.log('local storage cleared');
  } else {
    console.log('log not cleared');
  }
  Show();
}

function Show() {
  let html = '';
  let i;
  for (x = 0; x < localStorage.length; x++) {
    html += `
   <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="editTitle">
                        ${JSON.parse(localStorage.key(x))[0]}</h5>
                        <small>${JSON.parse(localStorage.key(x))[1]}</small>
                        <p class="card-text" id="editText"> ${localStorage.getItem(localStorage.key(x))}</p>
                        <button id="${x}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${x}"onclick="editNote(this.id)" class="btn btn-primary">Edit Note</button>
                    </div>
                </div>
   
   
   `
    // console.log(localStorage.getItem[x]);
  }
  document.getElementById('result').innerHTML = html;

  if (localStorage.length == 0) {
    document.getElementById('result').innerHTML = "<h3><u>Don't have any notes add usign above form</u></h3>";
  }

}

function deleteNote(id) {
  localStorage.removeItem(localStorage.key(id));
  Show();
}

document.getElementById('search').addEventListener('click',
  function (e) {
    let string = document.getElementById('wsearch').value;
    document.getElementById('result').innerHTML = "<div class='col-md-12'><h1>Results..</h1></div>";
    for (let i = 0; i < localStorage.length; i++) {
      if (ifIncludes(localStorage.key(i), string) || ifIncludes(localStorage.getItem(localStorage.key(i)), string)) {

        document.getElementById('result').innerHTML += printS(i);

      }
    }
  });


function printS(i) {
  return `
  <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">
      ${JSON.parse(localStorage.key(i))[0]}</h5>
      <small>${JSON.parse(localStorage.key(i))[1]}</small>
      <p class="card-text"> ${localStorage.getItem(localStorage.key(i))}</p>
      <button id="${i}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
  </div>
</div>
   
   `

}

//compare strings if it have certain words 
function ifIncludes(string1, string2) {
  string1 = String(string1);
  string2 = String(string2);

  string1 = string1.toLowerCase().split(' ');
  if (string1.includes(string2.toLowerCase())) {
    return true;
  } else return false;
}

//features ...editing notes
// function editNote(index){
// let title = document.getElementById('editTitle');
// let text = document.getElementById('editText');
// let titleValue = title.innerText;
// let textValue = text.innerText;
// let btn =  document.getElementById(index);
// btn.innerText = "save"; 


// }

/* curruntly this program having some bug and lacking some advance features I'm not quitting yet however I will take a pause, 
important thing to do : 
1- search is not working perfectly 
improve feature such as connection with google drive to save notes onlie and so on 

*/