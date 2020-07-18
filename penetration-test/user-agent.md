# User-Agent
Access to the page [/google.bot](https://pentest.join.eset.com/google.bot) is only available to search engines, 
you cannot access it from a regular browser, or can you? Send us information displayed on this page and the key 
settings you used to get there.

Hint: Any webbot wins, not only the googlebot.

## The solution

Specify to curl act as user agent - for example GoogleBot search engine
```
curl --user-agent "Googlebot"  https://pentest.join.eset.com/google.bot
```

Response:
```
INDEX-me, my Bot.
```