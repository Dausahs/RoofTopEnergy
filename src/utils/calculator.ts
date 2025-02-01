const CONSTANTS = {
  TNB_TARIFF: 0.509,
  SOLAR_PANEL_COST: 3000,
  PEAK_SUN_HOURS: 3,
  INTEREST_RATE: 0.05,
  TARGET_SAVINGS: 0.3,
  EFFICIENCY: 0.8,
};

export const calculateSolarSystem = (monthlyBill: number): SolarCalculation => {
  const monthlyEnergy = monthlyBill / CONSTANTS.TNB_TARIFF;
  const dailyEnergy = monthlyEnergy / 30;
  const systemSize = dailyEnergy / (CONSTANTS.PEAK_SUN_HOURS * CONSTANTS.EFFICIENCY);
  const totalCost = systemSize * CONSTANTS.SOLAR_PANEL_COST;
  
  // Calculate loan details
  const targetMonthlyPayment = monthlyBill * (1 - CONSTANTS.TARGET_SAVINGS);
  const monthlyInterest = CONSTANTS.INTEREST_RATE / 12;
  
  // Calculate optimal loan term (iterative approach)
  let loanTerm = 60; // Start with 5 years
  const calculatePayment = (principal: number, months: number) => {
    return (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
           (Math.pow(1 + monthlyInterest, months) - 1);
  };
  
  while (calculatePayment(totalCost, loanTerm) > targetMonthlyPayment && loanTerm < 180) {
    loanTerm += 12;
  }
  
  const monthlyPayment = calculatePayment(totalCost, loanTerm);
  
  return {
    monthlyBill,
    monthlyEnergy,
    dailyEnergy,
    systemSize,
    totalCost,
    monthlyPayment,
    loanTerm
  };
};