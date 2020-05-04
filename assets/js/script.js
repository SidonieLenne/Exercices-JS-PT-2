//Déclare une variable qui englobe les div que je veux faire apparaître/disparaître
var blockquotes = document.getElementById('blockquoteDiv');

window.addEventListener("scroll",function(){
    if(window.scrollY >150){
        blockquotes.style.display='block';
    }
    else{
        blockquotes.style.display='none';
    }
}, false);