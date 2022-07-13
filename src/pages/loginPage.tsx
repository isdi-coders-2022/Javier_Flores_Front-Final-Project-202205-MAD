import { NewUserButton } from '../components/buttons/newUserButton/newUserButton';
import { FormLogin } from '../components/login/login';

export function LoginPage() {
    return (
        <>
            <FormLogin></FormLogin>
            <NewUserButton></NewUserButton>
        </>
    );
}
