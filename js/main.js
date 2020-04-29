$.getJSON("test_emails.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    email_index = 0;
    message_index = 0;
    document.getElementById("demo").innerHTML = json.emails[email_index].id + ": " + json.emails[email_index].msgs[message_index].from
    + "<br>" + json.emails[email_index].msgs[message_index].subject;
	
});

