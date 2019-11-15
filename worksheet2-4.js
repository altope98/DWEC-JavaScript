
var arr=[navigator.platform, navigator.product, navigator.language, navigator.languages, navigator.appVersion];
var arr2=["navigator.platform", "navigator.product", "navigator.language", "navigator.languages", "navigator.appVersion"];

document.write("<table border='2'>");
var cont=0;
for (let i = 1; i <= 5; i++) {
    document.write("<tr>");
        document.write("<td>"+arr2[cont]+"</td>");
        document.write("<td>"+arr[cont]+"</td>");
        cont++;
    document.write("</tr>");
}
document.write("</table>");

document.write("<br><br><br>");

var arr3=[window.screenX, window.screenY, window.location, window.navigator, window.DOMPoint];
var arr4=["window.screenX", "window.screenY", "window.location", "window.navigator", "window.DOMPoint"];

document.write("<table border='2'>");
var cont2=0;
for (let i = 1; i <= 5; i++){
    document.write("<tr>");
        document.write("<td>"+arr4[cont2]+"</td>");
        document.write("<td>"+arr3[cont2]+"</td>");
        cont2++;
    document.write("</tr>");
}
document.write("</table>");