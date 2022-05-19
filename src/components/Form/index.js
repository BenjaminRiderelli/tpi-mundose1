import React from "react";
import { useState } from "react";
import { HashLink as Link} from "react-router-hash-link";
import "./FormStyle.css";


function Form() {
  
  //const form = useRef(null);
  const [inputs, setInputs] = useState({});
  const [textArea, setTextarea] = useState("");
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const saveFormData = async () => {
    const response = await fetch('http://apilaraveltpi.herokuapp.com/Usuario', {
      method: 'POST',
      body: JSON.stringify(inputs, textArea)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }
  const handleTextArea = (event) => {
    setTextarea(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveFormData ()
      alert("Gracias!, pronto nos contactaremos contigo");
      setInputs("")
      setTextarea("")}

      catch (event) {
        alert(`Request failed: ${event.message}`);
      }
   }


    return(
        <section class="formulario-section" id="formulario-section">
          <form class="formulario" onSubmit={handleSubmit}>
      
      
          <div class="contenedor-campos">
            <h3>Para mas información <br/> <span class="click">Hace click acá</span> </h3>

                <div className="campo">
                  <label for="">Nombre: </label>

                  <input 
                  class="input-text" 
                  type="text" required
                  placeholder=""
                  name="nombre"
                  value={inputs.nombre || ""}
                  onChange={handleChange}
                  />
                </div> 
      
                <div class="campo">
                  <label for="">E-Mail: </label>

                  <input 
                  class="input-text" 
                  type="email" required
                  placeholder=""
                  name="eMail"
                  value={inputs.eMail || ""}
                  onChange={handleChange}/>
                </div>
      
                <div class="campo">
                  <label for="">Teléfono: </label>

                  <input 
                  class="input-text" 
                  type="text"
                  placeholder=""
                  name="telefono"
                  value={inputs.telefono || ""}
                  onChange={handleChange}/>
                </div>
      
                <div class="campo">
                  <label for="">Mensaje: </label>

                  <textarea 
                  class="input-text"
                  name="" 
                  id="" 
                  cols="30" 
                  rows="10"
                  value={textArea}
                  onChange={handleTextArea}
                  ></textarea>
                </div>
      
                <div class="boton-form-container" >
                  <input 
                  class="boton-form"  
                  type="submit" 
                  value="Enviar"
                  />
                </div>
          </div>  
        
                
      
        <div class="img-contact">
          <img src="img/contact-image.png" alt=""/>
        </div>
          </form>
     </section>
    );
}

export default Form;


// Para hacer un clear del form me hubiera gustado usar un .reset(); pero no me salió :(