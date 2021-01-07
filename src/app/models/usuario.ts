export class Usuario {
    id?: number;
    nombre: string;
    email: string;
    tel: string;

    constructor(nombre: string, email: string, tel: string){
        this.nombre = nombre;
        this.email = email;
        this.tel = tel;
    }
}

