const fs = require('fs');
const path = require('path');
require('child_process').exec('git tag -l --sort=-creatordate', function(err, stdout) {
    if(""!==stdout){
        let tags = stdout.split(/\n/);
        if(tags.length > 2){
            let config = require(`${__dirname}/package.json`);
            config["version-code"] = config["version-code"] + 1
            config.version = tags[tags.length-3];
            fs.writeFileSync(`${__dirname}/package.json`,JSON.stringify(config));
        }
    }
});

