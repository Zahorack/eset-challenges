## The task

Find correct username and password and send them to us. [Source page](https://pentest.join.eset.com/js-reverzing)

### JS reversing
Is title of the task. So we have to use reverse engineering and look on JavaScript source code of html page.
In available web browser find `developer tools` and entry table `Sources`.

This piece of code is what we are looking for.
```
function w(a){return a==='neadmin'?!0:!1}
function q(a){
    if(a.length<10||a.length>20)
        return!1;
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

```

User name validation condition is true when input is `neadmin`. Password must be longer or equal to 10 and shorter 
than 20 characters. But sum of ASCII codes of all characters must be equal 420. So password condition has multiple 
correct combinations. For example character `*` has ASCII code 42, password could be ten stars: `**********`.
 