import s from './PackListRow/PackListRow.module.css'



type PackListRowPropsType = {
    
}


export const PackListRow = (props:PackListRowPropsType) => {
    return (
        <div className={s.packListRow}>

        </div>
    )
}



// import s from "./BtnShowCards.module.css"

// type BtnShowCardsPropsType = {
//     onClick:() => void
//     style: any
//     name:string

// } 
// export default function BtnShowCards(props:BtnShowCardsPropsType) {


// return (
//     <div className={s.btnShowCards}>
//         <button className={s.btn} style={props.style} onClick={props.onClick}>{props.name}</button>    
//     </div>
// );
// }