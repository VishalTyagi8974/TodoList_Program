const todoList = [];

while (true) {
    let inp = prompt("What would you like to do?");
    if (!inp) {
        console.log("you have to give a command");
        continue;
    }

    inp = inp.toLowerCase();
    if (inp === "new") {
        let todo = prompt("Enter a todo: or press 'b' to back");
        if (todo !== "b") {
            todoList.push(todo);
            console.log(`${todo} added to list`);
        }
    }

    else if (inp === "delete") {
        let ind = parseInt(prompt("Enter the index of todo to delete:"));

        while (!todoList[ind]) {
            ind = prompt("Enter a valid index or press b to back");
            if (ind === "b") break;

            ind = parseInt(ind);
        }

        if (ind === "b") continue;
        console.log(`Todo deleted: ${todoList.splice(ind, 1)}`);
    }

    else if (inp === "list") {
        console.log("**********");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********");
    }

    else if (inp === "quit") break;
    else {
        console.log("invalid command, valid commands: delete,new,list,quit");
    }

}