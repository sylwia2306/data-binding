import { Component } from '@angular/core';
import { Photo } from '../Interfaces/photo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photo-gallery',
  imports: [CommonModule, FormsModule],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss'
})
export class PhotoGalleryComponent {


  constructor() {
    const numbers = [34, 23, 31, 64, 123, 32, 31, 90];

    // 34 , 31 , 123, 31  --> wyswietl co drugi element

    // zwykla petla
    //console.log(numbers[8]);
    // console.log(numbers[2]);
    // console.log(numbers[4]);
    // console.log(numbers[6]);

    numbers.forEach((singleNumber, i) => {
      console.log(singleNumber);
      console.log(i);
    } )




  }

  logInfo(obj: any) {
    console.log(obj);
  }



  button: string = 'Dodaj obrazek'
  singlePhoto: Photo = {}


  photos: Photo[] = [{
    id: 1,
    name: 'Piękna Norwegia',
    size: 450,
    imgUrl: 'https://picsum.photos/id/1015/400/300',
    linkUrl: 'https://bliskocorazdalej.pl/blisko/norwegia/najpiekniejsze-miejsca-w-norwegii-20-atrakcji-ktore-trzeba-zobaczyc/'
  }, {
    id: 2,
    name: 'Psy szukające schronienia',
    size: 300,
    imgUrl: 'https://picsum.photos/id/1025/400/300',
    linkUrl: 'https://napaluchu.waw.pl/zwierzeta/zwierzeta-do-adopcji/'
  }, {
    id: 3,
    name: 'Osiągnij szczęście!',
    imgUrl: 'https://picsum.photos/id/1035/400/300',
    linkUrl: 'https://projekt-sukces.pl/11-rad-jak-osiagnac-szczescie-w-zyciu/'
  }, {
    id: 4,
    name: 'Góry Alpejskie',
    imgUrl: 'https://cdn.pixabay.com/photo/2023/08/27/10/25/swiss-alps-8216616_1280.jpg',
    linkUrl: 'https://pixabay.com/pl/photos/alpy-szwajcarskie-szwajcaria-ksi%C4%99%C5%BCyc-8216616/'
  }, {
    id: 5,
    name: 'Piękne zimowe stworzenie',
    imgUrl: 'https://cdn.pixabay.com/photo/2025/03/31/08/17/penguin-9504250_1280.jpg',
    linkUrl: 'https://pixabay.com/pl/photos/pingwin-zwierz%C4%99-dzikiej-przyrody-9504250/'
  }, {
    id: 6,
    name: 'Uliczka we Włoszech',
    imgUrl: 'https://cdn.pixabay.com/photo/2023/01/10/00/17/italy-7708551_1280.jpg',
    linkUrl: 'https://pixabay.com/pl/photos/w%C5%82ochy-aleja-ulica-zakupy-7708551/'
  }]

  addPhoto() {
    console.log(this.singlePhoto);
    this.photos.unshift(this.singlePhoto)
  }
}
