// components/compo/compo.js
Component({
  // 开启多插槽
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propAge: {
      // 数据类型
      type: Object,
      // 数据默认值
      value: ""
    },
    propNumber: {
      type: Number,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "张三"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleData(){
      // console.log(this.data.name);
      this.setData({
        name: "李四"
      })
    },

    handleaaa(){
      // this.setData({
      //   propNumber: 8
      // })

      this.setData({
        propAge: {
          family: "鲁正一家族"
        }
      })

      // this.properties.propNumber+1;
      // this.setData({
      //   propNumber: this.properties.propNumber+1
      // })
    }
  },

  // 监听器
  observers: {
    // computed vue中的
    // aaa(){
    //  return value
    // }
    // 键值对 键就是监听的某一个属性
    // 值就是你要把这个属性做怎样的处理
    "propNumber": function(na){
      console.log(na);

      // this.setData({
      //   name: na+"*"
      // })
    // 不要去改变自身的 
    // 找的是依赖于这个值的值
    this.setData({
      name: "王五"
    })
    },
    "propAge.family": function(obj){
      console.log(obj)
    }
  }
})
