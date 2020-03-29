const size = {
    small: '450px',
    medium: '768px',
    large: '1170px',
    huge: '1440px'
}

const device = {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    large: `(min-width: ${size.large})`,
    huge: `(min-width: ${size.huge})`
};

export {device};
