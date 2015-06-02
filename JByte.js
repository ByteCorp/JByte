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

function JByte(textToFormat, variable1, variable2, variable3, variable4, variable5, variable6) {
    var formattedText;

    variable1 = variable1 || "";
    variable2 = variable2 || "";
    variable3 = variable3 || "";
    variable4 = variable4 || "";
    variable5 = variable5 || "";
    variable6 = variable6 || "";

    formattedText = textToFormat
        .replace("{0}", variable1)
        .replace("{1}", variable2)
        .replace("{2}", variable3)
        .replace("{3}", variable4)
        .replace("{4}", variable5)
        .replace("{5}", variable6);

    return formattedText;
}