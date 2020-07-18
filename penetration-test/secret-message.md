# Secret message

Your secret message is hidden in the [picture](https://pentest.join.eset.com/secret-message).

## The solution

Use tools to obtain formatted metadata from image like
```
exiftool eset.jpg
```

```
identify -verbose eset.jpg
```

or simply try open image in text editor.


Secret message: **``secret_message_kefjsssimn40256mdd``** was stored in metadata section `User comment`