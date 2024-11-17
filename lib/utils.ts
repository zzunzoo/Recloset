export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}

export function formatToTimeAgo(date: number): string {
  // 1분(60초)를 밀리초로 변환
  const countdownEndTime = new Date().getTime() + date;
  let total = "";
  const now = new Date().getTime();
  const timeDifference = countdownEndTime - now;
  // console.log(timeDifference);

  if (timeDifference <= 0) {
    return "00:00:00";
  }

  // 남은 시간을 시, 분, 초로 변환
  const hours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(
    2,
    "0"
  );
  const minutes = String(
    Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((timeDifference % (1000 * 60)) / 1000)
  ).padStart(2, "0");

  total = hours + ":" + minutes + ":" + seconds + " 남음!!";

  // const dayInMs = 1000 * 60 * 60 * 24;

  // const diff = Math.round((time - now) / dayInMs);

  // const formatter = new Intl.RelativeTimeFormat("ko");

  // return formatter.format(diff, "days");
  // return diff.toString();
  return total;
}
