
const myForm = document.getElementById('contact-form');

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let obj = {
        from_name: myForm.elements['user_name'].value,
        organization: myForm.elements['organization'].value,
        email: myForm.elements['user_email'].value,
        subject: myForm.elements['subject'].value,
        message: myForm.elements['message'].value
    };

    fetch('/submit_email', {
        method: 'POST',
        body:JSON.stringify(obj),
        headers: {'content-type': 'application/json'},
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
});