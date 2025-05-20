function socket(io) {
    let compilerClass  = require("../compiler/compiler");

    io.on('connection', client => {

        console.log("Connect !!!.")

        let dataOut = { outputOne: "",outputTwo:""}

        client.on('input', (data) => {
            let compiler = new compilerClass(data.code,data.lang);
            compiler.runCode(data.inputOne,10000).then((dres)=>
            {
                dataOut.outputOne= dres
                client.emit("get output",dataOut);
            }).catch(()=>
            {
                dataOut.outputOne= "Error Compiler "
                client.emit("get output",dataOut);
            })

            compiler.runCode(data.inputTwo,10000).then((dres)=>
            {
                dataOut.outputTwo= dres
                client.emit("get output",dataOut);
            }).catch(()=>
            {
                dataOut.outputTwo= "Error Compiler "
                client.emit("get output",dataOut);
            })

        });

        client.on('disconnect', () => {
            console.log("Xayir  !!!.")
        });
    });

}


module.exports  = socket