<template>
    <div class="container info-user" style="text-align:center">
        <div class="row">
            <div class="col-sm-9">

                <table>
                    <thead>


                        <tr>
                            <th style="display: none;">id_sach</th>
                            <th scope="col">Sản phẩm</th>
                            <th style="width:300px" scope="col"></th>
                            <th scope="col">Giá</th>
                            <th style="width:120px" scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in filteredCarts" :key="cart.userDetails._id">

                            <td style="display: none;"></td>
                            <td><img :src="cart.productDetails.imgURL" alt="cart Image" class="img"></td>
                            <td>{{ cart.productDetails.TenHH }}</td>
                            <td>{{ 1 * cart.productDetails.Gia }}.000 VNĐ</td>
                            <td>
                                {{ cart.SoLuong }}
                            </td>


                            <td>{{ calculateTotal(cart) }}.000 vnđ</td>
                            <td colspan="2">
                                <form>
                                    <button class="btn btn-danger" @click="deleteProduct(cart._id)">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-circle-x" width="24" height="24"
                                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                            <path d="M10 10l4 4m0 -4l-4 4"></path>
                                        </svg>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <div style="background-color: #CCC;"><b>Tổng học phí:</b></div>
                    <div>{{ totalAmount }}.000 vnđ</div>
                </div>
                <router-link :to="{ name: 'auth' }">
                    <button class="btn btn-success" @click="navigateToIndex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 12l14 0"></path>
                            <path d="M5 12l6 6"></path>
                            <path d="M5 12l6 -6"></path>
                        </svg>

                        Tiếp tục xem khóa tu</button>

                </router-link>








            </div>

            <div class="col-sm-3">
                <h5 class="text-dark">THÔNG TIN ĐĂNG KÝ</h5>
                <div v-for="(cart, index) in uniqueUsers" :key="index">
                    <div>
                        <p><b>Họ và Tên :</b>{{ cart.userDetails.name }}</p>
                        <p><b>SĐT :</b>{{ cart.userDetails.phoneNumber }}</p>
                        <p><b>Địa chỉ :</b>{{ cart.userDetails.address }}</p>

                    </div>

                </div>
                <div>
                    <form class="text-dark" style="color:#e3e3e3" @submit="submitOrder">
                        <label> <b>MSGS: </b>
                            <input type="text" required v-model="orderLocal.MSNV" placeholder="Nhập mã số nhân viên">

                        </label>

                        <div>


                            <div> <b> Ngày đăng ký:</b> {{ getCurrentDate() }}</div>

                        </div>


                        <button @click="addToOrder"
                            style="display: block; overflow: hidden; color: #fff; text-align: center; height: 50px; margin: 10px auto; width: 100%; border-radius: 4px; background: #00ab9f; cursor: pointer;">

                            Đăng Ký

                        </button>
                    </form>

                </div>


            </div>
        </div>
        <div class="col-sm-12  align-items-cente">
            <h5>Các giảng sư</h5>

            <div class="d-flex align-items-center justify-content-center">
                <div class="d-flex align-items-center justify-content-center" v-for="employee in employees"
                    :key="employee._id">

                    <img :src="employee.imgURL" alt="" style="width: 100px; height: 100px" class="rounded-circle" />
                    <div class="ms-3">
                        <p class="fw-bold mb-1">{{ employee.name }}</p>
                        <p class="text-muted mb-0"> <b>Mã số giảng sư:</b> {{ employee._id }}</p>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>
  
<script>
import OrderService from '../services/dathang.service';
import EmployeeService from '../services/nhanvien.service';

import CartService from '../services/giohang.service';
export default {
    emits: ["submit:order"],
    data() {
        return {
            orders: [],
            carts: [],
            employees: [],

            userId: '',

            deliveryDays: 3,
            orderLocal: {
                MSKH: '',
                MSNV: '',
                NgayDH: '',
                TrangthaiDH: 'Đang xử lý',

            },



        };
    },
    props: {
        id: { type: String, required: true },
        order: { type: Object, required: true },
    },
    computed: {
        filteredCarts() {
            return this.carts.filter(cart => cart.userDetails._id === this.userId);
        },
        totalAmount() {
            return this.filteredCarts.reduce((total, cart) => {
                return total + cart.productDetails.Gia * cart.SoLuong;
            }, 0);
        },
        uniqueUsers() {
            // Use a Set to filter out duplicate user IDs
            const uniqueUserIds = new Set();
            return this.filteredCarts.filter((cart) => {
                if (!uniqueUserIds.has(cart.userDetails._id)) {
                    uniqueUserIds.add(cart.userDetails._id);
                    return true;
                }
                return false;
            });
        },
    },
    methods: {


        getCurrentDate() {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            return formattedDate;
        },

        calculateTotal(cart) {
            return cart.productDetails.Gia * cart.SoLuong;
        },



        async created() {
            try {
                // Retrieve userId from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                if (user && user._id) {
                    this.userId = user._id;
                }

                this.carts = await CartService.getAll();
                console.log("hi", this.carts);
            } catch (error) {
                console.error(error);
            }
        },
        async deleteProduct(id) {
            console.log('hi', id);
            const confirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
            if (confirmed) {
                try {
                    await CartService.delete(id);
                    // Update the cart after successful deletion

                } catch (error) {
                    console.error("Error deleting product:", error);
                    // Handle the error, show a message to the user, or perform other actions
                }
            }
        },



        decreaseQuantity() {
            if (this.SoLuongHH > 1) {
                this.SoLuongHH--;
            }
        },
        increaseQuantity() {
            this.SoLuongHH++;
        },
        async retrieveEmployees() {
            try {
                // Lấy tất cả nhân viên
                const allEmployees = await EmployeeService.getAll();

                // Lọc ra những nhân viên không có role là admin
                this.employees = allEmployees.filter(employee => employee.role !== 'admin');
            } catch (error) {
                console.error(error);
            }
        },
        submitOrder() {


            this.$emit("submit:order", this.orderLocal);
        },

        async addToOrder() {
            console.log('order.MSNV:', this.orderLocal.MSNV);
            try {
                // Get user ID from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                // Create data object for the order
                const data = {
                    MSKH: user._id,
                    MSNV: this.orderLocal.MSNV,  // Use orderLocal.MSNV from the form data
                    NgayDH: this.getCurrentDate(),  // Use the current date
                    TrangthaiDH: 'Đang xử lý',  // Set the initial status, you can change this as needed
                };

                // Call the OrderService to create the order
                await OrderService.create(data);

                // Redirect to the correct route
                this.$router.push({ name: 'psuccess' });
                // Replace 'your-route-name' with the actual name of the route you want to navigate to.
            } catch (error) {
                console.error(error);
            }
        },



    },
    created() {
        console.log('Order object:', this.order);
        this.retrieveEmployees();
        this.created();
    },

};
</script>
<style scoped>
img {
    width: 75%;
    border-radius: 5px;
    padding: 10px;
}

.short-input {
    width: 30%;
    /* Điều chỉnh kích thước tùy ý ở đây */
    display: inline-block;
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn-success {
    margin-right: 10px;
}

.product-quantity {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.product-quantity button {
    background-color: #0077B6;
    /* Màu nền của nút */
    color: #fff;
    /* Màu chữ trắng */
    border: none;
    border-radius: 50%;
    /* Làm cho nút có hình dạng tròn */
    width: 25px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
}

#quantity {
    margin: 0 10px;
    font-size: 18px;
}

.col-sm-9 {
    margin-bottom: 20px;
}
</style>