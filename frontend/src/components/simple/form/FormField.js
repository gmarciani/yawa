class FormField {
    constructor(value, isValid, errorMessage) {
        this.value = value;
        this.isValid = isValid;
        this.errorMessage = errorMessage;
    }

    cleanValidation() {
        this.isValid = null;
        this.errorMessage = null;
    }

    setInvalid(errorMessage) {
        this.isValid = false;
        this.errorMessage = errorMessage;
    }

    setValid() {
        this.isValid = true;
        this.errorMessage = null;
    }
}

export default FormField;
