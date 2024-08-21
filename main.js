
let slave = [
    { id: 1, Number: 34 },
    { id: 2, Number: 67 },
    { id: 3, Number: 49 },
    { id: 4, Number: 20 },
    { id: 5, Number: 23 },
    { id: 6, Number: 56 },
    { id: 7, Number: 90 },
    { id: 8, Number: 1000 },
    { id: 9, Number: 75 },
    { id: 10, Number: 33 },
];


let body = document.querySelector('body');

slave.forEach(worker => {

    let ParentBox = document.createElement('div');
    let box = document.createElement('div');
    let Number = document.createElement('p');

 
    Number.textContent = worker.Number;

 
    box.append(Number);
    ParentBox.append(box);
    body.append(ParentBox);

    box.style.width =  '1460px';
    box.style.height = '50px';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.color = 'white';
    box.style.fontSize = '30px';
    box.style.fontWeight = 'bold';
    box.style.textAlign = 'center';
    box.style.margin = '10px';
    box.style.padding = '10px';

   
    if (worker.Number > 50) {
        box.style.backgroundColor = 'green';
    } else {
        box.style.backgroundColor = 'red';
    }
});

