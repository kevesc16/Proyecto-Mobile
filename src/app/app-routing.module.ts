import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { PerfilPage } from './pages/perfil/perfil.page';
const redirectLLog =()=> redirectUnauthorizedTo(('/login'));
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu/:correo',
    canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectLLog},
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'disponibilidad',
    canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectLLog},
    loadChildren: () => import('./pages/disponibilidad/disponibilidad.module').then( m => m.DisponibilidadPageModule)
  },
  {
    path: 'formulario',
    canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirectLLog},
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./pages/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
