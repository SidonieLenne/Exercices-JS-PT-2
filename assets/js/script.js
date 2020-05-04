//Déclare une variable qui englobe les div que je veux faire apparaître/disparaître
var blockquotes = document.getElementById('blockquoteDiv');
/*window est un élément réservé à JS. 
La fonction addEventListener lui demande littéralement d'écouter tel ou tel évènement qui seront mis en argument
Les arguments sont donc l'évènement "scroll" et une fonction anonyme.
Donc SI la fenêtre est scrollée de +150px verticalement, les blocs apparaissent en display block,
SINON, les blocs disparaissent en display none.
*/ 
window.addEventListener("scroll",function(){
    if(window.scrollY >150){
        blockquotes.style.display='block';
    }
    else{
        blockquotes.style.display='none';
    }
}, false);//ça je sais pas à quoi ça sert mais ça fonctionne pas sans 