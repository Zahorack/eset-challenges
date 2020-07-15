## Leaked password

### The task
We received a report that there are leaking information, the server is sending out the 
passwords. There is nothing in the HTML code of page. Send us the username and leaked password.

source: https://pentest.join.eset.com/leaked-password

hint: `Try other HT** protocol`

### The solution
In my first attempt I was using WireShark and I have scanned communication and tried to capture HTTP GET response or 
found strings like `pass`, `pwd`, `password`, `auth` inside packet bytes, but unsuccessfully.

Source web page has https protocol with ssl certificate. The hint says we should redirect request to http not 
secure protocol. The first step is to execute HTTP GET request and read response. We can use some command lines 
tools like `wget` or `curl`.

Command `` curl https://pentest.join.eset.com/leaked-password `` return HTML template of web page. The HTML source 
doesn't contains any unusual pattern.


We should be looking for some hidden data inside http request. The first hidden part of http protocol is the 
content of header. With `curl` we can obtain header with 
```
-D, --dump-header <file>
       Write the protocol headers to the specified file.

       This  option  is handy to use when you want to store the headers
       that a HTTP site sends to you. Cookies from  the  headers  could
       then  be  read  in  a  second  curl  invocation by using the -b,
       --cookie option! The -c, --cookie-jar option is however a better
       way to store cookies.
```

### Linux curl
Obtain content of response header
```
curl -D - https://pentest.join.eset.com/leaked-password
```

Hide response body
```
curl -o /dev/null -D - https://pentest.join.eset.com/leaked-password
```

### Windows PowerShell
```
(Invode-WebRequest https://pentest.join.eset.com/leaked-password).RawContent
```

header:
```
Server: nginx
Strict-Transport-Security: max-age=31536000; includeSubdomains;
X-Frame-Options: sameorigin
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Pragma: no-cache
Cache-Control: no-cache, no-store, must-revalidate
Expires: Thu, 01 Jan 1970 00:00:00 +0000
Authorization: Basic cGVudGVzdDE6a1RON2NlSlU4aw==
Vary: Accept-Encoding
Content-Length: 3127
Content-Type: text/html; charset=UTF-8
```

This line is interesting
```
Authorization: Basic cGVudGVzdDE6a1RON2NlSlU4aw==
```

I was googling and I have find out, that credentials **Basic** refers to base64 encryption data format. After decode the 
authorization string with online base64 decoder I got following: ***`pentest1:kTN7ceJU8k`***



