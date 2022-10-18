import Api from "../api/Api";
import MyImpl from "../impl/MyImpl";

let svc: Api;

beforeEach(() => {
    svc = new MyImpl();
});

afterEach(() => {
});

test ('Make sure test passes', () => {
    svc.someMethod(99, "Dean");
});

