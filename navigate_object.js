function navigate_object(){
var test = {1:2, 3:4, 5:7, 6:{1:2, 7:8, 3:{4:6, 8:9}}}
for(var i in test)
  console.log(typeof test[i] + " i : " + " " + i + " " + "val" + " " + test[i]);
var getkeys = Object.keys(test);
  console.log("keys :");
for(var j of getkeys)
  console.log(typeof getkeys[j] + " " + "keys : " + " " + j + " " + "val" + " " + getkeys[j]);
}
navigate_object();
