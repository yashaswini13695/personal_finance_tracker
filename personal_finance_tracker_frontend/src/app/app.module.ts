import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "./_material/material.module";
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionManagementComponent } from './transaction-management/transaction-management.component';
import { BodyComponent } from './body/body.component';
import { TransactionFormDialogComponent } from './_models/transaction-form-dialog/transaction-form-dialog.component';
import { DeleteConfirmationDialogComponent } from './_models/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  // Import this

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    SidenavComponent,
    DashboardComponent,
    TransactionManagementComponent,
    BodyComponent,
    TransactionFormDialogComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule   // Add this module for date handling
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
