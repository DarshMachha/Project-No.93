function addUser(){
    user_name=document.getElementById("sign in").value;
    localStorage.setItem("username",user_name);
    window.location="https://accounts.google.com/ServiceLogin/identifier?elo=1&ifkv=AeAAQh6aiBN1A2xXUpMPvwuSX8wonEUzvp8UCKo6PupTtcQqzyL_5g7Vwh1AyzRou9PWCdaCC8Fkpw&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
}