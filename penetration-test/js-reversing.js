

function w(a){return a==='neadmin'?!0:!1}
function q(a){
    if(a.length<10||a.length>20)return!1;
    var b=1;
    for(i=0;i<a.length;i++)b+=a.charCodeAt(i);return b%421==0?!0:!1
}
var s_but=document.querySelector('#submit');
s_but.onclick=function(e){
    e.preventDefault();
    var a=document.getElementsByName('username')[0].value;
    if(!w(a)){
        alert('Invalid username!');
        return
    }
    var b=document.querySelector('input[type=password]').value;
    if(!q(b)){
        alert('Invalid password!');
        return
    }
    alert('Congratulations!')
}
