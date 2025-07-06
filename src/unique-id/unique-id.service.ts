import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  generateIdV4(): string {
    return uuidv4();
  }
}
