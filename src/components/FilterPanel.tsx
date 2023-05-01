import { useState ,useEffect } from "react";
import { IFilterPanelProps } from "../interfaces/IFilterPanel";

function FilterPanel(props: IFilterPanelProps){
    return(
        <div style={{ textAlign: "center" }} className="filtros">
        <h2>Filtros</h2>
        <form>
            <label htmlFor="Panel-Filter">Teams:</label>
            <select>
                <option value='TODO'>TODO</option>
                <option value='QA'>QA</option>
                <option value='Development'>Development</option> 
            </select>
        </form>
    </div>
    )
}
export default FilterPanel;