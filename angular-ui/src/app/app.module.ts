import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {UserCreationDialogComponent} from "./components/user-creation/user-creation.component";
import {ConfirmationDialogComponent} from "./components/confirmation-dialog/confirmation-dialog.component";
import {UserEditDialogComponent} from "./components/user-edit/user-edit.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserManagementComponent} from "./components/user-management/user-management.component";
import {appRoutes} from "./app.routing";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UsersService} from "./services/users.service";
import {UrlResolverService} from "./services/url-resolver.service";

@NgModule({
    declarations: [
        AppComponent,
        UserManagementComponent,
        UserListComponent,
        UserEditDialogComponent,
        ConfirmationDialogComponent,
        UserCreationDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UrlResolverService, UsersService],
    bootstrap: [AppComponent],
    entryComponents: [UserEditDialogComponent, UserEditDialogComponent, ConfirmationDialogComponent, UserCreationDialogComponent]
})
export class AppModule {
}
