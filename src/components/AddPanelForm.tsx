import { useState , useEffect } from 'react';
import { IAddPanel, IAddPanelFormProps } from '../interfaces/IAddPanel'

function AddPanelForm(props: IAddPanelFormProps) {

    const [errores, setErrores] = useState<string[]>([])

    const [panelName, setPanelName] = useState('');

    const [buttonVisible, setButtonVisible] = useState(false);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPanelName(event.target.value.trim().toLowerCase()); // se hace trim() y toLowerCase() al input
    }

    const validateForm = () => {
        let newError: string[] = [];

        if (!Array.isArray(props.panels)) {
            return null; // O mostrar un mensaje de error adecuado
          }

          if(props.panels.map((panel: { name: string; }) => panel.name.toLowerCase()).includes(panelName)) {
            newError = [...newError, 'Este panel ya existe'];
          }

        // Validación para comprobar si el nombre del panel es válido
        if(!panelName) {
            newError = [...newError, 'El nombre del panel no puede estar vacío'];
        }
          
        if (newError.length === 0) {
            props.onSave();
            setErrores([]);
          } else {
            setErrores([...newError]);
          }
    }

    useEffect(() => {
        // Validación para comprobar si se debe mostrar el botón de "Add"
        setButtonVisible(panelName !== '');
    }, [panelName]);

    return (
        <form>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="taskName">Panel</label></td>
                        <td><input type="text" onChange={handleInput} name="name" placeholder='New name panel' value={panelName} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            {buttonVisible && <button type="button" onClick={validateForm}>Add</button>}
                            {errores.length > 0 && (
                                <div>
                                    <h2>Errores</h2>
                                    <div className="error-card">
                                        {errores.map((error) => {
                                            return <p>{error}</p>
                                        })}
                                    </div>
                                </div>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default AddPanelForm;
