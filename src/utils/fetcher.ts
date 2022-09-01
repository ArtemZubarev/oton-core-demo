import {config} from "../App";

interface IFetchProps {
  url: string;
  data: {
    auth: string;
  }
}

const defaultOptions = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow',
  referrerPolicy: 'no-referrer', // no-referrer, *client
};

const commonFetch = async ({url, data}: IFetchProps) => {
  const baseUrl = config.api.baseUrl || '';

  const response = await fetch(baseUrl + url, {
    ...defaultOptions,
    body: JSON.stringify(data)
  } as RequestInit);

  return await response.json();
}

const fetcher = (args: any) => {
  return commonFetch(args).then(res => res);
}

export default fetcher;