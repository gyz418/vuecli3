class Compile {
  constructor (el, vm) {
    this.$el = document.querySelector(el);   // 拿到所有dom结点
    console.log(this.$el);
    this.$vm = vm;  // vue实例

    if (!this.$el) return;
    // 转换为片段 fragment
    this.$fragment = this.node2Fragment(this.$el);
    // 编译
    this.compile(this.$fragment);
    // 把编译的html 追加到$el
    this.$el.appendChild(this.$fragment);
  }

  //  文档片段  fragment
  node2Fragment (el) {
    const frag = document.createDocumentFragment();
    let child;
    while (child = el.firstChild) {
      frag.appendChild(child);    // Node.appendChild: 这个API有一个很有意思的行为：如果被插入的节点已经存在于当前文档的文档树中,则那个节点会首先从原先的位置移除,然后再插入到新的位置
    }
    /*    for(var i =0;i<el.children.length;i++){
          frag.appendChild(el.children[i])
        }*/
    return frag;

  }

  // 编译 把 {{name}} 等标签转换成真正的标签
  compile (el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // 元素 p
        console.log('元素', node.nodeName);
        // 查找 k-  @
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr => {
          const attrName = attr.name;
          const exp = attr.value;
          console.log(attr);
          // 指令 k-text
          if (this.isDirective(attrName)) {
            const dir = attrName.substring(2);  // text
            // 执行指令
            this[dir] && this[dir](node, this.$vm, exp);
          }
          // 事件 @click
          if (this.isEvent(attrName)) {
            const dir = attrName.substring(1);  // click
            this.eventHandler(node, this.$vm, exp, dir);
          }
        });
      } else if (this.isInterpolation(node)) {
        // 文本  {{name}}
        console.log('插值文本', node.textContent);
        this.compileText(node);
      }
      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  // 把 {{name}} 替换成真正的数据
  compileText (node) {
    console.log('RegExp.$1', RegExp.$1);   // 匹配 到 name
    // node.textContent = this.$vm.$data[RegExp.$1];  // 把 {{name}} 替换成相应的数据  这里数据变动后无法更新页面，要调用watcher()去通知更新
    this.update(node, this.$vm, RegExp.$1, 'text');
  }

  text (node, vm, exp) {
    // this.update(node, this.$vm, RegExp.$1, 'text');
    this.update(node, vm, exp, 'text');
  }

  // v-model
  model (node, vm, exp) {
    // 指定input的value属性
    this.update(node, vm, exp, 'model'); // 原来的更新函数

    // 监听input，把值设置到 data, data一变，definedProperty 就响应了
    node.addEventListener('input', e => {
      vm[exp] = e.target.value;
    });
  }
  // v-html
  html(node,vm,exp){
    this.update(node,vm,exp,'html')
  }


  // 事件处理器
  eventHandler (node, vm, exp, dir) {
    let fn = vm.$options.methods && vm.$options.methods[exp];  // exp是方法名
    if (dir && fn) {
      node.addEventListener(dir, fn.bind(vm));  // 调用方法  bind不会调用函数
    }

  }

  // 更新函数
  update (node, vm, exp, dir) {
    const updateFn = this[dir + 'Updater'];
    // 初始化
    updateFn && updateFn(node, vm.$data[exp]); // 可简写为  vm[exp]
    // 依赖收集
    new Watcher(vm, exp, function (value) {
      updateFn && updateFn(node, value);
    });
  }

  // 文本更新
  textUpdater (node, value) {
    // node.textContent = this.$vm.$data[RegExp.$1];
    node.textContent = value;
  }
  // k-model
  modelUpdater(node,value){
    node.value=value;
  }
  // k-html
  htmlUpdater(node,value){
    node.innerHTML=value;
  }

  isDirective (attr) {
    return attr.indexOf('k-') == 0;
  }

  isEvent (attr) {
    return attr.indexOf('@') == 0;
  }

  /**
   * node.nodeType===1 元素 <p></p>
   * @param node
   * @returns {boolean}
   */
  isElement (node) {
    return node.nodeType === 1;  // 元素
  }

  //
  /**
   * {{name}} 插值文本
   * node.Type===3 是   #text 文本
   * \{\{(.*)\}\}  用 RegExp.$1 来获取小括号中匹配到的值  name
   * @param node
   * @returns {boolean}
   */
  isInterpolation (node) {
    return node.nodeType === 3 ** /\{\{(.*)\}\}/.test(node.textContent);
  }
}
