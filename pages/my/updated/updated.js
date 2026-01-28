
Page({
  data: {
    logs: [{
      date: '2024.06.12',
      version: 'V2.4.0'
    }, {
      date: '2024.02.21',
      version: 'V2.3.0'
    }, {
      date: '2023.11.10',
      version: 'V2.2.0'
    }, {
      date: '2023.10.19',
      version: 'V2.1.0'
    }, {
      date: '2023.07.22',
      version: 'V2.0.0'
    }, {
      date: '2023.06.26',
      version: 'V1.9.9'
    }, {
      date: '2023.06.01',
      version: 'V1.9.8'
    }, {
      date: '2023.05.05',
      version: 'V1.9.5'
    }, {
      date: '2023.03.22',
      version: 'V1.9.0'
    }, {
      date: '2023.02.04',
      version: 'V1.8.0'
    }, {
      date: '2022.10.16',
      version: 'V1.7.0'
    }, {
      date: '2022.06.27',
      version: 'V1.6.0'
    }, {
      date: '2022.05.19',
      version: 'V1.5.0'
    }, {
      date: '2022.03.26',
      version: 'V1.4.0'
    }, {
      date: '2021.12.31',
      version: 'V1.3.0'
    }, {
      date: '2021.11.22',
      version: 'V1.2.0'
    }, {
      date: '2021.09.07',
      version: 'V1.1.0'
    }, {
      date: '2021.08.02',
      version: 'V1.0.0'
    }]
  },
  detail(e) {
    let dataset = e.currentTarget.dataset
    wx.yrUi.href(`../log/log?date=${dataset.date}&version=${dataset.version}`)
  }
})