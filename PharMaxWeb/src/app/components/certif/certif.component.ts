import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd/i18n';
import { CertifService } from 'src/app/services/certif.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css'],
})
export class CertifComponent implements OnInit {
  certifs: any;
  listOfChildrenData: any[] = [];
  isVisible = false;
  stats: any;
  isVisibleShow = false;
  isVisibleUpdate = false;
  certif: any;
  visible = false;
  date = new Date();
  userRole: string | null = null;
  searchValue = '';
  listOfDisplayData: any;
  doctors: any;
  medic: any;
  public validateForm!: FormGroup;
  userData: string | null = null;

  public single: any[] = [];
  public multi: any[] = [];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#FFFFFF'],
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor(
    private certifService: CertifService,
    private fb: FormBuilder,
    private i18n: NzI18nService,
    private docterService: DoctorService
  ) {
    this.i18n.setLocale(en_US);
  }
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      console.log(id);

      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfColumns: any[] = [
    {
      name: 'docteur',
      sortOrder: null,
      sortFn: (a: any, b: any) => a.docteur.localeCompare(b.docteur),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filterFn: (list: string[], item: any) =>
        list.some((docteur) => item.docteur.indexOf(docteur) !== -1),
    },
    {
      name: 'date consultation',
      sortOrder: null,
      sortFn: (a: any, b: any) =>
        a.dateconsultation.localeCompare(b.dateconsultation),
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'Date creation',
      sortOrder: null,
      sortFn: (a: any, b: any) =>
        a.createdAt.split('T')[0].localeCompare(b.createdAt.split('T')[0]),
      listOfFilter: [],
      filterFn: (list: string[], item: any) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
    {
      name: 'Date modification',
      sortFn: (a: any, b: any) =>
        a.updatedAt.split('T')[0].localeCompare(b.updatedAt.split('T')[0]),
      sortOrder: null,

      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (address: string, item: any) =>
        item.address.indexOf(address) !== -1,
    },
  ];
  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole');
    this.getAllertif();
    this.getStats();
  }
  deleteCertif(id: number) {
    this.certifService.deleteCertif(id).subscribe((data) => {
      this.getAllertif();
    });
  }
  showCerif(certif: any) {
    this.isVisibleShow = true;
    this.certif = certif;
  }
  getMedicam() {
    this.certifService.getMedic().subscribe((data) => {
      this.medic = data.medicaments;
      console.log(data);
    });
  }
  getDoctors() {
    this.docterService.getDoctors().subscribe((data) => {
      this.doctors = data.docteurs;
      console.log(data);
    });
  }
  public onSelect(event: any): void {
    console.log(event);
  }
  getStats() {
    this.certifService.getStats().subscribe((data) => {
      console.log(data);

      this.stats = data.map((item: any) => {
        let name = item._id;
        let value = item.total;
        return { name, value };
      });
    });
  }
  getAllertif() {
    this.getMedicam();
    this.getDoctors();
    this.certifService.getCertifs().subscribe((data) => {
      console.log(data);
      this.certifs = data.certifs;
      this.listOfDisplayData = [...this.certifs];
    });
  }
  searchAll(value: any) {
    console.log(value.target.value);

    this.listOfDisplayData = this.certifs.filter(
      (item: any) =>
        item.docteur.indexOf(value.target.value) !== -1 ||
        item.dateconsultation.indexOf(value.target.value) !== -1 ||
        item.createdAt.indexOf(value.target.value) !== -1 ||
        item.updatedAt.indexOf(value.target.value) !== -1
    );
  }
  onChangeCreatDate(value: any): void {
    this.validateForm.get('createdAt')?.setValue(new Date(value).toISOString());
  }
  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.certifs.filter(
      (item: any) => item.docteur.indexOf(this.searchValue) !== -1
    );
  }
  openModalUpdate(certif: any) {
    console.log(certif);
    this.validateForm = this.fb.group({
      _id: [certif._id ?? null, [Validators.required]],

      docteur: [certif.docteur ?? null, [Validators.required]],
      dateconsultation: [
        certif.dateconsultation ?? null,
        [Validators.required],
      ],
      createdAt: [certif.createdAt ?? null, [Validators.required]],

      updatedAt: [certif.createdAt ?? null, [Validators.required]],
      listemedicaments: [
        certif.listemedicaments ?? null,
        [Validators.required],
      ],
    });
    this.isVisible = true;
  }
  trackByName(_: number, item: any): string {
    return item.name;
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
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    console.log(this.validateForm.get('_id')?.value, this.validateForm.value);
    this.saveCertif();
    this.isVisible = false;
  }
  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleUpdate = false;
    this.isVisibleShow = false;
  }
  saveCertif() {
    this.validateForm.get('_id')?.value !== null
      ? this.certifService
          .updateCerif(
            this.validateForm.get('_id')?.value,
            this.validateForm.value
          )
          .subscribe((data) => {
            this.getAllertif();
          })
      : this.certifService
          .addCertif(this.validateForm.value)
          .subscribe((data) => {
            this.getAllertif();
          });
    this.visible = false;
    this.isVisible = false;
    this.isVisibleUpdate = false;
  }
  openModalAdd() {
    this.validateForm = this.fb.group({
      _id: [null, [Validators.required]],
      listemedicaments: [null, [Validators.required]],
      docteur: [null, [Validators.required]],
      dateconsultation: [null, [Validators.required]],
      createdAt: [null, [Validators.email, Validators.required]],

      updatedAt: [null, [Validators.required]],
    });
    this.isVisibleUpdate = true;
  }
}
