var fs=require('fs');
fs.readFile('user.json','utf8',function (error,data)
{
    if(error)
    {
        console.log("File not found");  
    }
    else
    {   var NAME="Kemp Blankenship";
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
        fs.writeFile("output.json",jsonContent)      
    }   
});

