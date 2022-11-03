// ternary operator untuk test local
const testStorage = typeof(Storage) !== "undefined" ? "local storage available" : "local storage not available";

console.log(testStorage)


document.getElementById('push').onclick = function(){
  if(document.getElementById('isitask').value.length == 0 || document.getElementById('judul').value.length == 0 || document.getElementById('tanggal').value.length === 0){
      alert("Tidak boleh kosong")
  }

  else{
    let judul = document.getElementById('judul').value;
    let tanggal = document.getElementById('tanggal').value;
    let isitask = document.getElementById('isitask').value;
    let data = {
        judul:judul,
        tanggal:tanggal,
        isitask:isitask
    };

//       document.getElementById('tasks').innerHTML += `
//       <div class="task rounded-4 mb-3">
//           <span id="taskname" >`
//           Object.values(data).forEach((page) => 
//               (page)
//           )
//           `</span>
//           <button class="delete">
//               <i class="far fa-trash-alt"></i>
//           </button>
//       </div>
//   `;
      


      Object.values(data).forEach((page) =>  console.log(page));
      
      document.getElementById('tasks').innerHTML += `
          <div class="task rounded-4 mb-3">
              <span id="taskname" >
                  ${data.judul} <br>
                  ${data.tanggal} <br>
                  ${data.isitask} <br>
              </span>
              <button class="delete">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
      `
      let arr = [];
      if(!localStorage.getItem('data')) {
          arr.push(data);
          localStorage.setItem("data", JSON.stringify(arr));
        } else {
            arr = JSON.parse(localStorage.getItem("data"));
            arr.push(data);
            localStorage.setItem("data", JSON.stringify(arr));
        }

      var current_tasks = document.getElementsByClassName("delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
              localStorage.removeItem('data')
          }
      }
  }
  judul.value = ""
  tanggal.value = ""
  isitask.value =""
}

