const alertColors = {
  SUCCESS: "success",
  DANGER: "danger",
};

export const alertTypes = {
  DUPLICATE_EMAIL: {
    text: "قبلا یک حساب کاربری با این آدرس ایمیل نام نویسی شده است. لطفا وارد شوید",
    type: alertColors.DANGER,
  },

  SUCCESSFUL_REGISTRATION: {
    text: "نام نویسی شما با موفقیت انجام شد",
    type: alertColors.SUCCESS,
  },

  NON_EXISTENT_ACCOUNT: {
    text: "حساب کاربری ای با آدرس ایمیل وارد شده ثبت نشده است!",
    type: alertColors.DANGER,
  },

  INCORRECT_PASSWORD: {
    text: "کلمه ی عبور صحیح نمی باشد",
    type: alertColors.DANGER,
  },

  SEND_REC_CODE_CONFIRM: {
    text: "کد ورود به صفحه ی بازیابی کلمه ی عبور به آدرس ایمیل شما ارسال شد",
    type: alertColors.SUCCESS,
  },

  SEND_REC_CODE_ERROR: {
    text: "عملیات ارسال کد ورورد به صفحه ی بازیابی کلمه عبور ناموفق بود!لطفا مجدد تلاش کنید",
    type: alertColors.DANGER,
  },

  INCORRECT_REC_CODE: {
    text: "کد واردشده صحیح نمی باشد",
    type: alertColors.DANGER,
  },

  SUCCESSFUL_PASSWORD_CHANGE: {
    text: "کلمه ی عبور شما با موفقیت تغییر کرد",
    type: alertColors.SUCCESS,
  },
};
