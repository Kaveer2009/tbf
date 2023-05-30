/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



// nav op start

 /* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


// nav op end




// checking product

var head_name = "";


function check_product() {
    window.location = "view_product.html";
}
//function for wooden table
function check_order_wooden_table() {
    window.location = "view_product.html";
    head_name = "Wooden Table";

    img_1 = "'images/example/wteg1.jpeg'";
    img_2 = "'images/example/wteg2.png'";
    img_3 = "'images/example/wteg3.jpeg'";
    img_4 = "'images/example/wteg4.jpeg'";
    img_5 = "'images/example/wteg5.png'";

    localStorage.setItem("img_1", img_1)
    localStorage.setItem("img_2", img_2)
    localStorage.setItem("img_3", img_3)
    localStorage.setItem("img_4", img_4)
    localStorage.setItem("img_5", img_5)



    localStorage.setItem("Product Name", head_name);
    
    // set_head_name = localStorage.getItem("Product Name");
    document.getElementById("title").innerHTML = set_head_name;
    console.log(set_head_name);    

}

function start(){
    
    
    // localStorage.setItem("Product Name", head_name);
    
    set_head_name = localStorage.getItem("Product Name");
    document.getElementById("product_name").innerHTML = set_head_name;
    console.log(set_head_name);
    show_img_1 = localStorage.getItem("img_1");
    show_img_2 = localStorage.getItem("img_2");
    show_img_3 = localStorage.getItem("img_3");
    show_img_4 = localStorage.getItem("img_4");
    show_img_5 = localStorage.getItem("img_5");
}

start();


function back_to_home() {
    window.location = "index.html";
}


// changing show image

function change_image_1() {
    document.getElementById("image-show").innerHTML = "<img src="+show_img_1+" alt='Loading'>"
    console.log(img_1);
}

function change_image_2() {
    document.getElementById("image-show").innerHTML = "<img src="+show_img_2+" alt='Loading'>"
}
function change_image_3() {
    document.getElementById("image-show").innerHTML = "<img src="+show_img_3+" alt='Loading'>"
}
function change_image_4() {
    document.getElementById("image-show").innerHTML = "<img src="+show_img_4+" alt='Loading'>"
}
function change_image_5() {
    document.getElementById("image-show").innerHTML = "<img src="+show_img_5+" alt='Loading'>"
}



function add_to_cart() {
    localStorage.setItem("cart_no", 3)
    cart_item_no = Number(localStorage.getItem("cart_no"));
    final_cart_item_no = cart_item_no + 1;
    console.log(final_cart_item_no);
}





function back_to_home() {
    window.location = "index.html";
}