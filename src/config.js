const dev = 'http://localhost:8000';

const API_PATH = process.env.API || dev;

const config = {
  api: {
    path: API_PATH,
    pathGetMenuList: `${API_PATH}/api/generic/menuItem/`,
  }
};

export default config;
