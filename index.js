const formulario=document.getElementById('formulario');
const inputs =document.querySelectorAll('#formulario input');




const validarCaracteresInput = {
	
	nombreArticulo: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    descripcionArticulo:/^[a-zA-ZÀ-ÿ\s_.+-]{1,200}$/,
    //caracteristicas:/^[a-zA-Z0-9À-ÿ\s_.+-]{1,200}$/,
    nombreVend:/^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    apellidoVen:/^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    identificacion:/^\d{1,14}$/,
    precioArt:/^\d{1,14}$/,
	

}

const campos={
    nombre:false,
    descripcion:false,
    datos:false,
    caracInput:false
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario)
});

// caracteristicas----------------------------
let valores=[];
const contenedorValores=document.getElementById('valueInput');

const getValueInput = () =>{
let inputValue = document.getElementsByClassName("domTextElement")[0].value; 
let auxValorText= "";
    valores.push(inputValue);//agregar elementos al arreglo valores
    valores.forEach(valor=>{
        auxValorText=auxValorText+"<span>"+valor+" "+"</span>";
        document.getElementById('valueInput').classList.remove('formulario__grupo-vacio');
        
    })
    document.getElementById("valueInput").innerHTML= auxValorText;
    document.getElementsByClassName("domTextElement")[0].value="";
    console.log(valores);    
}
      


function validarExt()
{
    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.PNG)$/;
    if(!extPermitidas.exec(archivoRuta)){
        alert('Asegurese que la imagen tenga formato .PNG');
        archivoInput.value = '';
        return false;
    }

    else
    {
        //PRevio de la imagen
        if (archivoInput.files && archivoInput.files[0]) 
        {
            var visor = new FileReader();
            visor.onload = function(e) 
            {
                document.getElementById('visorArchivo').innerHTML = 
                '<embed src="'+e.target.result+'" width="400" height="250"/>';
            };
            visor.readAsDataURL(archivoInput.files[0]);
        }
        
        document.querySelector('.reemplazar').style.display="block";
        document.querySelector('.labelSubir').style.display="none";

    }
}



formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(campos.nombre && campos.descripcion )
    {
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        document.getElementById('grupo__nombre').classList.remove('formulario__grupo-vacio');
        document.getElementById('grupo__descripcion').classList.remove('formulario__grupo-vacio');
        //document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
        
        
      
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        },5000);
        
        
        document.querySelector('#grupo__nombre i').style.display="none";
        document.querySelector('#grupo__descripcion i').style.display="none";
        
       
    }

    else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        document.getElementById('grupo__nombre').classList.add('formulario__grupo-vacio');
        document.getElementById('grupo__descripcion').classList.add('formulario__grupo-vacio');               

    }

   
});

