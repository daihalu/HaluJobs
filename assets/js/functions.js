export function ConvertStringToShorterString(string, start, end) {
  let length = string ? string.length : 0;

  if (length > end) {
    string = string.slice(start, end) + '...';
  }
  return string;
}

export function FormattedDate(d) {
  let date = d.slice(0, 10).split('-');
  return date[2] + '/' + date[1] + '/' + date[0];
};

export function ChangeAlias(alias) {
  let str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
  str = str.replace(/đ/g,"d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
  str = str.replace(/ + /g," ");
  str = str.trim();
  return str;
};

export function ConvertToKebabCase(string) {
  const kebabCase = string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
  return kebabCase;
}

export const Vld = {
  isEmail: (val) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
  },

  isName: (val) => {
    return /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+(([',. -][a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ])?[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*)*$/.test(val);
  },

  isMobile: (val) => {
    if(!val) {
      return false;
    }
    const carriers = {
      '096':  'Viettel',
      '097':  'Viettel',
      '098':  'Viettel',
      '0162': 'Viettel',
      '0163': 'Viettel',
      '0164': 'Viettel',
      '0165': 'Viettel',
      '0166': 'Viettel',
      '0167': 'Viettel',
      '0168': 'Viettel',
      '0169': 'Viettel',
      '0868': 'Viettel',
      '089':  'Mobifone',
      '090':  'Mobifone',
      '093':  'Mobifone',
      '0120': 'Mobifone',
      '0121': 'Mobifone',
      '0122': 'Mobifone',
      '0126': 'Mobifone',
      '0128': 'Mobifone',
      '088':  'Vinaphone',
      '091':  'Vinaphone',
      '094':  'Vinaphone',
      '0123': 'Vinaphone',
      '0124': 'Vinaphone',
      '0125': 'Vinaphone',
      '0127': 'Vinaphone',
      '0129': 'Vinaphone',
      '0993': 'Gmobile',
      '0994': 'Gmobile',
      '0995': 'Gmobile',
      '0996': 'Gmobile',
      '0997': 'Gmobile',
      '0999': 'Gmobile',
      '092':  'Vietnamobile',
      '0186': 'Vietnamobile',
      '0188': 'Vietnamobile'
    };
    val            = val.replace(/[ .]/g, '');
    if(!/^(01[2689]|08|09)[0-9]{8}$/.test(val)) return false;
    for(let index in carriers) {
      if(!carriers.hasOwnProperty(index)) continue;
      if(val.substr(0, index.length)===index) return carriers[index];
    }
    return false;
  },

  isUrl: (val) => {
    return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/.test(val);
  },

  isHexColor: (val) => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(val);
  },

  isTokenCode: (val) => {
    return /^[0-9]{6}$/.test(val);
  },

  isInteger: (val) => {
    return (typeof val==='number' && (val % 1)===0);
  },

  isSlug: (val) => {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val);
  },

  isAlphaNum: (val) => {
    return /^[a-zA-Z0-9]+$/.test(val);
  },

  isIpAddress: (val) => {
    return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(val);
  },

  checkLength: (val, min = -1, max = -1) => {
    return (typeof val==='string') && (min=== -1 || val.length>=min) && (max=== -1 || val.length<=max);
  }

};

export default Vld;

export function ShowSuccessAlert(message) {
  this.$notify({
    title: 'Thông báo',
    message: message,
    type: 'success'
  });
};

export function ShowErrorAlert(message) {
  this.$notify({
    title: 'Thông báo',
    message: message,
    type: 'warning'
  });
};
