import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';
const API_BASE_URL = 'https://recruitment-app2-backend-59535856d1ad.herokuapp.com';

export const getJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error('Error while fetching jobs:', error);
    throw error;
  }
};

export const createJob = async (jobData: any) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/jobs`, jobData);
      return response.data;
    } catch (error) {
      console.error('Error while creating job:', error);
      throw error;
    }
  };