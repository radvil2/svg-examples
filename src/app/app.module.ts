import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TreeModule } from "./examples";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, TreeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
