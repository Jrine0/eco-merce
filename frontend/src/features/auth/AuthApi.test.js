// src/features/auth/AuthApi.test.js
import { signup } from './AuthApi';
import { axiosi } from '../../config/axios';

// Mock the axios module
jest.mock('../../config/axios', () => ({
  axiosi: {
    post: jest.fn(),
  },
}));

// Mock the environment variable directly
const originalEnv = process.env;
const BASE_URL = process.env.REACT_APP_BASE_URL;

describe('signup', () => {
  const cred = { email: 'test@example.com', password: 'password123' };

  beforeAll(() => {
    // Mock process.env
    process.env = { ...originalEnv, REACT_APP_BASE_URL: BASE_URL };
  });

  afterAll(() => {
    // Restore original process.env
    process.env = originalEnv;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return data on successful signup', async () => {
    const mockData = { user: { id: 1, email: cred.email } };
    axiosi.post.mockResolvedValueOnce({ data: mockData });
    
    const result = await signup(cred);
    
    expect(axiosi.post).toHaveBeenCalledWith(`${BASE_URL}/auth/signup`, cred);
    expect(result).toEqual(mockData);
  });

  it('should throw error.response.data on failure', async () => {
    const error = { response: { data: { message: 'Signup failed' } } };
    axiosi.post.mockRejectedValueOnce(error);
    
    await expect(signup(cred)).rejects.toEqual(error.response.data);
  });
});