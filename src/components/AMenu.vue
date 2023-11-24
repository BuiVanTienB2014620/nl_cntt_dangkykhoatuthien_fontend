<template>
    <div>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    <th style="text-align:  center;">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pennant-filled"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M10 2a1 1 0 0 1 .993 .883l.007 .117v.35l8.406 3.736c.752 .335 .79 1.365 .113 1.77l-.113 .058l-8.406 3.735v7.351h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-17a1 1 0 0 1 1 -1z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>

                        Quản Trị Viên


                    </th>


                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>



                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-hexagon" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"></path>
                            <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741"></path>
                            <path
                                d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                            </path>
                        </svg>
                        <router-link :to="{ name: 'admin-user' }" style="text-decoration: none; class " class="textp">
                           Tài khoản hệ thống

                        </router-link>

                    </td>

                </tr>

                <tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store"
                            width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 21l18 0"></path>
                            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4">
                            </path>
                            <path d="M5 21l0 -10.15"></path>
                            <path d="M19 21l0 -10.15"></path>
                            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                        </svg>

                        <router-link :to="{ name: 'admin-position' }" style="text-decoration: none; class " class="textp">
                            Quản lí sản phẩm
                        </router-link>
                    </td>

                </tr>
                <tr>
                    <td>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-align-box-center-stretch" width="24" height="24"
                            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                            </path>
                            <path d="M11 17h2"></path>
                            <path d="M9 12h6"></path>
                            <path d="M10 7h4"></path>
                        </svg>

                        <router-link :to="{ name: 'dire' }" style="text-decoration: none; class " class="textp">
                            Đơn kê đơn hàng
                        </router-link>
                    </td>

                </tr>


            </tbody>
        </table>
        <div class="button">

            <button type="button" class="btn btn-success" @click="logout">
                Đăng xuất

            </button>


        </div>



    </div>
</template>

<script>
export default {
    methods: {



        logout() {
            window.localStorage.removeItem('user');
            this.isLoggedIn = false;


            this.$router.push({ name: "trangchu" });
        },



    }

}
</script>

<style scoped>
/* Style the <tr> elements when hovered */
.table tbody tr:hover {
    background-color: #f2f2f2;
    cursor: pointer;
}

.table thead tr th {
    color: rgb(12, 113, 61);
}

.table tbody tr td {


    padding-left: 40px;
    font-weight: 700;


}

.table tbody tr td .textp {
    color: #000;
}

.table tbody tr td .textp:hover {
    color: rgb(12, 113, 61);
}


/* Change the text color and icon color on hover */
.table tbody tr:hover td {
    color: rgb(12, 113, 61);
    /* Change to the desired text color */
}

/* Style the SVG icons inside the <td> elements */

/* Create a pseudo-element :after with a line on hover */
.table tbody tr:hover:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(12, 113, 61);
    /* Change to the desired line color */
}

.button {
    margin-top: 30px;
    margin-left: 60px;


}

button {
    color: #f2f2f2;
    background-color: rgb(12, 113, 61);
    border-radius: 5px;

}
</style>





