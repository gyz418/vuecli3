import Mock from 'mockjs';

/**
 * 最简mock  直接返回想要的数据
 * @param res
 * @returns {{author: string, title: string}[]}
 */
export const posts = res => {
  return [{
    author: 'haha',
    title: 'mock title'
  }];
};

// 使用模板
/**
 *  文档 https://github.com/nuysoft/Mock/wiki
 * @param options
 * @returns {*|*|*}
 */
const Random = Mock.Random
export const posts2 = (options) => {
  // console.log('请求的信息',options);
  const tempalte = {
    'author|1-2': 'abc',   // 把字符串abc重复了1-2次
    'age|+2': 18,  // age 值自动加2，初始值为18
    'title|1-2': 'kang',
    'num|4-10':0, // 4-10的随机数  0 表示整数
    'float|2-3.4-5':0,  //  整数部分为2-3随机数，小数部分保留4-5位   2.3333
    'bool|1':true, // true的概率是1/2
    'bool2|1-9':true, //  true的概率 1/(1+9)
    'obj|2':{    //  obj 随机返回2个对象   obj:{a:'xx',c:'xx'}
      a:'aa',
      b:'bb',
      c:'cc'
    },
    'obj2|1-2':{    //  obj 随机返回1-2个对象   obj:{a:'xx',c:'xx'}
      a:'aa',
      b:'bb',
      c:'cc'
    },
    'arr|1-2':[1,2,3], // 把数组重复1-2次  arr1:[1,2,3,1,2,3]
    'arr2|1':['a','b','c'],  // 随机取1个值    {arr2:'b'}
    'arr3|2':['a','b','c'],  // 数组重复2次    {arr3:['a','b','c','a','b','c']}
    'func':()=>{
      return 'i am function'
    },
    'reg':/[1-9][a-z]/,  // 正则生成   {reg:'6h'}
    'email':Random.email(),  // 生成的邮箱是唯一值，多次循环值一致
    'email2':Mock.mock('@email'),
    range:Random.range(3,8,2),   // range:[3,5,7]   从3到8取值，相差2
    date:Random.date('yyyy-MM-dd'),
    time:Random.time('hh:mm:ss'),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'),  // 当前时间 格式化到小时
    img: Random.image('100x200', '#00ff00', '#ffffff', 'png', 'Lison'),
    img_base64: Random.dataImage(),
    color: Random.color(),   // 颜色
    cword: Random.cword('玩儿螺丝刀', 2, 5),   // 取内容
    cname: Random.cname(),   // 名字
    email3: Random.email('lison.com'),   // 邮箱以这个结尾
    region: Random.region(),   //  华南
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),  // 省市区
    county2: Random.county(),  // 区
    zip: Random.zip(),  // 邮政编码
    upperFirstLetter: Random.capitalize('lison'),  //  首字母大写  Lison
    pick: Random.pick(['a','e','f']),  // 从数组选1元素
    shuffle: Random.shuffle([1, 2, 3, 4]),  // 打乱顺序，[2,3,1,4]
    guid: Random.guid(),  // guid
    numm:Random.increment(1),  // 自增 id
    fruit: Random.fruit(),   // 扩展 定义在 mock.js
    fruit2: '@fruit'  // 占位符 跟上一行结果一致
  };
  // 生成一个数组
  let i = 1;
  let arr = [];
  while (i--) {
    arr.push(tempalte);
  }
  return Mock.mock(arr);
  // return Mock.mock(tempalte);
};
