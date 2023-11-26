<template>
    <div >
        <table  style="width: 50%; ;">
            <thead>
                <tr>
                    <th scope="col">Tháng</th>
                    <th scope="col">Học viên</th>
                    <th scope="col">Học phí</th>
                </tr>
            </thead>
            <tbody>
                <tr  class="table-primary" v-for="(monthData, index) in monthlyData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ monthData.totalStudents }}</td>
                    <td>{{ monthData.totalFees }}</td>
                </tr>
            </tbody>
        </table>

        <div class="bar-chart">
            <div v-for="(month, index) in monthlyData" :key="index" class="bar"
                :style="{ height: `${(month.totalStudents / maxStudents) * 100}%` }">
                <span>{{ month.totalStudents }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            monthlyData: Array.from({ length: 12 }, () => ({
                totalStudents: Math.floor(Math.random() * 100) + 1,
                totalFees: Math.floor(Math.random() * 10000) + 1000,
            })),
        };
    },
    computed: {
        maxStudents() {
            return Math.max(...this.monthlyData.map((month) => month.totalStudents));
        },
    },
};
</script>
  
<style>
/* Thêm CSS theo ý của bạn */
.bar-chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 300px;
    /* Điều chỉnh chiều cao của biểu đồ */
}

.bar {
    flex: 0 0 8%;
    /* Điều chỉnh khoảng cách giữa các cột và chiều rộng của cột */
    background-color: #4CAF50;
    /* Điều chỉnh màu sắc của cột */
    text-align: center;
    color: white;
    position: relative;
}

.bar span {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
}</style>
  