import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

interface Country {
  code: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {
  }

  public getCountriesOptions() {
    return this.http.get<Country[]>('/api/countries')
      .pipe(
        map(countries => countries
          .map(country => (
            { label: country.name, value: country.code }
          ))
        )
      )
  }

}
