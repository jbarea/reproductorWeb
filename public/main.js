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
            //var dropzone = document.getElementById('contenedor');
            var elemento = document.createElement('img');
                if (ele['artwork_url']!= null){
                    elemento.src = ele['artwork_url'];
                    elemento.draggable = true;
                    elemento.id = ele['id'];
                    elemento.addEventListener('dragstart', miOnDragStart);
                    elemento.addEventListener('dragend', function (event){
                        console.log('onDragEnd');
                        //console.log(event.target);
                    });
                    elemento.addEventListener('dragover', function(event){
                        console.log('onDragOver');
                        //console.log(event);
                    })
                    
                    zonaFoto.appendChild(elemento);
                    console.log(elemento);
                } 
        }
        //console.log(arrayData);
        
    });
}



function playTrack(data){
    SC.stream('/tracks/88295642').then(function (player) {
        player.play();
    }).catch(function (error) {
        console.error('NO ha funcionado la peticion');
    })
}

function miOnDragStart(ev){
    console.log(event.target.id);
    ev.dataTransfer.setData("targetId", event.target.id);
    console.log('onDragStart');
    console.log(ev)
}

function miOnDragEnd(ev){
    console.log("onDragEnd");
    console.log(ev.target);
    //console.log(event);
}

function miOnDragOver(ev){
    ev.preventDefault(); 
    console.log("onDragOver");
    //console.log(ev.target)
}

function miOnDrop(ev){
    ev.preventDefault();//para que en mozilla no falle y añada una imagen en tab nuevo
    //var data = ev.dataTransfer.getData("text");
    console.log(event.target);
    var data = ev.dataTransfer.getData("targetId");
    ev.target.appendChild(document.getElementById(data));//para llamar a si mismo y modificar el documento|estamos dejando la imagen dentro del div
    // console.log('pasa por ondrop!!!!')
    // console.log('onDrop', data)
    // console.log(event);
    playTrack(data);
}
