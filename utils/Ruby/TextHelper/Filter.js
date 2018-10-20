import moment from 'moment';

const Filter = {

  filterMobile: (val) => {
    return val ? val.replace(/[ .]/g, '') : false;
  },

  trimAll: (val) => {
    return val.trim().replace(/\s{2,}/g, ' ');
  },

  Capitalize: (val) => {
    val        = val.toLowerCase();
    let pieces = val.split(' ');
    for(let i = 0; i<pieces.length; i++) {
      let j     = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(' ');
  },

  v2e: (val) => {
    return val.replace(/[áàảãạăắặằẳẵâấầẩẫậ]/g, 'a').replace(/[ÁÀẢÃẠĂẮẶẰẲẴÂẤẦẨẪẬ]/g, 'A').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[éèẻẽẹêếềểễệ]/g, 'e').replace(/[ÉÈẺẼẸÊẾỀỂỄỆ]/g, 'E').replace(/[íìỉĩị]/g, 'i').replace(/[ÍÌỈĨỊ]/g, 'I').replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o').replace(/[ÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢ]/g, 'O').replace(/[úùủũụưứừửữự]/g, 'u').replace(/[ÚÙỦŨỤƯỨỪỬỮỰ]/g, 'U').replace(/[ýỳỷỹỵ]/g, 'y').replace(/[ÝỲỶỸỴ]/g, 'Y');
  },

  urlFromTxt: (val) => {
    return Filter.trimAll(Filter.v2e(val).replace(/[^a-zA-Z0-9]/g, ' ')).toLowerCase().replace(/\s/g, '-');
  },

  friendlyTime: (start, finish) => {
    let Now         = moment();
    let Start       = moment(start);
    let Finish      = moment(finish);
    let rangeStart  = Now.clone().startOf('day').diff(Start.clone().startOf('day'), 'days');
    let rangeFinish = Now.clone().startOf('day').diff(Finish.clone().startOf('day'), 'days');
    let formatTime  = 'DD/MM';
    if(Now.year()!==Start.year() || Now.year()!==Finish.year()) formatTime = 'DD/MM/YYYY';
    let textStart, textFinish;
    if(rangeStart===2) textStart = 'hôm kia';
    else if(rangeStart===1) textStart = 'hôm qua';
    else if(rangeStart===0) textStart = 'hôm nay';
    else if(rangeStart=== -1) textStart = 'ngày mai';
    else if(rangeStart=== -2) textStart = 'ngày kia';
    else textStart = 'ngày ' + Start.format(formatTime);
    if(rangeFinish===2) textFinish = 'hôm kia';
    else if(rangeFinish===1) textFinish = 'hôm qua';
    else if(rangeFinish===0) textFinish = 'hôm nay';
    else if(rangeFinish=== -1) textFinish = 'ngày mai';
    else if(rangeFinish=== -2) textFinish = 'ngày kia';
    else textFinish = 'ngày ' + Finish.format(formatTime);
    if(textStart===textFinish) textStart = '';
    return `Từ ${Start.format('HH:mm')} ${textStart} đến ${Finish.format('HH:mm')} ${textFinish}`;
  }

};

export default Filter;