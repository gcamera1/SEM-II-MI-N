import { setStorage } from '../common/storage';

export const setUserLocalStorage = (res) => {
    if (res.rol) {
        const rol = res.rol;
        delete res['rol'];
        res.rol = rol.nombre;
        res.level = rol;
    }
    setStorage('session', JSON.stringify(res));
}