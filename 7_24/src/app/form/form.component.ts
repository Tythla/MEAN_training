import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  selectedItems: string[] = [];

  itemList = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectAll: [false],
      movies: this.fb.array(this.itemList.map(() => new FormControl(false))),
    });
  }

  ngOnInit(): void {
    this.form.get('selectAll')?.valueChanges.subscribe((selectAll) => {
      this.setAllMovies(selectAll);
    });

    this.moviesFormArray.valueChanges.subscribe((movies) => {
      this.updateSelectAllCheckbox(movies);
      this.updateSelectedMovies(movies);
    });
  }

  get moviesFormArray(): FormArray {
    return this.form.get('movies') as FormArray;
  }

  getFormControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

  setAllMovies(selectAll: boolean): void {
    this.moviesFormArray.controls.forEach((control) =>
      (control as FormControl).setValue(selectAll, { emitEvent: false })
    );
  }

  updateSelectAllCheckbox(movies: boolean[]): void {
    const allSelected = movies.every((value) => value);
    if (allSelected !== this.form.get('selectAll')?.value) {
      this.form.get('selectAll')?.setValue(allSelected, { emitEvent: false });
    }
  }

  updateSelectedMovies(movies: boolean[]): void {
    this.selectedItems = movies
      .map((selected, index) => (selected ? this.itemList[index] : null))
      .filter((movie) => movie !== null) as string[];
  }

  clearAll(): void {
    this.form.reset();
    this.selectedItems = [];
  }
}
