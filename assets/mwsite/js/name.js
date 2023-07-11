var text = ["M","Me","Mer","Merr","Merry","Merry ","Merry W","Merry Wo","Merry Wor","Merry Worl","Merry World","Merry Worl","Merry Wor","Merry Wo","Merry W","Merry ","Merry","Merr","Mer","Me","M","🖤"];
var counter = 0;
var inst = setInterval(change, 250);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}
