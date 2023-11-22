/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 微信测试公众号信息
  APP_ID: 'wx243d37fbb712c76d',
  APP_SECRET: 'e9c41438882e93de7a073188a2bc85a1',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      name: '亲爱的',
      id: 'onxGC6Ywg2ZG5fcmVVuYLWsut3zA',
      useTemplateId: '_iPTyLeGLHg1DDxOEf6wARgS0qaIQf14Aa_j95J1_xU',
      
      festivals: [
        {
          type: '生日', name: '姜~', year: '1993', date: '08-18',
        },
        {
          type: '生日', name: '小玉玉玉', year: '1995', date: '02-22',
        },
      ],

      FESTIVALS_LIMIT: 0,
      
      customizedDateList: [
        {"keyword":"love_day", date:"2013-10-02"},
      ],
    },
  ],
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yGJRsh67M6UFWxE0zNfD7i_1Vl8hvUZ0r4mf1JChbWA',
  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'onxGC6Ywg2ZG5fcmVVuYLWsut3zA',
    }
  ],

}

module.exports = USER_CONFIG

