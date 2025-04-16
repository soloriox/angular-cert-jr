import { Routes } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ComponentsComponent } from './components/components/components.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormsComponent } from './components/forms/forms.component';
import { NgModulesComponent } from './components/ng-modules/ng-modules.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RouterComponent } from './components/router/router.component';
import { ServicesComponent } from './components/services/services.component';
import { TypescriptComponent } from './components/typescript/typescript.component';

export const routes: Routes = [
    { path: 'basics', component: BasicsComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'router', component: RouterComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'ng-modules', component: NgModulesComponent }
];
