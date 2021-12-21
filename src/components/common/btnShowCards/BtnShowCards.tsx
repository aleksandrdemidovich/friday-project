// import { style1Type } from "../../../pages/PacksList/PacksList";
import s from "./BtnShowCards.module.css"

type BtnShowCardsPropsType = {
    onClick:() => void
    style: any
    name:string

} 
export default function BtnShowCards(props:BtnShowCardsPropsType) {


return (
    <div className={s.btnShowCards}>
        <button className={s.btn} style={props.style} onClick={props.onClick}>{props.name}</button>    
    </div>
);
}
