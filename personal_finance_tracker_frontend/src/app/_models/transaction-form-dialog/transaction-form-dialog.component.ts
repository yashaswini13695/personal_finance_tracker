import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-form-dialog',
  templateUrl: './transaction-form-dialog.component.html',
  styleUrls: ['./transaction-form-dialog.component.scss']
})
export class TransactionFormDialogComponent {
  transactionForm: FormGroup;
  categories: string[] = ['Food', 'Rent', 'Entertainment', 'Utilities', 'Other'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TransactionFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.transactionForm = this.fb.group({
      type: [data.type, Validators.required],
      category: [data.transaction?.category || '', Validators.required],
      amount: [data.transaction?.amount || 0, [Validators.required, Validators.min(0)]],
      date: [data.transaction?.date || new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.dialogRef.close(this.transactionForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
