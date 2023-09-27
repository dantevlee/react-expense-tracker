import React from "react";

const ExpenseTable = ({ expenseData, onDeleteExpense }) => {
  let expenseDataRow = null;

  if (Array.isArray(expenseData) && expenseData.length > 0) {
    expenseDataRow = expenseData.map((expense) => (
      <tr key={expense.id}>
        <td>{expense.date}</td>
        <td>${expense.amount}</td>
        <td>{expense.selectedCategory}</td>
        <td>{expense.description}</td>
        <td>
          <button
            onClick={() => onDeleteExpense(expense.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  } else {
    expenseDataRow = (
      <tr>
        <td colSpan="5" className="text-center">
          No expenses recorded.
        </td>
      </tr>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Expense History</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{expenseDataRow}</tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
