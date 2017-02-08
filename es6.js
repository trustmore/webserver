let superagent = require('superagent');

const getPage = () => {
    return new Promise((resolve, reject) => {
        let req = superagent.get('http://meiqia.com')
            .end(function(err, res){
                resolve(res);
            })
            .on('error', (err) => {
                reject(err);
            });

    });
}

const testAsync = async () => {
  const t = await getPage();
  console.log(t);
};

testAsync();
