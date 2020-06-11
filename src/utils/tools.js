export default class tools {
  /**
   * 格式化日期
   * @param now 日期
   * @param mask yyyy-MM-dd HH:mm:ss
   */
  static dateFormat(now, mask) {
    var d = now;
    var zeroize = function(value, length) {
      if (!length) length = 2;
      value = String(value);
      for (var i = 0, zeros = ''; i < length - value.length; i++) {
        zeros += '0';
      }
      return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function($0) {
      switch ($0) {
        case 'd':
          return d.getDate();
        case 'dd':
          return zeroize(d.getDate());
        case 'ddd':
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
        case 'dddd':
          return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
        case 'M':
          return d.getMonth() + 1;
        case 'MM':
          return zeroize(d.getMonth() + 1);
        case 'MMM':
          return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
        case 'MMMM':
          return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
        case 'yy':
          return String(d.getFullYear()).substr(2);
        case 'yyyy':
          return d.getFullYear();
        case 'h':
          return d.getHours() % 12 || 12;
        case 'hh':
          return zeroize(d.getHours() % 12 || 12);
        case 'H':
          return d.getHours();
        case 'HH':
          return zeroize(d.getHours());
        case 'm':
          return d.getMinutes();
        case 'mm':
          return zeroize(d.getMinutes());
        case 's':
          return d.getSeconds();
        case 'ss':
          return zeroize(d.getSeconds());
        case 'l':
          return zeroize(d.getMilliseconds(), 3);
        case 'L':
          var m = d.getMilliseconds();
          if (m > 99) m = Math.round(m / 10);
          return zeroize(m);
        case 'tt':
          return d.getHours() < 12 ? 'am' : 'pm';
        case 'TT':
          return d.getHours() < 12 ? 'AM' : 'PM';
        case 'Z':
          return d.toUTCString().match(/[A-Z]+$/);
        // Return quoted strings with the surrounding quotes removed
        default:
          return $0.substr(1, $0.length - 2);
      }
    });
  }

  static randomInt(min, max) {
    // 若max不存在 min 赋值给max,并重新赋值min
    max = max ? max : 999999999;
    min = min ? min : 900000000;
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  static uuid() {
    var s = [];
    var hexDigits = '0123456789abcdef';
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    var uuid = s.join('');
    return uuid;
  }

  /**
   * JSON排序
   * @param {} json
   */
  static jsonSort(json) {
    let arr = [];
    let newJson = {};
    for (var key in json) {
      arr.push(key);
    }
    arr.sort();
    let str = '';
    for (var i in arr) {
      var key = arr[i];
      var val = json[key];
      newJson[key] = json[key];
    }
    return newJson;
  }
}
