interface IFetchProps {
  url: string;
  data: {
    auth: string;
  }
}

const commonFetch = async ({url, data}: IFetchProps) => {
  const baseUrl = 'https://easyfront.xt.lv';

  const response = await fetch(baseUrl + url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data)
  });

  return await response.json();
}

const fetcher = (args: any) => {
  return commonFetch(args).then(res => res);
}

export default fetcher;