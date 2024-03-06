var username = window.prompt("請輸入使用者姓名: ")
var user = document.querySelector("#user")
user.textContent = "使用者 : " + username

var b1 = document.querySelector("#lunch");
lunchdatabase = ["牛排", "咖哩豬排飯", "生魚片丼飯", "滷味", "水餃or鍋貼", 
"知高飯", "鴨肉便當", "便當", "鴨肉冬粉", "鐵板燒","三媽臭臭鍋/火鍋", "隨便"];
var ll = lunchdatabase.length - 1
b1.onclick = function () {
    var a = Math.floor(Math.random()*ll)
    alert("結果為: "+lunchdatabase[a]+" !")
}

var b2 = document.querySelector("#dinner");
dinnerdatabase = ["牛排", "咖哩豬排飯", "生魚片丼飯", "滷味", "水餃or鍋貼", 
"知高飯", "鴨肉便當", "便當", "鴨肉冬粉", "鐵板燒", "三媽臭臭鍋/火鍋", "隨便"];
var dl = dinnerdatabase.length - 1
b2.onclick = function () {
    var a = Math.floor(Math.random()*dl)
    alert("結果為: "+dinnerdatabase[a]+" !")
}

var b3 = document.querySelector("#updatelun");
var customerdatabaselun = [];
b3.onclick = function () {
    var answer1 = window.confirm("要沿用上次的自訂選項嗎?"+
    "\n"+"上一次的自訂選項為: "+customerdatabaselun)
    if (answer1 == true){
        var cl = customerdatabaselun.length - 1
        var a = Math.floor(Math.random()*cl)
        alert("結果為: "+customerdatabaselun[a]+" !")
    }else {
        var customer = window.prompt("請輸入自訂選項: (Ex: Qburger,肯德基,pizza )")
        if(customer == "") {
            alert("請輸入選項")
        }
        else {
            customerdatabaselun = customer.split(",")
            var cl = customerdatabaselun.length - 1
            var a = Math.floor(Math.random()*cl)
            alert("結果為: "+customerdatabaselun[a]+" !")
        }
    }
}

var b4 = document.querySelector("#updatedin");
var customerdatabasedin = [];
b4.onclick = function () {
    var answer1 = window.confirm("要沿用上次的自訂選項嗎?"+
    "\n"+"上一次的自訂選項為: "+customerdatabasedin)
    if (answer1 == true){
        var cd = customerdatabasedin.length - 1
        var a = Math.floor(Math.random()*cd)
        alert("結果為: "+customerdatabasedin[a]+" !")
    }else {
        var customer = window.prompt("請輸入自訂選項: (Ex: Qburger,肯德基,pizza )")
        if(customer == "") {
            alert("我看無，請您輸入選項")
        }
        else {
            customerdatabasedin = customer.split(",")
            var cd = customerdatabasedin.length - 1
            var a = Math.floor(Math.random()*cd)
            alert("結果為: "+customerdatabasedin[a]+" !")
        }
    }
}
var b5 = document.querySelector("#check");
var check = 0;
var p1 = document.querySelector("#show1")
var p2 = document.querySelector("#show2")
var p3 = document.querySelector("#show3")
var p4 = document.querySelector("#show4")
b5.onclick = function () {
    if(check == 0) {
        p1.textContent = "預設午餐: "+lunchdatabase
        p2.textContent = "預設晚餐: "+dinnerdatabase
        p3.textContent = "自訂午餐: "+customerdatabaselun
        p4.textContent = "自訂晚餐: "+customerdatabasedin
        check = 1;
    }
    else {
        p1.textContent = ""
        p2.textContent = ""
        p3.textContent = ""
        p4.textContent = ""
        check = 0;
    }
}
