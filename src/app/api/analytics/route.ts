import { AnalyticsArrType } from '@/types/api-types'

const analyticsArr: AnalyticsArrType = {
  financedProjects: 61,
  investmentRaised: 19.9,
  returnedProjects: 15,
  returnsAndDeliveries: 6.3,
  averageProjectAmount: 327.623,
  averageLtv: 53.07,
  averageDurationExpectedProject: '14 meses',
  averageDurationEndOfProject: '8 meses',
  averageIRRAchieved: 8.83,
  targetAverageIRR: 8.23
}

export async function GET () {
  return Response.json({ analyticsArr })
}
