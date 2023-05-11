type IisEven = (arg: number) => boolean

export interface IPodSpace {
  isEven: IisEven
}

declare module "podspace-uploader" {
  export class PodSpace implements IPodSpace {
    isEven: (arg: number) => boolean;
  }
}
