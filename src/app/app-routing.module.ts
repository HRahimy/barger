import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from "./components/core/core.component";
import {DataResolver} from "./resolvers/data.resolver";

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    resolve: [DataResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
