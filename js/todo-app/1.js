let choice = prompt("Enter your option: ");

let list = ['empty list'];

while (choice!=='q' && choice!== 'quit'){

    if (choice === 'list'){
        for (todos of list){
            console.log("****************************");
            console.log(` ${list.indexOf(todos)} : ${todos}`);
            console.log("****************************");
        }     
    }
    else if(choice === 'new'){
        newTodo = prompt("Enter your new todo task: ");
        list.push(newTodo);
        console.log(`||>> ${newTodo} added to your list <<||`)
    } else if(choice==='del'){
        delIndex = parseInt(prompt("enter the index of the task to be deleted"));
        if (delIndex < list.length){
            deletedStuff = list.splice(delIndex, 1);
            console.log(`==> the task "${deletedStuff}" is deleted <==`)
        } else{
            console.log("Enter a valid index")
        }
        
    }else {
        alert("Please enter a valid option and try again");
    }

    choice =  prompt("Enter your option: "); //in doubt,  why I wrote this line


}
console.log('Bye, you exited out')
