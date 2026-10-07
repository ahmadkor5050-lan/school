import styles from "./WeekPlan.module.css"

export default function WeekPlan() {
  return (
    <table className={styles.table}>
        {/* tr = table row */}
 <tr>
    {/* td = table data */}
<td>زنگ</td>
<td>زنگ اول</td>
<td>زنگ دوم</td>
<td>زنگ سوم</td>
 </tr>
 <tr>
    <td>شنبه</td>
    <td className={styles.day}>

        <span>فارسی</span>
        {/* br = break line */}
        {/* مبلغ بگو
         */}
        <br />
        <span>  اقای حسینی</span>
    </td>
    <td className={styles.day}>
        <span>مطالعات</span>
        <br />
        <span> آقای اکرم</span>
    </td>
    <td className={styles.day}>
        <span>زبان خارجه</span>
        <br />
        <span>اقای  نباتی </span>
    </td>
 </tr>
    </table>
  )
}
