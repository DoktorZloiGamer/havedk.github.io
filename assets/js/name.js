var text = ["h","ha","hav","have","haved","havedk","havedk?","havedk??","havedk???","havedk??","havedk?","havedk","havedks","havedkst","havedkstu","havedkstud","havedkstudi","havedkstudio","havedkstudio?","havedkstudio??","havedkstudio???","havedkstudio??","havedkstudio?","havedkstudio","havedkstudi","havedkstud","havedkstu","havedkst","havedks","havedk","haved","have","hav","ha","h","?"];
var counter = 0;
var inst = setInterval(change, 250);

function change() {
document.title = text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
}
}