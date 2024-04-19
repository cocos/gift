/// <reference types="./@types/globals" />

declare module "index" {
    export class Component {}
    
    export class Node {
        getComponent<T extends Component>(constructor: Constructor<T> | AbstractedConstructor<T>): T | null;
    }
}
