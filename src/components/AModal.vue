<!-- <script setup>
import { defineProps, ref } from "vue";

const confirmLoading = ref(false);

const props = defineProps({
    isShowModalRegister: Boolean,
    closeModalRegister: Function,
    isEditMode: Boolean, // New prop to determine edit or display mode
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
        <a-modal :open="isShowModalRegister" :confirm-loading="confirmLoading" @ok="handleOk" title="Thay đổi thông tin "
            @cancel="handleCancel" okText="OK">
            <div class=" ">
                <form v-if="props.isEditMode"> 
                  
                </form>
                <div v-else>
                   
                    <div class="my-3">
                        <div class="label">Email</div>
                        <div class="form-control">{{ dataUser.Email }}</div>
                    </div>
                    <div class="my-3">
                        <div class="label">Họ và tên</div>
                        <div class="form-control">{{ dataUser.HoTen }}</div>
                    </div>
                    
                </div>
            </div>
        </a-modal>
    </div>
</template>

<style></style> -->
<script setup>
import { defineProps, ref } from "vue";

const confirmLoading = ref(false);

const props = defineProps({
    isShowModalRegister: Boolean,
    closeModalRegister: Function,
    userInformation: Object,
});

const handleCancel = () => {
    props.closeModalRegister();
};
</script>

<template>
    <div>
        <a-modal :open="props.isShowModalRegister" :confirm-loading="confirmLoading" @cancel="handleCancel"
            title="Thông tin cá nhân" :ok-text="null">
            <template #footer>
                <!-- Remove the Cancel and OK buttons, only keep the close (X) button -->
                <button type="button" class="btn btn-success" @click="handleCancel">
                   Đóng
                </button>
            </template>
            <div>
                <div class="my-3">
                    <div class="label">Email</div>
                    <div class="form-control">{{ props.userInformation.Email }}</div>
                </div>
                <div class="my-3">
                    <div class="label">Họ và tên</div>
                    <div class="form-control">{{ props.userInformation.HoTen }}</div>
                </div>
                <!-- Add more blocks for other user information if needed -->
                <div class="my-3">
                    <div class="label">Số điện thoại</div>
                    <div class="form-control">{{ props.userInformation.SoDienThoai }}</div>
                </div>
                <div class="my-3">
                    <div class="label">Địa chỉ </div>
                    <div class="form-control">{{ props.userInformation.DiaChi }}</div>
                </div>
            </div>
        </a-modal>
    </div>
</template>

<style></style>


