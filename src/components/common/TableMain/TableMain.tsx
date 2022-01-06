
import s from './TableMain.module.css'


export default function TableMain() {
    return (
        <div className={s.tableMain}>
            <table className={s.table}>
                <thead className={s.tableHeader}>
                <tr className={s.tr}>
                    <th className={s.th}>Name</th>
                    <th className={s.th}>Cards</th>
                    <th className={s.th}>Last updated</th>
                    <th className={s.th}>Created by</th>
                    <th className={s.th}>Actions</th>
                </tr>
                
                </thead>
                    <tbody>
                        <div className={s.scrollTableBody}>
                            <tr className={s.tr}>
                                <td className={s.td}>Pack Name</td>
                                <td className={s.td}>4</td>
                                <td className={s.td}>18.03.2021</td>
                                <td className={s.td}>Ivan Ivanov</td>
                                <td className={s.td}>
                                    <div className={s.btnBox}>
                                        <button>Delete</button>
                                        <button>Edit</button>
                                        <button>Learn</button>
                                    </div>
                                </td>
                            </tr>
                        </div>
                    </tbody>
            </table>
        </div>
    );
}