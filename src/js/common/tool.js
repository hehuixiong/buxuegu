/**
 * 解析location.search
 * 传1个参数返回指定key的值,不传参数返回解析成对象后的值
 * 1.首先把头部的?去掉
 * 2.通过&符号劈成一组组的key=val这样的字符串组成的数组
 * 3.然后在通过=号把一组组字符串劈开获取key与val,存储到一个对象中
 * 4.判断没有传参数返回这个对象,传了key返回对象中指定的key的val值
 */
function getSearch(key){
  var searchSrt = location.search.slice(1); //把字符串中的指定位置的字符去掉
  var searchArr = searchSrt.split('&'); //把字符串中&符号之前的字符劈开变成数组
  var searchObj = {},tempArr;
  for(var i=0; i<searchArr.length; i++){
    tempArr = searchArr[i].split("=");  //把每一组字符串中=符号之前的字符劈开变成一组组的数组
    // console.log(tempArr)
    searchObj[tempArr[0]] = tempArr[1];
    // console.log(searchObj[key])
  }
  return key? searchObj[key] : searchObj;
}

module.exports.getSearch = getSearch;
