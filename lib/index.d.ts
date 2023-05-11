type IisEven = (arg: number) => boolean;
interface IPodSpace {
    isEven: IisEven;
}
declare class PodSpace implements IPodSpace {
    isEven(num: number): boolean;
}
export default PodSpace;
//# sourceMappingURL=index.d.ts.map