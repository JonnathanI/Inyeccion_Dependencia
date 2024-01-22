/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

const axios = require('axios');
const nodeFetch = require('node-fetch');


async function axiosRequest(url) {
  const response = await axios.get(url);
  return response.data;
}


async function fetchRequest(url) {
  const response = await nodeFetch(url);
  return await response.json();
}

async function makeHttpRequest(requestFunction, url) {
  try {
    const result = await requestFunction(url);
    console.log(result);
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
  }
}

const apiUrl = 'https://rickandmortyapi.com/';


makeHttpRequest(axiosRequest, apiUrl);


makeHttpRequest(fetchRequest, apiUrl);

 
}
