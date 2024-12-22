import Contact from "./Contact";
import style from "./ContactsList.module.css";

export default function ContactList({ list, onDelete }) {
  return (
    <>
      <ul className={style.list}>
        {list.map((elem) => {
          return (
            <li key={elem.id} className={style.listElem}>
              <Contact elem={elem} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
