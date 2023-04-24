import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Animal';
  
  categoria= 'Carnivoro';

  tipo= 'Mamíferos';

  textoPlaceHolder = ' Escriba aquì mi edad' ;

  disabledInput = true;

  img1= 'https://www.ngenespanol.com/wp-content/uploads/2023/02/oso-polar-la-iconica-especie-del-artico-que-enfrenta-al-cambio-climatico.jpg'
  
  img2= 'https://arbolabc.nyc3.cdn.digitaloceanspaces.com/Science/animals/articles/animales-carnivoros/penguin.jpg'

  MeGustalaCarne= "Programar con angular, categoria animales " ;
  
  img3='https://arbolabc.nyc3.cdn.digitaloceanspaces.com/Science/animals/articles/animales-carnivoros/tiger.jpg'

  constructor(){
    setInterval(() =>{ 
      /* () son los argumentos que se le pasa a la funsion ,  es para establecer un intervalo*/
     
    this.tipo='Ave' /**es para referirce a la variable del componente  */
    
    this.disabledInput=false;
    },
    
    4000  /*pasando los 4 segundos cambia tipo de animal*/ 
    )
  }
 
     cambiarAnimal(){
   this.MeGustalaCarne = "Soy un mamifero, corre ; que tengo hambre  ";

   
}
}
