import createApiClient from "./api.service";

class ResMeditationService {
    constructor(baseUrl = "/api/res-meditations") {
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

    async findAll() {
        return (await this.api.get("/")).data;
    }

    async deleteAll() {
        return (await this.api.delete("/")).data;
    }

    async findByStatus(status) {
        return (await this.api.get(`/status/${status}`)).data;
    }

    async findByKhoaTuId(khoaTuId) {
        return (await this.api.get(`/khoa-tu/${khoaTuId}`)).data;
    }
}

export default new ResMeditationService();
