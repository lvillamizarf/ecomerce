


function manipularClasesValido(grupo) {
    document.querySelector(grupo).classList.add('formulario__grupo-correcto');
    document.querySelector(grupo+' i').classList.remove('fa-circle-xmark');
    document.querySelector(grupo+' i').classList.add('fa-circle-check');
    document.querySelector(grupo+' i').classList.remove('fa-solid');
    document.querySelector(grupo+' i').classList.add('fa-solid');
    document.querySelector(grupo+' .formulario__input-error').classList.remove('formulario__input-error-activo');
}

function manipularClasesInvalido(grupo) {
    document.querySelector(grupo).classList.add('formulario__grupo-incorrecto');
    document.querySelector(grupo).classList.remove('formulario__grupo-correcto');
    document.querySelector(grupo+' i').classList.add('fa-solid');
    document.querySelector(grupo+' i').classList.add('fa-circle-xmark');
    document.querySelector(grupo +' .formulario__input-error').classList.add('formulario__input-error-activo');
                
}

