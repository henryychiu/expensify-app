import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, hiddenExpensesCount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const hiddenExpenseWord = hiddenExpensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        {hiddenExpensesCount === 0 ? (
          <p>Showing all expenses. No filters in place.</p>
        ) : (
            <p>Not showing {hiddenExpensesCount} {hiddenExpenseWord} because of filters.</p> 
        )}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpensesCount: state.expenses.length - visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);