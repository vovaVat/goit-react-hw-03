import { useId } from "react";
import style from "./SearchBox.module.css";

export default function SearchForm({ value, onChange }) {
  const id = useId();
  return (
    <div className={style.contain}>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" value={value} onChange={onChange} />
    </div>
  );
}
