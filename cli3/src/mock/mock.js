import Mock from 'mockjs';
import { posts,posts2 } from './data';
const Random = Mock.Random
// 1.0
/*let url = 'http://localhost:1234/posts';
/!**
 * Mock.mock(url,resposeData)  拦截url，返回相应的数据responseData
 *!/
Mock.mock(url, posts);*/

// 1.1 url用正则，后面直接加数据
/*Mock.mock(/\/posts/,[{
  author:'haha',
  title:'mock title2.0'
}])*/

// 1.2  模板数据
Mock.mock(/\/posts/,'get',posts2)

Mock.setup({
  timeout:400  // 延迟
})

// 扩展，取1值
Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

export default Mock;
