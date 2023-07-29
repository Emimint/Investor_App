import React, { useState } from "react";
import styles from "./InputForm.module.css";
import InputCard from "../UI/InputCard";

const InputForm = ({ onCreateResult, onResetView }) => {
  const initialInput = {
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
  };

  const [userInput, setUserInput] = useState(initialInput);

  const inputChangeHandler = (id, value) => {
    setUserInput((previousState) => {
      if (id === "current-savings") {
        return { ...previousState, currentSavings: +value };
      } else if (id === "yearly-contribution") {
        return { ...previousState, yearlyContribution: +value };
      } else if (id === "expected-return") {
        return { ...previousState, expectedReturn: +value };
      } else if (id === "duration") {
        return { ...previousState, duration: +value };
      }
      return initialInput;
    });
  };

  const calculateHandler = (e) => {
    e.preventDefault();

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    const totalYearlyInterest = 0;

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
        totalYearlyInterest: totalYearlyInterest + yearlyInterest,
      });
    }
    onCreateResult(yearlyData);
  };

  const toggleView = () => {
    inputChangeHandler(); // to reset all values to default
    onResetView(); // set Results component visibility to false
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        calculateHandler(e);
      }}
    >
      <InputCard>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.currentSavings}
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
            value={userInput.yearlyContribution}
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
            value={userInput.expectedReturn}
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
        <button onClick={toggleView} className={styles["buttonAlt"]}>
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
