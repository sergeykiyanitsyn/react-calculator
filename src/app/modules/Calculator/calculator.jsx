'use client' // This is a client component

import React from 'react'
import { useState } from 'react'
import styles from './calculator.module.css'

const BUTTONS_7_9 = ['7', '8', '9']
const BUTTONS_4_6 = ['4', '5', '6']
const BUTTONS_1_3 = ['1', '2', '3']

export const Calculator = () => {
  const [operand1, setOperand1] = useState('')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')
  const [isResult, setIsResult] = useState(false)

  const onClickNum = (num) => {
    operator === '' ? setOperand1(num) : setOperand2(num)
    setIsResult(false)
  }

  const onClickOperator = (operation) => {
    operand2 === '' ? setOperator(operation) : operator
    setIsResult(false)
  }

  const onClickClear = () => {
    setOperand1('')
    setOperator('')
    setOperand2('')
  }

  const greenScreen = () => {
    setIsResult(true)
  }

  const onClickSumm = () => {
    let sum = 0
    if (operand2) {
      const numOperand1 = Number(operand1)
      const numOperand2 = Number(operand2)
      switch (operator) {
        case '*':
          sum = (numOperand1 * numOperand2).toFixed(0)
          greenScreen()
          break
        case '+':
          sum = (numOperand1 + numOperand2).toFixed(0)
          greenScreen()
          break
        case '-':
          sum = (numOperand1 - numOperand2).toFixed(0)
          greenScreen()
          break
        case '/':
          sum = (numOperand1 / numOperand2).toFixed(0)
          greenScreen()
          break
      }
    }
    setOperand1(sum)
    setOperator('')
    setOperand2('')
  }

  return (
    <>
      <div className={styles.container}>
        <div className={isResult ? styles.greenScreen : styles.screen}>
          <span className={styles.numbers}> {operand1 + operator + operand2} </span>
        </div>
        <div className={styles.buttons}>
          <div className={styles.boxButton}>
            {BUTTONS_7_9.map((num) => {
              return (
                <button
                  key={num}
                  className={styles.button}
                  onClick={() => onClickNum(num)}
                >
                  {' '}
                  {num}{' '}
                </button>
              )
            })}
            <button className={styles.button} onClick={() => onClickOperator('*')}>
              {' '}
              x{' '}
            </button>{' '}
          </div>
          <div className={styles.boxButton}>
            {BUTTONS_4_6.map((num) => {
              return (
                <button
                  key={num}
                  className={styles.button}
                  onClick={() => onClickNum(num)}
                >
                  {' '}
                  {num}{' '}
                </button>
              )
            })}
            <button className={styles.button} onClick={() => onClickOperator('/')}>
              {' '}
              /
            </button>{' '}
          </div>
          <div className={styles.boxButton}>
            {BUTTONS_1_3.map((num) => {
              return (
                <button
                  key={num}
                  className={styles.button}
                  onClick={() => onClickNum(num)}
                >
                  {' '}
                  {num}{' '}
                </button>
              )
            })}
            <button className={styles.button} onClick={() => onClickOperator('+')}>
              {' '}
              +
            </button>{' '}
          </div>
          <div className={styles.boxButton}>
            {' '}
            <button className={styles.button} onClick={onClickClear}>
              {' '}
              С{' '}
            </button>
            <button className={styles.button} onClick={() => onClickNum('0')}>
              {' '}
              0{' '}
            </button>
            <button className={styles.button} onClick={onClickSumm}>
              {' '}
              ={' '}
            </button>
            <button className={styles.button} onClick={() => onClickOperator('-')}>
              {' '}
              -{' '}
            </button>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
