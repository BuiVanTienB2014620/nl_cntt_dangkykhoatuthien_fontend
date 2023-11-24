<template >
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 text-black">



                    <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                        <Form style="width: 23rem;" @submit="submitLogin" :validation-schema="loginFormSchema">

                            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Đăng nhập</h3>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example18">Địa chỉ email</label>
                                <Field type="email" id="form2Example18" class="form-control form-control-lg" name="email"
                                    v-model="loginLocal.email" />
                                <ErrorMessage name="email" class="error-feedback" style="color: rgb(238, 15, 15);" />


                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example28">Mật khẩu</label>
                                
                                <Field :type="showPassword ? 'text': 'password'"  
                                id="form2Example28" 
                                class="form-control form-control-lg"
                                name="password" 
                                v-model="loginLocal.password" />
                                <i class="far fa-eye"
                                @click="showPassword = !showPassword"
                                style="cursor: pointer; position: absolute; right: 130px; top: 270px "
                               
                                >
                                </i>
                                
                                <ErrorMessage name="password" class="error-feedback" style="color: rgb(238, 15, 15);" />

                            </div>

                            <div class="pt-1 mb-4">
                                <button class="btn btn-info btn-lg btn-block" type="submit" style="color: #ffff;">Đăng nhập</button>
                            </div>

                            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Quên mật khẩu?</a></p>
                            <p>Bạn chưa có tài khoản?

                                <button class="btn btn-sm btn-success" @click="goToAddUsers()">
                                    <router-link :to="{ name: 'user.register' }" class="link-info">
                                        Đăng ký
                                    </router-link>

                                </button>

                            </p>




                        </Form>


                    </div>

                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="https://img.freepik.com/free-photo/some-assorted-nuts-dried-fruits-with-pecan-pistachios-almond-peanut-cashew-pine-nuts-different-bowls-black-pan-flat-lay_176474-2063.jpg?w=1060&t=st=1699535762~exp=1699536362~hmac=18f9f79ee313643b2c3a075566c9891df6a7443ab82bb90b8fd93e40016d70b5"
                        alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
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


    emits: ["submit:login"],


    data() {
        const loginFormSchema = yup.object().shape({

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




        });

        return {
            loginLocal: {

                email: "",
                password: "",

            },
            loginFormSchema,
            showPassword: false,
        };

    },

    methods: {
        submitLogin() {



            this.$emit("submit:login", this.loginLocal);
        },
        goToAddUsers() {
            this.$router.push({ name: 'user.register' });
        },
    },

};
</script>

<style scoped>
.bg-image-vertical {
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
}

@media (min-width: 1025px) {
    .h-custom-2 {
        height: 100%;
    }
}

.link-info {
    color: #ffff;
    text-decoration: none;
}
</style>