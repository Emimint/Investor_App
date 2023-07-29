import styles from "./Results.module.css";

const Results = (props) => {
    {/* Todo: Show below table conditionally (only once result data is available) */}
{/* Show fallback text if no data is available */}

    return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER - year</td>
          <td>TOTAL SAVINGS END OF YEAR - savingsEndOfYear</td>
          <td>INTEREST GAINED IN YEAR - yearlyInterest</td>
          <td>TOTAL INTEREST GAINED - sum of yearlyInterest</td>
          <td>TOTAL INVESTED CAPITAL - savingsEndOfYear + yearlyInterest</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Results;
