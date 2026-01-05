document.addEventListener('DOMContentLoaded',()=>{
  const books = document.querySelector(".js-book-list");

const addForm = document.forms["add-book"];
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const book = addForm.querySelector('input[type="text"]').value;
  if (book) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="name">${book}</span>
            <span class="delete js-delete" >delete</span>`;

    books.querySelector("ul").appendChild(li);
  }
  addForm.querySelector('input[type="text"]').value = "";
});

// addbutton.addEventListener("click", () => {
//   const book = addtext.value;
//   if (book) {
//     const li = document.createElement("li");
//     li.innerHTML = `<span class="name">${book}</span>
//             <span class="delete js-delete" >delete</span>`;
//     books.appendChild(li);
//   }
//   addtext.value = "";
// });

books.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-delete")) {
    e.target.parentNode.remove();
  }
});

const Hide = document.querySelector("#hide");
Hide.addEventListener("change", () => {
  if (Hide.checked) {
    books.style.display = "none";
  } else {
    books.style.display = "initial";
  }
});


//Search Books

const search = document.forms["search-books"].querySelector("input");
search.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase(); //search.value
  if (term) {
    books.querySelectorAll("li").forEach((book) => {
      const title = book.querySelector(".name").innerHTML;
      book.style.display="none";
      if (title.toLowerCase().includes(term)) {
        book.style.display="block";
      }
    });
  }
  else{
    books.querySelectorAll("li").forEach((book) => {
      
      book.style.display="block";
      
    });
  }
});

const tabs=document.querySelector('.tabs')
tabs.addEventListener('click',(e)=>{
  const id=e.target.dataset.target
    tabs.querySelectorAll('li').forEach((list)=>{
      if(list.dataset.target==id){
        list.classList.add('active');

        document.querySelector(`${list.dataset.target}`).style.display="block"
      }
      else{
        list.classList.remove('active');
        document.querySelector(`${list.dataset.target}`).style.display="none"
      }
    })
  

})
})



