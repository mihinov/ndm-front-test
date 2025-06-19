import { Routes } from '@angular/router';
import { PageMain } from './pages/page-main/page-main';
import { LayoutMain } from './layouts/layout-main/layout-main';

export const routes: Routes = [
  { path: "", component: LayoutMain, children: [
    { path: "", component: PageMain }
  ]},
  { path: "**", redirectTo: "" }
];
