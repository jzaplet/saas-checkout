/**
 * Copyright (c) 2023 Strategio Digital s.r.o.
 * @author Jiří Zapletal (https://strategio.dev, jz@strategio.dev)
 */

import { atom } from 'jotai';

export const step = atom(1);

export const personalData = atom({
  name: '',
  email: '',
  phone: '',
});
