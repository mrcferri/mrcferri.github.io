self.addEventListener('fetch', event => {
   console.log(`Handling fetch event for ${event.request.url}`);
   let requestURL = new URL(event.request.url);
   if (requestURL.pathname === '/urlshortener/v1/url' && requestURL.headers.has('X-Mock-Response'))
    let response = {
     body:{
      kind:'urlshortener#url',
       id: 'http://goo.gl/IKyjuU',
       longUrl: 'https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html'
     },
      init: {
        status: 200,
        statusText: 'OK',
        headers: {
        'Content-Type': 'application/json',
        'X-Mock-Response': 'yes'
        }
     }
    };
    let mockResponse = new Response(JSON.stringify(response.body), response.init);
    console.log('Responding with a mock response body:', response.body);
    event.respondWith(mockResponse);
   })
