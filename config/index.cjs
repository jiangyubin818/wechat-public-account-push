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
      useTemplateId: 'NZOaqI4Ha7RHiI2CSjhMg8OfLCqq9xwpi8nGIOTxaB8',
      
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小玉玉玉', year: '1995', date: '02-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '姜~', year: '1993', date: '08-18',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2013', date: '10-02',
        },
      ],

      FESTIVALS_LIMIT: 0,
      
      // 我们在一起已经有xxxx天了的配置
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

