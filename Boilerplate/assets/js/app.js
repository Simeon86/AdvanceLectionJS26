// window.addEventListener('DOMContentLoaded', () => {

//     document.addEventListener('myCustomEvent', () => {
//         alert('Hello');
//     });

//     var btn = document.querySelector('button');
//     btn.addEventListener('click', () => {
//         var newEvent = new CustomEvent('myCustomEvent');
//         document.dispatchEvent(newEvent);
//     });

// });






////////////////////////////////////////////////////////////

// window.addEventListener('DOMContentLoaded', () => {

//     document.addEventListener('myCustomEvent', (ev) => {
//         var detail = ev.detail;
//         alert(`Hello, my name is ${detail.name}`);
//     });


//     var persons = document.querySelector('.person');
//     persons.addEventListener('click', function() {
//         var name = persons.getAttribute('data-name');
//         if(name) {
//             var newEvent = new CustomEvent('myCustomEvent', {
//                 detail: {
//                     name: name
//                 }
//             });
//             document.dispatchEvent(newEvent)
//         }
//     });

// });

///////////////////////////////////////////////////////////

window.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('myCustomEvent', (ev) => {
        var detail = ev.detail;
        alert(`Hello, my name is ${detail.name}`);
    });


    var persons = document.querySelectorAll('.person');

    persons.forEach(person => {

        person.addEventListener('click', function() {
            var name = person.getAttribute('data-name');
            if(name) {
                var newEvent = new CustomEvent('myCustomEvent', {
                    detail: {
                        name: name
                    }
                });
                document.dispatchEvent(newEvent)
            }
        });
    })

   

});