/**
 * JByte - JavaScript port of the C# function String.Format
 * ByteCorp (c) 2014 - 2015
 *
 * @param textToFormat
 * @param variable1
 * @param variable2
 * @param variable3
 * @returns {XML|string|*}
 * @constructor
 * @param variable4
 * @param variable5
 * @param variable6
 * @param variable7
 * @param variable8
 * @param variable9
 * @param variable10
 * */

function JByte(textToFormat) {
  for (var a = arguments, i = 1, j = arguments.length, formattedText = textToFormat || ''; i < j; i++) {
    formattedText = formattedText.replace(new RegExp('\\{' + (i - 1) + '\\}', 'gm'), a[i]);
  }
  
  return formattedText;
}
