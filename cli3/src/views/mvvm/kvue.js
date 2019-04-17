class KVUE {
  constructor (options) {
    this.$options = options;
    // data
    this.$data = options.data;
    // console.log('data',this.$data);
    this.observe(this.$data);

    // test
    /*  new Watcher();  // 构造函数执行  Dep.target=watcher
      this.$data.test;  // 访问这个data的属性时， 会触发  get(),  dep.addDep(Dep.target)
      new Watcher();   // dep.target 重新赋值 新的watcher
      this.$data.foo.bar;*/

    new Compile(options.el, this);

    // 执行 created() 函数
    if (options.created) {
      options.created.call(this);  // 绑定 this
    }
  }

  // 数据处理
  observe (data) {
    if (!data || typeof data !== 'object') return;
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
      // 代理 data中的属性到vue实例上
      this.proxyData(key)
    });
  }

  // defineProperty
  defineReactive (obj, key, val) {

    this.observe(val); // val可能是{} 递归

    const dep = new Dep();  // 每次都有一个Dep

    Object.defineProperty(obj, key, {
      get () {
        Dep.target && dep.addDep(Dep.target);
        // console.log('target',Dep.target);
        return val;
      },
      set (newVal) {
        if (newVal === val) return;
        val = newVal;
        // console.log('数据更新了，要通知界面更新', val);
        dep.notify();   // 数据更新时，都调用 watcher 的update()
      }
    });
  }

  // 代理
  proxyData(key){
    Object.defineProperty(this,key,{
      get(){
        return this.$data[key]  // 代理$data   访问 this.name也就返回  this.$data.name
      },
      set(newVal){
        this.$data[key]=newVal;
      }
    })
  }
}

// 用来管理 Watcher
class Dep {
  constructor () {
    // 存放的是 Watcher    一个watcher 对应一个 data属性
    this.deps = [];
  }

  // 添加 Watcher
  addDep (dep) {
    this.deps.push(dep);
  }

  // 通知所有watcher
  notify () {
    this.deps.forEach(dep => {
      dep.update();
    });
  }
}

// watcher  具体更新
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.target = this;  // 把wathcer 实例赋值给  类Dep的静态属性 target
    this.vm[this.key]; // 读一个数据 触发getter  类似上文的  new Watcher() this.$data.test ，触发getter后，Dep.addDep(watcher)
    // proxy data   this.name -> this.$data.name
    Dep.target=null; // 清空Dep.target
  }

  update () {
    console.log('属性更新了');
    this.cb.call(this.vm,this.vm[this.key])
  }
}
