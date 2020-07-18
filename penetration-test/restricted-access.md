# Restricted access
Only internal users who use our proxy with outgoing IP 10.10.10.10 have access to the page /intranet. Send us the 
number of logged in users and the key settings you used to bypass the proxy check.

Hint: How does the webserver recognize that the request came from a proxy?


## The solution

We need to forward HTTP proxy of client to 10.10.10.10 and get response from server.
```
curl --header "X-Forwarded-For: 10.10.10.10" https://pentest.join.eset.com/intranet
```

Result from response header:

```
Number of logged in users: 1068
```


