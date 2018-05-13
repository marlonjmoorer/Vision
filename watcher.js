const chokidar = require('chokidar');
const path = require('path');
const watcher=chokidar.watch("./server")


module.exports=()=>{
    const dir=path.join(__dirname,"server")
    watcher.on('ready', function() {
        watcher.on('all', function() {
            console.log("Clearing /server/ module cache from server")
            Object.keys(require.cache).forEach(function(id) {
                if (id.includes(dir)) 
                    delete require.cache[id]
            })
        })
    })
}


