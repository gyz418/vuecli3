export default {
  functional:true,
  props:{
    name:Number,
    render:Function
  },
  render:(h,ctx)=>{
    return ctx.props.render(h,ctx.props.name)
  }
}
