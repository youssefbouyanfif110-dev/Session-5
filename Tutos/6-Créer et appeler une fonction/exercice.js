function salut(nom){
    console.log("Bonjour, "+nom);
}

salut("Youssef");

function max(a,b){
    let maximum = a;
    if (b>a){
        maximum = b;
    }

    console.log("le maximum est : "+maximum);
}

max(22,45);
max(30,7);
max(6,6);

function base(nom,prenom,age,formation){
    console.log("Nom : "+nom);
    console.log("Prénom : "+prenom);
    console.log("Age : "+age);
    console.log("Formation : "+formation);
}

base("Youssef","BOUYANFIF",19,"Développement web");