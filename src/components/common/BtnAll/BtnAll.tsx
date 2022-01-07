import s from "./BtnAll.module.css"

type BtnAllPropsType = {
    onClick: () => void
    style: any
    name: string
}


export default function BtnAll(props: BtnAllPropsType) {

    return (
        <button className={s.btnAll} onClick={props.onClick} style={props.style}>{props.name}</button>
    );
}