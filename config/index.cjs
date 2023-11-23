/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-deer',
  // 微信测试公众号信息
  APP_ID: '',
  APP_SECRET: '',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      name: 'jyb',
      id: 'PDU26743Tlvsp1tB3H60S8YHbSAAWxAS9TWuWLV7N',
      useTemplateId: '0003',

      festivals: [
        { type: '*生日', name: '爸', year: '1970', date: '04-29', },
        { type: '*生日', name: '妈', year: '1972', date: '09-08', },
        { type: '生日', name: '玉玉', year: '1995', date: '02-22', },
        { type: '*生日', name: '彬彬', year: '1993', date: '08-18', },
      ],
      
      customizedDateList: [
        {"keyword":"love_day", date:"2013-10-02"},
      ],
    },
    
    {
      name: 'jcy',
      id: 'PDU26774TnPqEnU38OoWs4uHvc2lLt72RNOJsIau3',
      useTemplateId: '0004',
      
      festivals: [
        { type: '生日', name: '玉玉', year: '1995', date: '02-22', },
        { type: '*生日', name: '彬彬', year: '1993', date: '08-18', },
      ],
      
      customizedDateList: [
        {"keyword":"love_day", date:"2013-10-02"},
      ],
    },
    
  ],
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'PDU26743Tlvsp1tB3H60S8YHbSAAWxAS9TWuWLV7N',
    }
  ],
}

module.exports = USER_CONFIG

