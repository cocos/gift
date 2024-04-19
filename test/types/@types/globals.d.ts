
declare type Constructor<T = unknown> = new(...args: any[]) => T;
declare type AbstractedConstructor<T = unknown> = abstract new (...args: any[]) => T;