export namespace Finance {
  export class LoanCalculator {
    constructor(
      private principal: number,
      private rate: number,
      private years: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.rate / 12;
      const n = this.years * 12;
      return (
        (this.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
      );
    }
  }

  export class TaxCalculator {
    constructor(private income: number, private taxRate: number) {}

    calculateTax(): number {
      return this.income * this.taxRate;
    }
  }
}
