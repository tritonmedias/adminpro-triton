import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { AccoutSettingsComponent } from "./accout-settings/accout-settings.component";
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from "./rxjs/rxjs.component";

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
           { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', descripcion: 'Escritorio' } },
           { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', descripcion: 'Barra de progreso' } },
           { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas', descripcion: 'Gráficas de donas' } },
           { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Promesas' } },
           { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes del tema', descripcion: 'Ajustes' } },
           { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
           { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );