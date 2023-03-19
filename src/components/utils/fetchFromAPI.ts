import axios, { AxiosRequestConfig } from 'axios';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjZjYjY4Zi05MmZmLTRhNDctOGJiYy1lMjhiM2FjMWQ0MjYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkxNDMxOTMsImV4cCI6MTY4MDA0MzE5M30.VtHm4Shaypn85NlrRLl2_tAc3TT6DFj6oOrtR2CpDHo';

const BASE_URL = 'http://api.wisey.app/api/v1/core/preview-courses';

const options: AxiosRequestConfig = {
  maxBodyLength: Infinity,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  data: ''
};

export const fetchFromAPI = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};