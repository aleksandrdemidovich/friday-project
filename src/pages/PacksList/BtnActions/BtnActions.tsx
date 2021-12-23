import s from "./BtnActions.module.css"

type BtnActionsPropsType = {
    onClick:() => void
    style: any
    name:string

} 
export default function BtnActions(props:BtnActionsPropsType) {


return (
       
        <button className={s.btn} style={props.style} onClick={props.onClick}>{props.name}</button>   

);
}