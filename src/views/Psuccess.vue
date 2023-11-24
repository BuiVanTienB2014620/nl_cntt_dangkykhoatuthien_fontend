<template>
    <div class="contaiter">
        <div class="row">
            <div class="col-sm-6">

                <img style="
         
         float: left;
         left: 360px;
       
         width: 250px;
         top: 277px;
       " src="https://theme.hstatic.net/1000363117/1000911694/14/lazyload.gif?v=271" width="250px" />
            </div>
            <div class="col-sm-6">
                <h3>Đặt hàng thành công</h3>

                <div v-for="order in filteredOrders" :key="order.customerInfo._id">
                    <label><b>MSKH:</b></label>
                    <label>{{ order.MSKH }}</label> <br>
                    <label><b>Tên:</b>{{ order.customerInfo.name }}</label><br>
                    <label><b>Số điện thoại:</b> {{ order.customerInfo.phoneNumber }}</label><br>
                    <label><b>Địa chỉ:</b> {{ order.customerInfo.address }}</label><br>
                    <label><b>Phương thức thanh toán: </b>Tận nơi</label><br>
                    <label><b>Địa chỉ:</b>{{ order.customerInfo.address }}</label><br>
                </div>
                <div v-for="order in filteredOrders" :key="order.customerInfo._id">
                    <label><b>Ngày đặt hàng:</b> {{ order.NgayDH }}</label><br>
                    <label><b>Ngày giao hàng:</b> {{ order.NgayGH }}</label><br>


                    <label><b>Người giao hàng:</b> {{ order.employeeInfo.name }}</label><br>


                    <!-- Button to confirm the status change -->
                    <div><b>Trạng thái: </b>{{ order.TrangthaiDH }}</div>
                </div>


            </div>
        </div>



        <div class="container">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="display: none;">id</th>
                            <th scope="col">Sản phẩm</th>
                            <th style="width: 300px" scope="col"></th>
                            <th scope="col">Giá</th>

                            <th style="width: 120px" scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cart in filteredCarts" :key="cart.userDetails._id">
                            <td style="display: none;">
                                <input name="" type="text" />
                            </td>
                            <td><img :src="cart.productDetails.imgURL" alt="cart Image" class="img"></td>
                            <td>{{ cart.productDetails.TenHH }}</td>
                            <td>{{ 1 * cart.productDetails.Gia }}.000 VNĐ</td>

                            <td>
                                {{ cart.SoLuong }}
                            </td>
                            <td>
                                {{ calculateTotal(cart) }}.000 VNĐ
                            </td>
                        </tr>
                    </tbody>
                    <tr>
                        <td style="background-color: #ccc;">
                            <b>Tổng đơn hàng:</b>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-dark"><b>{{ totalAmount }}.000 vnđ</b></td>
                    </tr>
                </table>

            </div>
            <router-link :to="{ name: 'auth' }">
                <button style="
            float: right;
            width: 100%;
            overflow: hidden;
            color: #fff;
            height: 50px;
            margin: 10px auto;
            border-radius: 4px;
            background: #00ab9f;
            border-radius: 18px;
            border: 0;
            cursor: pointer;
          " @click="clearCartAndNavigate">
                    Tiếp tục mua hàng
                </button>

            </router-link>

        </div>
    </div>
</template>
  
<script>
import OrderService from '../services/dathang.service';
import CartService from '../services/giohang.service';
export default {
    data() {
        return {
            carts: [],
            orders: [],
            userId: '',

        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {
        filteredCarts() {
            return this.carts.filter(cart => cart.userDetails._id === this.userId);
        },
        filteredOrders() {
            return this.orders.filter(order => order.customerInfo._id === this.userId);
        },
        totalAmount() {
            return this.filteredCarts.reduce((total, cart) => {
                return total + cart.productDetails.Gia * cart.SoLuong;
            }, 0);
        },


    },
    methods: {
        calculateTotal(cart) {
            return cart.productDetails.Gia * cart.SoLuong;
        },

        confirmDeliveryStatus() {
            // Add logic to handle the confirmation, if needed
            console.log('Delivery status confirmed:', this.orderInfo.deliveryStatus);
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
        async createdorder() {
            try {
                // Retrieve userId from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                if (user && user._id) {
                    this.userId = user._id;
                }

                this.orders = await OrderService.getAll();
                console.log("hi", this.orders);
            } catch (error) {
                console.error(error);
            }
        },
       async clearCartAndNavigate() {
            // Clear the cart data
            try {
                // Retrieve userId from localStorage
                const userJs = window.localStorage.getItem('user');
                const user = JSON.parse(userJs);

                if (user && user._id) {
                    this.userId = user._id;
                }

                this.orders = await CartService.deleteAll();
                this.$router.push({ name: 'auth' });
                console.log("hi", this.orders);
            } catch (error) {
                console.error(error);
            }

            // Assuming you have a route named 'auth' defined in your router configuration
            
        },

    },
    created() {
        this.created();
        this.createdorder();
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

    display: inline-block;
    margin: 0;
    padding: 0;
    text-align: center;
}

.btn-success {
    margin-right: 10px;
}
</style>

  