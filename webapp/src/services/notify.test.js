import {notify, notifyOpenMap,notifyNearbyFriend} from "./notify";

const webIDP= "543";

test("Retorna undefined cuando no encuentra el webId", () => {
    return notify(webIDP).then((data) =>
    expect(data).toBeUndefined());
});

test("Mapa aun no accedido", () => {
    return notifyOpenMap().then((data) =>
    expect(data).toBeUndefined());
});

test("Sin sesion", () => {
    return expect(notifyNearbyFriend("4214214")).toBeUndefined();
});
