
let testeConexao = document.getElementById('testeConexao');

testeConexao.addEventListener('click', function() {
    
    var conectado = true;
    var xhttp = new XMLHttpRequest();
    var url = "/configuracao";
    
    
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {

            if (conectado == true) {
                
                swal("Sucesso!", "Conectado com sucesso", "success");
            } else {
                swal("Erro!", "Falha na conexão", "error");
            }
        }

    };
    
    xhttp.open("POST", url, true);
    xhttp.send();
    event.preventDefault();
});

