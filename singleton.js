const  moment =  require("moment")
const LIMIT_TIME = 0.00277778; //10 seconds
var randtoken = require('rand-token');

module.exports = class TokenConsumer {

    constructor() {
        if (!TokenConsumer.instance) {
            console.log("--Nueva Instancia Generada--")
            this._data = [];
            TokenConsumer.instance = this;
        }
        
        console.log("--Devolviendo instancia--")
        return TokenConsumer.instance;
    }

    get(basic){
        console.log("*** Guardados:", this._data)
        var comercio = this._data.find( com => com.basic === basic);
        if (!comercio) {
            console.log("*** Basic no encontrado")
            var response = this.callAPIToken(basic);
            console.log("*** Guardando token")
            const {access_token: token, expires_in} = response;
            this._data.push({basic, token, expires_in});
            return response.access_token;
            
        } else {
            console.log("*** Token encontrado");
            if (this.isValid(comercio.expires_in)) {
                console.log("*** Token es valido:", comercio.token)
                return comercio.token
            } else {
                console.log("*** Token no valido")
                var resp = this.callAPIToken(basic)
                comercio.token = resp.access_token;
                comercio.expires_in = resp.expires_in;
                console.log("*** actualiza")
                return comercio.token
            }
        }
    }

    isValid(expires_in) {
        const current_time = moment() / 1000;
        console.log("*** expires_in: , ",expires_in, "current_time:", current_time ,"Segundos disponibles:", (expires_in - current_time) )
        return ((expires_in - current_time) / 3600 > LIMIT_TIME) //Quede menos de 10 segundos
    }

    callAPIToken (basic) {
        console.log("*** Solicitando nuevo token en https://api-token/login")
        var expiresIn = moment().add(30, "seconds") / 1000;
        var tokenFake = randtoken.generate(16);
        let fakeResponse = {access_token: tokenFake, expires_in: expiresIn}
        console.log("*** Nuevo token generado:", fakeResponse.access_token);
        return fakeResponse;

    }

}