// api.js
const { toValue } = require('vue')
const connection = require('./db')

//查询
const getcars = () => {
  return new Promise((resolve, reject) => {
    //第一个参数：sql语句
    //第二个参数：回调函数（err：查询错误，data：查询结果）
    connection.query("select * from cars", (err, data) => {
      if(err!=null){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
//添加
const getaddcar = (param) => {

  return new Promise((resolve, reject) => {

    connection.query("insert into cars(name,color) values(?,?)", 

    [param.name,param.color] ,
    (err, data) => {
     console.log(data);
      //如果err为null则成功
      resolve(data)
    }) 
  })

}
//改
const  getupdatacar = (param) => {
  return new Promise((resolve, reject) => {
    connection.query("update cars set name = ? where id = ?", [param.name,param.id], (err, data) => {
      console.log(err);
      //如果err为null则成功
      resolve(data)
    })
  })
}

//删除
const getdelete = (param) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from cars where id = ?", [param.id], (err, data) => {
      console.log(err);
      resolve(data)
    })
  })
}
//导出方法，在需要使用到的模块中导入
module.exports = {
  getcars,
  getaddcar,
  getdelete,
  getupdatacar

}