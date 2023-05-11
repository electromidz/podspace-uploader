
type IisEven = (arg: number) => boolean

export interface IPodSpace {
  isEven: IisEven
}

export class PodSpace implements IPodSpace {
  isEven(num: number) {
    return num % 2 === 0
  }
}


