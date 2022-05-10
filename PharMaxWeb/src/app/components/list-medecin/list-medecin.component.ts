import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css'],
})
export class ListMedecinComponent implements OnInit {
  doctors: any;
  isVisible = false;
  isVisibleUpdate = false;
  visible = false;
  userRole: string | null = null;
  searchValue = '';
  listOfDisplayData: any;
  public validateForm!: FormGroup;
  constructor(private dooctorservice: DoctorService, private fb: FormBuilder) {}
  listOfColumns: any[] = [
    {
      name: 'nom',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.nom.localeCompare(b.nom),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
    {
      name: 'prenom',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.prenom.localeCompare(b.prenom),
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'specialite',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.specialite.localeCompare(b.specialite),
      listOfFilter: [],
      filterFn: (list: string[], item: any) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
    {
      name: 'Address',
      sortFn: (a: any, b: any) => a.adresse.localeCompare(b.adresse),
      sortOrder: null,

      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (address: string, item: any) =>
        item.address.indexOf(address) !== -1,
    },
    {
      name: 'Phone',
      sortFn: (a: any, b: any) => a.adresse.localeCompare(b.adresse),
      sortOrder: null,
    },
  ];
  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
    console.log(this.userRole);

    this.getAllDoctors();
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],

      phoneNumber: [null, [Validators.required]],
      specialite: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      agree: [false],
    });
  }

  getAllDoctors() {
    this.dooctorservice.getDoctors().subscribe((data) => {
      this.doctors = data.docteurs;
      this.listOfDisplayData = [...this.doctors];

      console.log(data.docteurs);
    });
  }
  trackByName(_: number, item: any): string {
    return item.name;
  }

  sortByAge(): void {
    this.listOfColumns.forEach((item) => {
      if (item.name === 'Age') {
        item.sortOrder = 'descend';
      } else {
        item.sortOrder = null;
      }
    });
  }

  resetFilters(): void {
    this.listOfColumns.forEach((item) => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' },
        ];
      }
    });
  }
  deleteDoctor(id: number) {
    if (confirm('Are you sure you want to delete this doctor?'))
      this.dooctorservice.deleteDoctor(id).subscribe((data) => {
        console.log(data);
        this.getAllDoctors();
      });
    console.log(id);
  }
  resetSortAndFilters(): void {
    this.listOfColumns.forEach((item) => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  searchAll(value: any) {
    console.log(value.target.value);

    this.listOfDisplayData = this.doctors.filter(
      (item: any) =>
        item.nom.indexOf(value.target.value) !== -1 ||
        item.prenom.indexOf(value.target.value) !== -1 ||
        item.specialite.indexOf(value.target.value) !== -1 ||
        item.phone.indexOf(value.target.value) !== -1 ||
        item.adresse.indexOf(value.target.value) !== -1
    );
  }
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.doctors.filter(
      (item: any) => item.nom.indexOf(this.searchValue) !== -1
    );
    console.log(this.listOfDisplayData);
  }

  openModalUpdate(doctor: any) {
    console.log(doctor);
    this.validateForm = this.fb.group({
      _id: [doctor._id ?? null, [Validators.required]],

      nom: [doctor.nom ?? null, [Validators.required]],
      prenom: [doctor.prenom ?? null, [Validators.required]],
      email: [doctor.email ?? null, [Validators.email, Validators.required]],

      phone: [doctor.phone ?? null, [Validators.required]],
      specialite: [doctor.specialite ?? null, [Validators.required]],
      adresse: [doctor.adresse ?? null, [Validators.required]],
    });
    this.isVisible = true;
  }
  openModalAdd() {
    this.validateForm = this.fb.group({
      _id: [null, [Validators.required]],

      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],

      phone: [null, [Validators.required]],
      specialite: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
    });
    this.isVisibleUpdate = true;
  }
  saveDoctor() {
    console.log('update');
    console.log(this.validateForm.get('_id')?.value);
    this.validateForm.get('_id')?.value === null
      ? this.dooctorservice
          .addDoctor(this.validateForm.value)
          .subscribe((data) => {
            this.getAllDoctors();
          })
      : this.dooctorservice
          .updateDoctor(
            this.validateForm.get('_id')?.value,
            this.validateForm.value
          )
          .subscribe((data) => {
            this.getAllDoctors();
          });
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    console.log(this.validateForm.get('_id')?.value, this.validateForm.value);
    this.saveDoctor();
    this.isVisible = false;
  }
  handleOkAdd(): void {
    this.saveDoctor();
    console.log('Button ok clicked!');
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleUpdate = false;
  }
}
