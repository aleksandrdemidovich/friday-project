import s from "./HeaderBtn.module.css"


<<<<<<< HEAD

=======
>>>>>>> 92a23cd9abb597c728347bb3d4caf4737124b98f
export default function HeaderBtn(props) {


const priorityStyle = props.isActive ? `${s.headerBtn} ${s.active} `: `${s.headerBtn}` //// Тернарное выражение для добавления класса active при переключение кнопок

  return (
    
      <button className={priorityStyle}>      
<<<<<<< HEAD
        <img src={props.img} alt=""  />      
=======
        <img src={props.img} alt=""  />        
>>>>>>> 92a23cd9abb597c728347bb3d4caf4737124b98f
        {props.name}
      </button>
    
  );
}
