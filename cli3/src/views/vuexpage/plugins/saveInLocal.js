/*
* 插件
*
* */
export default store => {
  console.log('plugin init');
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state)); // 把本地赋值给state，刷新不丢失
  store.subscribe((mutation, state) => {
    console.log(state);
    localStorage.state = JSON.stringify(state);   // 把state保存到本地
    console.log('提交mutation');
  });
};
