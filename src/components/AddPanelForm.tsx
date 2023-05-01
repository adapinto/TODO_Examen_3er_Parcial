import { useState , useEffect } from 'react';
import { IAddPanel, IAddPanelFormProps } from '../interfaces/IAddPanel'

function AddPanelForm(props: IAddPanelFormProps) {

    const [errores, setErrores] = useState<string[]>([])

    const validateForm = () => {
        
        let newError: string[] = [];
        

        if(!props.task.name || props.task.name === '') {            
            newError = [...newError, 'El nombre de la tarea es obligatorio']            
        }

        if( newError.length === 0 ) {
            props.onSave()
            setErrores([]) 
        }else{
            setErrores([...newError])    
        }
        
    }
  
    return (        
        <form>
            <table>
                <tr>
                    <td> <label htmlFor="taskName">Panel</label> </td>
                    <td> <input type="text" onChange={props.onChangeInput} name="name" placeholder='New name panel' value={props.task.name} /> </td>
                </tr>
                
                <tr>
                    <td></td>
                    
                        <td>
                            <button type="button" onClick={ validateForm }  >Add</button>
                            { errores.length > 0 && (
                            <div>
                                <h2>Errores</h2>
                                <div className="error-card">   
                                    { errores.map((error) => {
                                        return <p>{error}</p>
                                    })}                                                                 
                                </div>
                            </div>
                            ) }
                        </td>
                    
                </tr>            

            </table>        
        </form>        
    );

}

export default AddPanelForm;
