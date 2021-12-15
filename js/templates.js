function generarPublicacionHTML (fecha, usuario, comentario, likes, fotoPerfil){
    debugger
  // let HTML = "<div>"+ fotoPerfil + " " + usuario +":" + comentario + "<button class='btn btn-sm btn-danger'><i class='fas fa-heart'></i></button></div>";
  let HTML = `<div class="row">`+
  `<div class="col-md-2 col-4 text-center">`+
   ` <a class="story-img" href="#">`+
      `<img src=`+ fotoPerfil+ ` `+
        `style="width:100px;height:100px"`+
       ` class="rounded-circle mt-3 mb-3 img-fluid">`+
    `</a>`+
 ` </div>`+
  `<div class="col-md-10 col-sm-9">`+
   ` <h3>`+ usuario +`</h3>`+
    `<p>`+
    ``+ comentario +``+
    `</p>`+
    `<p class="lead">`+
     ` <button onclick='likeBtn(`+ usuario.id +`)' class="btn btn-danger btn-sm"><i class='fas fa-heart'></i></button>`+ likes +``+
    `</p>`+
    `<ul class="list-inline">`+
      `<li class="list-inline-item">`+
       ` <a href="#">`+ fecha +`</a>`+
      `</li>`+
    `</ul>`+
    `<br>`+
    `<br>`+
 ` </div>`+
`</div>`+
`<hr>`;
  return HTML;
}

function