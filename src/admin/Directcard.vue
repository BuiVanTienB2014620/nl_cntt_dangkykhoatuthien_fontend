<template>
    <div class="row">
        <div class="col-sm-12" style="text-align: center;">
            <h3>Đăng ký khóa tu</h3>

        </div>

        <div class="col-sm-12">

            <div>
                <label><b>Tổng doanh thu:</b></label>
                <label>{{ totalAmount }}.000 vnđ</label>
            </div>
            <div style="display: flex;">
                <div v-for="order in orders" :key="order._id">
                    <div>----------------------------------------------------------------------------</div>
                    <div><b>Giảng sư:</b>{{ order.employeeInfo.name }} </div>


                    <label><b>Thông tin thiền sinh:</b></label>
                    <ul>
                        <li>
                            <b>Tên:</b>{{ order.customerInfo.name }}

                        </li>
                        <li> <b>Số điện thoại:</b> {{ order.customerInfo.phoneNumber }} </li>
                        <li><b>Địa chỉ:</b>{{ order.customerInfo.address }}</li>
                        <li> <b>Ngày đăng ký:</b> {{ getCurrentDate() }}</li>
                        <li>

                            <b>Ngày bắt đầu:</b> {{ getExpectedDeliveryDate() }}

                        </li>

                    </ul>
                    <div>----------------------------------------------------------------------------</div>
                </div>

            </div>
            <div>
                <label><b>Trạng thái:</b></label>
                <span :style="{ color: orderStatus === 'Chưa duyệt' ? 'red' : 'green' }">{{ orderStatus }}</span>
            </div>





            <button class="btn btn-success" @click="approveOrder">Duyệt</button>

            <h4 style="text-align: center;">Thống kê khóa học đã đăng ký</h4>
            <table class="table">
                <thead>
                    <tr class="table-primary">
                        <th scope="row">Tên khóa học</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cart in carts" :key="cart._id" class="table-warning">
                        <td>{{ cart.productDetails.TenHH }}</td>
                        <td>{{ 1 * cart.productDetails.Gia }}.000 VNĐ</td>
                        <td>{{ cart.SoLuong }}</td>
                        <td>{{ calculateTotal(cart) }}.000 VNĐ</td>
                    </tr>
                </tbody>
            </table>






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
            // userId: '654cfdaa4d0821b70a923ff6',
            orderStatus: 'Chưa duyệt',

        };
    },
    props: {
        id: { type: String, required: true },
    },
    computed: {
        totalAmount() {
            return this.carts.reduce((total, cart) => {
                return total + this.calculateTotal(cart);
            }, 0);
        },
        // filteredCarts() {
        //     return this.carts.filter(cart => cart.userDetails._id === this.userId);
        // },
        // filteredOrders() {
        //     return this.orders.filter(order => order.customerInfo._id === this.userId);
        // },
        filteredCarts() {
            return this.carts.filter(cart => cart._id === this.userId);
        },
        filteredOrders() {
            return this.orders.filter(order => order._id === this.userId);
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
        getExpectedDeliveryDate() {
            const currentDate = new Date();
            const expectedDeliveryDate = new Date(currentDate);
            expectedDeliveryDate.setDate(currentDate.getDate() + 10);

            const formattedDate = `${expectedDeliveryDate.getFullYear()}-${(expectedDeliveryDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${expectedDeliveryDate.getDate().toString().padStart(2, '0')}`;

            return formattedDate;
        },
        calculateTotal(cart) {
            return cart.productDetails.Gia * cart.SoLuong;
        },

        async created() {
            try {
                // Retrieve userId from localStorage

                this.carts = await CartService.getAll();
                console.log("hi", this.carts);
            } catch (error) {
                console.error(error);
            }
        },
        async createdorder() {
            try {


                this.orders = await OrderService.getAll();
                console.log("hi", this.orders);
            } catch (error) {
                console.error(error);
            }
        },
        async approveOrder() {
            try {
                // Update the orderStatus in data
                this.orderStatus = 'Đã duyệt';

                // Delete all orders and carts
                // await OrderService.deleteAll(); // Assuming OrderService has a method to delete all orders
                // await CartService.deleteAll();  // Assuming CartService has a method to delete all carts

                // // Clear the local data arrays
                // this.orders = [];
                // this.carts = [];

            } catch (error) {
                console.error(error);
            }
        },


    },
    created() {
        this.created();
        this.createdorder();
    },
};
</script>
<style scoped>
.td {
    display: flex;
}
</style>