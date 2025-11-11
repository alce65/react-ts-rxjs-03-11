import { Card } from '../core/card/card';

type UserProps<T extends boolean> = T extends true
    ? {
          authenticated: true;
          level: 'basic' | 'admin';
          profileData: {
              name: string;
              email: string;
          };
      }
    : {
          authenticated: false;
          level: 'guest';
      };

export const User: React.FC<UserProps<true> | UserProps<false>> = <
    T extends boolean
>(
    props: UserProps<T>
) => {
    if (props.authenticated) {
        return (
            <Card>
                <h3>Profile ({props.level})</h3>
                <p>Name: {props.profileData.name}</p>
                <p>Email: {props.profileData.email}</p>
            </Card>
        );
    }
    return <p>Bienvenido como invitado</p>;
};
