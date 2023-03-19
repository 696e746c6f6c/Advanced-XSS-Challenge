let params = new URLSearchParams(window.location.search);
let name = params.get('query');
let input = document.getElementById('query');
let form = document.querySelector('form');
let hiDiv = document.getElementById('hi');
hiDiv.innerHTML = input.value

if (name) {
    input.value = name;
}

function checkInput(query) {
    let regex = /^[\w\s.,!&'()\#$\-]{0,25}$/; // Hint: letters and Spaces are only allowed
    return regex.test(query);
}

function formInput(event) {
    event.preventDefault();
    let query = input.value;

    if (checkInput(query)) {
        let hi = document.createElement('a');
        hi.innerHTML = `Hello, ${query}!`;
        hiDiv.appendChild(hi);
    } else {
        let invalidation = document.createElement('p');
        invalidation.innerHTML = 'Nice try!';
        hiDiv.appendChild(invalidation);
    }
}

form.addEventListener('submit', formInput);
