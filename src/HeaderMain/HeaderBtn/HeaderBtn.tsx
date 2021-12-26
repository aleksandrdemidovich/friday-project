import s from "./HeaderBtn.module.css"


export default function HeaderBtn(props: any) {


const priorityStyle = props.isActive ? `${s.headerBtn} ${s.active} `: `${s.headerBtn}`

  return (
    
      <button className={priorityStyle} id={props.id} onClick={props.onClick}>
        <img src={props.img} alt="" />
        {props.name}
      </button>
    
  );
}
