import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl) {
    let strongPasswordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/;
    
    if (!strongPasswordRe.test(control.value)) {
        return { invalid: true };
    }
    return null;
}