const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')


const first = readFileSync('./folder/first.txt', 'utf8')
const second = readFileSync('./folder/subfolder/text.txt', 'utf8')

//console.log(first,second);

writeFileSync(
    './folder/result.sync.txt', `here is the result ${first}, ${second}`,{flag:'a'})

    readFile('./folder/first.txt','utf8', (err,result)=>{
        if(err){
            console.log(err.message)
            return
        }
        console.log(result)
        const first = result;
        readFile('./folder/subfolder/text.txt','utf8', (err,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            const second = result
            writeFile('./folder/result.async.txt',`here is the result:${first}, ${second}`,(err, result)=>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            })
        })
    })