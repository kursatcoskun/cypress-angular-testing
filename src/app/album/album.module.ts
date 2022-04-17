import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  imports: [CommonModule, AlbumRoutingModule],
  declarations: [AlbumComponent],
})
export class AlbumModule {}
