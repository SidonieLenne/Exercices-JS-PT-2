//Déclare une variable qui englobe les div que je veux faire apparaître/disparaître
var blockquotes = document.getElementById('blockquoteDiv');

//Déclare une fonction qui mettra les blocs en display:none.
function disappear(){
    blockquotes.style.display='none';
}
/*window est un élément réservé à JS. 
La fonction addEventListener lui demande littéralement d'écouter tel ou tel évènement qui seront mis en argument
Les arguments sont donc l'évènement "scroll" et une fonction anonyme 
(on est obligé d'en mettre une mais on en a aucune à mettre alors on en met une anonyme).
Donc SI la fenêtre est scrollée de +150px verticalement, les blocs apparaissent en display block,
SINON, les blocs disparaissent.
*/ 
window.addEventListener("scroll",function(){
    if(window.scrollY >150){
        blockquotes.style.display='block';
    }
    else{
        disappear();
    }
});