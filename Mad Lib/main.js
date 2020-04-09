// Event listener

document.getElementById('Btn').addEventListener('click', Outputfunction)

// function
function Outputfunction() {

    // input
    let PluralNoun = document.getElementById('Plural-noun').value;
    let Adjective = document.getElementById('Adjective').value;
    let Verbing = document.getElementById('Verbing').value;
    let Noun = document.getElementById('Noun').value;
    let PresentVerb = document.getElementById('Presenttense').value;

    // message

    let message = 'There are too many ' + Verbing + ' ' + PluralNoun + ' on this ' + Adjective + ' airplane!", I sceamed. Somebody has to ' + PresentVerb + ' on the ' + Noun + ' to solve this problem!"'



    // output
    document.getElementById('output').innerHTML = message;
}