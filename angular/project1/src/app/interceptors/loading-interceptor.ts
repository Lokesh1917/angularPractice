import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../services/loading-service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show(); // start showing loading icon

  return next(req).pipe(
    finalize(() => loadingService.hide()), // stop showing loading icon
  );
};
