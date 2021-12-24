import s from "./Subtitle.module.css"


export default function Subtitle(props) {
  return (
    <div className={s.subtitleWrap}>
        <h3 className={s.subtitle}>{props.subtitle}</h3>    
    </div>
  );
}
