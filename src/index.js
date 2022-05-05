document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const tasks = document.getElementById('tasks');
  const input = document.getElementById('new-task-description');
  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let commentInputValue = input.value;

    let newTask = document.createElement('li');
    let text = document.createTextNode(commentInputValue)
    newTask.appendChild(text);
    tasks.appendChild(newTask);
    form.reset();
})

})



