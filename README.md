![alt text](http://bytecorp.co.uk/images/JB.png "JByte")
# JByte
JByte is a JavaScript port of the C# function String.Format


## How to use
JByte uses the same logic as C#'s ```String.Function```

For example:

```javascript
var firstName = "Tom";
var surName = "Davies";

document.write(JByte("My name is {0} {1}",firstName,surName));
```

will output 

```
My name is Tom Davies
```