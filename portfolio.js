 let title        = document.querySelector(".title");

// auto writing title
let mytitle = "Front End Developer ";
let index = 1;
setInterval(
  function () {
    title.textContent =  mytitle.slice(0, index);
    index++;
    if (index == mytitle.length) {
    // clearInterval(yy) ده لو عايز اول ما اعمل ريفريش او اول ما افتح الموقع يكتبها مره واحده ويقف
      index = 1;
    }
  }, 100);