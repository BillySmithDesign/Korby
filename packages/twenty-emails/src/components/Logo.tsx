import {
    Img
}
from '@react-email/components';

const logoStyle = {
    marginBottom: '40px',
};

export
const Logo = () => {
    return ( < Img src = "/packages/twenty-website/public/images/core/logo-mini.png"
        alt = "Korby logo"
        width = "40"
        height = "40"
        style = {
            logoStyle
        }
        />
  );
};
