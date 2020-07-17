## The task

Read the application manual (can be downloaded from [here](https://pentest.join.eset.com/download/manual.docx)) 
and send us login credentials that could be valid for application login.

Hint: `The credentials could be in the document, but where?`


The Ms .docx file format is basically .zip packed file and contains multiple metadata in .xml format.


Let's start with unzipping with command line
```
unzip manual.docx
```
result is following content
```
Archive:  manual.docx
  inflating: [Content_Types].xml     
  inflating: _rels/.rels             
  inflating: word/_rels/document.xml.rels  
  inflating: word/document.xml       
  inflating: word/theme/theme1.xml   
  inflating: word/settings.xml       
  inflating: word/webSettings.xml    
  inflating: word/stylesWithEffects.xml  
  inflating: docProps/core.xml
  inflating: word/styles.xml         
  inflating: word/fontTable.xml      
  inflating: docProps/app.xml
```

We would like to see metadata inside docProps/core.xml
```
cat docProps/core.xml | tr -s " " "\n" | fmt
```
```
<?xml version="1.0" encoding="UTF-8"
 <cp:coreProperties
xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:dcterms="http://purl.org/dc/terms/"
xmlns:dcmitype="http://purl.org/dc/dcmitype/"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>Petr
Hromada</dc:creator><cp:lastModifiedBy>Pavol
Bondra</cp:lastModifiedBy><cp:revision>2</cp:revision><dcterms:created
xsi:type="dcterms:W3CDTF">2017-04-01T13:26:00Z</dcterms:created><dcterms:modified
xsi:type="dcterms:W3CDTF">2017-04-01T13:26:00Z</dcterms:modified></cp:coreProperties>
```

Now we know name of administrator and creator of that file: Petr Hromada, and person who modified file: Pavol Bondra.

Login credentials should be:
```
petr.hromada
pavol.bondra
```