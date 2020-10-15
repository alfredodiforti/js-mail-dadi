//RICHIESTA mail
var user = prompt('inserisci la tua mail di accesso');

//database mail
var list =  ['paolorossi@icloud.com','acdc@icloud.com','hanszimmer@gmail.com']

//fix
var user = user.toLowerCase();

var mailfound = false;

for (var i = 0; i < list.length; i++) {
  var email = list[i];

  if (user == email) {
    mailfound = true;
  }
}

if (mailfound == true) {
  console.log('ciao ' + user + ' il tuo account è stato trovato');
}

else {
  console.log('NO MATCH ACCOUNT!!!!');
}
