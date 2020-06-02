const express = require('express');
const app = express();

app.get("/", function(req, res ) {
    res.sendfile(__dirname + "/src/index.html");
});

app.get("/sobre", function(req, res ) {
    res.sendfile(__dirname + "/src/sobre.html");
});

app.get("/contato", function(req, res ){

    res.send("Pagina de Contato");
});

app.get("/SobreEmpresa", function(req, res ){

    res.send("Página sobre a empresa ");
});

app.get("/Blog", function(req, res ){

    res.send("Blog");
});

app.listen(3000);