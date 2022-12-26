import ywzRequest from '@/services/index';
export const getBaseInfo = (params?: any) => ywzRequest({url: '/api/v1/get_index_info'});
