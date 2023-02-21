const {ValidationError} = require("../utils/errors");

class ClientRecord {
    constructor(obj){
        const {name,id,mail,nextContactAt,notes} = obj;

        if (!id || typeof id !== 'string'){
            throw new ValidationError('ID musi byc niepustym tekstem!');
        }

        if (!name || typeof name !== 'string' || name.length < 3){
            throw new ValidationError('Imię musi byc tekstem o dlugosci min. 3 znakow!');
        }

        if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1){
            throw new ValidationError('E-mail nieprawidłowy!');
        }

        if (typeof nextContactAt !== 'string'){
            throw new ValidationError ('Data nastepnego kontaktu musi byc tesktem!');
        }

        if (typeof notes !== 'string'){
            throw new ValidationError ('Notatki muszą być tekstem!');
        }

        this.id = id;
        this.name = name;
        this.mail = mail;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    ClientRecord,
}