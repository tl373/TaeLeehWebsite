function reload() {
    document.getElementById('discord widget').src += '';
} btn.onclick = reload;


function createnewrequest(){
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/895464354093367376/VPG_yNORkYMXYjCgCkZhDF3-Bbz14sfAT_dQjFfBgJeVx3AkG0k_WUTxlbHQG5-7S_mZ");
    request.setRequestHeader('Content-type', 'application/json');
    return request;
}

function testmapfunction(){
request = createnewrequest();

  const params = {
    username: "Test-User",
    content: "!randommap"
  };
console.log("mapfucntion")
request.send(JSON.stringify(params));

reload()
}


function testgettingmyteam() {
   request =  createnewrequest();
      const params = {
        username: "Test-User",
        content: "!myTeam"
      };
request.send(JSON.stringify(params));

reload()
}

function testgettingallteams(){
   request =  createnewrequest();
      const params = {
        username: "Test-User",
        content: "!allTeams"
      };
request.send(JSON.stringify(params));
reload()
}



