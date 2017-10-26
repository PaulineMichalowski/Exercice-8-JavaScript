function afficher(){
    var age = document.getElementById('age').value;
    if (isNaN(age) == false && age > 0){
      if (age < 18){
        alert('Vous êtes mineur');
      } else{
        alert('Vous êtes majeur');
      }
    } else {
      alert('Rentrer un âge valide');
    }
  }
