

<script setup>
import { ref } from "vue";

const confirmLoading = ref(false);

const props = defineProps({
    isShowModalRegister: Boolean,
    closeModalRegister: Function,
});

const dataUser = ref({
    Email: "",
    HoTen: "",
    SoDienThoai: "",
    Password: "",
});
const ConfirmPassword = ref("");

 
const handleOk = async () => {
     

     console.log('ok');
};

const handleCancel = () => {
    ConfirmPassword.value = "";
    props.closeModalRegister();
};
</script>



<template>
    <div>
      <a-modal :open="isShowModalRegister" :confirm-loading="confirmLoading" @cancel="handleCancel" title="Bạn cần đăng nhập để xem chi tiết sản phẩm">
        <div>
          <!-- Your modal content goes here -->
        </div>
        <template #footer>
          <a-button class="btn btn-danger" type="default" @click="handleCancel">Đóng</a-button>
        </template>
      </a-modal>
    </div>
  </template>



<style>

</style>
