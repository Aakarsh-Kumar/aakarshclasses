// root/js/mail.js

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
/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
};