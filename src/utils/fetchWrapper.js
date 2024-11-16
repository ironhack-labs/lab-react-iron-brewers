import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Handle specific error codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          // Handle other errors
          break;
      }
    }
    return Promise.reject(error);
  }
);

const fetchWrapper = {
  // GET request
  get: async (endpoint, params = {}) => {
    try {
      const response = await api.get(endpoint, { params });
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data || error.message
      };
    }
  },

  // POST request
  post: async (endpoint, data = {}) => {
    try {
      const response = await api.post(endpoint, data);
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data || error.message
      };
    }
  },

  // PUT request
  put: async (endpoint, data = {}) => {
    try {
      const response = await api.put(endpoint, data);
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data || error.message
      };
    }
  },

  // PATCH request
  patch: async (endpoint, data = {}) => {
    try {
      const response = await api.patch(endpoint, data);
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data || error.message
      };
    }
  },

  // DELETE request
  delete: async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return {
        data: response,
        error: null
      };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data || error.message
      };
    }
  }
};

export default fetchWrapper;