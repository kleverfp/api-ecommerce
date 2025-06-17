import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors;
  validatedData: PropsValidated;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.errors = {};
      for (const error of errors) {
        const field = error.property;
        const contraints = error.constraints;
        if (contraints) {
          this.errors[field] = Object.values(contraints);
        }
      }
    } else {
      this.validatedData = data as PropsValidated;
    }

    return !errors.length;
  }
}
