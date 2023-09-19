import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content:'application/json'
  }
})

http.interceptors.request.use(function (config)
{
  // Do something before request is sent (ou "fazer alguma coisa com o erro da requisição")
  const token = sessionStorage.getItem('token')
  if (token && config.headers)
  {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error)
{
  // Do something with request error (ou "fazer alguma coisa com o erro da requisição")
  console.log('erro no interceptor do axios')
  return Promise.reject(error);
});

export default http

