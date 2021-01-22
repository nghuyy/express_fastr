const path = require('path');
let currentdir = path.resolve(__dirname, '..');
let dist = path.resolve(currentdir,"./dist");
async function spawnChild() {
    const { spawn } = require('child_process');
    const child = spawn('npm.cmd',['publish','--access','public'],{cwd:dist});
    let data = "";
    for await (const chunk of child.stdout) {
        console.log('stdout chunk: '+chunk);
        data += chunk;
    }
    let error = "";
    for await (const chunk of child.stderr) {
        console.error('stderr chunk: '+chunk);
        error += chunk;
    }
    const exitCode = await new Promise( (resolve, reject) => {
        child.on('close', resolve);
    });

    if( exitCode) {
        throw new Error( `subprocess error exit ${exitCode}, ${error}`);
    }
    return data;
}
spawnChild().then(
    data=> {console.log("async result:\n" + data);},
    err=>  {console.error("async error:\n" + err);}
);