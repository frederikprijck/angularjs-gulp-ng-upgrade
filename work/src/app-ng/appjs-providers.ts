import { InjectionToken } from '@angular/core';

export const ShowsServiceToken = new InjectionToken('ShowsService');

export const showsServiceFactory = ($injector: any) => {
  return $injector.get('showsService');
};

export const showsServiceProvider = {
  provide: ShowsServiceToken,
  useFactory: showsServiceFactory,
  deps: ['$injector']
};
