import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionFormDialogComponent } from '../_models/transaction-form-dialog/transaction-form-dialog.component';
import { DeleteConfirmationDialogComponent } from '../_models/delete-confirmation-dialog/delete-confirmation-dialog.component';
interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  date: Date;
}
@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.scss']
})
export class TransactionManagementComponent implements OnInit{
  displayedColumns: string[] = ['type', 'category', 'amount', 'date', 'actions'];
  transactions: Transaction[] = [
    { id: 1, type: 'income', category: 'Salary', amount: 5000, date: new Date() },
    { id: 2, type: 'expense', category: 'Rent', amount: 1500, date: new Date() }
  ];
  dataSource = new MatTableDataSource<Transaction>(this.transactions);

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openTransactionForm(type: 'income' | 'expense', transaction?: Transaction) {
    const dialogRef = this.dialog.open(TransactionFormDialogComponent, {
      width: '400px',
      data: { type, transaction }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (transaction) {
          // Edit transaction
          const index = this.transactions.findIndex(t => t.id === transaction.id);
          this.transactions[index] = result;
        } else {
          // Add new transaction
          result.id = this.transactions.length + 1;
          this.transactions.push(result);
        }
        this.dataSource.data = this.transactions;
      }
    });
  }

  openDeleteConfirmation(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.transactions = this.transactions.filter(t => t.id !== id);
        this.dataSource.data = this.transactions;
      }
    });
  }
}
