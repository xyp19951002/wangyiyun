import http from "./http";

export const getwyindex = params => http.get("/wyindex", params);
