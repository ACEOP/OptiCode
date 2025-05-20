class Compiler {
    constructor(code,lang) {

        this.code =code  ;
        this.lang = lang ;
    }

    runCode (input,time)
      {
          let lang = this.lang ;
          let code = this.code ;
          const { c, cpp, node, python, java } = require('compile-run');
          return new Promise(function(resolve, reject) {

              if (lang == 'text/x-c++src') {
                  cpp.runSource(code, { stdin: input ,compileTimeout : time })
                      .then(result => {
                          resolve(result);
                      })
                      .catch(err => {
                          reject(err);
                      });
              }

              if (lang == 'text/x-csrc') {
                  c.runSource(code, { stdin: input ,compileTimeout : time })
                      .then(result => {
                          resolve(result);
                      })
                      .catch(err => {
                          reject(err);
                      });
              }

              if (lang == 'text/javascript') {
                  node.runSource(code, { stdin: input,compileTimeout : time })
                      .then(result => {
                          resolve(result);
                      })
                      .catch(err => {
                          reject(err);
                      });
              }

              if (lang == 'text/x-python') {
                  python.runSource(code, { stdin: input ,compileTimeout : time })
                      .then(result => {
                          resolve(result);
                      })
                      .catch(err => {
                          reject(err);
                      });
              }

              if (lang == 'text/text/x-java') {
                  java.runSource(code, { stdin: input ,compileTimeout : time  })
                      .then(result => {
                          resolve(result);
                      })
                      .catch(err => {
                          reject(err);
                      });
              }
          })
      }

}

module.exports = Compiler ;