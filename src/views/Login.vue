<template>
    <div class="container py-5 " style="height: 900px;">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg-6">
                            <div class="card-body p-md-5 mx-md-4">

                                <div class="text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                        style="width: 185px;" alt="logo">
                                    <h4 class="mt-1 mb-5 pb-1">Mời Thí Chủ Đăng Nhập</h4>
                                </div>

                                <form>


                                    <div class="form-outline mb-4">
                                        <input type="email" id="form2Example11" class="form-control"
                                            placeholder="Phone number or email address" />
                                        <label class="form-label" for="form2Example11">Địa chỉ email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form2Example22" class="form-control" />
                                        <label class="form-label" for="form2Example22">Mật khẩu</label>
                                    </div>

                                    <div class="text-center pt-1 mb-5 pb-1">
                                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                            type="button">Log
                                            in</button>
                                        <a class="text-muted" href="#!">Quên mật khẩu?</a>
                                    </div>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2">Chưa có tài khoản?</p>
                                        <router-link :to="{ name: 'register' }">
                                            <button type="button" class="btn btn-outline-danger">Tạo tài khoản mới</button>

                                        </router-link>

                                    </div>

                                </form>

                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">Lợi ích của thiền</h4>
                                <p class="small mb-0">Khi nhắc tới thiền mọi người khá mơ hồ về định nghĩa về thiền và ngồi
                                    thiền có tác dụng gì. Thiền là một quá trình rèn luyện tâm trí của bạn để tập trung và
                                    chuyển hướng suy nghĩ của bạn. Sự phổ biến của thiền ngày càng tăng khi nhiều người khám
                                    phá lợi ích của nó. Để trả lời cho câu hỏi ngồi thiền có tác dụng gì hãy cùng nhau lướt
                                    qua những tác dụng cơ bản của thiền nhé!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.gradient-custom-2 {
    /* fallback for old browsers */
    background: #fccb90;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
    .gradient-form {
        height: 100vh !important;
    }
}

@media (min-width: 769px) {
    .gradient-custom-2 {
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
    }
}
</style>