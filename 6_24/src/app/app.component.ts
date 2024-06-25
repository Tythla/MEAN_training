import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cityInput: string = '';
  filteredCities: string[] = [];
  cities: string[] = [];

  constructor(private data: DataService) {
  }

  ngOnInit(): void{
    this.cities = this.data.getcities();
  }  

  onInputChange() {
    const input = this.cityInput.toLowerCase();
    this.filteredCities = this.cities.filter(city =>
      city.toLowerCase().startsWith(input)
    );
  }

  onCityClick(city: string) {
    this.cityInput = city;
    this.filteredCities = [];
  }
} 
