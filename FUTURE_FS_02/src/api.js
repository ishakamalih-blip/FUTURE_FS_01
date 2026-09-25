import axios from "axios";

const API = axios.create({
  baseURL: "https://future-fs-02-cxjq.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getLeads = () => API.get("/leads");

export const createLead = (lead) => API.post("/leads", lead);

export const updateLead = (id, lead) => API.put(`/leads/${id}`, lead);

export const deleteLead = (id) => API.delete(`/leads/${id}`);

export default API;