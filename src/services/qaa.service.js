import createApiClient from "./api.service";

class QaAService {
    constructor(baseUrl = "/api/qaas") {
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
}

export default new QaAService();
