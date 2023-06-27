import { createElement, appendElements } from "./createElements.js"

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        const tasksblock = document.querySelector('#tasks')
        const div1 = createElement("div", {className:"task"})
        const taskvalue1 = document.querySelector(`#newtask input`).value
        const box1 = createElement("input", {type:"checkbox", id: "box1", name: "box1"})
        const label1 = createElement("label", {id :"taskname",for: "box1", innerHTML: taskvalue1})
        const btn1 = createElement("button", {className:"delete", innerHTML:"delete"})
        appendElements(div1,[box1,label1,btn1])
        appendElements(tasksblock,[div1])

        //inspo for above:

        //this 
        // <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        // <label for="vehicle1"> I have a bike</label><br>

        // and this
        // document.querySelector('#tasks').innerHTML += `
        //     <div class="task">
        //         <span id="taskname">
        //             ${document.querySelector('#newtask input').value}
        //         </span>
        //         <button class="delete">
        //             <i class="far fa-trash-alt"></i>
        //         </button>
        //     </div>
        // `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}