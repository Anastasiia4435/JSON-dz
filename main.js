let obj = {
    name: prompt("Enter your name:"),
    age: prompt("Enter your age:"),
    country: prompt("Enter your country:")
}

let stringObj = JSON.stringify(obj);

localStorage.setItem('person', stringObj);