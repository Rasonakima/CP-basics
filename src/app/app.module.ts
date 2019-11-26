import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { NavbarComponent } from "./navbar/navbar.component";
import { LpComponent } from "./lp/lp.component";
import { ClComponent } from "./cl/cl.component";
import { FilterNamePipe } from "./filter-name.pipe";
import { LpRowComponent } from "./lp-row/lp-row.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LpComponent,
    ClComponent,
    FilterNamePipe,
    LpRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
