export type Register = {
    userName: string;
    email: string;
    passwd: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

export type Login = {
    email: string;
    passwd: string;
    rememberMe: boolean;
};
