new Vue({
  el:"#vu",
  data: {
    personnes:[
        {nom:'ronaldo',prenom:'crisitaino'},
        {nom:'messi',prenom:'lionel'},
        {nom:'naymar',prenom:'JR'},
    ],
    nom:"",
    prenom:""
  },
 methods:{
   supp: function(index){
     this.personnes.splice(index, 1);

   },
   ajouter:function(){
 var obj ={
   nom:this.nom,
   prenom:this.prenom
 };
 this.personnes.push(obj);
   },
   modifier:function(index){
      let nom =prompt('Nom');
	  let prenom=prompt('prenom');
	  this.personnes[index].nom = nom;
	  this.personnes[index].prenom = prenom;
   }
 }

});
