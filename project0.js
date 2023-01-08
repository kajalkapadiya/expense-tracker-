document.querySelector("#btn").addEventListener("click", add);

function add(e) {
    e.preventDefault();

    const amount = document.querySelector('#amount').value;
    const description = document.querySelector('#description').value;
    const category = document.querySelector('#category').value;

    const obj = {
        amount,
        description,
        category
    }

    //add in local storage
    const myobj = JSON.stringify(obj);
    localStorage.setItem(amount, myobj);

    //create button and add value in the button
    const button = document.createElement('button');
    const button1 = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button1.className = 'btn btn-primary btn-sm float-right delete';
    button.appendChild(document.createTextNode('delete expense'));
    button1.appendChild(document.createTextNode('edit expense'));

    //add this data in the DOM
    const x = document.createElement('h4');
    x.className = 'h4';
    const nameText = document.createTextNode(amount + "-" + description + "-" + category + "-");

    x.appendChild(nameText);
    x.appendChild(button);
    x.appendChild(button1);

    const onClick = document.querySelector('#btn');
    onClick.after(x);

    //do this when click on delete button
    button.onclick = function (e) {
        e.preventDefault();

        localStorage.removeItem(amount);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }

    //do this when click on edit button
    button1.onclick = function (el) {
        el.preventDefault();

        document.querySelector('#amount').value = obj.amount;
        document.querySelector('#description').value = obj.description;
        document.querySelector('#category').value = obj.category;

        localStorage.removeItem(amount);
        x.removeChild(nameText);
        x.removeChild(button);
        x.removeChild(button1);
    }

}