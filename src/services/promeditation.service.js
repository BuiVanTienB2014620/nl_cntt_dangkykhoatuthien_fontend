import createApiClient from "./api.service";

class ProMeditationService {
    constructor(baseUrl = "/api/pro-meditations") {
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

    async findByKhoaTuId(khoaTuId) {
        return (await this.api.get(`/khoa-tu/${khoaTuId}`)).data;
    }
}

export default new ProMeditationService();
