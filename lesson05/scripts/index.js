const input =document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input.value !=''){

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        list.textContent = input.value

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

        deleteButton.addEventListener('click', function(){
        
            list.removeChild(li);
            input.focus();
        });

        input.focus();

        input.value = '';
    }

    else

    input.focus


    
});


 

// copy right year
document.querySelector('#year').textContent = new Date().getFullYear();

//last modified code
document.getElementById('lastModified').innerHTML =new Date(document.lastModified);