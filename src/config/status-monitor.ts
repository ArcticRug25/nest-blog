import { StatusMonitorConfiguration } from 'nest-status-monitor'

const statusMonitorConfig: StatusMonitorConfiguration = {
  pageTitle: 'Nest.js Monitoring Page',
  port: 3000,
  path: '/status',
  ignoreStartsWith: '/healt/alive',
  spans: [
    {
      interval: 1,
      retention: 60,
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  healthChecks: [],
}

export default statusMonitorConfig
