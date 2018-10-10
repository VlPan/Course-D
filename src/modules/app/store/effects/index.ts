import { RouterEffects } from './router.effect';
import { LoginEffect } from './../../../login/store/effects/login.effect';

export const effects: any[] = [RouterEffects, LoginEffect];

export * from './router.effect';
