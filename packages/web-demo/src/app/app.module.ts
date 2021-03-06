import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/de";
import localeFr from "@angular/common/locales/fr";
import localeIt from "@angular/common/locales/it";
import localeEn from "@angular/common/locales/en";

import { HighlightModule } from "ngx-highlightjs";
import { HighlightProvider } from "./common/highlight.provider";

import { IntranetLayoutComponent } from "./intranet-layout/intranet-layout.component";

import { ErrorService } from "./intranet-layout/services/error.service";
import { BootstrapComponentsModule } from "./bootstrap/components/bootstrap-components.module";
import { NgBootstrapComponentsModule } from "./ng-bootstrap/components/ng-bootstrap-components.module";
import { IntranetComponentsModule } from "./intranet-layout/intranet-components.module";
import { PostSampleComponentsModule } from "./post-sample/post-sample-components.module";
import { SwissPostIntranetHeaderModule } from "@swisspost/intranet-header";
import { HomeComponent } from "./home/home.component";
import { CWFCommonModule } from "./common/cwf-common.module";

registerLocaleData(localeDe);
registerLocaleData(localeFr);
registerLocaleData(localeIt);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    IntranetLayoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BootstrapComponentsModule,
    NgBootstrapComponentsModule,
    IntranetComponentsModule,
    CWFCommonModule,
    PostSampleComponentsModule,
    SwissPostIntranetHeaderModule,
    ToastrModule.forRoot({
      extendedTimeOut: 0,
      closeButton: true,
      toastClass: "toast",
    }),
    HighlightModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ErrorService, HighlightProvider.Config],
  bootstrap: [AppComponent],
})
export class AppModule {}
