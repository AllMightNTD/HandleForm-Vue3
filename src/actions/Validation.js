export const validation = {
    validate(userData, errors) {
        let isValid = true;
        errors = {
            name: '',
            mail: '',
            password: {
                password: '',
                confirm: '',
            },
        };
        if (!userData.name) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (userData.name.length < 6) {
            errors.name = 'Name must be 6 characters or more ';
            isValid = false;
        }
        if (!userData.mail) {
            errors.mail = 'Mail is required';
            isValid = false;
        } else if (!this.isEmail(userData.mail)) {
            errors.mail = 'Email is not in the correct format';
            isValid = false;
        }
        if (!userData.password.password) {
            errors.password.password = 'Password is required';
            isValid = false;
        }
        if (!userData.password.confirm) {
            errors.password.confirm = 'Confirm password is required';
            isValid = false;
        } else if (userData.password.confirm !== userData.password.password) {
            errors.password.confirm = 'Confirm password is not correct';
            isValid = false;
        }
        return { isValid, errors };
    },
    isEmail(value) {
        return /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g.test(value);
    },
    validateLogin(userData, errors) {
        let isValid = true;
        errors = {
            mail: '',
            password: '',
        };
        if (!userData.mail) {
            errors.mail = 'Mail is required';
            isValid = false;
        }
        if (!userData.password) {
            errors.password = 'Password is required';
            isValid = false;
        }
        return { isValid, errors };
    },
};
