export interface DONEPROPS {
  done: boolean;
  data?: SHRINK_REQUEST_PROPS;
}

export interface SHRINK_REQUEST_PROPS {
  key: string;
  shorten: string;
  url: string;
}

export interface APIREQUEST_PROPS<T = null> {
  error: boolean;
  message?: string;
  data?: T;
}
