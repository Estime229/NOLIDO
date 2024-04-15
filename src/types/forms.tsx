
export interface FormType{
    control?: any;
    onSubmit?: any;
    errors: any;
    isLoading : boolean;
    register: any;
    handleSubmit: any;
}



export interface RegisterFormFielsType {
    email: string;
    password: string;
    how_did_hear: string;
}


export interface LoginFormFielsType {
    email: string;
    password: string;
    how_did_hear: string;
}

export interface ForgetPasswordFormFielsType {
    email: string;
 
}

export interface OnboardingProfileFormFielsType {
    displayName: string;
    expertise: string;
    biography: string;
}


export interface UserProfileFormFielsType {
    displayName: string;
    expertise: string;
    biography: string;
    github: string;
    linkediin: string
}