<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-if="product" :key="product._id">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="col-sm-6" v-if="product" :key="product._id">
        <div class="product-details">
          <div class="product-header">
            <h1 style="color: #0077B6">{{ product.TenHH }}</h1>
            <div class="product-price">

              <span class="price-new">{{ 1 * product.Gia }}.000VNĐ</span>
              <span class="price"> - </span>
              <span class="price-old">{{ 1.5 * product.Gia }}.000VNĐ</span>
            </div>
            <div class="product-rating">
              <!-- 45 ngôi sao màu vàng -->
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
          </div>
          <div class="product-info">

            <p><b>Tên Sản Phẩm:</b> {{ product.TenHH }}</p>
            <p><b>Xuất Xứ:</b> Hưng Yên</p>
            <p><b>Hạn Sử Dụng:</b> 12 tháng</p>
            <p><b>Công dụng:</b> {{ product.MoTaHH }}</p>
            <div class="product-quantity">
              <button id="decrease-quantity" @click="decreaseQuantity">-</button>
              <span id="quantity">{{ SoLuongHH }}</span>
              <button id="increase-quantity" @click="increaseQuantity">+</button>
            </div>

          </div>

        </div>
        <div class="product-details">
          <!-- ...Các phần khác giữ nguyên... -->


          <button id="add-to-cart" class="btn btn-success text-white" @click="addToCart">
            Thêm vào giỏ hàng
          </button>




        </div>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import CartService from '../services/giohang.service';
import ProductService from '../services/hanghoa.service';
export default {
  data() {
    return {

      product: [],
      SoLuongHH: 1,
    };
  },
  props: {
    id: { type: String, required: true },
    cart: { type: Object, required: true },
  },
  methods: {
    async addToCart() {
      try {
        // Get user ID from localStorage
        const userJs = window.localStorage.getItem('user');
        const user = JSON.parse(userJs);

        const productData = await ProductService.get(this.$route.params.id);


        // Create data object for the cart
        const data = {

        
          IdUser: user._id,
          IdHangHoa: productData._id,
          SoLuong: this.SoLuongHH,
        };
        console.log('hi', data);

        // Call the CartService to create the cart
        await CartService.create(data);

        // Redirect to the correct route
        this.$router.push({ name: 'events' });
        // Replace 'your-route-name' with the actual name of the route you want to navigate to.
      } catch (error) {
        console.error(error);
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


  },
  async created() {
    const productId = this.$route.params.id;
    try {
      this.product = await ProductService.get(productId);
    } catch (error) {
      console.error(error);
    }
  },
}









</script>
  
<style scoped>
img {
  width: 324px;
}

.product-rating span {
  color: gold;
  /* Đổi màu thành màu vàng */
}

.product-details {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}

li {
  list-style: none;
}

.product-info {
  list-style: none;
  padding-left: 0;
}

.product-action {
  display: flex;
  justify-content: flex-end;
}

.btn-add-to-cart {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-order-now {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}


/* Hiệu ứng khi hover vào nút */
.product-quantity button:hover {
  background-color: #005a9e;
  /* Màu nền khi hover */
}

#add-to-cart {
  border-radius: 5px;
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
</style>
  