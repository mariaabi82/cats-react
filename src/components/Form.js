import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section class="form">
            <form>

                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="color" value="negro"> Negro</input>
                    </label>
                    <label>
                        <input type="checkbox" name="color" value="blanco">Blanco</input>
                    </label>
                    <label>
                        <input type="checkbox" name="color" value="gris">Gris</input>
                    </label>
                    <label>
                        <input type="checkbox" name="color" value="naranja">Naranja</input>
                    </label>
                    <label>
                        <input type="checkbox" name="color" value="rayado">Rayado</input>
                    </label>
                </div>

                <div class="radio">
                    <label>
                        <input type="radio" name="sexo" value="f">Femenino</input>
                    </label>
                    <label>
                        <input type="radio" name="sexo" value="m">Masculino</input>
                    </label>
                    <label>
                        <input type="radio" name="sexo" value="i">Indiferente</input>
                    </label>
                </div>

                <div class="name">Nombre
                    <input type="text" name="name" placeholder=""></input>
                </div>

                <div class="phone">Telefono
                    <input type="text" name="phone" placeholder=""></input>
                </div>

                <input type="submit" value="Filtrar"></input>

            </form>
        </section>

        <section class="adopt">
        </section>
    
    )
                                                
};
                                                
export default Form;