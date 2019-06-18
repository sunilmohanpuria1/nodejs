/*

pro= new promise(function(resolve,reject)
{   
    var fs=require('fs');
    var data=fs.readFile('user.json','utf8');
    resolve(data);
})
pro.then(function(){
var p=10;
});
*/
var promise = require('promise');
var promise = new Promise(function(resolve, reject) {
    var fs=require('fs');
    var data=fs.readFile('user.json','utf8');
    resolve(data);
});

promise.then(function(data) {
    var NAME="Kemp Blankenship";
        var ag=37;
        var res = [];
        obj=JSON.parse(data);
        size=obj.length;
        var i=0;
        for (i=0;i<size;i++)
        {
            if(obj[i].age==ag && obj[i].name==NAME )
            {
                res.push(obj[i]);
            }
        }
        jsonContent = JSON.stringify(res); 
        fs.writeFile("output1.json",jsonContent)  
});


