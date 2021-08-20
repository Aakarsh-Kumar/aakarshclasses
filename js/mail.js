/* SmtpJS.com - v3.0.0 */
function sendEmail() {
    Email.send({
        SecureToken: "37c73fcb-f61f-4229-9dcc-fc10ae0f079c",
        To: "aakarsh2504@gmail.com",
        From: "kumaraakarsh25@gmail.com",
        Subject: "Mail from AakarshClasses Website",
        Body: "Name: " + document.getElementById('name').value + "\nEmail: " + document.getElementById('email').value + "\nCourse " + document.getElementById('dropbtn').innerText
    }).then(
        () => alert('Your message have been sent. \n Please refer your given Email for reply.')
    );
}