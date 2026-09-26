import React from 'react'
import styles from "./page.module.css"
import Location from './_components/Location'

export default function page() {
  return (
    <  div>
      <h1 className={styles.head}>دبیرستان متوسطه اول سروش دانش </h1>
      <p className={styles.workingHour}> ساعت پاسخگویی: روزهای کاری از ساعت ۸ تا ۱۲</p>  
      <a className={styles.tel} href="tel:+1234">
          <svg viewBox="0 0 24 24" className={styles.arr2} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className={styles.text}>تماس</span>
  <span className={styles.circle}></span>
  <svg viewBox="0 0 24 24" className={styles.arr1} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
      </a>
    <Location />
    </div>
  )
}
