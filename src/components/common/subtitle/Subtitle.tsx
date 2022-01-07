import s from "./Subtitle.module.css"


type SubtitlePropsType = {
    subtitle: string
}

export default function Subtitle(props: SubtitlePropsType) {
  return (
    <div className={s.subtitleWrap}>
        <h3 className={s.subtitle}>{props.subtitle}</h3>    
    </div>
  );
}
