

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
 
        case"nombre-vendedor":
            if(validarCaracteresInput.nombreVend.test(e.target.value)){
                manipularClasesValido(seccionesInput.nombreVendedor);
                //campos['descripcion']=true;
            }
            else{
                manipularClasesInvalido(seccionesInput.nombreVendedor);
                //campos['descripcion']=false;
            }
        
        break;

        case"apellido-vendedor":
            if(validarCaracteresInput.apellidoVen.test(e.target.value)){
                manipularClasesValido(seccionesInput.apellidoVen);
                //campos['descripcion']=true;
            }
            else{
                manipularClasesInvalido(seccionesInput.apellidoVen);
                //campos['descripcion']=false;
            }
    
        break;

        case"identificacion-vendedor":
            if(validarCaracteresInput.identificacion.test(e.target.value)){
                manipularClasesValido(seccionesInput.indenti_vendedor);
                //campos['descripcion']=true;
            }
            else{
                manipularClasesInvalido(seccionesInput.indenti_vendedor);
                //campos['descripcion']=false;
            }

        break;

        case"precio-articulo":
            if(validarCaracteresInput.precioArt.test(e.target.value))
            {
                manipularClasesValido(seccionesInput.precioArticulo);
                //campos['descripcion']=true;
            }
            else{
                manipularClasesInvalido(seccionesInput.precioArticulo);
                //campos['descripcion']=false;
            }

        break;

   
        
    };
}