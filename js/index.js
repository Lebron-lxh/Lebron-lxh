// 用户名不能为空，用户名长度4~16个字母、下划线、数字
//         密码6-16个字母或数字组成
//         重新输入密码和上面必须一致
//         出生日期格式1999-09-09.不允许为文字
//         性别必须勾选
//         电子邮件必须有@和.
//         不同的国家显示不同的省份
function idNode(obj){
    if(/^[a-z A-Z 0-9 _]{4,16}$/.test(obj.value)){
        obj.nextElementSibling.nextElementSibling.nextElementSibling.style.color="black"
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}
function passwrod(obj){
    if(/^[0-9]{6,16}$/.test(obj.value)){
        obj.nextElementSibling.nextElementSibling.nextElementSibling.style.color="black"
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}
function repeatNode(obj,id){
    if(/^[0-9]{6,16}$/.test(obj.value)){
        if(obj.value==document.getElementById(id).value){
            obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
            obj.nextElementSibling.style.color="black"
        }
    }else{
        obj.nextElementSibling.innerHTML="重新输入密码和上面必须一致"
        obj.nextElementSibling.style.color="red"
    }
}
function birth(obj){
    if(/^[0-9]{3}[1-9]+\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1]|0[1-9])$/.test(obj.value)){
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>" 
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}
function email(obj){
    if(/^.+@.+\.com$/.test(obj.value)){
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}

var province=document.getElementById("province")
var arrPro=['浙江省','江苏省','北京省','安徽省','广东省','江西省','山东省']
for(var i=0;i<arrPro.length;i++){
    var proNode=document.createElement('option')
    proNode.innerHTML=arrPro[i]
    province.appendChild(proNode)
}

var city=document.getElementById("city")
var arrcity=['杭州市','温州市','湖州市','台州市','临安市','安吉市']
for(var i=0;i<arrcity.length;i++){
        var cityNode=document.createElement('option')
        cityNode.innerHTML=arrcity[i]
        city.appendChild(cityNode)
}

function provinces(obj){
    if(document.getElementById("province").value!="请输入省份"){
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}
function cities(obj){
    if(document.getElementById("city").value!="请输入城市"){
        obj.nextElementSibling.innerHTML="<img src='img/li_ok.gif'>"
    }else{
        obj.nextElementSibling.innerHTML="<img src='img/li_err.gif'>"
    }
}
function sub(obj){
    var attNode=document.getElementsByClassName("attention")
    var c1=0;
    var c2=0;
    for(var i=0;i<attNode.length;i++){
        c1++
        if(attNode[i].innerHTML="<img src='img/li_ok.gif'>"||attNode[i].style.color=="black"){
            c2++
        }
    }
    if(c1!=0&&c2!=0&&c1==c2){
        document.forms[0].submit();
    }
}
