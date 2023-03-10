const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
// const todoInput = document.querySelector("#todo-form input"); 둘이 동일
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos () {
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
}

function deleteTodo(event) {
    // console.log("testing");
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // console.log(li.id); // id 유니크값
    li.remove();
    // remove 된거 toDos 에서 제외됨
    //console.log(typeof li.id) // string
    /* toDos = toDos.filter(toDo => toDo.li !== li.id); */
    /* toDo.li : number type / li.id : string type */
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    console.log(toDos);
}
//text ver
function paintToDo(newTodo){
    // console.log("I will paint ", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}
//obj ver
function paintToDo1(newTodo){
    // console.log("I will paint ", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    // console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now() // id값으로 현재시간(유니크값)
    }
    // console.log(newTodo, todoInput.value);
    toDos.push(newTodoObj);
    // paintToDo(newTodo); //text
    paintToDo1(newTodoObj); //obj
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDOSubmit);


function sayHello(item) {
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;  // remember not empty
    console.log(parsedToDos);
    //parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => {console.log("this is the turn of ", item) });
    parsedToDos.forEach(paintToDo);
}

//* 함수 역할
//  true를 리턴해야 기존 배열에 포함
// false일 경우 그 item은 새 array에 포함되지 않음
function sexyFilter(item){
    return item !== 3
}
// [1, 2, 3, 4].filter(sexyFilter);
// sexyFilter(1);
// sexyFilter(2);
// sexyFilter(3) x ;
// sexyFilter(4);
