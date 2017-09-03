var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

//ADICAO DOS CAMPOS DO FORM DENTRO DA TABELA AO CLICAR NO BOTAO INCLUIR!!
document.querySelector('.form').addEventListener('submit', function(event) {

  //CANCELA SUBMISSAO DO FORM
  event.preventDefault();

  var tr = document.createElement('tr');

  campos.forEach((campo) => {
    //CRIA TD PURA
    var td = document.createElement('td');

    //ATRIBUI O VALOR DO CAMPO A TD
    td.textContent = campo.value;

    //ADD TD NA TR
    tr.appendChild(td);
  });
  //CRIA TD PURA
  var tdVolume = document.createElement('td');
  // TD COM RESULTADO DA CONTA (VOLUME = VALOR * QUANTIDADE)
  tdVolume.textContent = campos[1].value * campos[2].value;
  //ADD TD DE VOLUME NA TR
  tr.appendChild(tdVolume);

  //ADD TR NA TBODY
  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
});