const fs = require('fs');

// 1. Writing and creating file 
// fs.writeFile("hey.txt","Hello world!!!",function(err){
//     if(err){console.error(err.message);}
//     else console.log("done")
// })



// 2.adding data to the end of file
// fs.appendFile("hey.txt","Likhe hue me add krega ye",function(err){
//     if(err){console.error(err.message);}
//     else console.log("done")
// })


// 3. Renaming the file 
// fs.rename("hey.txt","new.txt",function(err){
    // if(err){console.error(err.message);}
    // else console.log("done")
// })

// 4.Copying the file
// fs.copyFile("new.txt","./copy/copy.txt",function(err){
//     if(err){console.error(err.message);}
//     else console.log("done");
// });


// 5.Unlink function to delete the file

// fs.unlink("./copy/copy.txt",function(err){
//     if(err){console.error(err.message);}
//     else console.log("done");
// })


// 6.to delete blank directory
// prefer usage of rm instead of rmdir

// fs.rm("copy",{recursive:true},function(err){
//     if(err){console.error(err.message);}
//     else console.log("removed");

// })

// 7. creating new directory using mkdir
// fs.mkdir("copy",function(err){
//     if(err){console.error(err.message);}
//     else console.log("created");
// })


// 8.Reading file
const file= "new.txt";
const encoding = "utf-8"
fs.readFile(file,encoding,function(err,data){
    if(err){console.error(err.message);}
    else console.log(`Content of ${file} is `,data);
}
)