import { Buffer } from "buffer";
type IOptions = {
    beep: boolean;
    cut: boolean;
    tailingLine: boolean;
    encoding: string;
};
export declare function exchange_text(text: string, options: IOptions): Buffer;
export {};
