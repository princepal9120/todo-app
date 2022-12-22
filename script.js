const form = document.getElementById("form")
const input = document.getElementById("input")
const todos = document.getElementById("todos")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
     const  todoText = input.value;
     if(todoText){
        const todoE1 = document.createElement("li")
        todoE1.innerText = todoText;
        todoE1.addEventListener('click', ()=>{
            todoE1.classList.toggle("completed")
        })
        todoE1.addEventListener('contextmenu', (e)=>{
            e.preventDefault();
            todoE1.remove();
        })
        todos.appendChild(todoE1);
        input.value= ''

     }
})
function updateLS (){
    const todoE1 = document.querySelectorAll('li')
    const todo =[]
    todoE1.forEach((notesE1) =>{

        todo.push({
            text: todoE1.innerText,
            completed: todoE1.classList.contains("completed"),
        
        })
    
    })
    localStorage.setItem("notes", JSON.stringify(notesE1));
}