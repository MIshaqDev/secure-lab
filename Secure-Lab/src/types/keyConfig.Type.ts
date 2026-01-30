import type { FieldPath } from "react-hook-form";
import type { Cipher } from "../types/cipher.Type";

export interface KeyConfig<T extends string | number> {
    label: FieldPath<Cipher<T>>;
    placeholder: string;
    defaultValue?: T;
    validate: (value: T) => true | string;
    transform?: (value: string) => T;
};
