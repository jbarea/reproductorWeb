SC.initialize({
    client_id: 'unnFdubicpq7RVFFsQucZzduDPQTaCYy'
})

//let data = document.getElementById('busqueda').value;
var page_size = 10;

function getInfo(){
    data = document.getElementById('busqueda').value;
    console.log(data);
    SC.get('/tracks', {
        limit: page_size,
        q: `${data}`,
    }).then(function (tracks) {
        //var arrayData = [];
        var zonaFoto = document.getElementById('resultado');
        console.log(tracks);
        //console.log(tracks[1]['artwork_url']);
        for (var ele of tracks){
            //arrayData.push(ele['artwork_url']);
            var elemento = document.createElement('img');
                if (ele['artwork_url']!= null){
                    elemento.src = ele['artwork_url'];
                    elemento.draggable = true;
                    zonaFoto.appendChild(elemento);
                    console.log(elemento);
                } 
        }
        //console.log(arrayData);
    });
}

function miOnDragStart(){

}

function miOnDragEnd(){

}

function miOnDragOver(){

}

function miOnDrop(){

}
