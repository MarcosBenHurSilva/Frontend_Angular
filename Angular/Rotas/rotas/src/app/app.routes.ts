import { Routes } from '@angular/router';
import { IndexModule } from './pages/index/index.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';

export const routes: Routes = [
  {
    path: '',
    component: IndexModule
},
{
    path: 'portifolio/:id',
    component: PortifolioModule
},
];
