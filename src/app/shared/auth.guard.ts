import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardService } from '../Services/shared/guard.service';

export const authGuard: CanActivateFn = (route, state) => {
  const guardService = inject(GuardService);
  const router = inject(Router);

  if (!guardService.isLoggedIn()) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  return true;
};

