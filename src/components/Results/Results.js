import React, { useState } from "react";
import styles from "./Results.module.css";

const Results = (props) => {
  {
    /* Todo: Show below table conditionally (only once result data is available) */
  }
  {
    /* Show fallback text if no data is available */
  }

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
        {props.data.map((yearInfo) => (
          <tr key={yearInfo.key}>
            <td>${yearInfo.year}</td>
            <td>${yearInfo.savingsEndOfYear.toFixed(2)}</td>
            <td>${yearInfo.yearlyInterest.toFixed(2)}</td>
            <td>${yearInfo.totalYearlyInterest.toFixed(2)}</td>
            <td>${yearInfo.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
