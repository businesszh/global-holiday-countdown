import type { Holiday } from '@/data/holidays';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  isPast: boolean;
}

export function calculateCountdown(targetDate: string): CountdownTime {
  const now = new Date();
  const target = new Date(targetDate);

  // 如果目标日期已经过去，计算到明年同一日期的倒计时
  if (target < now) {
    target.setFullYear(now.getFullYear() + 1);
  }

  const difference = target.getTime() - now.getTime();
  const isPast = difference < 0;

  if (isPast) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalDays: 0,
      isPast: true
    };
  }

  const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const days = totalDays;
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    isPast: false
  };
}

export function formatCountdown(countdown: CountdownTime): string {
  if (countdown.isPast) {
    return '已过去';
  }

  const parts = [];

  if (countdown.days > 0) {
    parts.push(`${countdown.days}天`);
  }
  if (countdown.hours > 0) {
    parts.push(`${countdown.hours}小时`);
  }
  if (countdown.minutes > 0) {
    parts.push(`${countdown.minutes}分钟`);
  }
  if (countdown.seconds > 0) {
    parts.push(`${countdown.seconds}秒`);
  }

  return parts.join(' ') || '即将到来';
}

export function getNextUpcomingHolidays(holidays: Holiday[], limit = 5) {
  const now = new Date();

  return holidays
    .map(holiday => ({
      ...holiday,
      countdown: calculateCountdown(holiday.date)
    }))
    .filter(holiday => !holiday.countdown.isPast)
    .sort((a, b) => a.countdown.totalDays - b.countdown.totalDays)
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
}
