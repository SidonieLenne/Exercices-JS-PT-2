//Je déclare ma fonction, qui fera que l'image fasse 600px de largeur.
/*Alternative:
function biggerImg(){
    document.getElementById('flocon').width=600;
}*/

function biggerImg(){
    var element = document.getElementById('flocon');
    element.style.width='600px';
    element.style.height='600px';
}