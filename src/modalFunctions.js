console.log('modalFunctions')

export function toggleModal(){
    let modal = document.querySelector('.addModal');
    let background= document.querySelector('.modalBackground');

    modal.classList.toggle('visible');
    background.classList.toggle('visible');
}

export function clearModal(form){
    form.reset();
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

export function populateModal(data,form){
    if (data == undefined){
        console.log('no local storage data.');
    } else{
        toggleModal();
        form['todoTitle'].value = data['todoTitle']
        form['todoCategory'].value = data['todoCategory']
        form['todoDescription'].value = data['description']
    }
    
}
