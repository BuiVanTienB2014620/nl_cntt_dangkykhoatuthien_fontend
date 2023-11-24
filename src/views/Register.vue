<template>
    <div>
      <FormRegister @submit:user="createUser" />
      <p>{{ message }}</p>
  
    </div>
  </template>
  
  <script>
  import FormRegister from "@/components/FormRegister.vue";
import UserService from "@/services/user.service.js";
  
  export default {
    components: {
      FormRegister,
    },
  
    props: {
      user: { type: Object, required: true },
  
    },
  
  
    data() {
      return {
  
  
        message: "",
      };
  
    },
    methods: {
      async createUser(data) {
        // Hiển thị cửa sổ xác nhận
      
  
  
  
        const confirmed = window.confirm("Bạn có muốn tạo tài khoản  mới?");
  
        if (confirmed) {
          try {
            await UserService.create(data);
            this.message = "Thêm tài khoản mới thành công";
            this.$router.push({ name: 'login' });
  
          } catch (error) {
            console.log(error);
          }
        }
      },
  
    },
  
  
  
  };
  
  
  
  
  
  
  </script>
  
  
  
  
  
  <style scoped></style>