console.log('vue ok', Vue)

//RICORDA IL PASCAL CASE
const root = new Vue({
    //Posso cambiare il nome all'interno della console (Vue)
    //prendo l'elemento dal dom(OBBLIGATORIO)
    el: '#root',
    data: {
        fullName: 'Alessio Cordari',
        Image: 'depositphotos_36675429-stock-photo-king-lion-aslan.jpg'
    },
})