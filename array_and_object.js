// Object dalam array

const daftarKaryawan = [
  {
    nama : "Nagato",
    id :  0,
    masaKerja : 6,
    gaji : "7.000.000"
  }, 
  {
    nama : "Itachi",
    id : 0,
    masaKerja : 3,
    gaji : "4.000.000"
  }
]
let mode = "tambah"
const cariIndex = (nama) => {
  for(let idx in daftarKaryawan){
    if(daftarKaryawan[idx].nama == nama){
      return idx
      
    }
  }
}

const tampilkanKaryawan = () =>{
  const tblKaryawan = document.getElementById("tblKaryawan");
  tblKaryawan.innerHTML =  `
  <tr>
    <th>No</th>
    <th>Nama</th>
    <th>ID</th>
    <th>Masa Kerja</th>
    <th>Gaji</th>
    <th>Edit</th>
    <th>Hapus</th>
  </tr>`
  for (let idx in daftarKaryawan){
    tblKaryawan.innerHTML += `
    <tr>
      <td>${parseInt(idx)+1}</td>
      <td>${daftarKaryawan[idx].nama}</td>
      <td>${daftarKaryawan[idx].id}</td>
      <td>${daftarKaryawan[idx].masaKerja} </td>
      <td>${daftarKaryawan[idx].gaji}</td>
      <td><button type="button" class="btn btn-warning" onclick= "editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}') ; tampilkanKaryawan()">Delete</button></td>
    </tr>
    `
  }
}


const tambahKaryawan = () => {
  const nama = document.getElementById("txtNama").value
  const id = document.getElementById("txtId").value
  const masaKerja = document.getElementById("txtMasaKerja").value
  const golonganGaji = () =>{
    if(masaKerja < 6){
      return 4000000
    }else{
      return 7000000
    }
  }
  const karyawanBaru = {
    nama : nama,
    id : id,
    masaKerja : masaKerja,
    gaji :  golonganGaji()
  }

  //jika tambah 
  if (mode == 'tambah'){
    daftarKaryawan.push(karyawanBaru)
  }else{
    daftarKaryawan[mode] = karyawanBaru
  }
  
  mode='tambah'
}


const hapusKaryawan = (target) => {
  const indexDihapus = cariIndex(target)
  daftarKaryawan.splice(indexDihapus, 1)
}


const editKaryawan = (target) => {
  const indexEdit = cariIndex(target)

  document.getElementById("txtNama").value = target;
  document.getElementById("txtId").value = daftarKaryawan[indexEdit].id;
  document.getElementById("txtMasaKerja").value = daftarKaryawan[indexEdit].masaKerja;

  mode = indexEdit
}

const cancel = () => {
  document.getElementById("txtNama").value = ""
  document.getElementById("txtId").value = ""
  document.getElementById("txtMasaKerja").value = ""
  mode = 'tambah'
}





