<template>
    <div class="row">
        <div class="col-sm-6">
            <table class="table align-middle mb-0 bg-white">

                <thead class="bg-light">
                    <tr class="table-info">
                        <th scope="row"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                            </svg>Khách hàng</th>

                    </tr>

                </thead>
                <tr>
                    <td>Tên</td>

                    <td>Mật khẩu</td>

                </tr>

                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex align-items-center" v-for="user in users" :key="user._id">
                                <img :src="user.imgURL" alt=""
                                    style="width: 45px; height: 45px" class="rounded-circle" />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ user.name }}</p>
                                    <p class="text-muted mb-0">{{ user.email }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-center" v-for="user in users" :key="user._id">
                               
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ user.password }}</p>
                                    <p class="text-muted mb-0">{{ user.role }}</p>
                                </div>
                            </div>
                        </td>


                    </tr>
                    
                   
                </tbody>
            </table>

        </div>
        <div class="col-sm-6">
            <table class="table align-middle mb-0 bg-white">

                <thead class="bg-light">
                    <tr class="table-info">
                        <th scope="row"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-users-group" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
                                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
                                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
                            </svg>Nhân Viên</th>

                    </tr>

                </thead>
                <tr>
                    <td>Tên</td>

                    <td>Chức vụ</td>

                </tr>

                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex align-items-center" v-for="employee in employees" :key="employee._id">
                                <img :src="employee.imgURL" alt=""
                                    style="width: 45px; height: 45px" class="rounded-circle" />
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ employee.name }}</p>
                                    <p class="text-muted mb-0">{{ employee.email }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-center" v-for="employee in employees" :key="employee._id">
                               
                                <div class="ms-3">
                                    <p class="fw-bold mb-1">{{ employee.role }}</p>
                                    <p class="text-muted mb-0">4 năm</p>
                                </div>
                            </div>
                        </td>


                    </tr>
                    
                   
                </tbody>
            </table>

        </div>


    </div>
</template>

<script>
import EmployeeService from '../services/nhanvien.service';
import UserService from '../services/user.service';

export default {
  data() {
    return {
      employees: [],
      users: [],

    };
  },
  props: {
    id: { type: String, required: true },
  },
  methods: {
    async retrieveEmployees() {
      try {
        this.employees = await EmployeeService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    async retrieveUser() {
      try {
        this.users = await UserService.getAll();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.retrieveEmployees();
    this.retrieveUser();
    
  },
 

}
</script>

<style scoped>
.d-flex{
    padding: 10px;
}


</style>