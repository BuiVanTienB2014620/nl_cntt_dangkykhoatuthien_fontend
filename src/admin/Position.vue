<template>
    <div>
        <button class="btn btn-sm" @click="goToAddProduct()">
            <router-link :to="{ name: 'addposition' }" class="text-success">
                <i class="fas fa-plus fa-2x" aria-hidden="true"></i>
            </router-link>
        </button>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th>Sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Ghi chú</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                    <td>
                        <div class="d-flex align-items-center">
                            <img :src="product.imgURL" alt="" style="width: 45px; height: 45px; margin-right: 18px"
                                class="rounded-circle" />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">{{ product.TenHH }}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{ product.MoTaHH }}</p>
                    </td>
                    <td>
                        <p>{{ product.Gia }} VNĐ</p>
                    </td>
                    <td>{{ product.SoLuongHangHoa }}</td>
                    <td>
                        <p>{{ product.GhiChu }}</p>
                    </td>
                    <td>

                        <button type="button" class="btn btn-link btn-sm btn-rounded" @click="goToEditProduct(product._id)">
                            <!-- <router-link :to="{ name: 'editposition', params: { id: product._id } }"> -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                <path d="M16 5l3 3"></path>
                            </svg>

                            <!-- </router-link> -->

                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded" style="color: rgb(201, 7, 7);"
                            @click="deleteProduct(product._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7l16 0"></path>
                                <path d="M10 11l0 6"></path>
                                <path d="M14 11l0 6"></path>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import ProductService from '../services/hanghoa.service';

export default {
    data() {
        return {
            products: [],

        };
    },
    props: {
        id: { type: String, required: true },
    },

    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.error(error);
            }
        },
        async deleteProduct(id) {
            const confirmed = window.confirm("Bạn có chắc muốn xóa sản phẩm này?");
            if (confirmed) {
                try {
                    await ProductService.delete(id);
                    // Sau khi xóa, bạn có thể cập nhật danh sách sản phẩm hoặc thực hiện các thay đổi khác cần thiết
                    this.retrieveProducts();
                } catch (error) {
                    console.error(error);
                }
            }
        },
        goToAddProduct() {
            this.$router.push({ name: 'addposition' });
        },
        goToEditProduct(id) {
            this.$router.push({ name: 'editposition', params: { id } });
        },


    },
    created() {
        this.retrieveProducts();
    },
};
</script>
  