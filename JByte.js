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

function JByte(textToFormat, variable1, variable2, variable3, variable4, variable5, variable6, variable7, variable8, variable9, variable10) {
    var formattedText;

    variable1 = variable1 || "";
    variable2 = variable2 || "";
    variable3 = variable3 || "";
    variable4 = variable4 || "";
    variable5 = variable5 || "";
    variable6 = variable6 || "";
    variable7 = variable7 || "";
    variable8 = variable8 || "";
    variable9 = variable9 || "";
    variable10 = variable10 || "";

    formattedText = textToFormat
        .replace(new RegExp("(\\{0\\})", "g"), variable1)
        .replace(new RegExp("(\\{1\\})", 'g'), variable2)
        .replace(new RegExp("(\\{2\\})", 'g'), variable3)
        .replace(new RegExp("(\\{3\\})", 'g'), variable4)
        .replace(new RegExp("(\\{4\\})", 'g'), variable5)
        .replace(new RegExp("(\\{5\\})", 'g'), variable6)
        .replace(new RegExp("(\\{6\\})", 'g'), variable7)
        .replace(new RegExp("(\\{7\\})", 'g'), variable8)
        .replace(new RegExp("(\\{8\\})", 'g'), variable9)
        .replace(new RegExp("(\\{9\\})", 'g'), variable10);

    return formattedText;
}