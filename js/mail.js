/* SmtpJS.com - v3.0.0 */
function sendEmail() {
	Email.send({
		SecureToken : "37c73fcb-f61f-4229-9dcc-fc10ae0f079c",
		To : "aakarsh2504@gmail.com",
		From : "kumaraakarsh25@gmail.com",
		Subject : "Mail from AakarshClasses Website",
		Body : "Name: "+document.getElementById('name').value+"\nEmail: "+document.getElementById('email').value+"\nMessage: "+document.getElementById('message').value
	}).then(
	  () => alert('Your message have been sent. \n Please refer your given Email for reply.')
	);
}

// kumaraakarsh25@gmail.com
// 6D7074697D4A45E99FBE11A438A1862D772A
// 2525
// smtp.elasticemail.com

// Secure Token: 271d7923-7bbf-44bf-a239-262fcd89048b
// Secure Token: 271d7923-7bbf-44bf-a239-262fcd89048b