import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { AddCartComponent } from './product/add-cart/add-cart.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { Product } from './product/product';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'product-add',component:AddProductComponent,canActivate:[LoginGuard]},
  {path:'cart-add',component:AddCartComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/categoryID/:CatID', component:ProductComponent}
];

const routesCategory: Routes = [
  {path:'categories',component: ProductComponent},
  {path:'',redirectTo:'categories',pathMatch:'full'},
  {path:'categories/id/:ID', component:CategoryComponent}
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routesCategory)],
  exports: [RouterModule],
  }
)
export class AppRoutingModule { }
