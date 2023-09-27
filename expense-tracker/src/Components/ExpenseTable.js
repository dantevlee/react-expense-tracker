import React from "react";

const ExpenseTable = ({ expenseData, setExpenseData }) => {
  const handleDelete = (id) => {
    const newExpenseData = expenseData.filter((expense) => expense.id !== id);
    setExpenseData(newExpenseData);
  };

  let expenseDataRow = null;
  if (Array.isArray(expenseData)) {
    expenseDataRow = expenseData.map((expense) => (
      <tr key={expense.id}>
        <td>{expense.date}</td>
        <td>${expense.amount}</td>
        <td>{expense.selectedCategory}</td>
        <td>{expense.description}</td>
        <td>
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Actions?</th>
          </tr>
        </thead>
        <tbody>{expenseDataRow}</tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
