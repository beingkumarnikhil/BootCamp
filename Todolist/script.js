const inp = document.getElementById('inp');
const addtodo = document.getElementById('addbtn');
const deltodo = document.getElementById('del');
const list = document.getElementById('list');
const text = document.querySelector('#text');



// addtodo.onclick=function(e){
//      const todotext = inp.value;
//      const li = document.createElement('li');
//      li.innerText = todotext;
//      li.onclick = function(e){
//         e.target.remove();
//      }
//      list.append(li);
//      inp.value="";
//  }
 
function addlist(){

    if(inp.value === ''){
        alert('Enter list name please!');
    }
    else{
    const ul = text.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML= inp.value;
    li.onclick = function(e){
    e.target.remove();
    }
    inp.value = "";
    ul.appendChild(li);
 }
}

addtodo.addEventListener('click',() => {
    addlist();
});

inp.addEventListener('keyup',(e) =>
{
    if(e.which === 13){
        addlist(); 
    }
}); 