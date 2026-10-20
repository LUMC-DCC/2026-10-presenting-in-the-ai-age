// Synthetic data, shared by every chart in the deck and by examples/data/readmissions.csv.
// 30-day readmission rate (%) per quarter; the "new protocol" starts in 2025 Q1.
// Not real LUMC data — invented so the story is clean enough to present.

export const SWITCH_INDEX = 4

export const quarters = [
  '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4',
  '2025 Q1', '2025 Q2', '2025 Q3', '2025 Q4',
]

export const overall = [18.2, 18.9, 17.6, 18.4, 12.1, 11.6, 12.4, 12.0]

export const wards = [
  { name: 'Cardiology',  values: [19.8, 20.4, 19.1, 19.9, 12.9, 12.2, 13.1, 12.6] },
  { name: 'Pulmonology', values: [21.0, 21.9, 20.3, 21.2, 14.8, 14.1, 15.0, 14.6] },
  { name: 'Nephrology',  values: [16.4, 17.0, 15.9, 16.6, 10.2,  9.8, 10.5, 10.1] },
  { name: 'Geriatrics',  values: [15.6, 16.3, 15.1, 15.9, 10.5, 10.3, 11.0, 10.7] },
]

const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length
export const before = mean(overall.slice(0, SWITCH_INDEX))
export const after = mean(overall.slice(SWITCH_INDEX))
export const change = Math.round(((after - before) / before) * 100) // -34
