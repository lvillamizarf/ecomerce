

const validarFormulario=(e)=>{
    // console.log(e.target); // este es el evento
    switch(e.target.name){ // aquí se accede al atributo name
        case"nombre-articulo":
            if(validarCaracteresInput.nombreArticulo.test(e.target.value)){
                manipularClasesValido(seccionesInput.Nombre_articulo);
                //campos['nombre-articulo']=true;
            }
            else{
                manipularClasesInvalido(seccionesInput.Nombre_articulo);
               // campos['nombre-articulo']=false;
            }
        break;

        case"descripcion_articulo":
        if(validarCaracteresInput.descripcionArticulo.test(e.target.value)){
            manipularClasesValido(seccionesInput.Descripcion_articulo);
            //campos['descripcion']=true;
        }
        else{
            manipularClasesInvalido(seccionesInput.Descripcion_articulo);
            //campos['descripcion']=false;
        }
        break;
 
        case"datosVendedor":datosVendedor
        if(expresiones.descripcion.test(e.target.value)){
            manipularClasesValido(grupos.Descripcion);
            campos['descripcion']=true;
            
        }
        else{
            manipularClasesInvalido(grupos.Descripcion);
            campos['descripcion']=false;
        }
        
        break;


        case"apellidoVendedor":
        if(expresiones.descripcion.test(e.target.value)){
            
            document.getElementById('grupo__apellidoVendedor').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__apellidoVendedor').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__apellidoVendedor i').classList.remove('fa-solid');
            document.querySelector('#grupo__apellidoVendedor i').classList.remove('fa-circle-xmark');
            document.querySelector('#grupo__apellidoVendedor i').classList.add('fa-solid');
            document.querySelector('#grupo__apellidoVendedor i').classList.add('fa-circle-check');
            document.querySelector('#grupo__apellidoVendedor .formulario__input-error').classList.remove('formulario__input-error-activo');
        }
        else{
            document.getElementById('grupo__apellidoVendedor').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__apellidoVendedor').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__apellidoVendedor i').classList.add('fa-solid');
            document.querySelector('#grupo__apellidoVendedor i').classList.add('fa-circle-xmark');
            document.querySelector('#grupo__apellidoVendedor .formulario__input-error').classList.add('formulario__input-error-activo');
           
        }
        
        break;


        case"identificacionVendedor":
        if(expresiones.cedula.test(e.target.value)){
            
            document.getElementById('grupo__docVendedor').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__docVendedor').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__docVendedor i').classList.remove('fa-solid');
            document.querySelector('#grupo__docVendedor i').classList.remove('fa-circle-xmark');
            document.querySelector('#grupo__docVendedor i').classList.add('fa-solid');
            document.querySelector('#grupo__docVendedor i').classList.add('fa-circle-check');
            document.querySelector('#grupo__docVendedor .formulario__input-error').classList.remove('formulario__input-error-activo');
        }
        else{
            document.getElementById('grupo__docVendedor').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__docVendedor').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__docVendedor i').classList.add('fa-solid');
            document.querySelector('#grupo__docVendedor i').classList.add('fa-circle-xmark');
            document.querySelector('#grupo__docVendedor .formulario__input-error').classList.add('formulario__input-error-activo');
           
           
        }
        
        break;
        case"precio":
        if(expresiones.cedula.test(e.target.value)){
        
            document.getElementById('grupo__precio').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__precio').classList.add('formulario__grupo-correcto');
            document.querySelector('#grupo__precio i').classList.remove('fa-solid');
            document.querySelector('#grupo__precio i').classList.remove('fa-circle-xmark');
            document.querySelector('#grupo__precio i').classList.add('fa-solid');
            document.querySelector('#grupo__precio i').classList.add('fa-circle-check');
            document.querySelector('#grupo__precio .formulario__input-error').classList.remove('formulario__input-error-activo');
        }
        else{
            document.getElementById('grupo__precio').classList.add('formulario__grupo-incorrecto');
            document.getElementById('grupo__precio').classList.remove('formulario__grupo-correcto');
            document.querySelector('#grupo__precio i').classList.add('fa-solid');
            document.querySelector('#grupo__precio i').classList.add('fa-circle-xmark');
            document.querySelector('#grupo__precio .formulario__input-error').classList.add('formulario__input-error-activo');
           
           
        }
        
        break;
        
        // case "valueInput":
        //     if(getValueInput.length===0){
        //         console.log('funciona');
        //     }
        //     else{
        //         console.log('no está vacío');
        //     }
        // break;
    };
}