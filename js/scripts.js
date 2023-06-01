
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// pause and play slide
$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

 // open login modal
 const loginBtn = document.getElementById('login-btn');
 const loginModal = document.getElementById('loginModal');
 const loginCloses = document.querySelectorAll('.login-close');
 const loginModalContainer = document.getElementById('loginModal-container');
 // Hàm hiển thị login modal (thêm class show)
 function showLogin() {
 loginModal.classList.add('show')
 }
 // Hàm đóng login modal (xóa class show)
 function closeLogin() {
 loginModal.classList.remove('show')
 }
 // Hành vi nghe click vào button login 
 loginBtn.addEventListener('click', showLogin);
 // Lặp qua từng button close và nghe click
 for (const loginClose of loginCloses){
 loginClose.addEventListener('click', closeLogin)
 }
 // Hành vi nghe click vào login modal để đóng login modal
 loginModal.addEventListener('click', closeLogin)
 // Hành vi nghe click vào login modal container chặn nổi bột
 loginModalContainer.addEventListener('click', function(event){
 event.stopPropagation()
 })

 // open login modal
 const reserveBtn = document.getElementById('reserve-btn');
 const reserveModal = document.getElementById('revers_table_modal');
 const reserveCloses = document.querySelectorAll('.reserve-close');
 const reserveModalContainer = document.getElementById('revers_table_modal-container');
 // Hàm hiển thị reserve modal (thêm class show)
 function showReserve() {
 reserveModal.classList.add('show')
 }
 // Hàm đóng reserve modal (xóa class show)
 function closeReserve() {
 reserveModal.classList.remove('show')
 }
 // Hành vi nghe click vào button reserve 
 reserveBtn.addEventListener('click', showReserve);
 // Lặp qua từng button close và nghe click
 for (const reserveClose of reserveCloses){
 reserveClose.addEventListener('click', closeReserve)
 }
 // Hành vi nghe click vào reserve modal để đóng reserve modal
 reserveModal.addEventListener('click', closeReserve)
 // Hành vi nghe click vào reserve modal container chặn nổi bột
 reserveModalContainer.addEventListener('click', function(event){
 event.stopPropagation()
 })