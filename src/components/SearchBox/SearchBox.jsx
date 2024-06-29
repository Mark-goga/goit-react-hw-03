import { useId } from "react";
import css from './searchBox.module.css'
export default function SearchBox({value , onFilter}) {
    const idInput = useId();
    
    return (
        <div className={css.box}>
            <label className={css.labelInput} htmlFor={idInput}>Find contacts by name</label>
            <input value={value} onChange={(evn) => onFilter(evn.target.value)} type="text" id={idInput}/>
        </div>
    );
}