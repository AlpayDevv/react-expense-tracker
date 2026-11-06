function Summary(props) {
  return (
    <div>
      <div>
        <p>Total Income</p>
        <span>${props.totalIncome}</span>
      </div>
      <div>
        <p>Total Expenses</p>
        <span>${props.totalExpenses}</span>
      </div>
    </div>
  );
}

export default Summary;
