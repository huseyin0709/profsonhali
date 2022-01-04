import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/category';
import { SepetService } from '../services/sepet.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService,SepetService]
})
export class ProductComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private myAlertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private sepetService:SepetService) { }
  title = "Ürün Listesi"
  filterText = ""

  productAddForm!:FormGroup;
  product:Product=new Product();
  p:Product=new Product();
  

  products: Product[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["CatID"]).subscribe(data => {
        this.products = data
      })
    })

    this.createProductAddForm();

  }
  
  createProductAddForm(){
    this.productAddForm=this.formBuilder.group(
      {
        name:[this.p.name],
        description:[this.p.description],
        imageUrl:[this.p.imageUrl],
        price:[this.p.price],
      }
    )
    
  }

  
  addToChart(p: Product) {
    this.myAlertifyService.success("Sepete Eklendi" + " " + p.name)
    
    
    if(this.productAddForm.valid){
      //this.product=Object.assign({},this.productAddForm.value)
       this.p=p;
       this.createProductAddForm();
       p=this.productAddForm.value as Product

      this.sepetService.addProduct(p).subscribe(data => {
        this.myAlertifyService.success(data.name + "Basarıyla eklendi.")
      })
    }
    else
    this.myAlertifyService.warning("Lütfen verileri tam giriniz.")

  }

}
  