import { PlanService } from './../services/plan.service';
import { PlatformService } from './../services/platform.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DateValidator } from './../../shared/validators/date.validators';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
  providers: [MessageService]
})
export class PersonalDataComponent implements OnInit {

  personalDataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private platformService: PlatformService,
    private planService: PlanService) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.personalDataForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60), Validators.email]],
      birth: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      phone: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]]
    });
  }

  public finish(): void {
    const selectedPlatform = this.platformService.getSelectPlatform();
    const selectedPlan = this.planService.getSelectPlan();
    const data = this.personalDataForm.value;
    this.personalDataForm.reset();


    this.messageService.add({severity:'success', summary:'Sucesso!', detail:'Dados salvos com sucesso!'});
    console.log('Plataforma selecionada: ', selectedPlatform.nome);
    console.log('Plano selecionado: ', `Franquia: ${selectedPlan.franquia}, Valor: ${selectedPlan.valor}`);
    console.log('Dados: ', `Nome: ${data.name}, Email: ${data.email}, Nascimento: ${data.birth}, `
      + `CPF: ${data.cpf}, Phone: ${data.phone}`);
  }

}
