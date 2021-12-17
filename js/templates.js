function generarPublicacionHTML(fecha, usuario, comentario, likes, fotoPerfil, idPublicacion) {
  // let HTML = "<div>"+ fotoPerfil + " " + usuario +":" + comentario + "<button class='btn btn-sm btn-danger'><i class='fas fa-heart'></i></button></div>";
  let HTML = `<div class="row">` +
  `<br>` +
    `<div class="col-md-2 col-4 text-center">` +
    `<br>` +
    ` <a class="story-img" href="#">` +
    `<img src=` + fotoPerfil + ` ` +
    `style="width:80px;height:80px"` +
    ` class="rounded-circle mt-3 mb-3 img-fluid">` +
    `</a>` +
    ` </div>` +
    `<br>` +
    `<div class="col-md-10 col-sm-9">` +
    `<br>` +
    ` <h3>` + usuario + `</h3>` +
    `<p>` +
    `` + comentario + `` +
    `</p>` +
    `<p class="lead">` +
    ` <button onclick='likeBtn(` + usuario.id + ", " + idPublicacion + `)' class="btn btn-danger btn-sm"><i class='fas fa-heart'></i></button>` + likes + `` +
    `</p>` +
    `<ul class="list-inline">` +
    `<li class="list-inline-item">` +
    ` <a href="#">` + fecha + `</a>` +
    `</li>` +
    `</ul>` +
    `<br>` +
    ` </div>` +
    `</div>` +
    `<hr>`;
  return HTML;
}

