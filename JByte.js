/**
 * JByte - JavaScript port of the C# function String.Format
 * ByteCorp (c) 2014 - 2015
 *
 * @param textToFormat
 * @returns {XML|string|*}
 * @constructor
 * */

function JByte(textToFormat) {
    for (var a = arguments, i = 1, j = arguments.length, formattedText = textToFormat || ''; i < j; i++) {
        formattedText = formattedText.replace(new RegExp('\\{' + (i - 1) + '\\}', 'gm'), a[i]);
    }

    return formattedText;
}
