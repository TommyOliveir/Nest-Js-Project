import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      msg: 'this is sign up',
    };
  }
  signin() {
    return {
      msg: 'this is sign ion',
    };
  }
}
