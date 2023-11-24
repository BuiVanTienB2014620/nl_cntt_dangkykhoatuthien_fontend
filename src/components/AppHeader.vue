<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-white">
            <a href="" class="navbar-brand">
                <router-link :to="{ name: 'trangchu' }" class="nav-link">

                    <img src="../assets/img/download.jpg" alt="" class="rounded-circle logo-img mr-2">
                    <span class="logo-text text-success custom-logo-text">Shop Cereal</span>

                </router-link>

            </a>
            <div class="logo-container" :style="logoContainerStyles">
                <img src="../assets/img/nss.png" alt="" class="logo1">

            </div>
            <div>
                <div class="navbar-user" v-if="!isLoggedIn" @click="loginUser()">
                    <router-link :to="{ name: 'login' }" class="login">
                        <i class="fa-solid fa-user"></i> Đăng Nhập

                    </router-link>

                </div>

                <div class="dropdown" v-else>
                    <button class="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img src="@/assets/img/chitonngoc.jpg" class="rounded-circle" height="55" width="60" alt="User"
                            loading="lazy" />
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <button type="button" class="btn btn-success" @click="logout">
                            Đăng xuất

                        </button>


                        <!-- 
                        <div>
                            <button @click="OpenModalRegister" class="btn btn-success">Thay đổi thông tin </button>
                        </div>

                        <AModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister" /> -->

                        <div>
                            <button @click="OpenModalRegister" class="btn btn-success">Thông tin</button>
                        </div>

                        <AModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister"
                            :userInformation="dataUser" />

                    </div>
                </div>


            </div>

        </nav>
        <div>
            <nav class="navbar navi">
                <div class="nav-item" style="margin-right: 16px; color: white;margin-left: auto;">
                    <router-link :to="{ name: 'auth' }" class="nav-link" style="color: #ffffff;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M10 12h4v4h-4z"></path>
                        </svg>


                        Trang Chủ

                    </router-link>

                </div>
                <div class="nav-item" style="margin-right: 16px; color: white; ">
                    <router-link :to="{ name: 'psuccess' }" class="nav-link" style="color: #ffffff;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-question"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                            <path d="M13.5 17h-7.5v-14h-2"></path>
                            <path d="M6 5l14 1l-.714 5m-4.786 2h-8.5"></path>
                            <path d="M19 22v.01"></path>
                            <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
                        </svg>
                        Đơn hàng của bạn
                    </router-link>



                </div>
                <div :class="'nav-item'" style="color: white;margin-right: auto;"></div>
            </nav>

        </div>






    </div>
</template>


<script>


export default {
    components: {
        AModal,

    },
    data() {
        return {
            isLoggedIn: false,

            AModalVisible: false,

        };

    },



    mounted() {
        // Khai báo biến intervalId bằng let hoặc const
        let intervalId;

        // Gọi đoạn code mỗi 5 giây và lưu giá trị được trả về bởi setInterval
        intervalId = setInterval(() => {
            const userJs = window.localStorage.getItem('user');
            const user = JSON.parse(userJs);


            if (user) {
                // console.log('user', user);
                this.isLoggedIn = true;
            }
        }, 100); // Gọi mỗi 0,1 giây 

        // Để dừng việc gọi đoạn code sau một thời gian hoặc khi điều kiện nào đó được thỏa mãn, bạn có thể sử dụng clearInterval(intervalId)

        // Ví dụ: Dừng việc gọi đoạn code sau 300 giây
        setTimeout(() => {
            clearInterval(intervalId);
        }, 3000000);
    },




    methods: {



        logout() {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;


            this.$router.push({ name: "trangchu" });
        },
        loginUser() {

            this.$router.push({ name: "login" });
        },
        openModal() {
            this.AModalVisible = false;
        },


    }
};
</script>

<!-- <script setup>
import { ref } from "vue";
import AModal from "./AModal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
    isShowModalRegister.value = true;
};
const closeModalRegister = () => {
    isShowModalRegister.value = false;
};
</script> -->
<script setup>
import { ref } from "vue";
import AModal from "./AModal.vue";

const isShowModalRegister = ref(false);
const dataUser = ref({
    Email: "tienb2014620@gmail.com",
    HoTen: "Bùi Văn Tiền",
    SoDienThoai: "0123456789",
    DiaChi: "Cần Thơ"
});

const OpenModalRegister = () => {
    isShowModalRegister.value = true;
};

const closeModalRegister = () => {
    isShowModalRegister.value = false;
};
</script>


<style scoped>
/* CSS để bo tròn ảnh và thu nhỏ nó */
.navbar {
    display: flex;
    justify-content: space-between;


}

.logo-img {
    border-radius: 50%;
    /* Bo tròn ảnh */
    width: 65px;
    /* Thu nhỏ ảnh thành 1/4 kích thước ban đầu */
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25%;
}

.logo1 {
    width: 50%;
    height: 60px;
    margin-left: 200px;
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
    font-size: 18px;
    /* Điều chỉnh kích thước font chữ */
    color: white;
    /* Điều chỉnh màu sắc của văn bản */
    text-align: center;
    /* Căn giữa văn bản */
    margin-top: 10px;
    /* Khoảng cách từ logo đến văn bản (điều chỉnh giá trị này theo nhu cầu) */
}

.navi {
    background-color: #1b7931;
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

/* 
.dropdown-menu {
    margin-left: -70px;
} */
.custom-logo-text {
    /* Apply your custom styles for the "Shop Cereal" text here */
    font-family: 'Your Custom Font', sans-serif;
    /* Example: Change font family to a custom font */
    font-size: 24px;
    /* Example: Change font size to 24 pixels */
    font-weight: bold;
    /* Example: Make the text bold */
    color: #ff6600;
    /* Example: Change text color to orange */
    /* Add any other styles you want to customize the text appearance */
}
</style>