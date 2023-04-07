export async function http<T>(request: RequestInfo): Promise<T> {
  return fetch(request)
    .then(async (response) => {
      if (!response.ok) {
        // 未登录跳转到登录页面
        if (response.status === 401) {
          window.location.reload();
        }
        throw new Error(response.statusText);
      }
      return response.json() as Promise<T>;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function dohttp<T>(
  method: string,
  path: string,
  data: Record<string, any> = {},
  headers?: object,
): Promise<T> {
  return http<T>(
    new Request(path, {
      method,
      credentials: 'include',
      headers: headers
        ? Object.assign(headers, {
            'Content-Type': 'application/json',
          })
        : ({
            'Content-Type': 'application/json',
          } as any),
      body: JSON.stringify(data),
    }),
  ).then(errorFilter);
  // .catch(errorCallback);
}

function errorFilter(res: any) {
  if (res.code !== 0) {
    let message = res.msg;
    if (!message) {
      message = `${res.data}`;
    }
    throw new Error(message || '未知错误，请联系客服处理');
  }
  return res;
}

export async function get<T>(
  path: string,
  args: RequestInit = {
    method: 'get',
    credentials: 'include',
  },
): Promise<T> {
  return http<T>(new Request(path, args)).then(errorFilter);
}
export async function del<T>(
  path: string,
  args: RequestInit = {
    method: 'delete',
    credentials: 'include',
  },
): Promise<T> {
  return http<T>(new Request(path, args)).then(errorFilter);
}

export async function post<T>(
  path: string,
  data: Record<string, any> = {},
  headers?: object,
): Promise<T> {
  return dohttp('post', path, data, headers);
}

export async function put<T>(
  path: string,
  data: Record<string, any> = {},
  headers?: object,
): Promise<T> {
  return dohttp('put', path, data, headers);
}

export async function patch<T>(path: string, data: Record<string, any> = {}): Promise<T> {
  return dohttp('PATCH', path, data);
}

export function jsonParse(content: string): any {
  let jsonData;
  try {
    jsonData = JSON.parse(content);
  } catch (e) {
    console.log('json parse error:', e, ',content:', content);
  }
  return jsonData;
}
