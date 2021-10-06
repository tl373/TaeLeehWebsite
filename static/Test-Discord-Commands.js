function createnewrequest(){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/894771421451001876/ndrWQ7ao-ebz76RyCbzsRsuMISI7OLHz6ieMLNpm1EfXZMlExeLfAF-ZvvcZT-5pgBBB");
    request.setRequestHeader('Content-type', 'application/json');
return request;
}

function testmapfunction(){
  request = createnewrequest();
  const params = {
    username: "Test-User",
    content: "!randommap"
  };

request.send(JSON.stringify(params));
}

function refreshIframe() {
//    var ifr = document.getElementsByName('discord widget')[0];
//    ifr.src = ifr.src;
    document.getElementById('googlesheet widget').contentWindow.location.reload();
//    var iframe = document.getElementById('discord widget');
//    iframe.reload(true);
}

function testgettingmyteam() {
   request =  createnewrequest();
      const params = {
        username: "Test-User",
        content: "!myTeam"
      };
request.send(JSON.stringify(params));
}

function testgettingallteams(){
   request =  createnewrequest();
      const params = {
        username: "Test-User",
        content: "!allTeams"
      };
request.send(JSON.stringify(params));
}



