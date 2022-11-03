
allData()


function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}


    


//method to get all data
function allData(){
    
    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data and show data in table
    contactList.forEach(function (value, i){
       
        var table = document.getElementById('table')

        table.innerHTML += `
            <tr class>
                <td><strong>Judul</strong></td>
            </tr>
            <tr>
                <td>${value.judul}</td>
            </tr>
            <tr>
                <td><strong>Tanggal</strong></td>
            </tr>
            <tr>
                <td>${value.phone}</td>
            </tr>
            <tr>
                <td><strong>List</strong></td>
            </tr>
            <tr>
                <td>${value.address}</td>
            </tr>
            <tr class="mb-3">
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
    })
}


    

//method to save data into localstorage
function save(){
//get data from localstorage and store to contaclist array
//we must to use JSON.parse, because data as string, we need convert to array
contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

//get last array to get last id
//and store it into variable id
var id
contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

if(document.getElementById('id').value){

//edit contactlist array based on value
contactList.forEach(value => {
    if(document.getElementById('id').value == value.id){
        value.judul      = document.getElementById('juduk').value, 
        value.phone     = document.getElementById('phone').value,
        value.address   = document.getElementById('address').value
    }
});

//remove hidden input
document.getElementById('id').value = ''

}else{

//save
//get data from form
var item = {
    id        : id + 1, 
    judul      : document.getElementById('judul').value,  
    phone     : document.getElementById('phone').value,
    address   : document.getElementById('address').value
}

//add item data to array contactlist
contactList.push(item)
}

// save array into localstorage
localStorage.setItem('listItem', JSON.stringify(contactList))

//update table list
allData()

//remove form data
document.getElementById('form').reset()
}


//method to get detail personal data based on id
function find(id){
//get data from localstorage and store to contaclist array
//we must to use JSON.parse, because data as string, we need convert to array
contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

contactList.forEach(function (value){
if(value.id == id){
   document.getElementById('id').value = value.id
   document.getElementById('judul').value = value.judul
   document.getElementById('phone').value = value.phone
   document.getElementById('address').value = value.address
}
})
}



function removeData(id){
//get data from localstorage and store to contaclist array
//we must to use JSON.parse, because data as string, we need convert to array
contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

contactList = contactList.filter(function(value){ 
    return value.id != id; 
});

// save array into localstorage
localStorage.setItem('listItem', JSON.stringify(contactList))

//get data again
allData()
}
