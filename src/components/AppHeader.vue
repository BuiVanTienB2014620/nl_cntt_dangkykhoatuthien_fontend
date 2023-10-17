<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a href="" class="navbar-brand">
            <router-link :to="{ name: 'trangchu' }" class="nav-link">

                <img src="../assets/img/logo1.png" alt="" class="rounded-circle logo-img">
                <span class="logo-text text-white">CHÙA TUỆ GIÁC</span>
                
            </router-link>

        </a>
        <div class="logo-container">
            <img src="../assets/img/logo2.jpg" alt="" class="logo2">
            <img src="../assets/img/logo3.jpg" alt="" class="logo3">
        </div>
        <div class="navbar-user">
          
            <router-link :to="{name: 'login'}">
                <i class="fa-solid fa-user"></i>
                Đăng nhập
            </router-link>
            
        </div>

    </nav>
    <nav class="navbar navi">
        <div class="nav-item" style="margin-right: 16px; color: white;margin-left: auto;">
            <router-link :to="{ name: 'trangchu' }" class="nav-link" style="color: #ffffff;">

                Trang Chủ

            </router-link>

        </div>
        <div class="nav-item" style="margin-right: 16px; color: white; ">Khóa Tu</div>
        <div class="nav-item" style="margin-right: 16px; color: white; ">Nghi thức</div>
        <div class="nav-item" style="margin-right: 16px; color: white; ">Kinh sách</div>
        <div :class="'nav-item'" style="color: white;margin-right: auto;">Tin Tức</div>
    </nav>
</template>
<style>
/* CSS để bo tròn ảnh và thu nhỏ nó */
.navbar {
    display: flex;
    justify-content: space-between;
    background-color: #000044!important;
   
}

.logo-img {
    border-radius: 50%;
    /* Bo tròn ảnh */
    width: 30%;
    /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16%;
}

.logo2 {
    width: 18%;
    height: auto;
    border-radius: 50% ;
    margin-right: 10px;
}
.logo3 {
    width: 24%;
    height: auto;
    border-radius: 50% ;
    margin-left: 10px;
}
.navbar-user{
    color: #ffff;
}




.navbar-brand {
    display: flex;
    /* Sử dụng flexbox để căn chỉnh các phần tử con */
    align-items: flex-end;
    /* Căn dưới cùng */
    justify-content: center;
    /* Căn giữa theo chiều ngang */
    text-decoration: none;
    /* Loại bỏ gạch chân khi hover */

}

/* CSS để định dạng văn bản */
.logo-text {
    font-size: 24px;
    color: white;
    text-align: center;
    margin-left: 26px;
    margin-top: 10px;
}

.navi {
    background-color: #7b650c!important;
    /* Màu nền xanh */
    display: flex;
    align-items: center;
    padding: 10px;
    /* Khoảng cách nền và chữ trong thẻ div */
    border-radius: 1px;
    /* Bo góc thẻ div */
}

.nav-item {
    cursor: pointer;
    margin: 0 10px;
    position: relative;
    /* Để xác định vị trí của thanh ngang */
}

.nav-item::after {
    content: '';
    /* Tạo nội dung trống cho thanh ngang */
    position: absolute;
    /* Đặt vị trí tuyệt đối */
    left: 0;
    /* Đặt bên trái */
    bottom: -2px;
    /* Đặt bên dưới và căn đều theo chiều ngang */
    width: 100%;
    /* Chiều rộng của thanh ngang */
    height: 2px;
    /* Chiều cao của thanh ngang */
    background-color: white;
    /* Màu sắc của thanh ngang */
    transform: scaleX(0);
    /* Thu gọn thanh ngang theo chiều ngang ban đầu */
    transform-origin: left;
    /* Đặt gốc xoay ở bên trái */
    transition: transform 0.3s;
    /* Hiệu ứng chuyển đổi */
}

.nav-item:hover::after {
    transform: scaleX(1);
    /* Mở rộng thanh ngang khi hover */
}

.login {
    text-decoration: none;
    color: black;
}

.login:hover {
    text-decoration: none;
    color: black;

}
</style>