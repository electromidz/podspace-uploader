
type IisEven = (arg: number) => boolean

interface IPodSpace {
  isEven: IisEven
}

export class PodSpace {
  isEven(num: number) {
    return num % 2 === 0
  }
}

