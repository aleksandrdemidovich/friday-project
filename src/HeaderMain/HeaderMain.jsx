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
<<<<<<< HEAD
                    <HeaderBtn isActive={false} name="Packs list"
                     img={imgPackList} />
=======
                    <HeaderBtn isActive={false} name="Packs list" img={imgPackList} />
>>>>>>> 92a23cd9abb597c728347bb3d4caf4737124b98f
                    <HeaderBtn isActive={true} name="Profile" img={imgProfile} />
                </div>
            </div>
        </div>
    </div>
    );
}
