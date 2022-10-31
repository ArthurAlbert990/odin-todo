console.log('modalFunctions')

export function toggleModal(){
    console.log('close modal')

    let modal = document.querySelector('.addModal');
    let background= document.querySelector('.modalBackground');

    modal.classList.toggle('visible');
    background.classList.toggle('visible');
}

export function modalConfirm(form){
    let formData = new FormData(form);
    for(let field of form){
        formData[field.name]=field.value;
    }
    clearModal(form);
    toggleModal()
    return formData;
}

export function clearModal(form){
    form.reset()
}