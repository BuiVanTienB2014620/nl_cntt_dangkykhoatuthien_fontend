
<template>
    <section class="vh-250"
        style="background-image: url('https://img.freepik.com/free-vector/rice-grain-sacks-bowls-sketch-set_74855-16230.jpg');">
        <div class=" ">
            <div class="container h-100 ">
                <div class="row  d-flex justify-content-center align-items-center h-100" style="padding: 20px;">
                    <div class="col-12 col-md-9 col-lg-7">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">TẠO MỘT TÀI KHOẢN</h2>

                                <Form @submit="submitUser" :validation-schema="userFormSchema">

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example1cg">Tên của bạn</label>
                                        <Field type="text" id="form3Example1cg" class="form-control form-control-lg"
                                            name="name" v-model="userLocal.name" />
                                        <ErrorMessage name="name" class="error-feedback" style="color: rgb(238, 15, 15);" />

                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example3cg">Email của bạn</label>
                                        <Field type="email" id="form3Example3cg" class="form-control form-control-lg"
                                            name="email" v-model="userLocal.email" />
                                        <ErrorMessage name="email" class="error-feedback"
                                            style="color: rgb(238, 15, 15);" />


                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example4cg">Mật khẩu</label>
                                        <Field :type="showPassword ? 'text' : 'password'" id="form3Example4cg"
                                            class="form-control form-control-lg" name="password"
                                            v-model="userLocal.password" />

                                        <i class="far fa-eye" @click="showPassword = !showPassword"
                                            style="cursor: pointer;position: relative; left: 450px; bottom: 35px;">
                                        </i>

                                        <ErrorMessage name="password" class="error-feedback"
                                            style="color: rgb(238, 15, 15);" />


                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example4cdg">Nhập lại mật khẩu</label>
                                        <Field :type="showPassword ? 'text' : 'password'" id="form3Example4cdg"
                                            class="form-control form-control-lg" name="respassword"
                                            v-model="userLocal.respassword" />
                                        <i class="far fa-eye" @click="showPassword = !showPassword"
                                            style="cursor: pointer;position: relative;left: 450px; bottom: 35px; ">
                                        </i>
                                        <ErrorMessage name="respassword" class="error-feedback"
                                            style="color: rgb(238, 15, 15);" />


                                    </div>



                                    <div class="d-flex justify-content-center" >
                                        <button type="submit"
                                            class="btn btn-success btn-block btn-lg gradient-custom-4 ">

                                            Đăng
                                            ký

                                        </button>
                                    </div>


                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
    
<script>
import { ErrorMessage, Field, Form } from "vee-validate";


import * as yup from "yup";

export default {
    components: {
        Field,
        Form,
        ErrorMessage,
    },


    emits: ["submit:user"],


    data() {
        const userFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .required("Email phải có giá trị.")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),

            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(8, "Tên phải ít nhất 8 ký tự.")
                .max(8, "Tên có nhiều nhất 8 ký tự."),

            respassword: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(8, "Tên phải ít nhất 8 ký tự.")
                .max(8, "Tên có nhiều nhất 8 ký tự.")
                .test("password-match", "Mật khẩu không khớp.", function (value) {
                return value === this.parent.password;
            }),

        });
        return {
            userLocal: {
                name: "",
                email: "",
                password: "",
                respassword: "",
                // Initialize as a boolean value
            },
            userFormSchema,
            showPassword: false,
        };

    },
    methods: {
        submitUser() {


            this.$emit("submit:user", this.userLocal);
        }
        
    },

};



</script>
    
    
    
    
    
<style scoped>
.gradient-custom-4 {
    color: #ffff;
    /* fallback for old browsers */
    background: #d81811;

    /* Chrome 10-25, Safari 5.1-6 */


    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgb(196, 28, 28), rgba(143, 211, 244, 1))
}

.dk {
    text-decoration: none;
    color: rgb(255, 255, 255);
}
</style>