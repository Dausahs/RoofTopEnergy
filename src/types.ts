export interface SolarCalculation {
  monthlyBill: number;
  location?: string;
  monthlyEnergy: number;
  dailyEnergy: number;
  systemSize: number;
  totalCost: number;
  monthlyPayment: number;
  loanTerm: number;
}

export interface LeadData {
  name: string;
  contact: string;
  calculationResult?: SolarCalculation;
}