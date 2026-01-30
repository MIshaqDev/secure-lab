export interface Cipher<T extends string | number> {
    text: string;
    key: T;
}