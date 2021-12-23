import HeaderBtn from "./HeaderBtn/HeaderBtn";
import s from "./HeaderMain.module.css"
import imgPackList from "../assets/images/pack-list.svg"
import imgProfile from "../assets/images/profile.svg"







export default function HeaderMain() {
    
return (
<div className={s.headerMain}>
        <div className="container">
            <div className={s.wrapper}>
                <h1 className={s.title}>It-incubator</h1>
                <div className={s.btnWrap}>              
                    <HeaderBtn isActive={false} name="Packs list" img={imgPackList} />
                    <HeaderBtn isActive={true} name="Profile" img={imgProfile} />
                </div>
            </div>
        </div>
    </div>
    );
}
