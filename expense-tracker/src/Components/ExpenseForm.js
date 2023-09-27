import React from "react";

const ExpenseForm = () => {
  return (
    <React.Fragment>
      <div>
        <form>
          <label date="date">Date of Purchase:</label>
          <input type="date"></input>
          <label date="amount">Amount:</label>
          <input type="number" min={1}></input>
          <label category="category">Category:</label>
          <select>
            <option>Bills & Utilities</option>
            <option>Dining</option>
            <option>Retail Purchase</option>
            <option>Entertainment</option>
            <option>Travel</option>
            <option>Other</option>
          </select>
          <label description="description">Description:</label>
          <input type="text"></input>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ExpenseForm;
