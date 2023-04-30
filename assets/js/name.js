var text = ["h","ha","hav","have","haved","havedk","havedk?","havedk??","havedk???","havedk??","havedk?","havedk","havedkヾ","havedkヾ(","havedkヾ(•","havedkヾ(•ω","havedkヾ(•ω•","havedkヾ(•ω•`)","havedkヾ(•ω•`)o","havedkヾ(•ω•`)o?","havedkヾ(•ω•`)o??","havedkヾ(•ω•`)o???","havedkヾ(•ω•`)o??","havedkヾ(•ω•`)o?","havedkヾ(•ω•`)o","havedkヾ(•ω•`)","havedkヾ(•ω•`","havedkヾ(•ω•","havedkヾ(•ω","havedkヾ(•","havedkヾ(","havedkヾ(","havedkヾ","havedk","haved","have","hav","ha","h","?"];
var counter = 0;
var inst = setInterval(change, 250);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}
