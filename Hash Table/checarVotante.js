function checarVotante(votante, votaram) {
  votante = votante.toLowerCase();
  if (votaram[votante]) {
    console.log('Cai fora ' + votante + ', ja voto mané');
  } else {
    console.log('Pode votar ', votante);
    votaram[votante] = true;
  }
}

const votaram = { gabriel: true, daniel: true, davi: true };

checarVotante('Davi', votaram);
checarVotante('Nicolas', votaram);
checarVotante('Pierre', votaram);
console.log('As seguintes pessoas votaram hoje: ', votaram);
