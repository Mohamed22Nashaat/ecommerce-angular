
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { IBrands } from '../../core/interfaces/ibrands';

@Component({
  selector: 'app-branda',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandaComponent implements OnInit {

  private readonly _BrandService = inject(BrandsService)
 
  AllBrands : WritableSignal< IBrands[] > = signal([])
  

  ngOnInit(): void {
    this._BrandService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.AllBrands.set(res.data)
        
      }
    })
  }

}