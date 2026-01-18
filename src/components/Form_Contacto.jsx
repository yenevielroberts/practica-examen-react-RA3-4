import { useRef, useState } from "react"

export  function Form(){

    const inputNameRef=useRef(null);
    const inputEmailRef=useRef(null);
    const inputPassRef=useRef(null);

    const handleClick=(inputName)=>{

        switch (inputName){
            case "name":
                inputNameRef.current.focus();
            break;
             case "email":
                inputEmailRef.current.focus();
            break;
             case "password":
                inputPassRef.current.focus();
            break;
            default:
                inputNameRef.current.focus();
        } 

    }

    const [formData, setFormData]=useState({
        email:""
    })
    const [displayMensaje, setDisplayMensaje]=useState([]);

    const validarInfo=(email)=>{

        let mensaje=null;

        if (!email || email!= "yeneviel@gmail.com"){
           mensaje="Email incorrecto X"
        }

        if(mensaje != null){
            setDisplayMensaje({['credenciales']:mensaje})
        }
        return mensaje
    }

    const handleSubmit=(e)=>{

        e.preventDefault();

        const email=document.getElementById("email").value

        const valido= validarInfo(email)

        if(valido==null){
            
            setDisplayMensaje({['credenciales']:"Usuario logeado"})
        }
    }

    const handleChange=(e)=>{

        const {name, value}=e.target
        setFormData((prev)=>({...prev,[name]:value}));

        validarInfo(value)
        setDisplayMensaje(null)
    }
    return(
        <>
            <div className="div-form">
                <h1>Hola, Form</h1>
                <form onSubmit={handleSubmit}>
                    {displayMensaje &&(
                        <div className='mensajeError' role="alert">
                              {displayMensaje.credenciales}
                        </div>
                    )}
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Introduce tu nombre" ref={inputNameRef} onChange={handleChange} aria-label="Area de texto para escribir el nombre"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="emial" placeholder="tunombre@gmail.com" ref={inputEmailRef} aria-label="Area de texto para escribir el email" aria-invalid/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={inputPassRef} aria-label="Area de texto para escribir la contraseña"/>

                    <label htmlFor="password1">Confirmation Password</label>
                    <input type="password" id="password1" name="password1" aria-label="Area de texto para confirmar la contraseña"/>

                    <div className="btn-container">
                        <button id="btn-enviar" className="btn-enviar" aria-label="Boton enviar formulario">Enviar Formulario</button>
                    </div>
                </form>

                <div className="btns-fill-form">
                    <h2>Botons to refill the form</h2>
                    <div className="container-btns-fill">
                        <button className="btn-fill" onClick={()=>handleClick("name")} aria-label="botón que pone el focus en el area de texto de nombre">Name</button>
                        <button className="btn-fill" onClick={()=>handleClick("email")} aria-label="botón que pone el focus en el area de texto de email">Email</button>
                        <button  className="btn-fill" onClick={()=>handleClick("password")}aria-label="botón que pone el focus en el area de texto de contraseña">Password</button>
                    </div>
                </div>
            </div>
        </>
    )
}