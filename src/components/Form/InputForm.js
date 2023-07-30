import React, { useState } from "react";
import styles from "./InputForm.module.css";
import InputCard from "../UI/InputCard";

const InputForm = ({ onCreateResult, onResetView }) => {
  const initialInput = {
    "current-savings": "10000",
    "yearly-contribution": "1200",
    "expected-return": "7",
    duration: "10",
  };

  const [userInput, setUserInput] = useState(initialInput);

  const inputChangeHandler = (id, value) => {
    setUserInput((previousState) => {
      return { ...previousState, [id]: value };
    });
  };

  const calculateHandler = (e) => {
    e.preventDefault();

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const initialInvestment = currentSavings;
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        key: Math.random(),
        year: new Date().getFullYear() + i,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalYearlyInterest:
          currentSavings - initialInvestment - yearlyContribution * (i + 1),
        investedCapital: initialInvestment + yearlyContribution * (i + 1),
      });
    }
    onCreateResult(yearlyData);
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <InputCard>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput["current-savings"]}
            id="current-savings"
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            min="1"
            step="0.01"
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
      </InputCard>
      <InputCard>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput["expected-return"]}
            id="expected-return"
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            min="1"
            step="1"
            value={userInput.duration}
            id="duration"
            onChange={(e) => {
              inputChangeHandler(e.target.id, e.target.value);
            }}
          />
        </p>
      </InputCard>
      <p className={styles.action}>
        <button
          onClick={() => {
            onResetView(false);
            setUserInput(initialInput);
          }}
          type="reset"
          className={styles["buttonAlt"]}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
