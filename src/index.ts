
type IisEven = (arg: number) => boolean

interface IPodSpace {
  isEven: IisEven
}

class PodSpace implements IPodSpace {
  isEven(num: number) {
    return num % 2 === 0
  }
}

export default PodSpace






