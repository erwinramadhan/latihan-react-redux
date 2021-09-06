import { isMobile } from 'react-device-detect';

const AuthContainer = () => {
    if(isMobile) {
        return (
            <div>
                This content is unavailable on mobile. Please use desktop device
                instead.
            </div>
        );
    } else {
        return (
            <div>
                this is desktop
            </div>
        )
    }
}

export default AuthContainer;