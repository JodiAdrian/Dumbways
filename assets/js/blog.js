// objek js

// let jenis_mobil = {
//     suv: "crv",
//     sedan: "civic",
//     crossover: "yaris"  

// }

// console.log(jenis_mobil);


// array js

// let warna = ['hijau','kuning','putih'];
// warna[3] = 'merah';

// console.log(warna[1])

// array object js

// const myBio = ["Rian", 23, true, 
//     {id : 1, name: "laki-laki"}
// ]
// console.table(myBio)

// JSON
let dummy_data = JSON.parse(localStorage.getItem('projects'))
            console.log(dummy_data)
            function save() 
            {
                let projects = localStorage.getItem('projects');

                const form = document.querySelector('form');
                const data = Object.fromEntries(new FormData(form).entries());
                
                if (projects == null) {
                    localStorage.setItem('projects', JSON.stringify([]))
                    save()
                }
                
                projects = JSON.parse(projects)
                
                projects.push(data)

                localStorage.setItem('projects', JSON.stringify(projects))
            }


// const data = []

// function submitData(event) {
//   event.preventDefault()

//   let nama = document.getElementById("input-blog-nama").value
//   let start_date = document.getElementById("input-blog-start").value
//   let end_date = document.getElementById("input-blog-end").value
//   let description = document.getElementById("input-blog-description").value
//   let image = document.getElementById("input-blog-image").files

//   image = URL.createObjectURL(image[0])

//   const obj = {
//     nama,
//     start_date,
//     end_date,
//     description,
//     image,
//     postedAt: new Date(),
//     author: "jODI ADRIAN"
//   }

//   data.push(obj)
//   renderBlog()
// }

// function renderBlog() {
//   document.getElementById("contents").innerHTML = ""

//   for(let i = 0; i < data.length; i++) {
//     document.getElementById("contents").innerHTML += `<div class="blog-list-item">
//     <div class="blog-image">
//       <img src="${data[i].image}" alt="" />
//     </div>
//     <div class="blog-content">
//       <div class="btn-group">
//         <button class="btn-edit">Edit Post</button>
//         <button class="btn-post">Post Blog</button>
//       </div>
//       <h1>
//         <a href="blog-detail.html" target="_blank"
//           >${data[i].title}</a
//         >
//       </h1>
//       <div class="detail-blog-content">
//         ${data[i].postedAt} | ${data[i].author}
//       </div>
//       <p>
//         ${data[i].content}
//       </p>

//       <div style="float:right; margin: 10px">
//         <p style="font-size: 15px; color:grey">1 minutes ago</p>
//       </div>
//     </div>
//   </div>`
//   }
// }




