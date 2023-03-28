import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Stockage des valeurs demandées dans un Objets
  paperData = {
    siren: '',
    name: '',
    person: '',
    denomination: '',
    codeNaf: '',
  };

  papperUrl = 'https://suggestions.pappers.fr/v2?q=';
  allPaperData: any[] = [];
  searchSociety = '';

  constructor(public http: HttpClient) {}

  // Début de l'appel API
  readAPI(URL: string) {
    return this.http.get(URL);
  }

  // Fonction qui ce declenche en appuyant sur ENTREE ou le bouton recherche
  // Vide le tableau AllPaperData
  // Encodage en cas d'ajout d'un espace dans la recherche
  // Stockage des data dans une const
  // Boucle for qui stock les valeurs demandé dans paperData
  // A chaque tour de boucle on enregistre les objets paperData dans le tableau allPaperData

  search() {
    this.allPaperData.splice(0, this.allPaperData.length);

    const search = encodeURIComponent(this.searchSociety).trim();

    return this.readAPI(this.papperUrl + search).subscribe((data) => {
      const response = Object.values(data)[0];

      for (let i = 0; i < response.length; i++) {
        this.paperData = {
          siren: response[i].siren_formate,
          name: response[i].nom_entreprise,
          person: response[i].personne_morale,
          denomination: response[i].denomination,
          codeNaf: response[i].code_naf,
        };

        this.allPaperData.push(this.paperData);
      }
    });
  }

  ngOnInit() {}
}
