<template>
    <div class="lg">
        <p>{{ message }}</p>
        <FormLogin @submit:login="loginUser" />
    </div>
</template>
  
<script>
import FormLogin from "@/components/Formlogin.vue";
import UserService from "@/services/user.service.js";

export default {
    components: {
        FormLogin,
    },
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async loginUser(data) {
            try {
                const response = await UserService.login(data);
                console.log("hello", response);
                localStorage.setItem('user', JSON.stringify(response.user));

                if (response && response.message === 'Đăng nhập thành công') {
                    // Check the user's role
                    if (response.user.role === 'admin') {
                        this.message = "Đăng nhập thành công vào trang admin";
                        this.$router.push({ name: 'awelcome' }); // Assuming 'admin' is the name of your admin route.
                    } else {
                        this.message = "Đăng nhập thành công";
                        this.$router.push({ name: 'auth' }); // Assuming 'auth' is the name of your user route.
                    }
                } else {
                    this.message = "Đăng nhập thất bại, mật khẩu hoặc email chưa chính xác";
                }
            } catch (error) {
                console.error("Login error:", error);
                this.message = "Đã xảy ra lỗi trong quá trình đăng nhập";
            }
        },
    },
};
</script>
  
<style scoped>
.lg>p {
    margin-bottom: 28px;
    color: rgb(249, 4, 4);
}
</style>
  