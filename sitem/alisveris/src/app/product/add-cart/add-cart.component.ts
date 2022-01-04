import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/product.service';
import { SepetService } from 'src/app/services/sepet.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css'],
  providers: [ProductService,SepetService]
})
export class AddCartComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private sepetService:SepetService) { }

    productAddForm!:FormGroup;
  product:Product=new Product();
  p:Product=new Product();
  

  products: Product[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sepetService.getSepet().subscribe(data => {
        this.products = data
      })
    })

  }

  

}
