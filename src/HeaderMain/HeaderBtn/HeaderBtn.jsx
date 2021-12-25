import s from "./HeaderBtn.module.css"



export default function HeaderBtn(props) {


const priorityStyle = props.isActive ? `${s.headerBtn} ${s.active} `: `${s.headerBtn}` //// Тернарное выражение для добавления класса active при переключение кнопок

  return (
    
      <button className={priorityStyle}>      
        <img src={props.img} alt=""  />      
        {props.name}
      </button>
    
  );
}
