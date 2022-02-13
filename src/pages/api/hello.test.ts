import { createMocks } from 'node-mocks-http';

import handleHello from './hello';

describe('/api/hello', () => {
  test('returns a message with the name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        name: 'John Doe',
      },
    });

    await handleHello(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      })
    );
  });
})
