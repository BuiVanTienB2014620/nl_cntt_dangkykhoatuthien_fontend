import createApiClient from "./api.service";

class MonksService {
    constructor(baseUrl = "/api/monks") {
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

    async findByVienTruongId(IDVienTruong) {
        return (await this.api.get(`/vien-truong/${IDVienTruong}`)).data;
    }
}

export default new MonksService();
