/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx243d37fbb712c76d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e9c41438882e93de7a073188a2bc85a1',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      name: '小玉玉玉',
      id: 'onxGC6Ywg2ZG5fcmVVuYLWsut3zA',
      useTemplateId: 'A1V74uwwiyWbUQ2Z437yYpAQocsU8pudrscJhPfQsi0',

      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '02-22',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://wangxinleo.cn',
      
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
      customizedDateList: [],
    },
  ],
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yGJRsh67M6UFWxE0zNfD7i_1Vl8hvUZ0r4mf1JChbWA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onxGC6Ywg2ZG5fcmVVuYLWsut3zA',
    }
  ],

}

module.exports = USER_CONFIG

