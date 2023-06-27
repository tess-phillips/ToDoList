import { createElement } from "./createElements.js"

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        const tasksBlock = document.querySelector('#tasks');
        const taskValue = document.querySelector('#newtask input').value;
        
        const div = createElement("div", { className: "task" });
        const checkbox = createElement("input", { type: "checkbox", id: "box1", name: "box1" });
        const label = createElement("label", { id: "taskname", for: "box1", innerHTML: taskValue });
        const deleteBtn = createElement("button", { className: "delete", innerHTML: "delete" });
        
        div.append(checkbox, label, deleteBtn)
        tasksBlock.append(div);
        

        // document.querySelector('#tasks').innerHTML += `
        //     <div class="task">
        //         <label ype="checkbox" id="taskname" name="box1">
        //             ${document.querySelector('#newtask input').value} //for box1
        //         </label>
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