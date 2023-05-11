type IisEven = (arg: number) => boolean;
interface IPodSpace {
    isEven: IisEven;
}
declare class PodSpace implements IPodSpace {
    isEven(num: number): boolean;
}

export { PodSpace as default };
