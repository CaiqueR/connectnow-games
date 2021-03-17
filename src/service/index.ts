import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://public.connectnow.org.uk/applicant-test/'
})
