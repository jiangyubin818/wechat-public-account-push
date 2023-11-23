/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '给自己说: 早安~',
    desc: `
      🗓️{{date.DATA}}
      
      下个休息日：{{holidaytts.DATA}}

      ---  
      天气篇☁️
      
      城市：{{province.DATA}}·{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      温度🌡️: {{min_temperature.DATA}}/{{max_temperature.DATA}}
      
      风向：{{wind_direction.DATA}}
      
      风级：{{wind_scale.DATA}}
      
      湿度：{{shidu.DATA}}
      
      PM2.5：{{pm25.DATA}}
      
      空气质量：{{aqi.DATA}}
      
      日出/日落时间：{{sunrise.DATA}}/{{sunset.DATA}}
      
      温馨提示：{{notice.DATA}}

      ---  
      生日篇🎂
      
      🎂：{{wx_birthday_0.DATA}}
      
      🎂：{{wx_birthday_1.DATA}}

      🎂：{{wx_birthday_2.DATA}}

      🎂：{{wx_birthday_3.DATA}}

      ---  
      恋爱篇💗
      
      💗：恋爱第{{love_day.DATA}}天
      
      ---  
      每日一言篇🌞

      🌞：{{note_ch.DATA}}
      
    `
  },
  {
    id: '0004',
    title: '亲爱的玉玉, 早上好~',
    desc: `
      🗓️{{date.DATA}}
      
      下个休息日：{{holidaytts.DATA}}

      ---  
      天气篇☁️
      
      城市：{{province.DATA}}·{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      温度🌡️: {{min_temperature.DATA}}/{{max_temperature.DATA}}
      
      风向：{{wind_direction.DATA}}
      
      风级：{{wind_scale.DATA}}
      
      湿度：{{shidu.DATA}}
      
      PM2.5：{{pm25.DATA}}
      
      空气质量：{{aqi.DATA}}
      
      日出/日落时间：{{sunrise.DATA}}/{{sunset.DATA}}
      
      温馨提示：{{notice.DATA}}

      ---  
      生日篇🎂
      
      🎂：{{wx_birthday_0.DATA}}
      
      🎂：{{wx_birthday_1.DATA}}

      ---  
      恋爱篇💗
      
      💗：恋爱第{{love_day.DATA}}天
      
      ---  
      每日一言篇🌞

      🌞：{{note_ch.DATA}}
      
    `
  },
]

module.exports = TEMPLATE_CONFIG
