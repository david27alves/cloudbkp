let testeConexao = document.getElementById('testeConexao');

testeConexao.addEventListener('click', function() {
    var conectado = false;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (conectado == true) {
            swal("Sucesso!", "Conexão estabelecida!", "success");
        } else {
            swal("Erro!!", "Não foi possível estabelecer conexão!", "error");
        }
        
      }
    };
    xhttp.open("POST", "/configuracao", true);
    xhttp.send();
    event.preventDefault();
});




/*testeConexao.addEventListener('click', function() {
    alert("Conectado com sucesso!");
    event.preventDefault();
});*/

/*testeConexao.addEventListener('submit', function() {
    alert("Conectado com sucesso!");
    event.preventDefault();
});*/

/*
testeConexao.onclick = function(){
    let conectou = false;
    if (conectou) {
        swal("Sucesso!", "Conexão estabelecida!", "success");
    } else {
        swal("Erro!", "Não foi possível conectar!", "error");
    }
    
};*/

