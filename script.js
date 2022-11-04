allData()

// untuk menghapus data yang ada di form
function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}

//fuction ini untuk ambil semua data dari local
function allData(){
    
    table.innerHTML = `` 
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? [] // disini saya pakek JSON.parse karena data masih sebagai string, mau saya ubah menjadi array

    //forEach saya gunakan disini untuk menampilkan value/nilai dari local storage 
    contactList.forEach(function (value, i){
       
        let table = document.getElementById('table')

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
                <td>${value.tanggal}</td>
            </tr>
            <tr>
                <td><strong>List</strong></td>
            </tr>
            <tr>
                <td>${value.list}</td>
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


    

//fuction ini untuk menyimpan semua data ke local dan langsung terhubung dengan button save
function save(){
contactList = JSON.parse(localStorage.getItem('listItem')) ?? []


let id
contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0
//dari ternary operator ini bertujuan untuk mengambil array terakhir untuk mengambil id nya lalu di simpan di variable id

if(document.getElementById('id').value){

contactList.forEach(value => {
    if(document.getElementById('id').value === value.id){
        value.judul = document.getElementById('judul').value, 
        value.tanggal = document.getElementById('tanggal').value,
        value.list = document.getElementById('list').value
    }
});


document.getElementById('id').value = ''

}else{

let item = {
    id        : id + 1, 
    judul      : document.getElementById('judul').value,  
    tanggal     : document.getElementById('tanggal').value,
    list   : document.getElementById('list').value
}

contactList.push(item)
}

localStorage.setItem('listItem', JSON.stringify(contactList)) //simpan data ke local storage

allData()


document.getElementById('form').reset()
}


//fungsi ini untuk melakukan edit data
function find(id){
contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

contactList.forEach(function (value){
if(value.id == id){
   document.getElementById('id').value = value.id
   document.getElementById('judul').value = value.judul
   document.getElementById('tanggal').value = value.tanggal
   document.getElementById('list').value = value.list
}
})
}


// fungsi ini berguna untuk hapus data
function removeData(id){

contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

contactList = contactList.filter(function(value){ 
    return value.id != id; 
});


localStorage.setItem('listItem', JSON.stringify(contactList))

allData()
}
