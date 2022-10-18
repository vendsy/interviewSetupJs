import Api from "../api/Api";

export default class MyImpl implements Api {

    someMethod(id: number, name: string): string | null {
        console.log("You are all setup correctly.  id="+id);
        return "yeah, cool";
    }

}
