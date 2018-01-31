
//******************************************************************
//  用途：
//  1.A代表本人的全局变量，如果有新同事需要新的全局，目的：为了避免和我的冲突
//  2.新人请定义其他全局变量，如：GLOBAL.namespace('B.extend')等
//
//******************************************************************

var GLOBAL={};
GLOBAL.namespace=function (str) {
    var arr=str.split("."),
        o=GLOBAL;
    for (var i=(arr[0]=='GLOBAL')?1:0; i<arr.length; i++){
        o[arr[i]]=o[arr[i]] || {};
        o=o[arr[i]];
    }
};
GLOBAL.namespace('A.extend');
GLOBAL.A.extend.extend=function(subClass,superClass) {
    var F=function () {};
    F.prototype=superClass.prototype;
    subClass.prototype=new F();
    subClass.prototype.constructor=subClass;
    subClass.superclass=superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor=superClass;
    }
};

export default GLOBAL;
