import { mock } from 'bun:test';

export function createMockVK(handlers?: Record<string, Function>) {
  const apiMethods = new Proxy(
    {},
    {
      get: () => () => Promise.resolve({ response: [] }),
    },
  );

  const mockSend = mock(() => Promise.resolve({ message_id: 1 }));

  return {
    VK: class {
      api = apiMethods;
      updates = {
        on: mock((event: string, handler: Function) => {
          if (handlers?.[event]) handlers[event] = handler;
        }),
        startPolling: mock(() => Promise.resolve()),
        stopPolling: mock(() => Promise.resolve()),
      };
    },
    getMockSend: () => mockSend,
    mockContext: (overrides = {}) => ({
      text: 'test',
      senderId: 123,
      peerId: 123,
      send: mockSend,
      ...overrides,
    }),
  };
}
