import createApiClient from "./api.service";

class ScheduleService {
    constructor(baseUrl = "/api/schedules") {
        this.api = createApiClient(baseUrl);
    }

    async create(payload) {
        return (await this.api.post("/", payload)).data;
    }

    async findById(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    async update(id, payload) {
        return (await this.api.put(`/${id}`, payload)).data;
    }

    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }

    async findAll() {
        return (await this.api.get("/")).data;
    }

    async findByChuongTrinhId(chuongTrinhId) {
        return (await this.api.get(`/chuong-trinh/${chuongTrinhId}`)).data;
    }
}

export default new ScheduleService();
