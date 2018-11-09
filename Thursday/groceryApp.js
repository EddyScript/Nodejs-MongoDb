let itemBox = document.getElementById("itemBox")
let storeSelect = document.getElementById("storeSelect")
let addItem = document.getElementById("addItem")
let hebList = document.getElementById("hebList")
let fiestaList = document.getElementById("fiestaList")
let samsList = document.getElementById("samsList")



addItem.addEventListener('click',function(){
        let storeName = storeSelect.value
        let itemName = itemBox.value
    
        let wholeList = {name: storeName, item: itemName}

        createList(wholeList)
})

function delH(btn) {
    hebList.removeChild(btn.parentElement)
}function delF(btn) {
    fiestaList.removeChild(btn.parentElement)
}
function delS(btn) {
    samsList.removeChild(btn.parentElement)
}
addItem.addEventListener('click',function(){
   if(storeSelect.value == "H-E-B"){
     let item = `
    <li>
       <label>${itemBox.value} </label>
       <button onclick="delH(this)"> Delete</button>
    </li>
    `
    hebList.insertAdjacentHTML('beforeend',item)
   }
   if(storeSelect.value == "Fiesta"){
     let item = `
    <li>
       <label>${itemBox.value} </label>
       <button onclick="delF(this)"> Delete</button>
    </li>
    `
    fiestaList.insertAdjacentHTML('beforeend',item)
   }
   if(storeSelect.value == "Sam's"){
     let item = `
    <li>
       <label>${itemBox.value} </label>
       <button onclick="delS(this)"> Delete </button>
    </li>
    `
    samsList.insertAdjacentHTML('beforeend',item)
   }
})