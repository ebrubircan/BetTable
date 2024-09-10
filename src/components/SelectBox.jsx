import styles from "./SelectBox.module.css"; 

const SelectBox = ({ value, onChange }) => {
  return (
    <div className={styles.selectBoxContainer}>
      <strong>Kupon Tutarı</strong><br/>
      <select value={value} onChange={onChange} className={styles.selectBox}>
        {[...Array(10)].map((_, i) => {
          const optionValue = (i + 1) * 10;
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue} TL
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
