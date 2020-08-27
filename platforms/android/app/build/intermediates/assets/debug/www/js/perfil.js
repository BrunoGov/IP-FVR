var DADOS_PERFIL = [];

function openPerfil(){
	openPage('perfil')
	var ra_user = localStorage.getItem('ra');
	var url = DEF_URL+"/perfil.php?ra="+ra_user;
	console.log(url)
	MobileUI.ajax.get(url).end(result_perfil);

	function result_perfil(error, res) {
		console.log(res)
		if (error) {
			alert("Verifique a sua conexão com a internet.");
			return console.log(error);
		}
		console.log(res.body)

		DADOS_PERFIL.length = 0;
		for (i = 0; i < res.body.length; i++) {
			var perfil = {};
			// perfil.foto              = res.body[i].foto;
			perfil.nome              = res.body[i].nome;
			perfil.cotacao_realizada = res.body[i].total;
			perfil.cotacao_aprovada  = res.body[i].total_aprovado;
			perfil.cotacao_reprovada = res.body[i].total_bloqueado;
			perfil.nivel             = res.body[i].nivel;
			if(res.body[i].img_perfil == ''){
				perfil.img_perfil = 'img/avatar.jpg';
			}else{
				perfil.img_perfil = res.body[i].img_perfil;
			}

			DADOS_PERFIL.push(perfil);
			// console.log()
		}
	}
}