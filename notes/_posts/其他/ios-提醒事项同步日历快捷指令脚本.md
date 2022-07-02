---
title: ios 提醒事项同步日历快捷指令脚本
date: 2021-05-09
tags:
  - 其他 
 
---

# ios 提醒事项同步日历快捷指令脚本

* AppStore 安装运行脚本的软件 `scriptable`

[scriptable https://docs.scriptable.app](https://docs.scriptable.app/)

```js
const DUR_MONTH = 1

const startDate = new Date()
startDate.setMonth(startDate.getMonth() - DUR_MONTH)
console.log(`日历的开始时间 ${startDate.toLocaleDateString()}`)

const endDate = new Date()
endDate.setMonth(endDate.getMonth() + DUR_MONTH)
console.log(`日历的结束时间 ${endDate.toLocaleDateString()}`)

const reminders = await Reminder.allDueBetween(startDate, endDate)
console.log(`获取 ${reminders.length} 条提醒事项`)

var calendar = await Calendar.forEvents()

//获取日历名和对应的日历
var m_dict = {}
for (cal of calendar) {
    m_dict[cal.title] = cal
}

const events = await CalendarEvent.between(startDate, endDate, calendar)
console.log(`获取 ${events.length} 条日历`)

for (const reminder of reminders) {
    //reminder的标识符
    const id = reminder.identifier.split('-')[0]
    const targetNote = `🍧 ${id} 🍰`
    // 添加标识符存进备注 用来防止重复添加
    const [targetEvent] = events.filter(
        (e) => e.notes != null && e.notes.indexOf(targetNote) != -1
    ) //过滤重复的reminder
    if (!m_dict[reminder.calendar.title]) {
        console.warn('找不到日历' + reminder.calendar.title)
        continue
    }
    if (targetEvent) {
        //console.log(`找到已经创建的事项 ${reminder.title}`)
        updateEvent(targetEvent, reminder)
    } else {
        console.warn(`创建事项 ${reminder.title} 到 ${reminder.calendar.title}`)
        const newEvent = new CalendarEvent()
        const notes = reminder.notes ? reminder.notes : ''
        newEvent.notes = targetNote + '\n\n' + notes //要加入备注
        updateEvent(newEvent, reminder)
    }
}

Script.complete()

function updateEvent(event, reminder) {
    event.title = `${reminder.title}`
    cal_name = reminder.calendar.title
    cal = m_dict[cal_name]
    event.calendar = cal
    //已完成事项
    if (reminder.isCompleted) {
        event.title = `✅ ${reminder.title}`
        event.isAllDay = false
        event.startDate = reminder.completionDate
        var ending = new Date(reminder.completionDate)
        ending.setHours(ending.getHours() + 1)
        event.endDate = ending

        var period =
            (reminder.dueDate - reminder.completionDate) / 1000 / 3600 / 24
        period = period.toFixed(1)
        if (period < 0) {
            period = -period
            event.location = ' 延期' + period + '天完成'
        } else if (period == 0) {
            event.location = ' 准时完成'
        } else {
            event.location = ' 提前' + period + '天完成'
        }
    }
    //未完成事项
    else {
        const nowtime = new Date()
        var period = (reminder.dueDate - nowtime) / 1000 / 3600 / 24
        period = period.toFixed(1)
        if (period < 0) {
            //待办顺延

            event.location = ' 延期' + -period + '天'
            //如果不是在同一天,设置为全天事项
            if (reminder.dueDate.getDate() != nowtime.getDate()) {
                event.title = `❌ ${reminder.title}`
                event.startDate = nowtime
                event.endDate = nowtime
                event.isAllDay = true
            }
            //在同一天的保持原来的时间
            else {
                event.title = `⭕️ ${reminder.title}`
                event.isAllDay = false
                event.startDate = reminder.dueDate
                var ending = new Date(reminder.dueDate)
                ending.setHours(ending.getHours() + 1)
                event.endDate = ending
            }
            console.log(`【${reminder.title}】待办顺延${-period}天`)
        } else {
            event.title = `⭕️ ${reminder.title}`
            event.isAllDay = false
            event.location = '还剩' + period + '天'
            event.startDate = reminder.dueDate
            var ending = new Date(reminder.dueDate)
            ending.setHours(ending.getHours() + 1)
            event.endDate = ending
        }
    }
    event.save()
}

```

* 提醒事项数据格式

```json
{
  "identifier": "29803A1E-6C2F-454D-B366-2C67EB1F24BD",
  "title": "Recite word",
  "isCompleted": false,
  "isOverdue": true,
  "priority": 0,
  "dueDate": "2021-03-11T23:20:00.000Z",
  "dueDateIncludesTime": true,
  "completionDate": null,
  "creationDate": "2021-03-12T03:28:00.621Z",
  "calendar": {
    "identifier": "282088E0-DC16-4827-BA21-9B9FD5F0A16F",
    "title": "Learn",
    "isSubscribed": false,
    "allowsContentModifications": true,
    "color": {
      "hex": "FF2968",
      "red": 1,
      "green": 0.1607843041419983,
      "blue": 0.40784314274787903,
      "alpha": 1
    }
  }
}

```

[ios 提醒事项同步日历快捷指令脚本](https://tangxiaomi.top/2021/03/12/other/reminders-sync-calendar/)

