<template>
  <div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <div class="ngucoc">
            <div class="centered-content">
              <h1></h1>
              <p class="centered-text"></p>
            </div>
          </div>
        </div>
        

        <div class="col-sm-6">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <ul>
                  <h3>THIỀN LÀ GÌ?</h3>
                  <li>Thiền đã có lịch sử hàng ngàn năm, do đó ý nghĩa và mục đích của nó đã thay đổi theo thời gian và có
                    thể có định nghĩa khác nhau ở mỗi người. Trong khi một số người thực hành thiền định vì lý do tâm
                    linh,
                    các bài tập thở kết hợp với thiền định có thể giúp mang lại một số lợi ích về thể chất.</li>
                  <li>Về cốt lõi, thiền là một hình thức thư giãn. Phương pháp thư giãn này được sử dụng để tập trung và
                    ổn
                    định tâm tâm trí bạn bằng cách gạt bỏ những suy nghĩ căng thẳng trong đời sống bận rộn hàng ngày của
                    chúng ta.</li>


                </ul>
              </div>


            </div>

          </div>
        </div>



      </div>

      <div class="tc">
        <div class="container">

          <div class="row">

            <div class="col-sm-3" @click="OpenModalRegister" v-for="product in products" :key="product._id">
              <img :src="product.imgURL" alt="Hình ảnh" class="imgsp" />



              <div class="ten">
                <p>{{ product.TenHH }}</p>
                <div class="ngoi-sao">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
                <p><b>{{ product.Gia }} VNĐ</b></p>
              </div>


              <homeModal :isShowModalRegister="isShowModalRegister" :closeModalRegister="closeModalRegister"
                class="homeNodal" />
            </div>




          </div>

          <!-- 3 -->



        </div>


      </div>


      <!-- Lời khuyên -->
      <div class="container">
        <div class="lk">
          <div class="row">
            <div class="col-sm-6">
              <h2 style="color: #f7c41c;"></h2>
              <div class="check">
                <div>
                  <h4 style="color: #00FF00;">
                    <i class="fa-regular fa-circle-check"></i>
                    ĐỐI TƯỢNG, ĐỊA ĐIỂM VÀ PHƯƠNG THỨC THỰC HÀNH THIỀN

                  </h4>

                  <ul>
                    <li>Miễn là bạn sẵn lòng học hỏi, bất kỳ ai quan tâm đều có thể thực hành thiền. Trên thực tế, thực
                      hành
                      tạo nên sự hoàn hảo. Một khi bạn hiểu được thiền định, thiền có thể mang lại những lợi ích về mặt
                      thể
                      chất cho mọi người ở mọi lứa tuổi. Từ trẻ nhỏ đến người lớn tuổi và những người trung niên, các bài
                      tập thở thiền cần ít hoặc không cần thêm bất kỳ dụng cụ hoặc thiết bị nào khác ngoài cơ thể của bạn.
                    </li>
                    <li>Một trong những điều hấp dẫn nhất về thiền là nó có thể được thực hành ở hầu hết mọi nơi – tại
                      nhà,
                      tại nơi làm việc và thậm chí là 15000 mét trên không khi bạn đang ở trên máy bay. Miễn là bạn có một
                      nơi thoải mái để ngồi hoặc nằm và dành một vài phút để hoàn thành bài tập, thiền là một phương pháp
                      thực hành có thể đồng hành cùng bạn ở bất cứ đâu.</li>
                    <li>Khi bạn đã thấy mình ở trạng thái thư giãn, hãy nhắm mắt lại và bắt đầu thực hành các kiểu thở
                      sâu.
                      Khi hoạt động hàng ngày, hơi thở của bạn có thể ngắn và nhanh để bắt kịp với lối sống bận rộn thường
                      nhật. Khi thực hành thiền, gắng làm chậm nhịp thở của mình để thư giãn tâm trí và giảm bớt mọi suy
                      nghĩ căng thẳng. Ví dụ, một bài tập thở sẽ là hít vào trong bốn giây, giữ trong bảy giây và thở ra
                      trong 8 giây. Khi thực hiện bài tập này, mục tiêu của bạn là tập trung toàn bộ sự chú ý vào hơi thở
                      –
                      tránh phân tán tâm trí vào những suy nghĩ khác.</li>

                  </ul>
                </div>

              </div>

            </div>
            <div class="col-sm-6">
              <div class="ban">
                <div>
                  <h4 style="color: #FF0000;">
                    <i class="fa-solid fa-ban"></i>

                    Tác hại của ngồi thiền sai cách

                  </h4>

                  <ul>
                    <li>Chứng ảo tưởng của người ngồi thiền còn gây ảnh hưởng không nhỏ tới khả năng kiểm soát hành vi và
                      công việc. Theo các chuyên gia, đây có thể là hậu quả của việc ngồi thiền sai cách.</li>
                    <li>Ngồi thiền sai cách còn khiến bạn cảm thấy chán nản, mất động lực để hoàn thành công việc hàng
                      ngày.
                      Cũng giống như chứng ảo tưởng, giảm động lực và năng suất làm việc bắt nguồn từ việc ngồi thiền sai
                      cách.</li>
                  </ul>
                </div>

              </div>
              <div class="exc">
                <div>
                  <h4 style="color:#FF6600;">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    LỢI ÍCH VỀ MẶT THỂ CHẤT CỦA THỰC HÀNH THIỀN

                  </h4>

                  <ul>
                    <li>Thiền giúp thanh lọc tâm trí thông qua việc thực hành loại bỏ những suy nghĩ tiêu cực, mất tập
                      trung
                      hoặc không mục đích thường là căn nguyên của căng thẳng và lo lắng. Bằng cách lặp đi lặp lại kiểu
                      chuyển hướng suy nghĩ này, tâm trí bạn sẽ có khả năng tập trung hơn, thư giãn và nghỉ ngơi khi cần
                      thiết.</li>
                    <li> Chứng đau đầu do căng thẳng làm bạn cảm thấy như có áp lực lên đầu hoặc đau ở trán và da đầu. Đau
                      đầu do căng thẳng quá độ thường gây ra bởi phát sinh thường nhật, ví dụ như lịch trình làm việc quá
                      tải hoặc gia đình mới đón chào thành viên mới. Và mặc dù chưa được chứng minh về mặt y học rằng
                      chứng
                      đau đầu do căng thẳng có thể được chữa khỏi hoàn toàn bằng thiền định, nhưng việc tập luyện có thể
                      giúp giảm bớt triệu chứng ở một số người. Khi bạn cảm thấy đau đầu, hãy thử tìm tư thế thiền phù hợp
                      và bắt đầu tập trung vào hơi thở. Tuy nhiên, nếu cơn đau đầu của bạn nghiêm trọng, liên tục và gây
                      suy
                      giảm thị lực hoặc bất kỳ triệu chứng thể chất nào khác, bạn nên tham vấn ý kiến ​​chuyên gia chăm
                      sóc
                      sức khỏe..</li>
                    <li> Không có gì tồi tệ hơn suy nghĩ lởn vởn giữ bạn tránh xa khỏi những đêm ngủ sâu giấc. Đôi khi
                      chúng
                      ta nằm xuống giường và bằng cách nào đó, tất cả những lo lắng ùa đến tràn ngập trong đầu. Đúng là
                      mất
                      ngủ có thể do nhiều nguyên nhân khác nhau, bao gồm lựa chọn thực phẩm, sức khỏe tổng thể, viêm khớp
                      và
                      nhiều nguyên nhân khác. Tuy nhiên, lo lắng, căng thẳng và đầu óc làm việc quá sức là những lý do
                      thường xuyên khiến một số người trong chúng ta trằn trọc, đánh mất giấc ngủ mà chúng ta rất cần để
                      cơ
                      thể được phục hồi. Lần tới khi bạn gặp phải tình trạng mất ngủ như thế này, hãy thử bài tập thở sâu
                      để
                      giúp sắp xếp hợp lý luồng suy nghĩ của bạn và giải tỏa căng thẳng để chuẩn bị cho một đêm ngon giấc.
                    </li>

                  </ul>
                </div>

              </div>


            </div>
          </div>

        </div>



      </div>







    </div>

    <!-- ####################################### -->
    <div class="container-fluid">
      



      <div class="row">
        <div class="col-sm-12">
          <ul id="tabPhapThoai" class="nav nav-tabs nav-tabs-cgn hidden-xs" role="tablist">
            <li class="active">
              <a class="change-tab" data-tab-id="0" href="#tab_0" role="tab" data-toggle="tab">Pháp thoại trong
                tháng</a>
            </li>

          </ul>
        </div>
        <div class="col-sm-6">
          <div class="ptm">
            <a href="https://www.youtube.com/watch?v=VxBK5mNB3q0&t=4s">
              <img src="	https://img.youtube.com/vi/VxBK5mNB3q0/0.jpg" alt="">
            </a>
            <a href="" class="text-link">
              <p>
                Pháp thoại Sư Giác Nguyên (Toại Khanh) tại khóa tu Tuổi trẻ hướng Phật chùa Giác Ngộ
              </p>
            </a>

          </div>

        </div>
        <!-- Danh sách pháp thoại trong tháng -->

        <div class="col-sm-6">
          <ul class="pt">
            <li>
              <div class="ptc">
                <a href="https://www.youtube.com/watch?v=8IvUPimWni4" class="image-link">
                  <img src="https://img.youtube.com/vi/8IvUPimWni4/0.jpg" alt="" class="pti">
                </a>
                <a href="" class="text-link">
                  <p>
                    Kinh Mi Tiên vấn đáp - Thầy Ngộ Dũng giảng Lớp Bát Chánh đạo nâng cao
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="https://www.youtube.com/watch?v=ezuZGsYD_98" class="image-link">
                  <img src="	https://img.youtube.com/vi/ezuZGsYD_98/0.jpg" alt="" class="pti">
                </a>
                <a href="" class="text-link">
                  <p>

                    Miền đất hứa - Thầy Hưng Tuệ giảng
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="https://www.youtube.com/watch?v=EeBWvpR_7nw" class="image-link">
                  <img src="https://img.youtube.com/vi/EeBWvpR_7nw/0.jpg" alt="" class="pti">
                </a>
                <a href="" class="text-link">
                  <p>

                    Pháp thoại Mục đích học Phật - Thầy Quảng Tịnh giảng Lớp Bát Chánh đạo
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="https://www.youtube.com/watch?v=nmwo5SmI51E&t=1s" class="image-link">
                  <img src="https://img.youtube.com/vi/nmwo5SmI51E/0.jpg" alt="" class="pti">
                </a>
                <a href="" class="text-link">
                  <p>

                    Lãnh đạo Diễn đàn Phật giáo châu Á vì hòa bình thăm chùa Giác Ngộ
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="https://www.youtube.com/watch?v=An3iqCcff0M" class="image-link">
                  <img src="https://img.youtube.com/vi/An3iqCcff0M/0.jpg" alt="" class="pti">
                </a>
                <a href="" class="text-link">
                  <p>

                    Lợi ích của việc ăn chay - Thầy Thiện Hỷ giảng Lớp Bát chánh đạo cơ bản K18
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <!-- Quỹ đạo phật ngày nay  -->

        <div class="col-sm-12">
          <ul id="tabPhapThoai" class="nav nav-tabs nav-tabs-cgn hidden-xs" role="tablist">
            <li class="active">
              <a class="change-tab" data-tab-id="0" href="#tab_0" role="tab" data-toggle="tab">Quỹ đạo Phật ngày
                nay</a>
            </li>

          </ul>
        </div>



        <div class="col-sm-12">
          <ul class="pt">
            <li>
              <div class="ptc">
                <a href="" class="image-link">
                  <img
                    src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/379639416_335746572163035_4740632174993340970_n.jpg?itok=vny907hx"
                    alt="" class="pti">
                </a>
                <a href="" class="text-linkq">
                  <h6>
                    Hiến máu nhân đạo lần 79 chùa Giác Ngộ
                  </h6>
                  <p>
                    Hiến máu nhân đạo lần 79 chùa Giác Ngộ
                    Sáng ngày 16/09/2023, chùa Giác Ngộ (quận 10, TP.HCM) phối hợp với Trung tâm truyền máu
                    Bệnh viện Chợ Rẫy tổ chức thành công buổi hiến máu nhân đạo lần thứ 79, đóng góp nguồn
                    máu đáng kể...
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="" class="image-link">
                  <img
                    src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/hien-mau-nhan-dao-lan-79-tai-chua-giac-ngo-0115.jpg?itok=9wO_trz7"
                    alt="" class="pti">
                </a>
                <a href="" class="text-linkq">
                  <h6>
                    Hiến máu nhân đạo lần 78 hơn 350 tình nguyện viên góp giọt máu hồng cho xã hội
                  </h6>
                  <p>
                    Sáng ngày 19/08/2023, chùa Giác Ngộ (quận 10, TP.HCM) phối hợp cùng Trung tâm hiến máu
                    nhân đạo TP.HCM tổ chức hiến máu nhân đạo lần thứ 78 đóng góp nguồn máu đáng kể và ngân
                    hàng máu...

                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="" class="image-link">
                  <img
                    src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/tnd_0226.jpg?itok=zBpEl7pG"
                    alt="" class="pti">
                </a>
                <a href="" class="text-linkq">
                  <h6>
                    Chuỗi hoạt động hoằng pháp – Cúng dường trường hạ huyện Đất Đỏ (BR-VT) và huyện Củ Chi
                    (TP.HCM)
                  </h6>
                  <p>
                    Tiếp tục chuỗi hoằng pháp tại các trường hạ trong khu vực nhân mùa an cư kiết hạ
                    PL.2567, ngày 29/07/2023, TT. Thích Nhật Từ, Ủy viên Thường trực HĐTS, Phó Trưởng Ban
                    Thường trực Ban Phật giáo...
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="" class="image-link">
                  <img
                    src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/hien_mau_nhan_dao_lan_76_1.jpg?itok=SXyMT8El"
                    alt="" class="pti">
                </a>
                <a href="" class="text-linkq">
                  <h6>
                    Hiến máu nhân đạo lần 76 tại chùa Giác Ngộ
                  </h6>
                  <p>
                    Sáng ngày 15/07/2023, chùa Giác Ngộ (quận 10, TP.HCM) tổ chức thành công buổi hiến máu nhân đạo lần
                    thứ 76, đóng góp nguồn máu đáng kể và ngân hàng máu tại các bệnh viện phục vụ các...
                  </p>
                </a>

              </div>
            </li>
            <li>
              <div class="ptc">
                <a href="" class="image-link">
                  <img
                    src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/325671884_736005071215588_2703245476811933875_n.jpg?itok=xoDaktr6"
                    alt="" class="pti">
                </a>
                <a href="" class="text-linkq">
                  <h6>
                    Chùa Giác Ngộ, Qũy Đạo Phật Ngày Nay trao quà Tết yêu thương tại phường 7, Gò Vấp,
                    TP.HCM
                  </h6>
                  <p>
                    Trước thềm năm mới, sáng ngày 14/01/2023 (nhằm 23/12 Nhâm Dần), chùa Giác Ngộ - Quỹ ĐPNN đã trao tặng
                    50 phần Quà Tết Yêu Thương đến với bà con khó khăn đang sinh sống trên địa bàn...
                  </p>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-sm-12">
          <ul id="tabPhapThoai" class="nav nav-tabs nav-tabs-cgn hidden-xs" role="tablist">
            <li class="active">
              <a class="change-tab" data-tab-id="0" href="#tab_0" role="tab" data-toggle="tab">khóa tu đạo phật ngày
                nay</a>
            </li>

          </ul>
        </div>
        <div class="col-sm-6">
          <div class="kt">
            <a href="" class="ktimg">
              <img
                src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/384749419_344157881321904_7599744334856038765_n.jpg?itok=dTdWF8Ij"
                alt="">
            </a>
            <a href="" class="text-linkK">
              <p>
                Ca sĩ Nam Cường giao lưu Khóa tu Tuổi trẻ hướng Phật chùa Giác Ngộ
              </p>
            </a>

          </div>
          <div class="kt">
            <a href="" class="ktimg">
              <img
                src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/382234633_340374451700247_3014673187423838632_n.jpg?itok=EPyR-DgS"
                alt="">
            </a>
            <a href="" class="text-linkK">
              <p>
                Sôi nổi một ngày tu học tại chùa Giác Ngộ
              </p>
            </a>

          </div>

        </div>
        <div class="col-sm-6">
          <div class="kt">
            <a href="" class="ktimg">
              <img
                src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/namcuong_yeaq.jpg?itok=oTr5099f"
                alt="">
            </a>
            <a href="" class="text-linkK">
              <p>
                Ca sĩ Nam Cường - Khách mời talkshow Vì sao tôi theo Đạo Phật
              </p>
            </a>

          </div>
          <div class="kt">
            <a href="" class="ktimg">
              <img
                src="http://chuagiacngo.com/sites/default/files/styles/large/public/field/image/3-copy.jpg?itok=Iq5pZsVU"
                alt="">
            </a>
            <a href="" class="text-linkK">
              <p>
                Lễ bế mạc khoá tu Xuất gia gieo duyên lần 4 tại chùa Quan Âm Đông Hải
              </p>
            </a>

          </div>

        </div>






      </div>
      <!-- 1111 -->

      <!-- 111 -->



    </div>
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
  },
  created() {
    this.retrieveProducts();
  },


}


</script>
<script setup>
import { ref } from "vue";
import homeModal from "./homeModal.vue";


const isShowModalRegister = ref(false)

const OpenModalRegister = () => {
  isShowModalRegister.value = true;
};
const closeModalRegister = () => {
  isShowModalRegister.value = false;
};
</script>
  
<style scoped>
/* Thẻ div đầu  */



.row {
  padding-bottom: 20px;
  margin-bottom: 25px;
}

.content {
  background-color: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 335px;
}

.text-container {
  padding: 0 8px;
}

/* Thụt đầu hàng cho các dòng chữ */
.text-container h1,
.text-container p {
  text-align: left;
  margin: 0;
  display: block;
  margin-left: 1em;
  /* Điều chỉnh khoảng cách lề bằng nhau ở đầu dòng */
  text-indent: -1em;
}

.line-break {
  display: block;

}

.col-sm-6 {
  margin-top: 16px;
}

.ngucoc {
  background-image: url(https://sbb.vn/wp-content/uploads/2022/01/32.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 64vh;
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  text-align: center;
  color: aliceblue;
  border-radius: 10px;
}

.centered-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.centered-text {
  text-align: center;
  color: #333;
}

/* Thẻ div đầu */


/* Quyền lợi */
.carousel-item {


  color: #333;
  /* Chữ màu trắng */
  border-radius: 10px;
  height: 64vh;
  width: 100%;


}

.carousel-item h3 {


  color: #386fd6;
  text-align: center;
  /* Chữ màu trắng */



}

.carousel-item ul {
  list-style: none;

}


.carousel-item ul>h3 {
  padding-bottom: 30px;

}




.tcs {
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;


  background-color: #ffffff;
  min-height: 200px;
}

.tcs span {
  margin: 10px;

  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0074e4;


  margin-bottom: 10px;
  color: #ffffff;
}



.imgsp {
  width: 210px;
  border-radius: 5px;
}





.lk {
  background-color: #f7c41c;
  border-radius: 10px;
  width: 100%;

}

.col-sm-6>h2,
.col-sm-6 .check,
.col-sm-6 .ban,
.col-sm-6 .exc {
  padding: 20px;

}

.check,
.ban,
.exc {
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
}

.col-sm-6:hover {
  transform: scale(1.05);
  /* Increase the size by 5% */
  transition: transform 0.3s ease;
  /* Add a smooth transition effect */
}

.col-sm-3:hover {
  transform: scale(1.05);
  /* Increase the size by 5% */
  transition: transform 0.3s ease;
  /* Add a smooth transition effect */
}

.imgsp:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow on hover */
  transition: box-shadow 0.3s ease;
  /* Add a smooth transition effect */
}

.tcs:hover {
  background-color: #f0f0f0;
  /* Change the background color on hover */
  transition: background-color 0.3s ease;
  /* Add a smooth transition effect */
}

.homeModal {
  background-color: rgba(0, 0, 0, 0.25) !important;

}

/* ############## */
.firstimg,
.col-sm-12,
.col-sm-6 {
  margin-bottom: 18px;
}

.carousel-indicators>li {
  background-color: rgb(180, 180, 23);

}


.nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
  background: #c18000;
  color: #fff;
  padding: 6px 20px;
}

.nav-tabs {
  border-bottom: 5px solid #c18000;
}

.pt {
  list-style: none;

}

.pti {
  width: 135px;
  height: 98px;
  margin-bottom: 10px;
}

.ptm {
  background-color: #eacd93;
  width: 100%;
  height: 100%;


}

.ptc {
  display: flex;
  align-items: center;
  /* Căn giữa theo chiều dọc */
}

.image-link {
  margin-right: 10px;
  /* Khoảng cách giữa hình và chữ */
}

.text-link {
  color: #606060;
  margin-bottom: 71px;
  font-weight: 500;
}

.text-linkq {
  margin-bottom: 35px;
}

.text-linkq>h6 {
  color: #606060;

  font-weight: 500;
}

.text-linkq>p {
  color: #606060;

}

.text-linkq>h6:hover,
.text-linkq>p:hover {
  color: #c18000;

}

.ptc>a,
.ptm>a {

  text-decoration: none !important;
}

.ptc>a:hover,
.ptm>a:hover {

  text-decoration: none !important;
  color: #c18000;
}

.kt {
  display: flex;

}

.ktimg>img {
  width: 200px;
  margin-bottom: 10px;
}

.text-linkK {
  color: #606060;
  margin-bottom: 71px;
  font-weight: 500;
}

.text-linkK>p {
  padding-left: 10px;
  padding-bottom: 10px;
}

.text-linkK:hover {
  text-decoration: none !important;
  color: #c18000;
}</style>