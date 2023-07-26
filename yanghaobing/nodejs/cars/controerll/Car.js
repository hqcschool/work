const carApi=require("../mysql/Cars_api")
const ret = require("./return")
const getcars = ((req,res)=>{
  
 carApi.getcars().then((data)=>{
    res.json(ret.success("获取汽车信息成功","200",data));
 },
 (err)=>{res.json(ret.Error(err,500));
 })
//    console.log(data);
})
const getaddcar=(req,res)=>{
  // 定义一个addcar对象
let body = req.body
// console.log(body);
  let addcar = {
   name:body.name,
    color:body.color,
 }
  carApi.getaddcar(addcar)
  .then(()=>{
    res.json(ret.success("添加成功",201,addcar))
  }).catch(()=>{})

}
const getdelete=(req,res)=>{
let body = req.body
let del ={
   id:body.id,
   name:body.name,
}

 carApi.getdelete(del)
 .then(()=>{
  res.json(ret.success("删除成功",204,del))
 }).catch(()=>{});
}

const getupdatacar=(req,res)=>{
  let body = req.body
  let up = {
    name:body.name,
    color:body.color,
    id:body.id,
    
  }
  carApi.getupdatacar(up)
  .then(()=>{
    res.json(ret.success("数据更新成功",200,up))

  }).catch(()=>{})
}
module.exports = {
  getcars,
  getaddcar,
  getdelete,
  getupdatacar,
}