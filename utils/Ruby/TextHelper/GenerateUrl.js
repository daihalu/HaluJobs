const GenerateUrl = {
  Activity: {
    Home:      () => {
      return `/hoat-dong/`;
    },
    Detail:    (slug) => {
      return `/hoat-dong/${slug}.html`;
    },
    Unit:      (unitname) => {
      return `/hoat-dong/don-vi/${unitname}.html`;
    },
    Category:  (slug) => {
      return `/hoat-dong/the-loai/${slug}.html`;
    },
    Place:     (slug) => {
      return `/hoat-dong/dia-diem/${slug}.html`;
    },
    Date:      (d) => {
      return `/hoat-dong/ngay/${d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2)}.html`;
    },
    ScoreUser: (ids) => {
      return `/hoat-dong/diem-ca-nhan/${ids ? ids : 'tra-cuu'}.html`;
    },
    ScoreUnit: (unitname) => {
      return `/hoat-dong/diem-don-vi/${unitname ? unitname : 'tra-cuu'}.html`;
    }
  },
  Account:  {
    Login: () => {
      return `/dang-nhap.html`;
    }
  },
  TermsOfUse: () => {
    return '/thoa-thuan-su-dung.html';
  },
  External: {
    Facebook: {
      fanpage: {
        SVOnline: 'https://www.facebook.com/svonline.vn/',
        HaluJobs: 'https://www.facebook.com/halujobs/'
      },
      group:   {
        SVOnline: 'https://www.facebook.com/groups/svonline.community/'
      }
    },
    Store:    {
      SVOapp:  {
        CHPlay:   'https://play.google.com/store/apps/details?id=vn.svonline',
        AppStore: 'https://itunes.apple.com/vn/app/svonline/id1241738738'
      },
      DHDTapp: {
        CHPlay:   'https://play.google.com/store/apps/details?id=vn.daihocdientu',
        AppStore: 'https://itunes.apple.com/vn/app/%C4%91%E1%BA%A1i-h%E1%BB%8Dc-%C4%91i%E1%BB%87n-t%E1%BB%AD/id1188430433'
      }
    }
  }
};

export default GenerateUrl;
