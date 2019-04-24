import Mock from 'mockjs'

export default {
  mockData () {
    Mock.mock('/api/user/login', {
      'success': false,
      'result': {
        'name': '林锦泽',
      }
    })
    Mock.mock('/api/user/register',{
        'success':true,
        'result':{}
    })
  }
}
