import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})

// @Input()variabel kann ich nutzen, um einen Wert von einem Parent Component an ein Child Component zu geben.
// Der Wert innerhalb in Input kann (muss aber nicht) definiert werden. 
//Wenn nicht, wird einfach die Variable nach der klammer im HTML verwendet.
// Wenn sie verwendet wird, muss sie allerdings auch so im HTML verwendet werden. 
// Beispiel: <app-singlefruit [fruitNumber]="index"></app-singlefruit>

export class SinglefruitComponent {

  starsCount = [1, 2, 3, 4, 5];


  // von parent zu child
  @Input()fruit = 

  {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 0,
    reviews:[{name: "Waldemar W.", text: "gut für Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
  }; 


  inputData = "";

  // von child zu parent
  @Output()fruitName = new EventEmitter<string>();

  // emitName(){
  //   this.fruitName.emit(this.fruit.name);
  // }

  sendInputData(){
    this.fruitName.emit(this.inputData); // give with EventEmitter the inputData from ngModule from inputfield to the parent element html
    this.inputData = ""; // clears the inputfield again.
}

}


// der eventEmitter kann im ParentElement genutzt werden um ein event vom child element ausgehend an eine funktion des parents zu uebergeben