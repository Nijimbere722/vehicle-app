import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-base-url.com', // replace with actual base URL from Swagger
  headers: { 'Content-Type': 'application/json' },
});

// Vehicles
export const getVehicles       = ()        => api.get('/vehicle');
export const getVehicleById    = (id)      => api.get(`/vehicle/${id}`);
export const getVehicleInfo    = (id)      => api.get(`/vehicle/${id}/info`);
export const getVehicleOwner   = (id)      => api.get(`/vehicle/${id}/owner`);
export const getVehicleReg     = (id)      => api.get(`/vehicle/${id}/registration`);
export const getVehicleIns     = (id)      => api.get(`/vehicle/${id}/insurance`);
export const createVehicle     = (data)    => api.post('/vehicle', data);
export const updateVehicle     = (id, data)=> api.put(`/vehicle/${id}`, data);
export const deleteVehicle     = (id)      => api.delete(`/vehicle/${id}`);

export default api;