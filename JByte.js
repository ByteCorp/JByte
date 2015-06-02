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
 */

function JByte(textToFormat, variable1, variable2, variable3) {
    var formattedText;

    variable1 = variable1 || "";
    variable2 = variable2 || "";
    variable3 = variable3 || "";

    formattedText = textToFormat.replace("{0}", variable1).replace("{1}", variable2).replace("{3}", variable3);

    return formattedText;
}